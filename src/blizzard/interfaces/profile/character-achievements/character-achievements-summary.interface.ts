import { Character, Link, Links } from '../shared-profile.interface'

export interface CharacterAchievementsSummary {
  _links: Links
  total_quantity: number
  total_points: number
  achievements?: AchievementsEntity[] | null
  category_progress?: ProfileCategoryProgress[] | null
  recent_events?: RecentEvents[] | null
  character: Character
}

export interface AchievementsEntity {
  id: number
  achievement: AchievementOrCategory
  criteria?: Criteria | null
  completed_timestamp?: number | null
}

export interface AchievementOrCategory {
  key: Link
  name: string
  id: number
}

export interface Criteria {
  id: number
  is_completed: boolean
  child_criteria?: Criteria[] | null
  amount?: number | null
}

export interface ProfileCategoryProgress {
  category: AchievementOrCategory
  quantity: number
  points: number
}

export interface RecentEvents {
  achievement: AchievementOrCategory
  timestamp: number
}
