import { Injectable } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

@Injectable()
export class AppAuthGuard extends AuthGuard(['blizzard', 'discord', 'JWT']) {}
