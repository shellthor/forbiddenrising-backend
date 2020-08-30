import { UpdateCharacterDto } from './dto/update-character.dto'
import { InjectQueue } from '@nestjs/bull'
import { Controller, Get, Param, CacheTTL, Patch, Body } from '@nestjs/common'
import { Queue } from 'bull'
import { FindCharacterDto } from '../blizzard/dto/find-character.dto'
import { Auth } from '../auth/decorators/auth.decorator'
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

  @Get('roster/raidteam')
  @CacheTTL(600)
  getRaidTeam(): Promise<GuildCharacter[]> {
    return this.characterService.findRaidTeam()
  }

  @Auth('character', 'update:any')
  @Patch(':name')
  async update(
    @Param() findCharacterDto: FindCharacterDto,
    @Body() updateCharacterDto: UpdateCharacterDto,
  ): Promise<GuildCharacter> {
    const character = await this.characterService.findOne(findCharacterDto)
    return this.characterService.update(character.id, updateCharacterDto)
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
