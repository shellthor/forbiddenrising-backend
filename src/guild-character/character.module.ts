import { BullModule } from '@nestjs/bull';
import { Module, CacheModule } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { BlizzardModule } from '../blizzard/blizzard.module';
import { CharacterController } from './character.controller';
import { GuildCharacter } from './character.entity';
import { CharacterQueue } from './character.queue';
import { CharacterScheduler } from './character.scheduler';
import { CharacterService } from './character.service';

@Module({
  imports: [
    MikroOrmModule.forFeature({ entities: [GuildCharacter] }),
    BullModule.registerQueue({ name: 'character' }),
    BlizzardModule,
    CacheModule.register(),
  ],
  providers: [CharacterService, CharacterQueue, CharacterScheduler],
  exports: [CharacterService, CharacterQueue],
  controllers: [CharacterController],
})
export class CharacterModule {}
