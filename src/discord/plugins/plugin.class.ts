import { User } from 'discord.js';

export abstract class DiscordPlugin {
  hasPermission?(user: User): boolean | Promise<boolean>;
}
