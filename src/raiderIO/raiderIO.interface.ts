import { RealmName } from '../blizzard/enums/realm.enum'

export interface RaiderIOGuild {
  name: string
  faction: string
  region: string
  realm: RealmName
  profile_url: string
  raid_rankings?: RaidRankings
  raid_progression?: RaidProgression
}

interface RaidProgression {
  [slug: string]: RaidProgressionInfo
}

interface RaidRankings {
  [slug: string]: RaidRankingInfo
}

interface RaidProgressionInfo {
  summary: string
  total_bosses: number
  normal_bosses_killed: number
  heroic_bosses_killed: number
  mythic_bosses_killed: number
}

interface RaidRankingInfo {
  normal: Rankings
  heroic: Rankings
  mythic: Rankings
}

interface Rankings {
  world: number
  region: number
  realm: number
}
