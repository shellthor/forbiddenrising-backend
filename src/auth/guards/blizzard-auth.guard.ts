import { Injectable } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

@Injectable()
export class BlizzardAuthGuard extends AuthGuard('blizzard') {}
