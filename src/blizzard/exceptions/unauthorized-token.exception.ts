import { UnauthorizedException } from '@nestjs/common'

export class UnauthorizedTokenException extends UnauthorizedException {
  constructor() {
    super('Your Battle.net token has expired, please reauthenticate.', 'UnauthorizedToken')
  }
}
