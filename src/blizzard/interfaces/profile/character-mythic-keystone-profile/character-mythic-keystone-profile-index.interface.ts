import { Character, KeyId, Links } from '../shared-profile.interface'

export interface CharacterMythicKeystoneProfileIndex {
  _links: Links
  current_period: KeystonePeriod
  seasons: KeyId[]
  character: Character
}

export interface KeystonePeriod {
  period: KeyId
}
