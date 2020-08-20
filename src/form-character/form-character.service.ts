import { EntityRepository, wrap } from '@mikro-orm/core'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@mikro-orm/nestjs'
import { FindCharacterDto } from '../blizzard/dto/find-character.dto'
import { ProfileService } from '../blizzard/services/profile/profile.service'
import { RaiderIOCharacterFields } from '../raiderIO/dto/char-fields.dto'
import { RaiderIOService } from '../raiderIO/raiderIO.service'
import { UpdateFormCharacterDto } from './dto/update-form-character.dto'
import { FormCharacter } from './form-character.entity'

@Injectable()
export class FormCharacterService {
  constructor(
    @InjectRepository(FormCharacter)
    private readonly formCharacterRepository: EntityRepository<FormCharacter>,
    private readonly profileService: ProfileService,
    private readonly raiderIOService: RaiderIOService,
  ) {}

  public async upsert(findCharacterDto: FindCharacterDto): Promise<FormCharacter> {
    const formCharacter = await this.formCharacterRepository.findOne({
      ...findCharacterDto,
    })

    if (!formCharacter) return this.create(findCharacterDto)

    await this.populateFormCharacter(formCharacter)

    return formCharacter
  }

  public async create(findCharacterDto: FindCharacterDto, flush = false): Promise<FormCharacter> {
    const formCharacter = new FormCharacter(
      findCharacterDto.name,
      findCharacterDto.realm,
      findCharacterDto.region,
    )

    await this.populateFormCharacter(formCharacter)

    if (flush) {
      try {
        await this.formCharacterRepository.flush()
      } catch (error) {
        console.log(error)
        throw error
      }
    }

    return formCharacter
  }

  public async populateFormCharacter(formCharacter: FormCharacter): Promise<FormCharacter> {
    const findCharacterDto = formCharacter.getFindCharacterDTO()

    const [summary, equipment, specs, media, raids, raiderIO] = await Promise.allSettled([
      this.profileService.getCharacterProfileSummary(findCharacterDto),
      this.profileService.getCharacterEquipmentSummary(findCharacterDto),
      this.profileService.getCharacterSpecializationsSummary(findCharacterDto),
      this.profileService.getCharacterMediaSummary(findCharacterDto),
      this.profileService.getCharacterRaids(findCharacterDto),
      this.raiderIOService.getCharacterRaiderIO(findCharacterDto, [
        RaiderIOCharacterFields.GEAR,
        RaiderIOCharacterFields.RAID_PROGRESSION,
        RaiderIOCharacterFields.MYTHIC_PLUS_BEST_RUNS,
        RaiderIOCharacterFields.MYTHIC_PLUS_SCORES_BY_CURRENT_AND_PREVIOUS_SEASON,
      ]),
    ])

    if (summary.status === 'fulfilled') {
      formCharacter.setCharacterProfileSummary(summary.value.data)
    }

    if (specs.status === 'fulfilled') {
      formCharacter.setCharacterSpecializationsSummary(specs.value.data)
    }

    if (media.status === 'fulfilled') {
      formCharacter.setCharacterMediaSummary(media.value.data)
    }

    if (raids.status === 'fulfilled') {
      formCharacter.setCharacterRaidEncounterSummary(raids.value.data)
    }

    if (equipment.status === 'fulfilled') {
      formCharacter.setCharacterEquipmentSummary(equipment.value.data)
    }

    if (raiderIO.status === 'fulfilled') {
      formCharacter.setCharacterRaiderIO(raiderIO.value)
    }

    return formCharacter
  }

  public findAll(): Promise<FormCharacter[]> {
    return this.formCharacterRepository.findAll()
  }

  public async update(
    id: number,
    updateFormCharacterDto: UpdateFormCharacterDto,
  ): Promise<FormCharacter> {
    const formCharacter = await this.formCharacterRepository.findOneOrFail(id)

    wrap(formCharacter).assign(updateFormCharacterDto)

    await this.formCharacterRepository.flush()

    return formCharacter
  }

  public async delete(id: number): Promise<FormCharacter> {
    const formCharacter = await this.formCharacterRepository.findOneOrFail(id)

    this.formCharacterRepository.remove(formCharacter)
    await this.formCharacterRepository.flush()

    return formCharacter
  }
}
