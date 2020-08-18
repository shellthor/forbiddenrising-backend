import { Link, Links } from '../shared-profile.interface';

export interface AccountMountsCollectionSummary {
  _links: Links;
  mounts: MountIndex;
}

export interface MountIndex {
  mount: Mount;
  is_favorite?: boolean;
}

export interface Mount {
  key: Link;
  name: string;
  id: number;
}
