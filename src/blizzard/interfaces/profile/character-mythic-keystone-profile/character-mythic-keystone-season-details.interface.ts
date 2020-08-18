import { Character, KeyId, KeyNameId, Links } from '../shared-profile.interface';

export interface CharacterMythicKeystoneSeasonDetails {
  _links: Links;
  season: KeyId;
  best_runs: KeystoneRun;
  character: Character;
}

export interface KeystoneRun {
  completed_timestamp: number;
  duration: number;
  keystone_level: number;
  keystone_affixes: KeyNameId[];
  members: KeystoneMember[];
  dungeon: KeyNameId;
  is_completed_within_time: boolean;
}

export interface KeystoneMember {
  character: Character;
  specialization: KeyNameId;
  race: KeyNameId;
  equipped_item_level: number;
}
