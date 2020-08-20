import { Link, Links } from '../shared-profile.interface'

export interface CharacterMountsCollectionSummary {
  _links: Links
  mounts: Mount[]
}

export interface Mounts {
  mount: Mount
  is_favorite?: boolean
}

export interface Mount {
  key: Link
  name: string
  id: number
}
