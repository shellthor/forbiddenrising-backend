import { Entity, Property } from '@mikro-orm/core'
import { Character } from './character.base.entity'

@Entity()
export class GuildCharacter extends Character {
  @Property({ type: 'smallint' })
  guild_rank!: number

  @Property({ type: 'boolean', default: false })
  raid_team!: boolean
}
