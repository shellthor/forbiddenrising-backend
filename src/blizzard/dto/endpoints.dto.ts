import { IsEnum } from 'class-validator';
import { ProfileEndpoints } from '../enums/profile-api.enum';

export class CharacterEndpointsDto {
  @IsEnum(ProfileEndpoints, { each: true })
  endpoints: ProfileEndpoints[];
}
