import { Links } from '../profile/shared-profile.interface';

export interface GameDataItemMedia {
  _links: Links;
  assets: Asset[];
}

export interface Asset {
  key: string; // This should be an enum in the future.
  value: string;
}
