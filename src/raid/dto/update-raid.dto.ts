import { IsOptional } from 'class-validator';

export class UpdateRaidDto {
  @IsOptional()
  name: string;

  @IsOptional()
  slug: string;

  @IsOptional()
  background: string;

  @IsOptional()
  progress: number;

  @IsOptional()
  difficulty: string;

  @IsOptional()
  world: number;

  @IsOptional()
  region: number;

  @IsOptional()
  realm: number;

  @IsOptional()
  summary: string;

  @IsOptional()
  total_bosses: number;

  @IsOptional()
  normal_bosses_killed: number;

  @IsOptional()
  heroic_bosses_killed: number;

  @IsOptional()
  mythic_bosses_killed: number;
}
