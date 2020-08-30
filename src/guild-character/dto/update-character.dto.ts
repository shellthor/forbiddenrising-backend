import { IsBoolean } from 'class-validator'

export class UpdateCharacterDto {
  @IsBoolean()
  raid_team?: boolean
}
