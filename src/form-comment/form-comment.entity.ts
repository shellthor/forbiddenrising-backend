import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core'
import { User } from '../user/user.entity'

@Entity()
export class FormComment {
  @PrimaryKey()
  id!: number

  @Property()
  message!: string

  @Property()
  createdAt: Date = new Date()

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date()

  /**
   * Relationships
   */

  @ManyToOne(() => User)
  author!: User
}
