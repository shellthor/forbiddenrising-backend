import { IsOptional } from 'class-validator'

export class UpdateUserDto {
  @IsOptional()
  nickname?: string

  @IsOptional()
  avatar?: string
}
