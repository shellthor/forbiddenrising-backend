import { EntityManager, MikroORM } from '@mikro-orm/core';
import { OnQueueCompleted, OnQueueError, OnQueueFailed, Process, Processor } from '@nestjs/bull';
import { HttpException, Injectable, Logger } from '@nestjs/common';
import { Job } from 'bull';
import { ProfileService } from '../blizzard/services/profile/profile.service';
import { CharacterUpdateResult } from '../guild-character/interfaces/character-update.interface';
import { FormCharacter } from './form-character.entity';
import { FormCharacterService } from './form-character.service';

@Injectable()
@Processor('form-character')
export class FormCharacterQueue {
  private readonly logger: Logger = new Logger(FormCharacterQueue.name);
  private readonly em: EntityManager;

  constructor(
    private readonly formCharacterService: FormCharacterService,
    private readonly profileService: ProfileService,
    orm: MikroORM,
  ) {
    this.em = orm.em.fork();
  }

  // Characters must be deleted if the status endpoint:
  // 1. Returns 404.
  // 2. The `is_valid` attribute is false.
  // 3. The character id does not match.

  @Process({ name: 'character-update', concurrency: 1 })
  private async updateFormCharacters(job: Job): Promise<CharacterUpdateResult> {
    const formCharacters = await this.em.find(FormCharacter, null);

    const results: CharacterUpdateResult = {
      total: formCharacters.length,
      processed: 0,
      success: 0,
      deleted: 0,
      ignored: 0,
      failed: 0,
    };

    await Promise.all(
      formCharacters.map(async formCharacter => {
        try {
          const status = await this.profileService.getCharacterProfileStatus(
            formCharacter.getFindCharacterDTO(),
            formCharacter.last_modified,
          );

          if (status.data.id !== formCharacter.id || status.data.is_valid === false) {
            results.deleted++;
            return this.em.remove(FormCharacter, formCharacter);
          }

          formCharacter.last_modified = status.headers['last-modified'];

          await this.formCharacterService.populateFormCharacter(formCharacter);

          results.success++;
        } catch (error) {
          if (error instanceof HttpException) {
            if (error.getStatus() === 304) {
              results.ignored++;
              return;
            }

            if (error.getStatus() === 404) {
              this.em.remove(FormCharacter, formCharacter);
              results.deleted++;
              return;
            }

            results.failed++;
            this.logger.error(`Updating Error ${error}`, error.stack);
          }
        }

        job.progress(++results.processed / results.total);
      }),
    );

    await this.em.flush();

    return results;
  }

  @OnQueueFailed()
  private onFailed(job: Job<number>, error: Error) {
    console.error(error);
    this.logger.error(error, error.stack);
  }

  @OnQueueError()
  private onError(job: Job<number>, error: Error) {
    console.error(error);
    this.logger.error(error, error.stack);
  }

  @OnQueueCompleted()
  private onCompleted(job: Job, results: CharacterUpdateResult) {
    const statuses = [];

    Object.keys(results).forEach(r => {
      if (r === 'processed' || r === 'total' || results[r] === 0) return;

      statuses.push(`${results[r]} ${r.charAt(0).toUpperCase() + r.slice(1)}`);
    });

    if (job.name === 'characterUpdate') {
      this.logger.log(`[Updated ${results.total} Form Characters]: ${statuses.join(', ')}`);
    }
  }
}
