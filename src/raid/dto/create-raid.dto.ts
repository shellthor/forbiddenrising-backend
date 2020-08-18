import { IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Expansion } from '../enums/expansion.enum';

export class CreateRaidDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsNotEmpty()
  @IsString()
  slug!: string;

  @IsOptional()
  @IsEnum(Expansion)
  expansion?: Expansion;

  @IsOptional()
  @IsString()
  background?: string;

  @IsOptional()
  @IsNumber()
  progress?: number;

  @IsOptional()
  @IsString()
  difficulty?: string;

  @IsOptional()
  @IsNumber()
  bosses?: number;

  @IsOptional()
  @IsNumber()
  world?: number;

  @IsOptional()
  @IsNumber()
  region?: number;

  @IsOptional()
  @IsNumber()
  realm?: number;

  @IsOptional()
  @IsString()
  summary?: string;

  @IsOptional()
  @IsNumber()
  total_bosses?: number;

  @IsOptional()
  @IsNumber()
  normal_bosses_killed?: number;

  @IsOptional()
  @IsNumber()
  heroic_bosses_killed?: number;

  @IsOptional()
  @IsNumber()
  mythic_bosses_killed?: number;

  @IsOptional()
  @IsBoolean()
  isFocused?: boolean;
}
