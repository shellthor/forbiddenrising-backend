import { Character, KeyNameId, Link, Links } from '../shared-profile.interface'

export interface CharacterTitlesSummary {
  _links: Links
  character: Character
  active_title?: ActiveTitle
  titles: KeyNameId[]
}

export interface ActiveTitle {
  key: Link
  name: string
  id: number
  display_string: string
}
