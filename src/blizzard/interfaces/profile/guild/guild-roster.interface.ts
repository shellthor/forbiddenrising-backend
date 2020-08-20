import { Guild, KeyId, Links, Realm } from '../shared-profile.interface'

export interface GuildRoster {
  _links: Links
  guild: Guild
  members: GuildMember[]
}

export interface GuildMember {
  character: GuildCharacter
  rank: number
}

export interface GuildCharacter {
  name: string
  id: number
  realm: Realm
  level: number
  playable_class: KeyId
  playable_race: KeyId
}
