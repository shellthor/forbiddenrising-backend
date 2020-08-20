import { Character, Enum, KeyNameId, Links } from '../shared-profile.interface'

export interface CharacterRaids {
  _links: Links
  character: Character
  expansions: RaidExpansion[]
}

export interface RaidExpansion {
  expansion: KeyNameId
  instances: RaidInstance[]
}

export interface RaidInstance {
  instance: KeyNameId
  modes: InstanceMode[]
}

export interface InstanceMode {
  difficulty: Enum
  status: Enum
  progress: InstanceProgress
}

export interface InstanceProgress {
  completed_count: number
  total_count: number
  encounters?: Encounter[]
}

export interface Encounter {
  encounter: KeyNameId
  completed_count: number
  last_kill_timestamp: number
}
