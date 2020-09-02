import { BullModule } from '@nestjs/bull'
import { CacheModule, Module } from '@nestjs/common'
import { MikroOrmModule } from '@mikro-orm/nestjs'
import { BlizzardModule } from '../blizzard/blizzard.module'
import { CharacterController } from './character.controller'
import { GuildCharacter } from './character.entity'
import { CharacterQueue } from './character.queue'
import { CharacterScheduler } from './character.scheduler'
import { CharacterService } from './character.service'
import { RaiderIOModule } from '../raiderIO/raiderIO.module'

@Module({
  imports: [
    MikroOrmModule.forFeature({ entities: [GuildCharacter] }),
    BullModule.registerQueue({
      name: 'character',
      redis: {
        host: process.env.REDIS_HOST,
        port: parseInt(process.env.REDIS_PORT, 10),
        password: process.env.REDIS_PASSWORD,
      },
    }),
    BlizzardModule,
    CacheModule.register(),
    RaiderIOModule,
  ],
  providers: [CharacterService, CharacterQueue, CharacterScheduler],
  exports: [CharacterService, CharacterQueue],
  controllers: [CharacterController],
})
export class CharacterModule {}
