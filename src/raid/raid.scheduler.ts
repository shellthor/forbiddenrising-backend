import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { Cron, NestSchedule } from 'nest-schedule';

@Injectable()
export class RaidScheduler extends NestSchedule {
  constructor(@InjectQueue('raid') private readonly queue: Queue) {
    super();
  }

  @Cron('0 * * * *')
  private updateRaids(): void {
    this.queue.add('updateRaids');
  }
}
