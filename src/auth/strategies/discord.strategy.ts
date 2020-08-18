import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-discord';
import { User } from 'src/user/user.entity';
import { AuthService, DiscordProfile } from '../auth.service';
import { BlizzardStrategy } from './blizzard.strategy';

@Injectable()
export class DiscordStrategy extends PassportStrategy(Strategy, 'discord') {
  private readonly logger: Logger = new Logger(BlizzardStrategy.name);

  constructor(private readonly authService: AuthService, config: ConfigService) {
    super({
      clientID: config.get('DISCORD_CLIENT_ID'),
      clientSecret: config.get('DISCORD_SECRET'),
      callbackURL: config.get('DISCORD_CALLBACK'),
      scope: ['identify'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: DiscordProfile,
  ): Promise<User> {
    return this.authService.validateDiscordLogin(accessToken, refreshToken, profile);
  }
}
