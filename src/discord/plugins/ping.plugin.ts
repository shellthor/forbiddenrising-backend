import { Injectable } from '@nestjs/common';
import { Context } from '../discord.context';
import { Command, Plugin } from '../discord.decorators';
import { DiscordPlugin } from './plugin.class';

/**
 * This is an example Discord plugin for illustrating plugin structure.
 */

@Injectable()
@Plugin('Ping')
export class PingPlugin extends DiscordPlugin {
  @Command({ name: 'ping', description: 'Replies with pong!' })
  async pong(ctx: Context): Promise<void> {
    await ctx.send('Pong!');
  }
}
