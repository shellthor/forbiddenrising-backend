import { Entity, Enum, PrimaryKey, Property, BaseEntity } from '@mikro-orm/core'
import { DecimalType } from '../config/types/decimal.type'
import { Expansion } from './enums/expansion.enum'

@Entity()
export class Raid extends BaseEntity<Raid, 'id'> {
  constructor(slug: string) {
    super()
    this.slug = slug
  }

  @PrimaryKey()
  id!: number

  @Property({ nullable: true })
  name?: string

  @Property({ unique: true })
  slug!: string

  @Enum({ items: () => Expansion, nullable: true })
  expansion?: Expansion

  @Property({ nullable: true })
  background?: string

  @Property({ type: DecimalType })
  progress!: number

  @Property()
  difficulty!: string

  @Property()
  world!: number

  @Property()
  region!: number

  @Property()
  realm!: number

  @Property()
  summary!: string

  @Property()
  bosses!: number

  @Property()
  normal_bosses_killed!: number

  @Property()
  heroic_bosses_killed!: number

  @Property()
  mythic_bosses_killed!: number

  @Property({ index: true })
  isFeatured = false

  @Property()
  order = 0

  @Property()
  locked = false

  @Property()
  createdAt: Date = new Date()

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date()
}
