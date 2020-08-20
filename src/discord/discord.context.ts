import {
  Client,
  Guild,
  Message,
  MessageAdditions,
  MessageEmbed,
  MessageOptions,
  SplitOptions,
} from 'discord.js'
import { PluginMap } from './discord.service'
import { SettingsPlugin } from './plugins/settings.plugin'

export class Context {
  private readonly emojis = ['⬅️', '➡️']
  public readonly guild: Guild

  constructor(
    public readonly client: Client,
    public readonly prefix: string,
    public readonly message: Message,
    public readonly plugins: Map<string, PluginMap>,
    public readonly settings: SettingsPlugin,
  ) {
    this.guild = message.guild
  }

  /**
   * Instructs the bot to add a checkmark emoji to the initiating command.
   */
  public async tick(): Promise<void> {
    await this.message.react('✅')
  }

  public async send(
    content: any,
    options?:
      | MessageOptions
      | (MessageOptions & { split?: false })
      | MessageAdditions
      | (MessageOptions & { split: true | SplitOptions }),
  ): Promise<Message> {
    return this.message.channel.send(content, options)
  }

  /**
   * Formats input text in a Discord codeblock with the specified type.
   */
  public formatCode(data: string | Record<string, any>, type: string): string {
    return `\`\`\`${type}\n${JSON.stringify(data, null, 2)}\`\`\``
  }

  /**
   * Sends multiple embeds with emoji-based pagination and configurable timeout.
   */
  public async paginate(embeds: MessageEmbed[], timeout = 120000): Promise<Message> {
    let page = 0

    const currentPage = await this.send(embeds[page])

    for (const emoji of this.emojis) await currentPage.react(emoji)

    const collector = currentPage.createReactionCollector(
      (reaction, user) => this.emojis.includes(reaction.emoji.name) && !user.bot,
      { time: timeout },
    )

    collector.on('collect', async reaction => {
      reaction.users.remove(this.message.author)

      switch (reaction.emoji.name) {
        case this.emojis[0]:
          page = page > 0 ? --page : embeds.length - 1
          break

        case this.emojis[1]:
          page = page + 1 < embeds.length ? ++page : 0
          break

        default:
          break
      }

      await currentPage.edit(embeds[page])
    })

    collector.on('end', () => currentPage.reactions.removeAll())

    return currentPage
  }
}
