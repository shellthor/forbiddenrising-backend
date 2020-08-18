import { Link, Links } from '../shared-profile.interface';

export interface CharacterPetsCollectionSummary {
  _links: Links;
  pets: Pet[];
  unlocked_battle_pet_slots: number;
}

export interface Pet {
  species: Species;
  level: number;
  quality: Quality;
  stats: Stats;
  creature_display?: CreatureDisplay;
  id: number;
  is_favorite?: boolean;
  name?: string;
}

export interface Species {
  key: Link;
  name: string;
  id: number;
}

export interface Quality {
  type: string;
  name: string;
}

export interface Stats {
  breed_id: number;
  health: number;
  power: number;
  speed: number;
}

export interface CreatureDisplay {
  key: Link;
}
