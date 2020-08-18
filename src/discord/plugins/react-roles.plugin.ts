import { Injectable } from '@nestjs/common';
import { Client, MessageReaction, User } from 'discord.js';
import { Event, Plugin } from '../discord.decorators';
import { DiscordEvent } from '../interfaces/events.enum';
import { DiscordPlugin } from './plugin.class';

export interface ReactRoles {
  /**
   * Determines if only one role can be picked from a message.
   */
  unique: boolean;
  emojis: Map<string, { id: string; name: string }>;
}

@Injectable()
@Plugin('ReactRoles')
export class ReactRolesPlugin extends DiscordPlugin {
  private readonly messages = new Map<string, ReactRoles>([
    [
      '742157450454630491',
      {
        unique: true,
        emojis: new Map([
          ['632617592611274752', { id: '632616301826932747', name: 'Death Knight' }],
          ['632618304447447048', { id: '632618133651324938', name: 'Demon Hunter' }],
          ['632618734208417814', { id: '632618490569949228', name: 'Druid' }],
          ['632618767809118248', { id: '632618600640938025', name: 'Hunter' }],
          ['632618794451468298', { id: '632619008348389384', name: 'Mage' }],
          ['632618822532333598', { id: '632619378512232459', name: 'Monk' }],
          ['632618848520110112', { id: '632619096890146877', name: 'Paladin' }],
          ['632618870569697309', { id: '632619183905046529', name: 'Priest' }],
          ['632618898012766228', { id: '632619239001423924', name: 'Rogue' }],
          ['632618916669292565', { id: '632619510423355392', name: 'Shaman' }],
          ['632618942669520926', { id: '632619582103879692', name: 'Warlock' }],
          ['632618967399137280', { id: '632619653012914177', name: 'Warrior' }],
        ]),
      },
    ],
  ]);

  @Event(DiscordEvent.MessageReactionAdd)
  async onMessageReactionAdd(
    _client: Client,
    reaction: MessageReaction,
    { id: uid, bot }: User,
  ): Promise<MessageReaction> {
    if (bot) return;

    // We only care about added reactions to the class message.
    if (!this.messages.has(reaction.message.id)) return;

    const role = this.messages.get(reaction.message.id).emojis.get(reaction.emoji.id);

    // Remove emojis that we are not interested in on managed messages.
    if (!role) {
      return reaction.remove();
    }

    // Partial reactions must be fetched.
    if (reaction.partial) {
      await Promise.all([reaction.fetch(), reaction.message.guild.members.fetch()]);
    }

    const user = reaction.message.guild.members.cache.get(uid);
    const toAdd = user.guild.roles.cache.get(role.id);

    await user.roles.add(toAdd, 'Class Color Role');

    // If reactions can be non-unique, don't remove them.
    if (!this.messages.get(reaction.message.id).unique) return;

    for (const [rid, react] of reaction.message.reactions.cache) {
      // This is incredibly expensive, look into alternatives.
      if (!react.users.cache.size) await react.users.fetch();

      // If we remove a roll, the onMessageReactionRemove method is called.
      if (rid !== reaction.emoji.id && react.users.cache.has(uid)) {
        await react.users.remove(uid);
      }
    }
  }

  @Event(DiscordEvent.MessageReactionRemove)
  async onMessageReactionRemove(
    _client: Client,
    reaction: MessageReaction,
    { id: uid }: User,
  ): Promise<void> {
    // We only care about added reactions to the class message.
    if (!this.messages.has(reaction.message.id)) return;

    const role = this.messages.get(reaction.message.id).emojis.get(reaction.emoji.id);

    // Ignore emojis removed that don't map to anything, though this should not occur.
    if (!role) return;

    // Partial reactions must be fetched.
    if (reaction.partial) {
      await Promise.all([reaction.fetch(), reaction.message.guild.members.fetch()]);
    }

    const user = reaction.message.guild.members.cache.get(uid);
    const toRemove = user.roles.cache.get(role.id);

    if (toRemove) await user.roles.remove(toRemove, 'Class Color Role');
  }
}
