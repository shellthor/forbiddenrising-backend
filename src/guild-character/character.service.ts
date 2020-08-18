import { EntityRepository } from '@mikro-orm/knex';
import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { QueryOrder } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { FindCharacterDto } from '../blizzard/dto/find-character.dto';
import { ProfileService } from '../blizzard/services/profile/profile.service';
import { GuildCharacter } from './character.entity';

@Injectable()
export class CharacterService {
  private readonly minCharacterLevel: number = this.config.get<number>('MINIMUM_CHARACTER_LEVEL');

  constructor(
    @InjectRepository(GuildCharacter)
    private readonly characterRepository: EntityRepository<GuildCharacter>,
    private readonly profileService: ProfileService,
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
    const guildCharacter = new GuildCharacter(name, realm, region);

    guildCharacter.guild_rank = rank;

    await this.populateGuildCharacter(guildCharacter);

    if (guildCharacter.level < this.minCharacterLevel) {
      throw new BadRequestException(`Below min level: ${this.minCharacterLevel}`);
    }

    await this.characterRepository.persist(guildCharacter, true);

    return guildCharacter;
  }

  public async populateGuildCharacter(guildCharacter: GuildCharacter): Promise<GuildCharacter> {
    const [summary, media] = await Promise.allSettled([
      this.profileService.getCharacterProfileSummary(guildCharacter.getFindCharacterDTO()),
      this.profileService.getCharacterMediaSummary(guildCharacter.getFindCharacterDTO()),
    ]);

    if (summary.status === 'fulfilled') {
      guildCharacter.setCharacterProfileSummary(summary.value.data);
    }

    if (media.status === 'fulfilled') {
      guildCharacter.setCharacterMediaSummary(media.value.data);
    }

    return guildCharacter;
  }

  /**
   * Gets the guild roster by the wanted ranks.
   * Rank first and name alphabetized.
   * @param ranks
   */
  findRoster(ranks: number[] = [0, 1, 3, 4, 5]): Promise<GuildCharacter[]> {
    return this.characterRepository.find(
      { guild_rank: { $in: ranks } },
      {
        orderBy: { guild_rank: QueryOrder.ASC, name: QueryOrder.ASC },
      },
    );
  }

  /**
   *
   */
  findAll(): Promise<GuildCharacter[]> {
    return this.characterRepository.findAll();
  }

  /**
   * Finds a character from their id.
   * @param id
   */
  findById(id: number): Promise<GuildCharacter> {
    return this.characterRepository.findOne({ id });
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
      .getSingleResult();
  }

  async delete(findCharacterDto: FindCharacterDto): Promise<void> {
    const character = await this.characterRepository.findOneOrFail(findCharacterDto);

    return this.characterRepository.remove(character);
  }
}
