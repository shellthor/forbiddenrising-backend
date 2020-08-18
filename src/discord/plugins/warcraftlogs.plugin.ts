import { HttpService, Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { Message, MessageEmbed, TextChannel } from 'discord.js';
import { chunk, isEqual, partition } from 'lodash';
import moment from 'moment';
import { sleep } from '../../app.utils';
import { PluginConfig } from '../discord-config.class';
import { Context } from '../discord.context';
import { Command, CommandGroup, Loop, Plugin } from '../discord.decorators';
import { DiscordService } from '../discord.service';
import {
  BossFight,
  Keystone,
  Report,
  ReportInfo,
  ReportList,
  Zone,
} from '../interfaces/warcraftlogs.interface';
import { DiscordPlugin } from './plugin.class';
import { SettingsPlugin } from './settings.plugin';

export interface WCLGuildConfig {
  watching: Record<string, string>;
  channel: string;
}

export interface WCLGlobalConfig {
  key: string;
}

@Injectable()
@Plugin('WarcraftLogs')
export class WarcraftLogsPlugin extends DiscordPlugin {
  private readonly logger = new Logger(WarcraftLogsPlugin.name);
  private readonly guild = 'the forbidden rising';
  private readonly realm = 'hyjal';
  private readonly region = 'us';
  private zones: Zone[] = [];
  private readonly difficulties = {
    3: 'Normal',
    4: 'Heroic',
    5: 'Mythic',
    10: 'Mythic+',
  };
  private readonly config: PluginConfig<WCLGuildConfig, WCLGlobalConfig>;
  private hasActiveLog = false;

  constructor(
    private readonly discordService: DiscordService,
    private readonly http: HttpService,
    private readonly settings: SettingsPlugin,
  ) {
    super();
    this.config = discordService.getConfig(WarcraftLogsPlugin.name);
    this.config.registerGlobal({ key: '' });
    this.config.registerGuild({ watching: {}, channel: '' });
  }

  @CommandGroup({ name: 'wcl', description: 'WarcraftLogs related commands.' })
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  wcl(): void {}

  @Command({
    name: 'api',
    group: 'wcl',
    description: 'Sets the guild WarcraftLogs API key.',
  })
  async api(ctx: Context, key: string): Promise<void> {
    try {
      const reports = await this.getReports(key);

      await ctx.message.channel.send(
        `Retrieval successful, latest log:\nhttps://www.warcraftlogs.com/reports/${reports[0].id}`,
      );

      await this.config.setGlobal({ key });
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        await ctx.send('Invalid or missing API key for WarcraftLogs, aborting!');
      } else {
        await ctx.send(`Some error occured retrieving the logs.`);
        this.logger.error(error);
      }
    }
  }

  @Command({
    name: 'channel',
    group: 'wcl',
    description: 'Sets the channel to send log announcements to.',
  })
  async setChannel(ctx: Context, cid: string): Promise<Message> {
    const channel = ctx.message.guild.channels.cache.get(cid);

    if (!channel) {
      return ctx.send('Cannot find the given channel id.');
    } else if (
      !channel.permissionsFor(ctx.message.guild.me).has(['SEND_MESSAGES', 'EMBED_LINKS'])
    ) {
      return ctx.send('Cannot send messages or embeds to this channel.');
    }

    await this.config.setGuild(ctx.message.guild, { channel: cid });

    await ctx.tick();
  }

  @Command({
    name: 'log',
    description: 'Retrieves the embed for a log by its id.',
  })
  async log(ctx: Context, id: string): Promise<Message> {
    const { key } = await this.config.getGlobalConfig();

    if (!key) {
      return ctx.send(`Set the API key with the setup command and try again.`);
    }

    try {
      const embed = await this.getReportEmbed(id);

      await ctx.send(embed);
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        return ctx.send('Invalid or missing API key for WarcraftLogs, aborting!');
      }

      this.logger.log(error);
      return ctx.send(`An unknown error occured, shwoops!`);
    }
  }

  @Command({
    name: 'logs',
    description: 'Retrieves the latest logs for the guild.',
  })
  async logs(ctx: Context): Promise<Message> {
    const { key } = await this.config.getGlobalConfig();

    if (!key) {
      return ctx.send(`Set the API key with the setup command and try again.`);
    }

    try {
      const reports = await this.getReports(key);

      const embeds = await Promise.all(
        reports.slice(0, 5).map(async report => this.getReportEmbed(report.id)),
      );

      await ctx.paginate(embeds);
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        return ctx.send('Invalid or missing API key for WarcraftLogs, aborting!');
      }

      this.logger.log(error);
      return ctx.send(`An unknown error occured, shwoops!`);
    }
  }

  public async checkLogs(): Promise<void> {
    const { key } = await this.config.getGlobalConfig();

    if (!key) return;

    // Loop through each guild and check for logs.
    for (const [, guild] of this.discordService.client.guilds.cache) {
      const { channel: id, watching } = await this.config.getGuildConfig(guild);
      const nowWatching: Record<string, string> = {};

      // Guilds without an announcement channel aren't setup yet.
      if (!id) continue;

      const channel = guild.channels.cache.get(id);

      // Cannot locate the channel, abort. This is likely an error, e.g. deleted channel
      // and something should be done about this. Update the setting or check perms, perhaps.
      if (!channel) continue;

      const reports = (await this.getReports(key)).slice(0, 5);
      const [active, inactive] = partition(
        reports,
        r => moment(Date.now()).diff(r.end, 'hours') < 1,
      );
      this.hasActiveLog = active.length > 0;

      // Send final embed to watched reports that are now outdated, then remove them.
      for (const report of inactive) {
        if (watching.hasOwnProperty(report.id)) {
          const message = await (<TextChannel>channel).messages.fetch(watching[report.id]);

          // If the message is missing, e.g. deleted, don't bother doing any more.
          if (!message) continue;

          const embed = await this.getReportEmbed(report.id, false);
          await message.edit(embed);
        }
      }

      // Active reports could be new or continuing.
      for (const report of active) {
        const embed = await this.getReportEmbed(report.id, true);
        // Edit the existing message if possible.
        if (watching.hasOwnProperty(report.id)) {
          const message = await (<TextChannel>channel).messages.fetch(watching[report.id]);

          if (message) {
            await message.edit(embed);
            nowWatching[report.id] = message.id;
            // Intentionally skip this loop as we want to otherwise fall-through if
            // a message wasn't found, e.g. someone deleted it.
            continue;
          }
        }

        const message = await (<TextChannel>channel).send(embed);
        nowWatching[report.id] = message.id;
      }

      if (!isEqual(watching, nowWatching)) {
        await this.config.setGuild(guild, { watching: nowWatching });
      }
    }
  }

  @Loop('LogRetrieval')
  public async loop(): Promise<void> {
    while (true) {
      await this.checkLogs().catch(e => this.logger.error(e.message, e.stack));

      // Scan every 5 minutes until we find a log, then every 1 while active.
      await sleep(this.hasActiveLog ? 60000 : 300000);
    }
  }

  private async getReports(key: string): Promise<ReportList[]> {
    if (!key) {
      throw new UnauthorizedException();
    }

    return (
      await this.http
        .get(
          `https://www.warcraftlogs.com/v1/reports/guild/${this.guild}/${this.realm}/${this.region}?api_key=${key}`,
        )
        .toPromise()
    ).data;
  }

  private async getReportInfo(id: string): Promise<ReportInfo> {
    const { key } = await this.config.getGlobalConfig();

    const url = `https://www.warcraftlogs.com/v1/report/fights/${id}?api_key=${key}`;
    const report = (await this.http.get(url).toPromise()).data as Report;
    const instances = {};

    for (const fight of report.fights) {
      // Ignore trash fights.
      if (fight.boss === 0) continue;

      const instance = await this.getBossInstanceName(fight.boss);
      const difficulty = this.difficulties[(<BossFight>fight).difficulty];

      // Add missing instances to the fights.
      if (!instances.hasOwnProperty(instance)) {
        instances[instance] = {};
      }

      // Add missing difficulties to the instance.
      if (!instances[instance].hasOwnProperty(difficulty)) {
        instances[instance][difficulty] = {};
      }

      // Add missing boss fights to the instances.
      if (!instances[instance][difficulty].hasOwnProperty(fight.name)) {
        instances[instance][difficulty][fight.name] = {
          ids: [],
          kill: false,
          killId: 0,
          percent: 10000,
          keystoneLevel: 0,
        };
      }

      instances[instance][difficulty][fight.name].ids.push(fight.id);

      if ((<BossFight>fight).kill) {
        instances[instance][difficulty][fight.name].kill = true;
        instances[instance][difficulty][fight.name].killId = fight.id;
      } else if (
        instances[instance][difficulty][fight.name].percent > (<BossFight>fight).bossPercentage
      ) {
        instances[instance][difficulty][fight.name].percent = (<BossFight>fight).bossPercentage;
      }

      if ((<Keystone>fight).keystoneLevel) {
        instances[instance][difficulty][fight.name].keystoneLevel = (<Keystone>fight).keystoneLevel;
      }
    }

    return { report, instances };
  }

  /**
   * Obtains individual fight data from WarcraftLogs.
   */
  private async getReportEmbed(id: string, watching?: boolean) {
    const { report, instances } = await this.getReportInfo(id);

    const embed = new MessageEmbed({
      title: 'The Forbidden Rising WarcraftLogs',
      description: `*${report.title} recorded by ${report.owner}*`,
      url: `https://www.warcraftlogs.com/reports/${id}`,
      color: await this.settings.getEmbedColor(),
      timestamp: new Date(report.end),
      thumbnail: { url: this.getRaidImage(report.zone) },
      footer: {
        text:
          typeof watching === 'undefined'
            ? undefined
            : watching
            ? 'Monitoring Log'
            : 'Monitoring Ended',
      },
    });

    for (const instance in instances) {
      for (const difficulty in instances[instance]) {
        const bosses = [];

        for (const fight in instances[instance][difficulty]) {
          const info = instances[instance][difficulty][fight];

          const attempt = `https://www.warcraftlogs.com/reports/${id}#fight=${
            info.kill ? info.killId : 'last'
          }`;

          if (difficulty === 'Mythic+') {
            bosses.push(`:key: [${fight}](${attempt}) ${info.keystoneLevel}`);
          } else {
            bosses.push(
              `:crossed_swords: [${fight}](${attempt}) ${
                info.kill
                  ? info.ids.length > 1
                    ? `killed in ${info.ids.length} attempts.`
                    : 'one-shot.'
                  : info.ids.length > 1
                  ? `${info.ids.length} times, best ${info.percent / 100}%.`
                  : `first wipe at ${info.percent / 100}%.`
              }`,
            );
          }
        }

        if (bosses.length >= 10) {
          const [first, last] = chunk(bosses, Math.ceil(bosses.length / 2));
          embed.addField(
            `${difficulty === 'Mythic+' ? '' : difficulty} ${instance} (1/2)`,
            first.join('\n'),
          );
          embed.addField(
            `${difficulty === 'Mythic+' ? '' : difficulty} ${instance} (2/2)`,
            last.join('\n'),
          );
        } else {
          embed.addField(
            `${difficulty === 'Mythic+' ? '' : difficulty} ${instance}`,
            bosses.join('\n'),
          );
        }
      }
    }

    if (report.fights.length) {
      embed.addField(
        'Log Analysis Tools :snake:',
        `[Wipefest](https://www.wipefest.net/report/${id}) [WoWAnalyzer](https://www.wowanalyzer.com/report/${id})`,
      );
    }

    return embed;
  }

  private async getBossInstanceName(bossId: number) {
    if (!this.zones.length) {
      this.zones = await this.getZoneInfo();
    }

    for (const zone of this.zones) {
      const instance = zone.encounters.find(e => e.id === bossId);
      if (instance) return zone.name;
    }

    return 'Unknown instance';
  }

  private getRaidImage(id: number) {
    return `https://dmszsuqyoe6y6.cloudfront.net/img/warcraft/zones/zone-${id}-small.jpg`;
  }

  private async getZoneInfo() {
    return (await this.getWCL('https://www.warcraftlogs.com/v1/zones')) as Zone[];
  }

  /**
   * Requests data from WarcraftLogs' public API and appends the key.
   * TODO: Extract this into a WarcraftLogs service, as this information
   * will be later expanded into guild character statistics gathering.
   * @param url
   */
  private async getWCL(url: string) {
    const { key } = await this.config.getGlobalConfig();

    return (await this.http.get(`${url}?api_key=${key}`).toPromise()).data;
  }
}
