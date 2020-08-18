import { HttpService, Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export interface Token {
  access_token: string;
  expires_in: number;
  expires: number;
  token_type: string;
}

@Injectable()
export class TokenService {
  private readonly logger: Logger = new Logger(TokenService.name);

  private token: Token = null;

  constructor(private readonly config: ConfigService, private readonly http: HttpService) {}

  async getToken(): Promise<void> {
    if (this.token !== null && this.token.expires >= new Date().getTime()) return;

    this.logger.log('Retrieving new auth token...');

    try {
      const resp = (
        await this.http
          .request({
            url: 'https://us.battle.net/oauth/token',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            method: 'POST',
            data: 'grant_type=client_credentials',
            auth: {
              username: this.config.get('BLIZZARD_CLIENTID'),
              password: this.config.get('BLIZZARD_SECRET'),
            },
          })
          .toPromise()
      ).data;

      if (resp && resp.access_token && resp.expires_in && resp.token_type === 'bearer') {
        this.token = resp;
        this.token.expires = new Date().getTime() + (this.token.expires_in - 3600) * 1000;
        return this.setAxiosBearerToken();
      }

      throw new UnauthorizedException('Token data was unexpectedly missing.');
    } catch (error) {
      this.logger.error(error);
      this.token = null;
      throw new UnauthorizedException(error);
    }
  }

  private setAxiosBearerToken(): void {
    this.logger.log('Access Token Set');
    this.http.axiosRef.defaults.headers.common = {
      Authorization: `Bearer ${this.token.access_token}`,
    };
  }

  public clearToken(): void {
    delete this.http.axiosRef.defaults.headers.common.Authorization;
    this.token = null;
  }
}
