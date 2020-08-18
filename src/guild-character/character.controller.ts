import {
  Controller,
  Get,
  Param,
  UseInterceptors,
  CacheInterceptor,
  CacheTTL,
} from '@nestjs/common';
import { FindCharacterDto } from '../blizzard/dto/find-character.dto';
import { GuildCharacter } from './character.entity';
import { CharacterService } from './character.service';

@Controller('characters')
@UseInterceptors(CacheInterceptor)
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Get('roster')
  @CacheTTL(600)
  getRoster(): Promise<GuildCharacter[]> {
    return this.characterService.findRoster();
  }

  @Get('/:region/:realm/:name')
  findOne(@Param() findCharacterDto: FindCharacterDto): Promise<GuildCharacter> {
    return this.characterService.findOne(findCharacterDto);
  }
}
