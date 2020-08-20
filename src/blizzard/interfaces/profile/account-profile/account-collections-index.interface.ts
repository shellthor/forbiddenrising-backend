import { Link, Links } from '../shared-profile.interface'

export interface AccountCollectionsIndex {
  _links: Links
  pets: Link
  mounts: Link
}
