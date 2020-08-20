import { Character, Enum, KeyId, Links } from '../shared-profile.interface'

export interface CharacterPvPBracketStatistics {
  _links: Links
  character: Character
  faction: Enum
  bracket: PvPBracket
  rating: number
  season: KeyId
  tier: KeyId
  season_match_statistics: MatchStatistics
  weekly_match_statistics: MatchStatistics
}

export interface PvPBracket {
  id: number
  type: string
}

export interface MatchStatistics {
  played: number
  won: number
  lost: number
}
