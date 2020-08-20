import { Link, Links } from '../shared-profile.interface'

export interface CharacterCollectionsIndex {
  _links: Links
  pets: Link
  mounts: Link
}
