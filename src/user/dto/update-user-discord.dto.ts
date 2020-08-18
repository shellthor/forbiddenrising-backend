import { IsOptional, IsString } from 'class-validator';

export class UpdateUserDiscordDTO {
  @IsOptional()
  @IsString()
  discord_access_token: string;

  @IsOptional()
  @IsString()
  discord_refresh_token: string;

  @IsOptional()
  @IsString()
  discord_avatar: string;

  @IsOptional()
  @IsString()
  discord_username: string;

  @IsOptional()
  @IsString()
  discord_discriminator: string;
}
