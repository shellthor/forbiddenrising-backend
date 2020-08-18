import { IsOptional } from 'class-validator';

export enum RaiderIOCharacterFields {
  GEAR = 'gear',
  GUILD = 'guild',
  RAID_PROGRESSION = 'raid_progression',
  MYTHIC_PLUS_SCORES_BY_SEASON = 'mythic_plus_scores_by_season',
  MYTHIC_PLUS_SCORES_BY_CURRENT_SEASON = 'mythic_plus_scores_by_season:current',
  MYTHIC_PLUS_SCORES_BY_CURRENT_AND_PREVIOUS_SEASON = 'mythic_plus_scores_by_season:current:previous',
  MYTHIC_PLUS_SCORES_BY_PREVIOUS_SEASON = 'mythic_plus_scores_by_season:previous',
  MYTHIC_PLUS_RANKS = 'mythic_plus_ranks',
  MYTHIC_PLUS_RECENT_RUNS = 'mythic_plus_recent_runs',
  MYTHIC_PLUS_BEST_RUNS = 'mythic_plus_best_runs',
  MYTHIC_PLUS_HIGHEST_LEVEL_RUNS = 'mythic_plus_highest_level_runs',
  MYTHIC_PLUS_WEEKLY_HIGHEST_LEVEL_RUNS = 'mythic_plus_weekly_highest_level_runs',
  PREVIOUS_MYTHIC_PLUS_RANKS = 'previous_mythic_plus_ranks',
  RAID_ACHIEVEMENT_META = 'raid_achievement_meta',
  RAID_ACHIEVEMENT_CURVE = 'raid_achievement_curve',
}

export class RaiderIOCharacterFieldsDto {
  @IsOptional()
  fields: RaiderIOCharacterFields[] = [
    RaiderIOCharacterFields.GEAR,
    RaiderIOCharacterFields.RAID_PROGRESSION,
    RaiderIOCharacterFields.MYTHIC_PLUS_SCORES_BY_CURRENT_SEASON,
    RaiderIOCharacterFields.MYTHIC_PLUS_SCORES_BY_PREVIOUS_SEASON,
    RaiderIOCharacterFields.MYTHIC_PLUS_RECENT_RUNS,
    RaiderIOCharacterFields.MYTHIC_PLUS_BEST_RUNS,
  ];
}
