import { DiscordAuthGuard } from './guards/discord-auth.guard'
import { BlizzardAuthGuard } from './guards/blizzard-auth.guard'
import { Controller, Get, Post, UseGuards } from '@nestjs/common'
import { Usr } from '../user/user.decorator'
import { User } from '../user/user.entity'
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(BlizzardAuthGuard)
  @Post('/login')
  login(@Usr() user: User): User {
    return user
  }

  @UseGuards(DiscordAuthGuard)
  @Get('/login/discord')
  loginDiscord(@Usr() user: User): User {
    return user
  }

  @UseGuards(BlizzardAuthGuard)
  @Get('/callback')
  callbackBlizzard(@Usr() user: User): { user: User; token: string } {
    const token = this.authService.signToken(user)

    return {
      user,
      token,
    }
  }

  @UseGuards(DiscordAuthGuard)
  @Get('/callback/discord')
  callbackDiscord(@Usr() user: User): { user: User; token: string } {
    const token = this.authService.signToken(user)

    return {
      user,
      token,
    }
  }
}
