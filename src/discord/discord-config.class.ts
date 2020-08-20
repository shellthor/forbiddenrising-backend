import { Injectable } from '@nestjs/common'
import { Guild } from 'discord.js'
import { EntityRepository } from '@mikro-orm/core'
import { DiscordConfig } from './discord-plugin.entity'

@Injectable()
export class PluginConfig<K, T = null> {
  private config: { guilds?: { [id: string]: K }; global?: T } = {}
  private templates: { guild?: K; global?: T } = {}
  public initialized = false

  constructor(
    private readonly identifier: string,
    private readonly pluginRepository: EntityRepository<DiscordConfig>,
  ) {}

  public registerGlobal(config: T): void {
    this.templates.global = config
  }

  public registerGuild(config: K): void {
    this.templates.guild = config
  }

  public async getGuildConfig(guild: Guild): Promise<K> {
    if (!this.initialized) {
      await this.fetch()
    }

    if (!this.config.guilds || !this.config.guilds.hasOwnProperty(guild.id)) {
      return this.templates.guild
    }

    return this.config.guilds[guild.id]
  }

  public async getGlobalConfig(): Promise<T> {
    if (!this.initialized) {
      await this.fetch()
    }

    return !this.config.global ? this.templates.global : this.config.global
  }

  public async setGuild(guild: Guild, data: Partial<K>): Promise<K> {
    if (!this.initialized) {
      await this.fetch()
    }

    this.config.guilds[guild.id] = Object.assign({}, this.config.guilds[guild.id], data)

    await this.save()

    return this.config.guilds[guild.id]
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public async setGlobal(data: any): Promise<T> {
    if (!this.initialized) {
      await this.fetch()
    }

    // NOTE: Not confident of this not deleting info, don't clean up code yet.
    // console.log(this.config);

    this.config.global = Object.assign({}, this.config.global, data)

    // console.log(this.config);

    await this.save()

    return this.config.global
  }

  /**
   * Upserts data for the plugin config with the given identifier.
   * @param data
   */
  private async save() {
    let options = await this.pluginRepository.findOne({
      name: this.identifier,
    })

    if (!options) {
      console.log(this.identifier)
      options = this.pluginRepository.create({
        name: this.identifier,
        options: this.config,
      })

      this.pluginRepository.persist(options)
    } else {
      options.assign({ options: this.config })
    }

    await this.pluginRepository.flush()

    return options
  }

  private async fetch() {
    const config: { guilds?: { [id: string]: K }; global?: T } = { guilds: {} }

    const plugin = await this.pluginRepository.findOne({
      name: this.identifier,
    })

    if (!plugin) {
      config.global = this.templates.global
      this.config = config
      return config
    }
    const { guilds, global }: { guilds?: { [id: string]: K }; global?: T } = plugin.options

    for (const id in guilds) {
      config.guilds[id] = Object.assign({}, this.templates.guild, guilds[id])
    }

    config.global = Object.assign({}, this.templates.global, global)

    this.config = config
    // console.log(this.config);
    this.initialized = true
  }
}
