import { RaiderIOService } from './../raiderIO/raiderIO.service'
import { UpdateCharacterDto } from './dto/update-character.dto'
import { EntityRepository } from '@mikro-orm/knex'
import { BadRequestException, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { QueryOrder, wrap } from '@mikro-orm/core'
import { InjectRepository } from '@mikro-orm/nestjs'
import { FindCharacterDto } from '../blizzard/dto/find-character.dto'
import { ProfileService } from '../blizzard/services/profile/profile.service'
import { GuildCharacter } from './character.entity'
import { RaiderIOCharacterFields } from '../raiderIO/dto/char-fields.dto'

@Injectable()
export class CharacterService {
  private readonly minCharacterLevel: number = this.config.get<number>('MINIMUM_CHARACTER_LEVEL')

  constructor(
    @InjectRepository(GuildCharacter)
    private readonly characterRepository: EntityRepository<GuildCharacter>,
    private readonly profileService: ProfileService,
    private readonly raiderIOService: RaiderIOService,
    private readonly config: ConfigService,
  ) {}

  /**
   * Creates a new guild member and populates them with basic information.
   *
   * @param findCharacterDto
   * @param rank
   */
  public async create(
    { name, realm, region }: FindCharacterDto,
    rank: number,
  ): Promise<GuildCharacter> {
    const guildCharacter = new GuildCharacter(name, realm, region)

    guildCharacter.guild_rank = rank

    await this.populateGuildCharacter(guildCharacter)

    if (guildCharacter.level < this.minCharacterLevel) {
      throw new BadRequestException(`Below min level: ${this.minCharacterLevel}`)
    }

    await this.characterRepository.persist(guildCharacter)

    return guildCharacter
  }

  public async populateGuildCharacter(guildCharacter: GuildCharacter): Promise<GuildCharacter> {
    const [summary, media, specs, equipment, raids, raiderIO] = await Promise.allSettled([
      this.profileService.getCharacterProfileSummary(guildCharacter.getFindCharacterDTO()),
      this.profileService.getCharacterMediaSummary(guildCharacter.getFindCharacterDTO()),
      this.profileService.getCharacterSpecializationsSummary(guildCharacter.getFindCharacterDTO()),
      this.profileService.getCharacterEquipmentSummary(guildCharacter.getFindCharacterDTO()),
      this.profileService.getCharacterRaids(guildCharacter.getFindCharacterDTO()),
      this.raiderIOService.getCharacterRaiderIO(guildCharacter.getFindCharacterDTO(), [
        RaiderIOCharacterFields.GEAR,
        RaiderIOCharacterFields.RAID_PROGRESSION,
        RaiderIOCharacterFields.MYTHIC_PLUS_BEST_RUNS,
        RaiderIOCharacterFields.MYTHIC_PLUS_SCORES_BY_CURRENT_AND_PREVIOUS_SEASON,
      ]),
    ])

    if (summary.status === 'fulfilled') {
      guildCharacter.setCharacterProfileSummary(summary.value.data)
    }

    if (media.status === 'fulfilled') {
      guildCharacter.setCharacterMediaSummary(media.value.data)
    }

    if (specs.status === 'fulfilled') {
      guildCharacter.setCharacterSpecializationsSummary(specs.value.data)
    }

    if (equipment.status === 'fulfilled') {
      guildCharacter.setCharacterEquipmentSummary(equipment.value.data)
    }

    if (raids.status === 'fulfilled') {
      guildCharacter.setCharacterRaidEncounterSummary(raids.value.data)
    }

    if (raiderIO.status === 'fulfilled') {
      guildCharacter.setCharacterRaiderIO(raiderIO.value)
    }

    return guildCharacter
  }

  /**
   * Gets the guild roster by the wanted ranks.
   * Rank first and name alphabetized.
   * @param ranks
   */
  findRoster(ranks: number[] = [0, 2, 3, 5, 6]): Promise<GuildCharacter[]> {
    return this.characterRepository.find(
      { guild_rank: { $in: ranks } },
      { orderBy: { guild_rank: QueryOrder.ASC, name: QueryOrder.ASC } },
    )
  }

  findRaidTeam(): Promise<GuildCharacter[]> {
    return this.characterRepository.find(
      { raid_team: true },
      { orderBy: { guild_rank: QueryOrder.ASC, name: QueryOrder.ASC } },
    )
  }

  /**
   *
   */
  findAll(): Promise<GuildCharacter[]> {
    return this.characterRepository.findAll()
  }

  /**
   * Finds a character from their id.
   * @param id
   */
  findById(id: number): Promise<GuildCharacter> {
    return this.characterRepository.findOne({ id })
  }

  /**
   * Finds a character given the id, name, realm, and/or region.
   * This is a case-sensitive lookup!
   * @param characterLookupDto
   */
  findOne({ name, region, realm }: FindCharacterDto): Promise<GuildCharacter> {
    return this.characterRepository
      .createQueryBuilder()
      .where('LOWER(name) = LOWER(?)', [name])
      .andWhere('realm = ?', [realm])
      .andWhere('region = ?', [region])
      .getSingleResult()
  }

  async update(id: number, updateCharacterDto: UpdateCharacterDto): Promise<GuildCharacter> {
    const character = await this.characterRepository.findOneOrFail(id)

    wrap(character).assign(updateCharacterDto)

    await this.characterRepository.flush()

    return character
  }

  async delete(findCharacterDto: FindCharacterDto): Promise<GuildCharacter> {
    const character = await this.characterRepository.findOneOrFail(findCharacterDto)

    await this.characterRepository.remove(character)
    await this.characterRepository.flush()

    return character
  }
}
