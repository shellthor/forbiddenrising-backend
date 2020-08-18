import { forwardRef, Inject, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { sign } from 'jsonwebtoken';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { JWTPayload } from './dto/jwt.dto';

export enum Provider {
  BLIZZARD = 'blizzard',
  DISCORD = 'discord',
}

export interface DiscordProfile {
  id: string;
  username: string;
  avatar?: string;
  discriminator: string;
  locale: string;
  mfa_enabled: boolean;
  flags?: number;
  premium_type?: number;
  provider: Provider.DISCORD;
  accessToken: string;
  fetchedAt: Date;
}

@Injectable()
export class AuthService {
  private readonly logger: Logger = new Logger(AuthService.name);

  constructor(
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
    private readonly config: ConfigService,
  ) {}

  async verify(payload: JWTPayload): Promise<User> {
    return this.userService.findOneByJwtPayload(payload);
  }

  signToken(user: User): string {
    return sign({ id: user.id }, this.config.get('JWT_SECRET'));
  }

  async validateDiscordLogin(
    accessToken: string,
    refreshToken: string,
    profile: DiscordProfile,
  ): Promise<User> {
    const user = await this.userService.findOneByProviderId(profile.id, profile.provider);

    if (!user) {
      return this.userService.create(profile.id, accessToken, refreshToken, profile);
    }

    return this.userService.updateByDiscord(user, {
      discord_access_token: accessToken,
      discord_refresh_token: refreshToken,
      discord_avatar: profile.avatar,
      discord_username: profile.username,
      discord_discriminator: profile.discriminator,
    });
  }
}
