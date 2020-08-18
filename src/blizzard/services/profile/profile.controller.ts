import { Controller, Get, Param } from '@nestjs/common';
import { CharacterProfileSummary, GuildRoster } from 'src/blizzard/interfaces/profile';
import { Auth } from '../../../auth/decorators/auth.decorator';
import { FindCharacterDto } from '../../dto/find-character.dto';
import { FindGuildDto } from '../../dto/find-guild.dto';
import { BattleNetService } from '../battle-net/battle-net.service';
import { ProfileService } from './profile.service';

@Controller('blizzard')
export class ProfileController {
  constructor(
    private readonly battleNetService: BattleNetService,
    private readonly profileService: ProfileService,
  ) {}

  // @Get('token')
  // checkToken(@Usr() user: User): Promise<TokenValidation> {
  //   return this.battleNetService.checkToken(user);
  // }

  // @Get('user/characters')
  // getAccountProfileSummary(user: User): Promise<Profile.AccountProfileSummary> {
  //   return this.profileService.getAccountProfileSummary(user);
  // }

  @Auth()
  @Get('character/:region/:realm/:name')
  async getCharacter(
    @Param() findCharacterDto: FindCharacterDto,
  ): Promise<CharacterProfileSummary> {
    return (await this.profileService.getCharacterProfileSummary(findCharacterDto)).data;
  }

  @Auth()
  @Get('guild/:region/:realm/:name')
  async getGuild(@Param() findGuildDto: FindGuildDto): Promise<GuildRoster> {
    return (await this.profileService.getGuildRoster(findGuildDto)).data;
  }
}
