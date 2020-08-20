import { Link, Links, Realm } from '../shared-profile.interface'

export interface AccountProfileSummary {
  _links: Links
  id: number
  wow_accounts: ProfileAccounts[]
  collections: Link
}

export interface ProfileAccounts {
  id: number
  characters: ProfileKnownCharacter[]
}

export interface ProfileKnownCharacter {
  character: Link
  protected_character: Link
  name: string
  id: number
  realm: Realm
}
