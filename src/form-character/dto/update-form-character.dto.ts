import { IsEnum, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { EquippedItem } from '../../blizzard/interfaces/profile/character-equipment/character-equipment-summary.interface';
import { SpecializationMeta } from '../../blizzard/interfaces/profile/character-specializations/character-specializations-summary.interface';
import { RaiderIOCharacter } from '../../raiderIO/interfaces/raider-io-character.interface';
import { RealmSlug } from '../../blizzard/enums/realm.enum';
import { Region } from '../../blizzard/enums/region.enum';

export class UpdateFormCharacterDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEnum(RealmSlug)
  realm?: RealmSlug;

  @IsOptional()
  @IsEnum(Region)
  region?: Region;

  @IsOptional()
  @IsNumber()
  race_id?: number;

  @IsOptional()
  @IsString()
  race_name?: string;

  @IsOptional()
  @IsNumber()
  class_id?: number;

  @IsOptional()
  @IsString()
  class_name?: string;

  @IsOptional()
  @IsString()
  gender?: string;

  @IsOptional()
  @IsString()
  avatar_url?: string;

  @IsOptional()
  @IsString()
  bust_url?: string;

  @IsOptional()
  @IsString()
  render_url?: string;

  @IsOptional()
  @ValidateNested({ each: true })
  equipment?: EquippedItem[];

  @IsOptional()
  @IsNumber()
  specialization_id?: number;

  @IsOptional()
  @IsString()
  specialization_name?: string;

  @IsOptional()
  @ValidateNested({ each: true })
  specializations?: SpecializationMeta[];

  @IsOptional()
  @ValidateNested()
  raiderIO?: RaiderIOCharacter;
}
