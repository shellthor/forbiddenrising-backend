import { Injectable } from '@nestjs/common'
import { NestSchedule, Timeout } from 'nest-schedule'
import { TokenService } from './services/token.service'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class BlizzardScheduler extends NestSchedule {
  constructor(private readonly tokenService: TokenService, private readonly config: ConfigService) {
    super()
  }

  @Timeout(1000)
  async getToken(): Promise<void> {
    // The testing framework should not attempt to true authentication.
    if (this.config.get('NODE_ENV') === 'test') return

    return this.tokenService.getToken()
  }
}
