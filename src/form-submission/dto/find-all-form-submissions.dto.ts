import { Type } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional } from 'class-validator';
import { FormSubmissionStatus } from '../enums/form-submission-status.enum';

export class FindAllFormSubmissionsDto {
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  readonly limit = 10;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  readonly offset = 0;

  @IsOptional()
  @IsEnum(FormSubmissionStatus)
  readonly status?: FormSubmissionStatus = FormSubmissionStatus.Open;
}
