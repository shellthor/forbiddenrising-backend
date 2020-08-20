import { Module } from '@nestjs/common'
import { MikroOrmModule } from '@mikro-orm/nestjs'
import { FormQuestionModule } from '../form-question/question.module'
import { FormController } from './form.controller'
import { Form } from './form.entity'
import { FormService } from './form.service'

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [Form] }), FormQuestionModule],
  providers: [FormService],
  controllers: [FormController],
  exports: [FormService],
})
export class FormModule {}
