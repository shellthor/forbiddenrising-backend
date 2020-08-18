import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class FindFormSubmissionDto {
  @IsNumber()
  @Type(() => Number)
  readonly id!: number;
}
