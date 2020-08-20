import { Injectable, Logger } from '@nestjs/common'
import { Context } from '../discord.context'
import { Command, Plugin } from '../discord.decorators'
import { SettingsPlugin } from './settings.plugin'

@Injectable()
@Plugin('Debugger')
export class DebuggerPlugin {
  private readonly logger: Logger = new Logger(DebuggerPlugin.name)
  constructor(private readonly settings: SettingsPlugin) {}

  @Command({
    name: 'debugger',
    description: 'runs the debugger commands',
  })
  async debugger(ctx: Context): Promise<void> {
    ctx.client.emojis.cache.toJSON()
    this.logger.debug(ctx.client.emojis.cache.toJSON())
  }
}
