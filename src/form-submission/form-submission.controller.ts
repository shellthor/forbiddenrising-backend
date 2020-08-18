import { QueryOrder } from '@mikro-orm/core';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UploadedFiles,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { AccessControl } from 'accesscontrol';
import multer from 'multer';
import { FileUpload } from 'src/file/file.entity';
import { Auth } from '../auth/decorators/auth.decorator';
import { InjectAccessControl } from '../auth/decorators/inject-access-control.decorator';
import { FileService } from '../file/file.service';
import { Usr } from '../user/user.decorator';
import { User } from '../user/user.entity';
import {
  CreateFormSubmissionDto,
  FindAllFormSubmissionsDto,
  FindFormSubmissionByStatusDto,
  FindFormSubmissionDto,
  UpdateFormSubmissionDto,
} from './dto';
import { FormSubmissionStatus } from './enums/form-submission-status.enum';
import { FormSubmission } from './form-submission.entity';
import { SubmissionService } from './form-submission.service';
import { CreateSubmissionPipe } from './pipes/create-submission.pipe';

@Controller('submission')
export class SubmissionController {
  constructor(
    private readonly fileService: FileService,
    private readonly submissionService: SubmissionService,
    @InjectAccessControl() private readonly ac: AccessControl,
  ) {}

  @Auth()
  @Post()
  @UsePipes(CreateSubmissionPipe)
  create(
    @Usr() user: User,
    @Body() createSubmissionDto: CreateFormSubmissionDto,
  ): Promise<FormSubmission> {
    return this.submissionService.create(user, createSubmissionDto);
  }

  @Auth()
  @Post('upload')
  @UseInterceptors(
    AnyFilesInterceptor({
      storage: multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, 'uploads/applications/');
        },
        filename: function (req, file, cb) {
          cb(null, Date.now() + '-' + file.originalname);
        },
      }),
    }),
  )
  uploadFiles(
    @Usr() user: User,
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    @UploadedFiles() files: any,
  ): Promise<FileUpload[]> {
    return this.fileService.create(files, user);
  }

  @Auth()
  @Delete('file/:id')
  deleteFile(@Usr() user: User, @Param('id') id: number): Promise<FileUpload> {
    const canDeleteAny = this.ac.can(user.roles).deleteAny('file-upload').granted;

    return this.fileService.delete(id, canDeleteAny ? undefined : user);
  }

  @Auth()
  @Get('/user')
  findByUser(@Usr() user: User): Promise<[FormSubmission[], number]> {
    return this.submissionService.findAll({ author: { id: user.id } });
  }

  @Auth()
  @Get('/user/open')
  findOpenByUser(@Usr() user: User): Promise<[FormSubmission[], number]> {
    return this.submissionService.findAll({
      author: { id: user.id },
      status: FormSubmissionStatus.Open,
    });
  }

  @Get('/status/:status')
  findFirstByStatus(@Param() { status }: FindFormSubmissionByStatusDto): Promise<FormSubmission> {
    return this.submissionService.findOneOrFail({ status }, ['form', 'author', 'characters'], {
      id: QueryOrder.DESC,
    });
  }

  @Get(':id')
  findOne(@Param() { id }: FindFormSubmissionDto): Promise<FormSubmission> {
    return this.submissionService.findOneOrFail(id, true);
  }

  @Get()
  findAll(
    @Query() { limit, offset, status }: FindAllFormSubmissionsDto,
  ): Promise<[FormSubmission[], number]> {
    return this.submissionService.findAll(
      { status },
      ['author', 'characters'],
      { id: QueryOrder.DESC },
      limit,
      offset,
    );
  }

  @Auth()
  @Patch(':id')
  update(
    @Param() { id }: FindFormSubmissionDto,
    @Usr() user: User,
    @Body() updateFormSubmissionDto: UpdateFormSubmissionDto,
  ): Promise<FormSubmission> {
    const canUpdateAny = this.ac.can(user.roles).updateAny('form-submission').granted;

    return this.submissionService.update(id, user, updateFormSubmissionDto, canUpdateAny);
  }

  @Auth('form-submission', 'delete:any')
  @Delete(':id')
  delete(@Param() { id }: FindFormSubmissionDto): Promise<FormSubmission> {
    return this.submissionService.delete(id);
  }
}
