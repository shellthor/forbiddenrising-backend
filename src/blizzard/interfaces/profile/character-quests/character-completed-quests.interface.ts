import { Character, KeyNameId, Links } from '../shared-profile.interface'

export interface CharacterCompletedQuests {
  _links: Links
  character: Character
  quests: KeyNameId[]
}
