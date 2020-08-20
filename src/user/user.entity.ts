import {
  ArrayType,
  BaseEntity,
  Collection,
  Entity,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core'
import { Roles } from '../app.roles'
import { Article } from '../article/article.entity'
import { FileUpload } from '../file/file.entity'
import { FormComment } from '../form-comment/form-comment.entity'
import { FormSubmission } from '../form-submission/form-submission.entity'

@Entity()
export class User extends BaseEntity<User, 'id'> {
  @PrimaryKey()
  id!: number

  @Property({ unique: true })
  discord_id!: string

  @Property()
  discord_username!: string

  @Property()
  discord_discriminator!: string

  @Property({ hidden: true, nullable: true })
  discord_access_token?: string

  @Property({ hidden: true, nullable: true })
  discord_refresh_token?: string

  @Property({ nullable: true })
  discord_avatar?: string

  @Property({ hidden: true, nullable: true })
  blizzard_token?: string

  @Property({ type: ArrayType })
  roles: Roles[] = []

  @Property()
  createdAt: Date = new Date()

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date()

  /**
   * Relationships
   */

  @OneToMany(() => Article, a => a.author, { hidden: true })
  articles = new Collection<Article>(this)

  @OneToMany(() => FormSubmission, submission => submission.author, {
    hidden: true,
  })
  submissions = new Collection<FormSubmission>(this)

  @OneToMany(() => FormComment, comment => comment.author, { hidden: true })
  comments = new Collection<FormComment>(this)

  @OneToMany(() => FileUpload, fileUpload => fileUpload.author, {
    hidden: true,
  })
  files = new Collection<FileUpload>(this)
}
