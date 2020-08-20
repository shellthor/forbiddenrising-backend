import { Global, Module } from '@nestjs/common'
import { ACCESS_CONTROL } from '../app.constants'
import AccessControl from '../app.roles'
import { UserModule } from '../user/user.module'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { AccessControlGuard } from './guards/access-control.guard'
import { BlizzardStrategy } from './strategies/blizzard.strategy'
import { DiscordStrategy } from './strategies/discord.strategy'
import { JwtStrategy } from './strategies/jwt.strategy'

const AccessControlProvider = {
  provide: ACCESS_CONTROL,
  useValue: AccessControl,
}

@Global()
@Module({
  imports: [UserModule],
  providers: [
    JwtStrategy,
    BlizzardStrategy,
    DiscordStrategy,
    AuthService,
    AccessControlGuard,
    AccessControlProvider,
  ],
  controllers: [AuthController],
  exports: [AuthService, JwtStrategy, BlizzardStrategy, AccessControlGuard, AccessControlProvider],
})
export class AuthModule {}
