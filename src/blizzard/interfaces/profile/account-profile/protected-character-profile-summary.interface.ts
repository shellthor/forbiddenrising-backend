import { Links, Character } from '../shared-profile.interface'

export interface ProtectedCharacterProfileSummary {
  _links: Links
  id: number
  name: string
  money: string
  character: Character
  protected_stats: ProtectedStats
  position: Position
  bind_position: Position
  wow_account: number
}

export interface ProtectedStats {
  total_number_deaths: number
  total_gold_gained: number
  total_gold_lost: number
  total_item_value_gained: number
  level_number_deaths: number
  level_gold_gained: number
  level_gold_lost: number
  level_item_value_gained: number
}

export interface Position {
  zone: ZoneOrMap
  map: ZoneOrMap
  x: number
  y: number
  z: number
  facing: number
}

// Move Later
export interface ZoneOrMap {
  name: string
  id: number
}
