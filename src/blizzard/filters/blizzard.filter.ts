import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { AxiosError } from 'axios';

/**
 * Exceptions thrown by Blizzard can be proxied through our requests.
 */

export class BlizzardFilter implements ExceptionFilter {
  catch(exception: AxiosError, host: ArgumentsHost): Response {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    if (
      exception.config &&
      exception.config.url &&
      (exception.config.url.includes('blizzard.com') || exception.config.url.includes('battle.net'))
    ) {
      // console.error(exception);

      return response.status(exception.response.status).send({
        timestamp: new Date().toISOString(),
        path: exception.config.url,
        data: exception.response.data,
      });
    }

    throw exception;
  }
}
