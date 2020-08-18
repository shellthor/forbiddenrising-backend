import { Injectable } from '@nestjs/common';
import { MessageEmbed } from 'discord.js';
import { Context } from '../discord.context';
import { Command, CommandMeta, Plugin } from '../discord.decorators';
import { GroupMapMeta, PluginCommandMap, PluginGroupMap } from '../discord.service';
import { SettingsPlugin } from './settings.plugin';

export interface HelpText {
  name: string;
  value: string;
}

@Injectable()
@Plugin('Help')
export class HelpPlugin {
  constructor(private readonly settings: SettingsPlugin) {}

  @Command({
    name: 'help',
    description: 'Shows the description of a command or group',
  })
  async help(ctx: Context): Promise<void> {
    const embed = new MessageEmbed();
    embed.setTitle('TFR Bot Help Menu');
    embed.setColor(0xc328ff);

    for (const [name, plugin] of ctx.plugins) {
      const helpText: HelpText[] = this.sortHelp([
        ...this.buildHelp(plugin.groups),
        ...this.buildHelp(plugin.commands),
      ]);

      if (!helpText.length) continue;

      embed.addField(
        name,
        helpText.map(text => `**${ctx.prefix}${text.name}**: ${text.value}`).join('\n'),
      );
    }

    await ctx.message.channel.send(embed);
  }

  private buildHelp(commandsOrGroups: PluginCommandMap | PluginGroupMap) {
    const text = [];

    for (const [name, instance] of commandsOrGroups) {
      text.push({ name, value: instance.description || 'No description' });
    }

    return text;
  }

  public async sendGroupHelp(ctx: Context, group: GroupMapMeta): Promise<void> {
    const helpText = this.sortHelp(this.buildHelp(group.commands));

    const embed = new MessageEmbed();
    embed.setTitle(`Subcommand Help Menu`);
    embed.setDescription(`Commands for the \`${ctx.prefix}${group.name}\` group.`);
    embed.setColor(0xc328ff);

    embed.addField(group.name, helpText.map(text => `**${text.name}**: ${text.value}`).join('\n'));

    await ctx.message.channel.send(embed);
  }

  public async sendCommandHelp(ctx: Context, command: CommandMeta): Promise<void> {
    const embed = new MessageEmbed({
      title: 'The Forbidden Rising Help Menu',
      description: `\`${ctx.prefix}${command.name} ${command.syntax || '...arguments'}\``,
      color: await this.settings.getEmbedColor(),
      fields: [{ name: command.name, value: command.description }],
    });

    await ctx.send(embed);
  }

  private sortHelp(text: HelpText[]) {
    return text.sort((a, b) => a.name.localeCompare(b.name));
  }
}
