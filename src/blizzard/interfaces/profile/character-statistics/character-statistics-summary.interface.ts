import { Character, KeyNameId, Links } from '../shared-profile.interface'

export interface CharacterStatisticsSummary {
  _links: Links
  health: number
  power: number
  power_type: KeyNameId
  speed: Rating
  strength: Stat
  agility: Stat
  intellect: Stat
  stamina: Stat
  melee_crit: Rating
  melee_haste: Rating
  mastery: Rating
  bonus_armor: number
  lifesteal: Rating
  versatility: number
  versatility_damage_done_bonus: number
  versatility_healing_done_bonus: number
  versatility_damage_taken_bonus: number
  avoidange: Rating
  attack_power: number
  main_hand_damage_min: number
  main_hand_damage_max: number
  main_hand_speed: number
  main_hand_dps: number
  off_hand_damage_min: number
  off_hand_damage_max: number
  off_hand_speed: number
  off_hand_dps: number
  spell_power: number
  spell_penetration: number
  spell_crit: Rating
  mana_regen: number
  mana_regen_combat: number
  armor: Stat
  dodge: Rating
  parry: Rating
  block: Rating
  ranged_crit: Rating
  ranged_haste: Rating
  spell_haste: Rating
  character: Character
  corruption: Corruption
}

export interface Rating {
  rating: number
  rating_bonus: number
  value?: number
}

export interface Stat {
  base: number
  effective: number
}

export interface Corruption {
  corruption: number
  corruption_resistance: number
  effective_corruption: number
}
