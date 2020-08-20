import { IsEnum } from 'class-validator'
import { FormSubmissionStatus } from '../enums/form-submission-status.enum'

export class FindFormSubmissionByStatusDto {
  @IsEnum(FormSubmissionStatus)
  readonly status!: FormSubmissionStatus
}
