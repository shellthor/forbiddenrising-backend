import { BullModule } from '@nestjs/bull';
import { CacheModule, HttpModule, Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { RaiderIOService } from '../raiderIO/raiderIO.service';
import { RaidController } from './raid.controller';
import { Raid } from './raid.entity';
import { RaidQueue } from './raid.queue';
import { RaidScheduler } from './raid.scheduler';
import { RaidService } from './raid.service';

@Module({
  imports: [
    MikroOrmModule.forFeature({ entities: [Raid] }),
    BullModule.registerQueue({ name: 'raid' }),
    HttpModule,
    CacheModule.register(),
  ],
  controllers: [RaidController],
  providers: [RaidService, RaiderIOService, RaidQueue, RaidScheduler],
  exports: [RaidService, RaiderIOService],
})
export class RaidModule {}
