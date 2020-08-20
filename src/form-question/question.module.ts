import { Module } from '@nestjs/common'
import { MikroOrmModule } from '@mikro-orm/nestjs'
import { FormQuestionController } from './question.controller'
import { FormQuestion } from './question.entity'
import { FormQuestionService } from './question.service'

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [FormQuestion] })],
  providers: [FormQuestionService],
  controllers: [FormQuestionController],
  exports: [FormQuestionService],
})
export class FormQuestionModule {}
