import { EntityManager, FilterQuery, QueryOrderMap } from '@mikro-orm/core';
import { EntityRepository } from '@mikro-orm/knex';
import { InjectQueue } from '@nestjs/bull';
import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  Logger,
  OnModuleInit,
  UnauthorizedException,
} from '@nestjs/common';
import { Queue } from 'bull';
import fs from 'fs';
import { InjectRepository } from '@mikro-orm/nestjs';
import path from 'path';
import { FileService } from '../file/file.service';
import { FormCharacterService } from '../form-character/form-character.service';
import { Form } from '../form/form.entity';
import { User } from '../user/user.entity';
import { CreateFormSubmissionDto, UpdateFormSubmissionDto } from './dto';
import { FormSubmissionStatus } from './enums/form-submission-status.enum';
import { FormSubmission } from './form-submission.entity';

@Injectable()
export class SubmissionService implements OnModuleInit {
  private readonly logger = new Logger(SubmissionService.name);

  constructor(
    @InjectRepository(FormSubmission)
    private readonly formSubmissionRepository: EntityRepository<FormSubmission>,
    private readonly formCharacterService: FormCharacterService,
    private readonly fileService: FileService,
    private readonly em: EntityManager,
    @InjectQueue('form') private readonly formQueue: Queue,
    @InjectQueue('discord') private readonly discordQueue: Queue,
  ) {}

  onModuleInit(): void {
    const uploadPath = path.join(process.cwd(), 'uploads', 'applications');

    fs.access(uploadPath, error => {
      if (error) {
        this.logger.log(`Creating upload directory: ${uploadPath}`);

        fs.mkdir(uploadPath, { recursive: true }, error => {
          if (error) throw error;
        });
      }
    });
  }

  /**
   * Creates a new form submission for a user with associated
   * answers and characters.
   * @param author Form submission author.
   * @param createSubmissionDto CreateSubmissionDto
   */
  async create(
    author: User,
    { formId, answers, files, characters }: CreateFormSubmissionDto,
  ): Promise<FormSubmission> {
    const formSubmission = new FormSubmission();

    const openForm = await this.formSubmissionRepository.find(
      {
        status: FormSubmissionStatus.Open,
        author: { id: author.id },
      },
      ['author'],
    );

    if (openForm.length) {
      throw new BadRequestException(
        'You already have an open form. Please wait for your other application to be processed or cancel it.',
      );
    }

    if (files && files.length) {
      const fileUploads = await this.fileService.find(files);

      for (const upload of fileUploads) {
        if (upload.author && upload.author.id !== author.id) {
          throw new UnauthorizedException('Cannot link unauthored file');
        }
      }

      formSubmission.files.set(fileUploads);
    }

    const formCharacters = await Promise.all(
      characters.map(character => this.formCharacterService.upsert(character)),
    );

    formSubmission.form = this.em.getReference(Form, formId);
    formSubmission.author = author;
    formSubmission.characters.set(formCharacters);
    formSubmission.mainCharacter = formCharacters[0];
    formSubmission.answers = answers;

    await this.formSubmissionRepository.persistAndFlush(formSubmission);

    // When not using the populate API, this needs to be manually set.
    formSubmission.author.populated();
    formSubmission.characters.populated();
    formSubmission.justSubmitted = true;

    // Send notifications.
    await this.formQueue.add('new-application', formSubmission);
    await this.discordQueue.add('app-create-notification', formSubmission, {
      attempts: 1,
      removeOnFail: true,
    });

    return formSubmission;
  }

  /**
   * Proxy ORM method for finding a form submission.
   *
   * @param where properties to match to the entity
   * @param populate denotes if all relationships, or specific relationships, should be loaded
   */
  findOne(
    where: FilterQuery<FormSubmission>,
    populate?: boolean | string[],
    orderBy?: QueryOrderMap,
  ): Promise<FormSubmission> {
    return this.formSubmissionRepository.findOne(where, populate, orderBy);
  }

  /**
   * Proxy ORM method for finding a form submission.
   * This method will return a `404 Not Found Exception` if the entity is not found.
   *
   * @param where properties to match to the entity
   * @param populate denotes if all relationships, or specific relationships, should be loaded
   */
  findOneOrFail(
    where: FilterQuery<FormSubmission>,
    populate?: boolean | string[],
    orderBy?: QueryOrderMap,
  ): Promise<FormSubmission> {
    return this.formSubmissionRepository.findOneOrFail(where, populate, orderBy);
  }

  /**
   * Retrieving a paginated array of form submissions.
   * Search narrowable to status category by an optionally provided status or id.
   *
   * @param limit number of submissions to retrieve
   * @param offset number of submissions to skip
   */
  findAll(
    where?: FilterQuery<FormSubmission>,
    populate?: boolean | string[],
    orderBy?: QueryOrderMap,
    limit?: number,
    offset?: number,
  ): Promise<[FormSubmission[], number]> {
    return this.formSubmissionRepository.findAndCount(where, populate, orderBy, limit, offset);
  }

  /**
   * Updates a form.
   * @param id Form submission id.
   * @param updateFormSubmissionDto UpdateFormSubmissionDto
   * @param updateAny Describes if the user has has officer-level permissions over applications.
   */
  async update(
    id: number,
    user: User,
    updateFormSubmissionDto: UpdateFormSubmissionDto,
    updateAny: boolean,
  ): Promise<FormSubmission> {
    const formSubmission = await this.formSubmissionRepository.findOneOrFail(id, ['author']);

    if (!updateAny && formSubmission.author.id !== user.id) {
      throw new ForbiddenException();
    }

    // Only officers can change the status of applications to anything other than cancelled.
    if (
      !updateAny &&
      updateFormSubmissionDto.status &&
      updateFormSubmissionDto.status !== FormSubmissionStatus.Cancelled
    ) {
      throw new ForbiddenException();
    }

    const statusChange =
      updateFormSubmissionDto.status &&
      updateFormSubmissionDto.status !== 'open' &&
      formSubmission.status !== updateFormSubmissionDto.status;

    formSubmission.assign(updateFormSubmissionDto);

    await this.formSubmissionRepository.flush();

    if (statusChange) {
      await this.discordQueue.add('app-status-notification', formSubmission);
    }

    return formSubmission;
  }

  /**
   * Deletes a form submission.
   *
   * @param id id of the submission
   */
  async delete(id: number): Promise<FormSubmission> {
    const submission = await this.formSubmissionRepository.findOneOrFail(id, ['characters']);

    this.formSubmissionRepository.remove(submission);

    await this.formSubmissionRepository.flush();

    return submission;
  }
}
