import { Type } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';

export class FindAllArticlesDTO {
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  readonly limit?: number;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  readonly offset?: number;
}
