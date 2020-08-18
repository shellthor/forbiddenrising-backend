import { BaseEntity, Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class DiscordConfig extends BaseEntity<DiscordConfig, 'id'> {
  @PrimaryKey()
  id!: number;

  @Property({ unique: true })
  name!: string;

  @Property({ type: 'json' })
  options: any;
}
