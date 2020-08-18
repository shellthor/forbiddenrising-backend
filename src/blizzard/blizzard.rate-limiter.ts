import { BadGatewayException, HttpException, HttpService, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import PQueue from 'p-queue';
import { User } from '../user/user.entity';
import { TokenService } from './services/token.service';

@Injectable()
export class RateLimiter {
  public readonly blizzard: PQueue;

  constructor(private readonly http: HttpService, private readonly tokenService: TokenService) {
    this.blizzard = new PQueue({
      autoStart: true,
      intervalCap: 100,
      interval: 1000,
    });
  }

  public async get<T>(uri: string, lastModified?: string, user?: User): Promise<AxiosResponse<T>> {
    try {
      await this.tokenService.getToken();

      const config = lastModified || user ? { headers: {} } : null;

      if (lastModified) {
        config.headers['If-Modified-Since'] = lastModified;
      }

      if (user) {
        config.headers['Authorization'] = `Bearer ${user.blizzard_token}`;
      }

      return this.blizzard.add(() =>
        this.http.get<T>(uri + '?namespace=profile-us&locale=en_US', config).toPromise(),
      );
    } catch (error) {
      if (error.response) {
        throw new HttpException(error.response.data, error.response.status);
      }

      console.error(error);

      throw new BadGatewayException(error);
    }
  }
}
