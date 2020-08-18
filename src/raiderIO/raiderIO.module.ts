import { HttpModule, Module } from '@nestjs/common';
import { RaidModule } from '../raid/raid.module';
import { RaiderIOService } from './raiderIO.service';

@Module({
  imports: [HttpModule, RaidModule],
  providers: [RaiderIOService],
  exports: [RaiderIOService],
})
export class RaiderIOModule {}
