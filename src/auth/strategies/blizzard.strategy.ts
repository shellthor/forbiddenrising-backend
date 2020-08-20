import { Injectable, Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-bnet'
import { User } from '../../user/user.entity'
import { AuthService } from '../auth.service'

@Injectable()
export class BlizzardStrategy extends PassportStrategy(Strategy, 'blizzard') {
  private readonly logger: Logger = new Logger(BlizzardStrategy.name)

  constructor(private readonly authService: AuthService, config: ConfigService) {
    super({
      clientID: config.get('BLIZZARD_CLIENTID'),
      clientSecret: config.get('BLIZZARD_SECRET'),
      callbackURL: config.get('BLIZZARD_CALLBACK'),
      passReqToCallback: true,
      scope: ['wow.profile'],
    })
  }

  // Blizzard does not provide refresh tokens.
  async validate(req, accessToken, refreshToken, profile): Promise<void | User> {
    if (!req.user) {
      this.logger.log(`Logging in or creating ${profile.battletag}`)

      return this.authService.validateDiscordLogin(accessToken, refreshToken, profile)
    }

    this.logger.log(`User ${req.user.id} is already logged in.`)
  }
}
