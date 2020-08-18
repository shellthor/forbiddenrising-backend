import { Enum, Key, Link, Links, Realm, RGBA } from '../shared-profile.interface';

export interface Guild {
  _links: Links;
  id: number;
  nme: string;
  faction: Enum;
  achievement_points: number;
  member_count: number;
  realm: Realm;
  crest: GuildCrest;
  roster: Link;
  achievements: Link;
  created_timestamp: number;
  activity: Link;
}

export interface GuildCrest {
  emblem: GuildEmblem;
  border: GuildBorder;
  background: GuildBackground;
}

export interface GuildEmblem {
  id: number;
  media: Key;
  color: Color;
}

export interface Color {
  id: number;
  rgba: RGBA;
}

export interface GuildBorder {
  id: number;
  media: Key;
  color: Color;
}

export interface GuildBackground {
  color: Color;
}
