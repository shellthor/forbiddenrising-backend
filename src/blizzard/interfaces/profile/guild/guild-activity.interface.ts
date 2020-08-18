import { Character, Guild, KeyNameId, Links } from '../shared-profile.interface';

export interface GuildActivity {
  _links: Links;
  guild: Guild;
  activities: Activity;
}

export interface Activity {
  type: ActivityType;
  character_achievement: CharacterAchievement;
}

export interface ActivityType {
  tyoe: string;
}

export interface CharacterAchievement {
  character: Character;
  achievement: KeyNameId;
  timestamp: number;
}
