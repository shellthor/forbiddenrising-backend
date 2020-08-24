import { Controller, Get, Param } from '@nestjs/common'
import { Auth } from '../auth/decorators/auth.decorator'
import { DiscordService } from './discord.service'

@Controller('discord')
export class DiscordController {
  constructor(private readonly discord: DiscordService) {}

  @Auth('discord', 'read:any')
  @Get('member/:id')
  async getMember(@Param('id') id: string) {
    return this.discord.getGuildMember(id)
  }
}
