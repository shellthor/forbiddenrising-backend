import { IsEnum, IsOptional } from 'class-validator';
import { FormSubmissionStatus } from '../enums/form-submission-status.enum';
import { Answers } from './create-form-submission.dto';

export class UpdateFormSubmissionDto {
  @IsOptional()
  @IsEnum(FormSubmissionStatus)
  readonly status?: FormSubmissionStatus;

  @IsOptional()
  readonly answers?: Answers;
}
