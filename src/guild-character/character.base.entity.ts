import { Enum, PrimaryKey, Property, Unique } from '@mikro-orm/core'
import { FindCharacterDto } from '../blizzard/dto/find-character.dto'
import { RealmSlug, RealmType } from '../blizzard/enums/realm.enum'
import { Region } from '../blizzard/enums/region.enum'
import * as ProfileAPI from '../blizzard/interfaces/profile'
import { RaidExpansion } from '../blizzard/interfaces/profile/character-encounters/character-raids.interface'
import { EquippedItem } from '../blizzard/interfaces/profile/character-equipment/character-equipment-summary.interface'
import { SpecializationMeta } from '../blizzard/interfaces/profile/character-specializations/character-specializations-summary.interface'
import { RaiderIOCharacter } from '../raiderIO/interfaces/raider-io-character.interface'

@Unique({ properties: ['name', 'realm', 'region'] })
export abstract class Character {
  private findCharacterDTO: FindCharacterDto

  constructor(name: string, realm: RealmType, region: Region) {
    this.name = name
    this.realm = realm
    this.region = region
  }

  @PrimaryKey()
  id!: number

  // TODO: Add index for lowercase names.
  @Property()
  name!: string

  @Enum(() => Region)
  region!: Region

  @Enum(() => RealmSlug)
  realm!: RealmType

  /**
   * Profile Summary
   */

  @Property({ type: 'smallint', nullable: true })
  level?: number

  @Property({ type: 'smallint', nullable: true })
  race_id?: number

  @Property({ nullable: true })
  race_name?: string

  @Property({ type: 'smallint', nullable: true })
  class_id?: number

  @Property({ nullable: true })
  class_name?: string

  @Property({ nullable: true })
  gender?: string

  @Property({ nullable: true })
  average_item_level?: number

  @Property({ nullable: true })
  equipped_item_level?: number

  @Property({ nullable: true })
  last_login?: Date

  // They use a non-standard date format, hence the string.
  @Property({ nullable: true })
  last_modified?: string

  /**
   * Profile Media Summary
   */
  @Property({ nullable: true })
  avatar_url?: string

  @Property({ nullable: true })
  bust_url?: string

  @Property({ nullable: true })
  render_url?: string

  /**
   * Profile Specializations
   */

  @Property({ nullable: true })
  specialization_id?: number

  @Property({ nullable: true })
  specialization_name?: string

  @Property({ nullable: true, type: 'jsonb' })
  specializations?: SpecializationMeta[]

  /**
   * Profile Raids
   */

  @Property({ nullable: true, type: 'jsonb' })
  raids?: RaidExpansion[]

  /**
   * Profile Equipment
   */

  @Property({ nullable: true, type: 'jsonb' })
  equipment?: EquippedItem[]

  /**
   * Profile Mounts Collection
   */

  @Property({ type: 'smallint', nullable: true })
  num_mounts_collected?: number

  /**
   * Profile Titles
   */
  @Property({ nullable: true })
  title?: string

  /**
   * RaiderIO
   */

  @Property({ nullable: true })
  raiderIO?: RaiderIOCharacter

  /**
   * Timestamps
   */

  @Property()
  createdAt: Date = new Date()

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date()

  /**
   * Updating Methods
   */

  setCharacterProfileSummary(data: ProfileAPI.CharacterProfileSummary): void {
    if (!this.id) this.id = data.id

    this.name = data.name
    this.level = data.level
    this.race_id = data.race.id
    this.race_name = data.race.name
    this.class_id = data.character_class.id
    this.class_name = data.character_class.name
    this.gender = data.gender.name
    this.average_item_level = data.average_item_level
    this.equipped_item_level = data.equipped_item_level
    this.last_login = new Date(data.last_login_timestamp)
  }

  setCharacterMediaSummary(data: ProfileAPI.CharacterMediaSummary): void {
    this.avatar_url = data.avatar_url
    this.bust_url = data.bust_url
    this.render_url = data.render_url
  }

  setCharacterSpecializationsSummary(data: ProfileAPI.CharacterSpecializationsSummary): void {
    this.specialization_id = data.active_specialization.id
    this.specialization_name = data.active_specialization.name
    this.specializations = data.specializations
  }

  setCharacterRaidEncounterSummary(data: ProfileAPI.CharacterRaids): void {
    // A character that has no raid kills can apparently lack this object.
    if (data.expansions) {
      this.raids = data.expansions.slice(-2)
    }
  }

  setCharacterEquipmentSummary(data: ProfileAPI.CharacterEquipmentSummary): void {
    this.equipment = data.equipped_items
  }

  setCharacterMountsCollectionSummary(data: ProfileAPI.CharacterMountsCollectionSummary): void {
    this.num_mounts_collected = data.mounts.length
  }

  setCharacterTitle(data: ProfileAPI.CharacterTitlesSummary): void {
    this.title = data?.active_title?.display_string
  }

  setCharacterRaiderIO(data: RaiderIOCharacter): void {
    this.raiderIO = data
  }

  /**
   * DTO Methods
   */

  getFindCharacterDTO(): FindCharacterDto {
    if (!this.findCharacterDTO) {
      this.findCharacterDTO = new FindCharacterDto(this.name, this.realm, this.region)
    }

    return this.findCharacterDTO
  }
}
