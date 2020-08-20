import { Entity, PrimaryKey, Property } from '@mikro-orm/core'

@Entity()
export class Slide {
  @PrimaryKey()
  id!: number

  @Property()
  image!: string

  @Property()
  title!: string

  @Property({ nullable: true })
  subtitle?: string

  @Property({ nullable: true })
  link?: string
}
