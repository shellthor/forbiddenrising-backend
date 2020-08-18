import { Links } from '../shared-profile.interface';

export interface CharacterProfileStatus {
  _links: Links;
  id: number;
  is_valid: boolean;
}
