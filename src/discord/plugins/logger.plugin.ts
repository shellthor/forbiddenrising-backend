import { Injectable, Logger } from '@nestjs/common'
import { Client, Message, MessageEmbed, TextChannel } from 'discord.js'
import { PluginConfig } from '../discord-config.class'
import { Context } from '../discord.context'
import { Command, CommandGroup, Event, Plugin } from '../discord.decorators'
import { DiscordService } from '../discord.service'
import { DiscordEvent } from '../interfaces/events.enum'
import { DiscordPlugin } from './plugin.class'
import { SettingsPlugin } from './settings.plugin'

export interface LoggerGuildConfig {
  channel: string
  ioChannel: string
}

@Injectable()
@Plugin('Logger')
export class LoggerPlugin extends DiscordPlugin {
  private readonly logger = new Logger(LoggerPlugin.name)
  private readonly config: PluginConfig<LoggerGuildConfig>

  constructor(discordService: DiscordService, private readonly settings: SettingsPlugin) {
    super()
    this.config = discordService.getConfig(LoggerPlugin.name)
    this.config.registerGuild({ channel: '', ioChannel: '' })
  }

  @CommandGroup({ name: 'logger', description: 'Moderation logger commands' })
  log() {} // eslint-disable-line @typescript-eslint/no-empty-function

  @Command({
    name: 'channel',
    group: 'logger',
    description: 'Sets the channel to send moderation messages to.',
  })
  async setChannel(ctx: Context, cid: string) {
    const channel = ctx.message.guild.channels.cache.get(cid)

    if (!channel) {
      return ctx.send('Cannot find the given channel id.')
    }

    if (!channel.permissionsFor(ctx.message.guild.me).has(['SEND_MESSAGES', 'EMBED_LINKS'])) {
      return ctx.send('I lack the permissions to either send messages or embeds to that channel.')
    }

    await this.config.setGuild(ctx.message.guild, { channel: cid })

    await ctx.tick()
  }

  @Command({
    name: 'iochannel',
    group: 'logger',
    description: 'Sets the channel to send deleted raiderIO runs to.',
  })
  async setIOChannel(ctx: Context, cid: string) {
    const channel = ctx.message.guild.channels.cache.get(cid)

    if (!channel) {
      return ctx.send('Cannot find the given channel id.')
    }

    if (!channel.permissionsFor(ctx.message.guild.me).has(['SEND_MESSAGES', 'EMBED_LINKS'])) {
      return ctx.send('I lack the permissions to either send messages or embeds to that channel.')
    }

    await this.config.setGuild(ctx.message.guild, { ioChannel: cid })

    await ctx.tick()
  }

  @Event(DiscordEvent.MessageDelete)
  async onMessageDelete(client: Client, message: Message) {
    if (message.partial) return

    const { channel: cid, ioChannel: iocid } = await this.config.getGuildConfig(message.guild)

    if (!cid) return

    const channel = client.channels.cache.get(cid)

    if (!channel || channel.type !== 'text') {
      return this.logger.error('Channel was not found or is not a text channel.')
    }

    const embed = new MessageEmbed({
      author: {
        name: message.author.tag,
        icon_url: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png`,
      },
      description: `Message sent by <@${message.author.id}> deleted in <#${message.channel.id}>`,
      timestamp: new Date(),
      color: await this.settings.getEmbedColor(),
    })

    if (message.content) {
      embed.addField('Content', message.content, false)
    }

    if (message.embeds.length) {
      embed.addField('Embeds', 'Deleted embeds are attached below.')
    }

    await (channel as TextChannel).send(embed)

    for (const embed of message.embeds) {
      // Check if a deleted message was a RaiderIO run.
      if (message.embeds.length && message.embeds[0].title.includes('Guild Run!')) {
        const channel = client.channels.cache.get(iocid)

        if (!channel) return

        await (channel as TextChannel).send({
          content: 'Whoops! Someone must have dropped this.',
          embed: message.embeds[0],
        })
      }
      await (channel as TextChannel).send(embed)
    }
  }
}
