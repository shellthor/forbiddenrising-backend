import { Character, Links } from '../shared-profile.interface'

export interface CharacterMediaSummary {
  _links: Links
  character: Character
  avatar_url: string
  bust_url: string
  render_url: string
}
