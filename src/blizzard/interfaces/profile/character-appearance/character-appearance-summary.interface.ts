import { Character, Link, Links } from '../shared-profile.interface';

export interface CharacterAppearanceSummary {
  _links: Links;
  character: Character;
  playable_race: Race;
  playable_class: Class;
  active_spec: Specialization;
  gender: Gender;
  faction: Faction;
  guild_crest: GuildCrest;
  appearance: Appearance;
  items: ItemAppearance[];
}

export interface Race {
  key: Link;
  name: string;
  id: number;
}

export interface Class {
  key: Link;
  name: string;
  id: number;
}

export interface Specialization {
  key: Link;
  name: string;
  id: number;
}

export interface Gender {
  type: string;
  name: string;
}

export interface Faction {
  type: string;
  name: string;
}

export interface GuildCrest {
  emblem: Emblem;
  border: Border;
  background: Background;
}

export interface Emblem {
  id: number;
  media: Media;
  color: Color;
}

// Replace with GameData APIs
export interface Media {
  key: Link;
}

export interface Color {
  id: number;
  rgba: RGBA;
}

export interface RGBA {
  r: number;
  g: number;
  b: number;
  a: number;
}

export interface Border {
  id: number;
  media: Media;
  color: Color;
}

export interface Background {
  color: Color;
}

export interface Appearance {
  face_variation: number;
  skin_color: number;
  hair_variation: number;
  hair_color: number;
  feature_variation: number;
  custom_display_options: number[];
}

export interface ItemAppearance {
  id: number;
  slot: ItemSlot;
  enchant: number;
  item_appearance_modifier_id: number;
  internal_slot_id: number;
  subclass: number;
}

export interface ItemSlot {
  type: string;
  name: string;
}
