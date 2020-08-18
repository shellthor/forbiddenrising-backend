import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Usr } from '../user/user.decorator';
import { User } from '../user/user.entity';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('discord'))
  @Get('/discord')
  discordLogin(@Usr() user: User): User {
    return user;
  }

  @UseGuards(AuthGuard('discord'))
  @Get('/discord/callback')
  discordCallback(@Usr() user: User): { user: User; token: string } {
    const token = this.authService.signToken(user);

    return {
      user,
      token,
    };
  }

  @UseGuards(AuthGuard('blizzard'))
  @Get('blizzard/login')
  blizzardLogin(@Usr() user: User): User {
    return user;
  }

  @UseGuards(AuthGuard('blizzard'))
  @Post('blizzard/callback')
  blizzardCallback(@Usr() user: User): { user: User; token: string } {
    const token = this.authService.signToken(user);

    return {
      user,
      token,
    };
  }
}
