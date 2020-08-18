import { Collection, Entity, ManyToMany } from '@mikro-orm/core';
import { FormSubmission } from '../form-submission/form-submission.entity';
import { Character } from '../guild-character/character.base.entity';

@Entity()
export class FormCharacter extends Character {
  /**
   * Relations
   */

  @ManyToMany(() => FormSubmission, fs => fs.characters, { hidden: true })
  submission = new Collection<FormSubmission>(this);
}
