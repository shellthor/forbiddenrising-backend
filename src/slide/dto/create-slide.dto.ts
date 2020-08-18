import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateSlideDto {
  @IsNotEmpty()
  readonly image: string;

  @IsNotEmpty()
  readonly title: string;

  @IsOptional()
  readonly subtitle?: string;

  @IsOptional()
  readonly link?: string;
}
