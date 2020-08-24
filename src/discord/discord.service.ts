import { EntityRepository } from '@mikro-orm/core'
import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Client } from 'discord.js'
import { InjectRepository } from '@mikro-orm/nestjs'
import { PluginConfig } from './discord-config.class'
import { DiscordConfig } from './discord-plugin.entity'
import { CommandMeta, GroupMeta, InjectClient, LoopMeta, PluginOptions } from './discord.decorators'
import { CommandMatch, GroupMatch } from './interfaces/command-match.interface'
import { DiscordPlugin } from './plugins/plugin.class'
import { DISCORD_PREFIX } from '../app.constants'

export interface PluginMap {
  name: string
  options: PluginOptions
  instance: DiscordPlugin
  commands: PluginCommandMap
  groups: PluginGroupMap
  loops: PluginLoopMap
}

export interface GroupMapMeta extends GroupMeta {
  commands: PluginCommandMap
}

export type PluginCommandMap = Map<string, CommandMeta>
export type PluginGroupMap = Map<string, GroupMapMeta>
export type PluginLoopMap = Map<string, LoopMeta>

@Injectable()
export class DiscordService {
  public readonly prefix: string
  public readonly plugins = new Map<string, PluginMap>()

  constructor(
    @InjectRepository(DiscordConfig)
    private readonly pluginRepository: EntityRepository<DiscordConfig>,
    private readonly config: ConfigService,
    @InjectClient() public readonly client: Client,
  ) {
    this.prefix = config.get(DISCORD_PREFIX)
  }

  /**
   * Builds a new PluginConfig class for managing settings for a plugin.
   * @param identifier
   */
  public getConfig<T, K = null>(identifier: string) {
    return new PluginConfig<T, K>(identifier, this.pluginRepository)
  }

  /**
   * Adds a plugin to the master list of plugins.
   */
  public addPlugin(
    plugin: DiscordPlugin,
    options: PluginOptions,
    groups: GroupMeta[] = [],
    commands: CommandMeta[] = [],
    loops: LoopMeta[] = [],
  ) {
    const commandCollection: PluginCommandMap = new Map()
    const groupCollection: PluginGroupMap = new Map()
    const loopCollection: PluginLoopMap = new Map()

    loops.map(loop => loopCollection.set(loop.name, { ...loop }))

    groups.map(group => {
      groupCollection.set(group.name, { ...group, commands: new Map() })
    })

    commands.map(command => {
      if (command.group) {
        const group = groupCollection.get(command.group)

        if (!group) throw new InternalServerErrorException(`Unknown plugin group ${command.group}`)

        group.commands.set(command.name, command)
      } else {
        commandCollection.set(command.name, command)
      }
    })

    this.plugins.set(options.name, {
      name: options.name,
      options,
      instance: plugin,
      groups: groupCollection,
      commands: commandCollection,
      loops: loopCollection,
    })
  }

  /**
   * Lookup method for traversing the Discord plugin map for a command
   * or group that matches the argument structure.
   */
  public getCommandOrGroup(args: string[]): CommandMatch | GroupMatch {
    for (const [name, plugin] of this.plugins) {
      const command = plugin.commands.get(args[0])

      if (command) {
        const method = plugin.instance[command.method].bind(plugin.instance)
        return { name, plugin, method, command, depth: 1 }
      }

      const group = plugin.groups.get(args[0])

      if (group) {
        const groupMethod = plugin.instance[group.method].bind(plugin.instance)

        // Send the help command for a command group.
        if (args.length === 1) return { name, plugin, method: groupMethod, group, depth: 1 }

        // Otherwise, try to find the command in the group.
        const command = group.commands.get(args[1])
        const commandMethod = plugin.instance[command.method].bind(plugin.instance)

        if (command) return { name, plugin, command, method: commandMethod, depth: 2 }
      }
    }
  }

  public getGuildMember(user_id: string) {
    return this.client.guilds.cache.get(this.config.get('DISCORD_GUILD_ID')).members.fetch(user_id)
  }

  public getGuildChannel(id: string) {
    return this.client.channels.cache.get(id)
  }
}
