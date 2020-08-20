import { Injectable, Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Guild, GuildChannel, GuildMember, Message, Role } from 'discord.js'
import { DISCORD_PREFIX } from '../app.constants'
import { CommandParamtypes } from './decorators/mention.decorator'
import { Context } from './discord.context'
import { CommandMeta } from './discord.decorators'
import { DiscordService } from './discord.service'
import { ChannelNotFoundException } from './exceptions/channel-not-found.exception'
import { BadCommandArgsException } from './exceptions/invalid-command.exception'
import { MemberNotFoundException } from './exceptions/member-not-found.exception'
import { RoleNotFoundException } from './exceptions/role-not-found.exception'
import { CommandMatch, GroupMatch } from './interfaces/command-match.interface'
import { PluginCommandMethod } from './interfaces/plugin-command.type'
import { HelpPlugin } from './plugins/help.plugin'
import { SettingsPlugin } from './plugins/settings.plugin'

@Injectable()
export class DiscordHandler {
  private readonly prefix: string
  private readonly logger = new Logger(DiscordHandler.name)

  constructor(
    private readonly discord: DiscordService,
    private readonly help: HelpPlugin,
    private readonly settings: SettingsPlugin,
    config: ConfigService,
  ) {
    this.prefix = config.get(DISCORD_PREFIX)
  }

  /**
   * Parses the message and determines which command or command group to
   * execute. This method throws various errors if the arguments are invalid.
   *
   * @param message message received from the onMessage event
   */
  public async handle(message: Message): Promise<void> {
    if (this.isInvalidMessage(message)) return

    const args = this.getMessageTokens(message)
    const match = this.discord.getCommandOrGroup(args)

    if (!match) return

    // Remove command and/or group names.
    args.splice(0, match.depth)

    const ctx = new Context(
      this.discord.client,
      this.prefix,
      message,
      this.discord.plugins,
      this.settings,
    )

    try {
      // Currently unsupported to directly call a group.
      if ('group' in match) {
        return this.help.sendGroupHelp(ctx, match.group)
      }

      match.method(ctx, ...this.validateArgs(args, match.command, match.method, message.guild))
    } catch (error) {
      this.errorHandler(error, ctx, match, message)
    }
  }

  /**
   * Guard for checking if the message is a valid candidate to
   * match to a command or a command group.
   */
  private isInvalidMessage(message: Message) {
    return (message.partial && message.author.bot) || !message.content.startsWith(this.prefix)
  }

  /**
   * Finds the argument tokens from a Discord message's content.
   * The method will assume anything in quotes is a singular argument.
   *
   * @see https://stackoverflow.com/a/46946490/8354855
   *
   * @param message message received from the onMessage event
   */
  private getMessageTokens(message: Message): string[] {
    const args = message.content.slice(this.prefix.length).trim()

    return args.length
      ? args.match(/\\?.|^$/g).reduce(
          (p: any, c) => {
            if (c === '"') {
              p.quote ^= 1
            } else if (!p.quote && c === ' ') {
              p.a.push('')
            } else {
              p.a[p.a.length - 1] += c.replace(/\\(.)/, '$1')
            }

            return p
          },
          { a: [''] },
        ).a
      : []
  }

  /**
   * Validates if the arguments provided to a command do not align with the
   * decorators used. This method also promotes mention object arguments.
   *
   * @param args arguments parsed from the message
   * @param command command match
   * @param method function instance for the command
   * @param guild Discord guild from the message
   */
  private validateArgs(
    args: string[],
    command: CommandMeta,
    method: PluginCommandMethod,
    guild: Guild,
  ) {
    const ret = []

    // Ideally, this is removed if I eventually want to add non-string types.
    if (!command.mentions.length) return args

    for (let i = 0; i < args.length; i++) {
      // Offset due to metadata considering the injected context parameter.
      const mention = command.mentions.find(m => m.index === i + 1)

      if (!mention) {
        ret.push(args[i])
        continue
      }

      if (mention.paramtype === CommandParamtypes.MEMBER) {
        ret.push(this.getMemberMention(args[i], guild))
      } else if (mention.paramtype === CommandParamtypes.CHANNEL) {
        ret.push(this.getChannelMention(args[i], guild))
      } else if (mention.paramtype === CommandParamtypes.ROLE) {
        ret.push(this.getRoleMention(args[i], guild))
      } else {
        throw new BadCommandArgsException()
      }
    }

    if (method.length - 1 > ret.length) throw new BadCommandArgsException()

    return ret
  }

  /**
   * Deteremines if a string contains the structure of a user
   * mention, e.g. <@12345>, and if so attempts to retrieve them.
   *
   * @param argument argument string
   * @param guild Discord guild from the message
   */
  public getMemberMention(argument: string, guild: Guild): GuildMember {
    const matches = argument.match(/<@!?(\d{17,19})>/)

    if (!matches) throw new BadCommandArgsException()

    const member = guild.members.cache.get(matches[1])

    if (!member) throw new MemberNotFoundException()

    return member
  }

  /**
   * Deteremines if a string contains the structure of a channel
   * mention, e.g. <#12345>, and if so attempts to retrieve it.
   *
   * @param argument argument string
   * @param guild Discord guild from the message
   */
  public getChannelMention(argument: string, guild: Guild): GuildChannel {
    const matches = argument.match(/<#(\d{17,19})>/)

    if (!matches) throw new BadCommandArgsException()

    const channel = guild.channels.cache.get(matches[1])

    if (!channel) throw new ChannelNotFoundException()

    return channel
  }

  /**
   * Deteremines if a string contains the structure of a role
   * mention, e.g. <@#12345>, and if so attempts to retrieve it.
   *
   * @param argument argument string
   * @param guild Discord guild from the message
   */
  public getRoleMention(argument: string, guild: Guild): Role {
    const matches = argument.match(/<@&(\d{17,19})>/)

    if (!matches) throw new BadCommandArgsException()

    const role = guild.roles.cache.get(matches[1])

    if (!role) throw new RoleNotFoundException()

    return role
  }

  /**
   * Filters specific errors from the method calling process to
   * inform the user of invalid params or to show the help messages.
   *
   * @param error error thrown
   * @param ctx Discord context
   * @param match matched command or group
   * @param message Discord message
   */
  private errorHandler(
    error: any,
    ctx: Context,
    match: CommandMatch | GroupMatch,
    message: Message,
  ): Promise<Message> | Promise<void> {
    if (error instanceof BadCommandArgsException) {
      return this.help.sendCommandHelp(ctx, (match as CommandMatch).command)
    }

    if (error instanceof MemberNotFoundException) {
      return message.reply('That user was not found')
    }

    if (error instanceof ChannelNotFoundException) {
      return message.reply('Channel not found')
    }

    message.reply('An unexpected error occured')

    this.logger.error(error.message, error.stack)
  }
}
