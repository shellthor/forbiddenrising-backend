import { Module } from '@nestjs/common'
import { MikroOrmModule } from '@mikro-orm/nestjs'
import { FileUpload } from './file.entity'
import { FileService } from './file.service'

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [FileUpload] })],
  providers: [FileService],
  exports: [FileService],
})
export class FileModule {}
