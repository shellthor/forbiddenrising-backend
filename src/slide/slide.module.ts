import { CacheModule, Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { SlideController } from './slide.controller';
import { Slide } from './slide.entity';
import { SlideService } from './slide.service';

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [Slide] }), CacheModule.register()],
  providers: [SlideService],
  controllers: [SlideController],
})
export class SlideModule {}
