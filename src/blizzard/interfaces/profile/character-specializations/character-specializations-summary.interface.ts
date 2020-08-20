import { SpellTooltip } from '../character-equipment/character-equipment-summary.interface'
import { Character, KeyNameId, Links } from '../shared-profile.interface'

export interface CharacterSpecializationsSummary {
  _links: Links
  specializations: SpecializationMeta[]
  active_specialization: KeyNameId
  character: Character
}

export interface SpecializationMeta {
  specialization: KeyNameId
  talents: TalentMeta[]
  glyphs?: KeyNameId[]
  pvp_talent_slots: PvPTalent[]
}

export interface TalentMeta {
  talent: KeyNameId
  spell_tooltip: SpellTooltip
  tier_index: number
  column_index: number
}

export interface PvPTalent {
  selected: SelectedPvPTalent
  slot_number: number
}

export interface SelectedPvPTalent {
  talent: KeyNameId
  spell_tooltip: SpellTooltip
}
