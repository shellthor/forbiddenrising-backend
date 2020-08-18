import { Links, KeyNameId } from '../../profile';

export interface AchievementCategoriesIndex {
  _links: Links;
  categories: KeyNameId[];
  root_categories: KeyNameId[];
  guild_categories: KeyNameId[];
}
