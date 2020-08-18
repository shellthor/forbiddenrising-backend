import { Asset } from '../../game-data/item/item-media.interface';
import { Character, Enum, KeyId, KeyNameId, Link, Links, RGBA } from '../shared-profile.interface';

export interface CharacterEquipmentSummary {
  _links: Links;
  character: Character;
  equipped_items: EquippedItem[];
  equipped_item_sets?: ItemSet[];
}

export interface ItemMedia {
  id: number;
  key: Link;
  assets?: Asset;
}

export interface EquippedItem {
  item: KeyId;
  slot: Enum;
  quantity: number;
  context: number;
  bonus_list?: number[];
  quality: Enum;
  name: string;
  modified_appearance_id?: number;
  azerite_details?: AzeriteDetails;
  media: ItemMedia;
  item_class: KeyNameId;
  item_subclass: KeyNameId;
  inventory_type: Enum;
  binding: Enum;
  armor?: Armor;
  stats?: Stat[];
  spells?: EquipmentSpell[];
  requirements?: Requirements;
  level: Level;
  transmog?: Transmog;
  is_subclass_hidden?: boolean;
  durability?: Durability;
  name_description?: NameDescription;
  enchantments?: Enchantment[];
  sell_price?: SellPrice;
  is_corrupted?: boolean;
  unique_equipped?: string;
  limit_category?: string;
  sockets?: Socket[];
  weapon?: Weapon;
  set?: ItemSet;
  description?: string;
}

export interface ItemSet {
  item_set: KeyNameId;
  items: ItemSetItem[];
  effects: ItemSetEffects[];
  display_string: string;
}

export interface ItemSetEffects {
  display_string: string;
  required_count: number;
}

export interface ItemSetItem {
  item: KeyNameId;
  is_equipped?: boolean;
}

export interface Weapon {
  damage: WeaponDamage;
  attack_speed: ValueDisplay;
  dps: ValueDisplay;
}

export interface WeaponDamage {
  min_value: number;
  max_value: number;
  display_string: string;
  damage_class: Enum;
}

export interface ValueDisplay {
  value: number;
  display_string: string;
}

export interface Socket {
  socket_type: Enum;
  item: KeyNameId;
  display_string: string;
  media: KeyId;
}

export interface SellPrice {
  value: number;
  display_strings: SellPriceDisplayStrings;
}

export interface SellPriceDisplayStrings {
  header: string;
  gold: string;
  silver: string;
  copper: string;
}

export interface Enchantment {
  display_string: string;
  source_item: KeyNameId;
  enchantment_id: number;
  enchantment_slot: EnchantmentSlot;
  spell?: EnchantmentSpell;
}

export interface EnchantmentSlot {
  id: number;
  type: string;
}

// TODO: This might be a game-data thing.
export interface EnchantmentSpell {
  spell: KeyNameId;
  description: string;
}

export interface AzeriteDetails {
  selected_essences?: SelectedEssence[];
  selected_powers?: AzeritePower[];
  selected_powers_string?: string;
  level?: HeartLevel;
  percentage_to_next_level?: number;
}

export interface HeartLevel {
  value: number;
  display_string: string;
}

export interface AzeritePower {
  id: number;
  tier: number;
  spell_tooltip: SpellTooltip;
  is_display_hidden?: boolean;
}

export interface SpellTooltip {
  spell: KeyNameId;
  description: string;
  cast_time: string;
  range?: string;
  cooldown?: string;
  power_cost?: string;
}

export interface Armor {
  value: number;
  display: Display;
}

export interface Display {
  display_string: string;
  color: RGBA;
}

export interface Stat {
  type: Enum;
  value: number;
  is_negated?: boolean;
  is_equip_bonus?: boolean;
  display: Display;
}

export interface Requirements {
  level: Level;
  skill?: ItemSkillRequirement;
}

export interface ItemSkillRequirement {
  profession: KeyNameId;
  level: number;
  display_string: string;
}

export interface Level {
  value: number;
  display_string: string;
}

export interface Transmog {
  item: KeyNameId;
  display_string: string;
  item_modified_appearance_id: number;
}

export interface Durability {
  value: number;
  display_string: string;
}

export interface NameDescription {
  display_string: string;
  color: RGBA;
}

export interface HeartOfAzeroth {
  percentage_to_next_level: number;
  selected_essences: SelectedEssence[];
  level: Level;
}

export interface SelectedEssence {
  slot: number;
  rank: number;
  main_spell_tooltip?: SpellTooltip;
  passive_spell_tooltip: SpellTooltip;
  essence: KeyNameId;
  media: KeyId;
}

export interface EquipmentSpell {
  spell: KeyNameId;
  description: string;
  display_color?: RGBA;
}
