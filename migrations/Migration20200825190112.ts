import { Migration } from '@mikro-orm/migrations';

export class Migration20200825190112 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "guild_character" add column "raid_team" bool not null default false;');
    this.addSql('alter table "guild_character" drop constraint if exists "guild_character_region_check";');
    this.addSql('alter table "guild_character" alter column "region" type text using ("region"::text);');
    this.addSql('alter table "guild_character" add constraint "guild_character_region_check" check ("region" in (\'us\'));');

    this.addSql('alter table "form_character" drop constraint if exists "form_character_region_check";');
    this.addSql('alter table "form_character" alter column "region" type text using ("region"::text);');
    this.addSql('alter table "form_character" add constraint "form_character_region_check" check ("region" in (\'us\'));');
  }

}
