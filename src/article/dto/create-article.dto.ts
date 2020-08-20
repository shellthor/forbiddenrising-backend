import { IsString, Length } from 'class-validator'

export class CreateArticleDTO {
  @IsString()
  @Length(10, 120)
  readonly title!: string

  @IsString()
  @Length(10, 120)
  readonly subtitle!: string

  @IsString()
  readonly content!: string

  @IsString()
  readonly header!: string
}
