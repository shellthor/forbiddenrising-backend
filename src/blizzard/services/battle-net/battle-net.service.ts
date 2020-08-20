import { HttpService, Injectable } from '@nestjs/common'
import { RateLimiter } from '../../blizzard.rate-limiter'

@Injectable()
export class BattleNetService {
  constructor(private readonly http: HttpService, private readonly rateLimiter: RateLimiter) {}

  /**
   * Checks if the Blizzard user token is valid.
   * [Blizzard OAuth](https://develop.battle.net/documentation/guides/using-oauth)
   * @param token User token; expires within 24 hours of login.
   */
  //   async checkToken(user: User): Promise<TokenValidation> {
  //     if (!user.blizzardtoken) {
  //       throw new BadRequestException('No token to validate.');
  //     }

  //     const uri = 'https://us.battle.net/oauth/check_token';

  //     return (await this.http.post(uri, null, { params: { token: user.blizzardtoken } }).toPromise()).data;
  //   }
}
