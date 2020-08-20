import { Type } from 'class-transformer'
import {
  ArrayMaxSize,
  IsArray,
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  ValidateNested,
} from 'class-validator'
import { FindCharacterDto } from '../../blizzard/dto/find-character.dto'

export interface Answers {
  [id: string]: string | string[]
}

export class CreateFormSubmissionDto {
  @IsNumber()
  readonly formId: number

  @IsNotEmpty()
  readonly answers: Answers

  @IsOptional()
  @IsArray()
  @ArrayMaxSize(5)
  readonly files?: number[]

  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => FindCharacterDto)
  readonly characters: FindCharacterDto[]
}
