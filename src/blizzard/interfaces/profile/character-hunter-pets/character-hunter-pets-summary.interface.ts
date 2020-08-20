import { Character, Key, KeyNameId, Links } from '../shared-profile.interface'

export interface CharacterHunterPetsSummary {
  _links: Links
  character: Character
  hunter_pets: HunterPet[]
}

export interface HunterPet {
  name: string
  level: string
  creature: KeyNameId
  slot: number
  is_active?: boolean
  creature_display: Key
}
