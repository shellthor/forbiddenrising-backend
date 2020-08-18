import { IsNumberString } from 'class-validator';

export class FindFormDto {
  @IsNumberString()
  readonly id: number;
}
