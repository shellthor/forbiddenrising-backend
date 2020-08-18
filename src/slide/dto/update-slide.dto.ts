import { IsOptional } from 'class-validator';

export class UpdateSlideDto {
  @IsOptional()
  readonly image?: string;

  @IsOptional()
  readonly title?: string;

  @IsOptional()
  readonly subtitle?: string;

  @IsOptional()
  readonly link?: string;
}
