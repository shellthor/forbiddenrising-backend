import { Character, KeyNameId, Links } from '../shared-profile.interface';

export interface CharacterReputationsSummary {
  _links: Links;
  character: Character;
  reputations: Reputation[];
}

export interface Reputation {
  faction: KeyNameId;
  standing: ReputationStanding;
}

export interface ReputationStanding {
  raw: number;
  value: number;
  max: number;
  tier: number;
  name: string;
}
