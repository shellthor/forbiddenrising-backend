export interface RaiderIOCharacter {
  name: string
  race: string
  class: string
  active_spec_name: string
  active_spec_role: string
  gender: string
  faction: string
  achievement_points: number
  honorable_kills: number
  thumbnail_url: string
  region: string
  realm: string
  profile_url: string
  profile_banner: string
  raid_progression?: any
  gear?: RaiderIOGear
  mythic_plus_scores_by_season?: RaiderIOSeason[]
  mythic_plus_best_runs?: RaiderIOBestRun[]
}

export interface RaiderIOGear {
  item_level_equipped: number
  item_level_total: number
  artifact_traits: number
  corruption: RaiderIOCorruption
  items: any // TODO: Implement this as a data fallback.
}

export interface RaiderIOCorruption {
  added: number
  resisted: number
  total: number
  cloakRank: number
  spells: CorruptionSpell[]
}

export interface CorruptionSpell {
  id: number
  name: string
  icon: string
  school: number
  rank?: null
}

export interface RaiderIOSeason {
  season: string
  scores: {
    all: number
    dps: number
    healer: number
    tank: number
    spec_0: number
    spec_1: number
    spec_2: number
    spec_3: number
  }
}

export interface RaiderIOBestRun {
  dungeon: string
  short_name: string
  mythic_level: number
  completed_at: string
  clear_time_ms: number
  num_keystone_upgrades: number
  map_challenge_mode_id: number
  score: number
  affixes: Affix[]
  url: string
}

export interface Affix {
  id: number
  name: string
  description: string
  wowhead_url: string
}
