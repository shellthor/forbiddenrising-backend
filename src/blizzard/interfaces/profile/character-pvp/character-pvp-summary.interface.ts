import { Character, Link, Links } from '../shared-profile.interface'
import { MatchStatistics } from './character-pvp-bracket-statistics.interface'

export interface CharacterPvPSummary {
  _links: Links
  brackets: Link[]
  honor_level: number
  pvp_map_statistics: MapStatistics[]
  honorable_kills: number
  character: Character
}

export interface MapStatistics {
  world_map: WorldMap
  match_statistics: MatchStatistics
}

export interface WorldMap {
  name: string
  id: number
}
