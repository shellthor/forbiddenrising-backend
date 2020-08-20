import {
  BaseEntity,
  Cascade,
  Collection,
  Entity,
  Enum,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core'
import { FileUpload } from '../file/file.entity'
import { FormCharacter } from '../form-character/form-character.entity'
import { Form } from '../form/form.entity'
import { User } from '../user/user.entity'
import { Answers } from './dto'
import { FormSubmissionStatus } from './enums/form-submission-status.enum'

@Entity()
export class FormSubmission extends BaseEntity<FormSubmission, 'id'> {
  @PrimaryKey()
  id!: number

  @Enum(() => FormSubmissionStatus)
  status = FormSubmissionStatus.Open

  @Property({ type: 'jsonb' })
  answers: Answers

  @Property()
  createdAt: Date = new Date()

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date()

  /**
   * Relationships
   */

  @ManyToOne(() => Form)
  form!: Form

  @ManyToOne(() => User, { eager: true })
  author!: User

  @ManyToMany(() => FormCharacter, char => char.submission, {
    cascade: [Cascade.ALL],
    owner: true,
  })
  characters = new Collection<FormCharacter>(this)

  @ManyToOne(() => FormCharacter, { nullable: true })
  mainCharacter?: FormCharacter

  @OneToMany(() => FileUpload, file => file.submission, {
    eager: true,
    cascade: [Cascade.MERGE],
  })
  files = new Collection<FileUpload>(this)

  /**
   * Instructs the frontend the submission is new.
   */

  @Property({ persist: false })
  justSubmitted?: boolean
}
