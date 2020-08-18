import { BaseEntity, Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { User } from '../user/user.entity';

@Entity()
export class Article extends BaseEntity<Article, 'id'> {
  @PrimaryKey()
  id!: number;

  @Property({ unique: true })
  title!: string;

  @Property()
  slug!: string;

  @Property()
  subtitle!: string;

  @Property()
  content!: string;

  @Property({ nullable: true })
  header?: string;

  @Property()
  createdAt: Date = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();

  /**
   * Relationships
   */

  @ManyToOne({ entity: () => User })
  author!: User;
}
