import { ProfileKnownCharacter } from '../account-profile/account-profile-summary.interface'
import { Links } from '../shared-profile.interface'

export interface CharacterAchievementStatistics {
  _links: Links
  character: ProfileKnownCharacter
  statistics: AchievementCategory[]
}

export interface AchievementCategory {
  id: number
  name: string
  sub_categories: AchievementCategory[]
  statistics: AchievementStatistics
}

export interface AchievementStatistics {
  id: number
  name: string
  last_updated_timestamp: number
  quantity: number
}
