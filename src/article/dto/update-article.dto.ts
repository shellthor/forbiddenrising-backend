import { IsOptional, IsString, Length } from 'class-validator'

export class UpdateArticleDto {
  @IsOptional()
  @IsString()
  @Length(10, 120)
  readonly title?: string

  @IsOptional()
  @IsString()
  @Length(10, 120)
  readonly subtitle?: string

  @IsOptional()
  @IsString()
  content?: string

  @IsOptional()
  @IsString()
  header?: string
}
