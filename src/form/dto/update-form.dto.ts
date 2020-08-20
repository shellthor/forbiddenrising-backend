import { IsOptional, IsString } from 'class-validator'

export class UpdateFormDto {
  @IsOptional()
  @IsString()
  readonly name?: string
}
