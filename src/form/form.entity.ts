import {
  BaseEntity,
  Collection,
  Entity,
  OneToMany,
  PrimaryKey,
  Property,
  QueryOrder,
} from '@mikro-orm/core';
import { FormQuestion } from '../form-question/question.entity';
import { FormSubmission } from '../form-submission/form-submission.entity';

@Entity()
export class Form extends BaseEntity<Form, 'id'> {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @Property()
  createdAt: Date = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();

  /**
   * Relationships
   */

  @OneToMany(() => FormQuestion, question => question.form, {
    eager: true,
    orderBy: { order: QueryOrder.ASC },
  })
  questions = new Collection<FormQuestion>(this);

  @OneToMany(() => FormSubmission, submission => submission.form, {
    hidden: true,
  })
  submissions = new Collection<FormSubmission>(this);
}
