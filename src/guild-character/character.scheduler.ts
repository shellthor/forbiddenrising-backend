import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { Cron, NestSchedule } from 'nest-schedule';

@Injectable()
export class CharacterScheduler extends NestSchedule {
  constructor(
    @InjectQueue('character')
    private readonly queue: Queue,
  ) {
    super();
  }

  @Cron('0 */2 * * *')
  updateMembers(): void {
    this.queue.add('update-guild-members', { attempts: 1 });
  }

  @Cron('30 */2 * * *')
  addRemove(): void {
    this.queue.add('add-remove-members', { attempts: 1 });
  }
}
