import { IsEnum, IsString } from 'class-validator';
import { RealmSlug } from '../enums/realm.enum';
import { Region } from '../enums/region.enum';

export class FindGuildDto {
  @IsString()
  name: string;

  @IsEnum(RealmSlug)
  realm: RealmSlug;

  @IsEnum(Region)
  region: Region;
}
