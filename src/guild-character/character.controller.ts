import { InjectQueue } from '@nestjs/bull'
import { Controller, Get, Param, CacheTTL } from '@nestjs/common'
import { Queue } from 'bull'
import { FindCharacterDto } from '../blizzard/dto/find-character.dto'
import { GuildCharacter } from './character.entity'
import { CharacterService } from './character.service'

@Controller('characters')
export class CharacterController {
  constructor(
    private readonly characterService: CharacterService,
    @InjectQueue('character')
    private readonly queue: Queue,
  ) {}

  @Get('roster')
  @CacheTTL(600)
  getRoster(): Promise<GuildCharacter[]> {
    return this.characterService.findRoster()
  }

  @Get('/:region/:realm/:name')
  findOne(@Param() findCharacterDto: FindCharacterDto): Promise<GuildCharacter> {
    return this.characterService.findOne(findCharacterDto)
  }

  @Get('updatemembers')
  updateMembers(): void {
    this.queue.add('update-guild-members', { attempts: 1 })
  }
  @Get('addremovemembers')
  addRemoveMembers(): void {
    this.queue.add('add-remove-members', { attempts: 1 })
  }
}
