import { Character, KeyNameId, Link, Links } from '../shared-profile.interface';

export interface CharacterQuests {
  _links: Links;
  character: Character;
  in_progress: KeyNameId[];
  completed: Link;
}
