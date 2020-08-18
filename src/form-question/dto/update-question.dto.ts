import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';
import { FileTypes } from '../enums/file-types.enum';

export class UpdateQuestionDto {
  @IsOptional()
  @IsString()
  readonly question?: string;

  @IsOptional()
  @IsString()
  readonly label?: string;

  @IsOptional()
  @IsString()
  readonly hint?: string;

  @IsOptional()
  @IsBoolean()
  readonly required?: boolean;

  @IsOptional()
  @IsString({ each: true })
  readonly choices?: string[];

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(10)
  readonly multiple?: number;

  @IsOptional()
  @IsNumber()
  readonly order?: number;

  @IsOptional()
  @IsArray()
  @IsEnum(FileTypes, { each: true })
  readonly fileTypes?: FileTypes[];
}
