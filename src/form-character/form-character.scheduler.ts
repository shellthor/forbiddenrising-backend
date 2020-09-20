import { InjectQueue } from '@nestjs/bull'
import { Injectable } from '@nestjs/common'
import { Queue } from 'bull'
import { Cron, NestSchedule } from 'nest-schedule'

@Injectable()
export class FormCharacterScheduler extends NestSchedule {
  constructor(
    @InjectQueue('form-character')
    private readonly queue: Queue,
  ) {
    super()
  }

  // @Cron('0 1-23/2 * * *')
  updateFormCharacters(): void {
    this.queue.add('character-update', { attempts: 1 })
  }
}
