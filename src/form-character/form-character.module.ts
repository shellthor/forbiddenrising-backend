import { BullModule } from '@nestjs/bull'
import { Module } from '@nestjs/common'
import { MikroOrmModule } from '@mikro-orm/nestjs'
import { BlizzardModule } from '../blizzard/blizzard.module'
import { RaiderIOModule } from '../raiderIO/raiderIO.module'
import { FormCharacterController } from './form-character.controller'
import { FormCharacter } from './form-character.entity'
import { FormCharacterQueue } from './form-character.queue'
import { FormCharacterScheduler } from './form-character.scheduler'
import { FormCharacterService } from './form-character.service'

@Module({
  imports: [
    MikroOrmModule.forFeature({ entities: [FormCharacter] }),
    BullModule.registerQueue({
      name: 'form-character',
      redis: {
        host: process.env.REDIS_HOST,
        port: parseInt(process.env.REDIS_PORT, 10),
        password: process.env.REDIS_PASSWORD,
      },
    }),
    BlizzardModule,
    RaiderIOModule,
  ],
  providers: [FormCharacterService, FormCharacterQueue, FormCharacterScheduler],
  controllers: [FormCharacterController],
  exports: [FormCharacterService],
})
export class FormCharacterModule {}
