import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class FindArticleDTO {
  @IsNumber()
  @Type(() => Number)
  readonly id!: number;
}
