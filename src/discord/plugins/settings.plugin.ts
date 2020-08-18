import { Injectable } from '@nestjs/common';
import { PluginConfig } from '../discord-config.class';
import { Context } from '../discord.context';
import { Command, CommandGroup, Plugin } from '../discord.decorators';
import { DiscordService } from '../discord.service';

@Injectable()
@Plugin('Settings')
export class SettingsPlugin {
  private readonly config: PluginConfig<null, { embedColor: number }>;

  constructor(discordService: DiscordService) {
    this.config = discordService.getConfig(SettingsPlugin.name);
    this.config.registerGlobal({ embedColor: 0xc328ff });
  }

  @CommandGroup({ name: 'set', description: 'Configure bot settings.' })
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  set(): void {}

  @Command({
    name: 'embedcolor',
    group: 'set',
    description: 'Sets the default embed color.',
  })
  async setEmbedColor(ctx: Context, color: string): Promise<void> {
    await this.config.setGlobal({ embedColor: color });
    await ctx.tick();
  }

  async getEmbedColor(): Promise<number> {
    return (await this.config.getGlobalConfig()).embedColor;
  }

  @Command({
    name: 'watching',
    group: 'set',
    description: 'Sets the watching status.',
  })
  async setWatching(ctx: Context, status: string): Promise<void> {
    await ctx.client.user.setActivity({ name: status, type: 'WATCHING' });
  }

  @Command({
    name: 'playing',
    group: 'set',
    description: 'Sets the playing status.',
  })
  async setPlaying(ctx: Context, status: string): Promise<void> {
    await ctx.client.user.setActivity({ name: status, type: 'PLAYING' });
  }
}
