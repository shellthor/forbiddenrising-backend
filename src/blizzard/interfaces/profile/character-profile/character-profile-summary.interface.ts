import { Enum, Guild, KeyNameId, Link, Links, Realm } from '../shared-profile.interface'

export interface CharacterProfileSummary {
  _links: Links
  id: number
  name: string
  gender: Enum
  faction: Enum
  race: KeyNameId
  character_class: KeyNameId
  active_spec: KeyNameId
  realm: Realm
  guild: Guild
  level: number
  experience: number
  achievement_points: number
  achievements: Link
  titles: Link
  pvp_summary: Link
  encounters: Link
  media: Link
  last_login_timestamp: number
  average_item_level: number
  equipped_item_level: number
  specializations: Link
  statistics: Link
  mythic_keystone_profile: Link
  equipment: Link
  appearance: Link
  collections: Link
  active_title: Title
  reputations: Link
  quests: Link
  achievements_statistics: Link
  professions: Link
}

export interface Title {
  key: Link
  name: string
  id: number
  display_string: string
}
