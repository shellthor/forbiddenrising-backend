import { IsNotEmpty } from 'class-validator';

export class JWTPayload {
  @IsNotEmpty()
  readonly id: number;
}
