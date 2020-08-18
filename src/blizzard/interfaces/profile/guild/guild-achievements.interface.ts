import { Guild, KeyNameId, Links } from '../shared-profile.interface';

export interface GuildAchievements {
  _links: Links;
  guild: Guild;
  total_quantity: number;
  total_points: number;
  achievement: Achievement;
}

export interface Achievement {
  id: number;
  achievement: KeyNameId;
  criteria: Criteria;
  completed_timestamp: number;
}

export interface Criteria {
  id: number;
  is_completed: boolean;
  child_criteria?: ChildCriteria[];
}

export interface ChildCriteria {
  id: number;
  amount: number;
  is_completed: boolean;
}
