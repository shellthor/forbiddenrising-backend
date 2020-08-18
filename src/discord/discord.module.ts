import { DiscoveryModule, DiscoveryService } from '@golevelup/nestjs-discovery';
import { BullModule } from '@nestjs/bull';
import { DynamicModule, HttpModule, Logger, Module, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Client, ClientOptions } from 'discord.js';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { FormSubmissionModule } from '../form-submission/form-submission.module';
import {
  DISCORD_CLIENT,
  DISCORD_COMMAND_ARGS,
  DISCORD_PLUGIN,
  DISCORD_PLUGIN_COMMAND,
  DISCORD_PLUGIN_EVENT,
  DISCORD_PLUGIN_GROUP,
  DISCORD_PLUGIN_LOOP,
} from './../app.constants';
import { DiscordHandler } from './discord-handler.class';
import { DiscordConfig } from './discord-plugin.entity';
import { DiscordController } from './discord.controller';
import {
  CommandMeta,
  EventMeta,
  GroupMeta,
  InjectClient,
  PluginOptions,
} from './discord.decorators';
import { DiscordQueue } from './discord.queue';
import { DiscordService } from './discord.service';
import { AnnouncePlugin } from './plugins/announce.plugin';
import { AudioPlugin } from './plugins/audio.plugin';
import { HelpPlugin } from './plugins/help.plugin';
import { LoggerPlugin } from './plugins/logger.plugin';
import { PingPlugin } from './plugins/ping.plugin';
import { DiscordPlugin } from './plugins/plugin.class';
import { ReactRolesPlugin } from './plugins/react-roles.plugin';
import { ReactionsPlugin } from './plugins/reactions.plugin';
import { SettingsPlugin } from './plugins/settings.plugin';
import { WarcraftLogsPlugin } from './plugins/warcraftlogs.plugin';
import { WelcomerPlugin } from './plugins/welcomer.plugin';

@Module({
  imports: [
    HttpModule,
    MikroOrmModule.forFeature({ entities: [DiscordConfig] }),
    DiscoveryModule,
    FormSubmissionModule,
    BullModule.registerQueue({ name: 'discord' }),
  ],
  providers: [
    DiscordQueue,
    DiscordHandler,
    HelpPlugin,
    PingPlugin,
    AudioPlugin,
    SettingsPlugin,
    WarcraftLogsPlugin,
    WelcomerPlugin,
    DiscordService,
    ReactRolesPlugin,
    ReactionsPlugin,
    LoggerPlugin,
    AnnouncePlugin,
  ],
  controllers: [DiscordController],
  exports: [DiscordService],
})
export class DiscordModule implements OnModuleInit {
  private readonly logger = new Logger(DiscordModule.name);

  static forRoot(options?: ClientOptions): DynamicModule {
    const client = new Client(options);
    const providers = [
      {
        provide: DISCORD_CLIENT,
        useValue: client,
      },
    ];

    return {
      module: DiscordModule,
      providers: providers,
      exports: providers,
    };
  }

  constructor(
    private readonly discover: DiscoveryService,
    private readonly discord: DiscordService,
    private readonly config: ConfigService,
    private readonly handler: DiscordHandler,
    @InjectClient() private readonly client: Client,
  ) {}

  async onModuleInit(): Promise<void> {
    await this.getPluginMetadata();
    this.initialize();
  }

  /**
   * Retrieves the metadata associated with the plugin files and constructs
   * the plugin heirarchy data.
   */
  async getPluginMetadata(): Promise<void> {
    const plugins = await this.discover.providersWithMetaAtKey<PluginOptions>(DISCORD_PLUGIN);

    for (const plugin of plugins) {
      const instance = plugin.discoveredClass.instance as DiscordPlugin;
      const groups: GroupMeta[] = Reflect.getMetadata(DISCORD_PLUGIN_GROUP, instance);
      const commands: CommandMeta[] = Reflect.getMetadata(DISCORD_PLUGIN_COMMAND, instance) || [];
      const events: EventMeta[] = Reflect.getMetadata(DISCORD_PLUGIN_EVENT, instance) || [];
      const loops = Reflect.getMetadata(DISCORD_PLUGIN_LOOP, instance);

      for (const command of commands) {
        const params = Reflect.getMetadata(DISCORD_COMMAND_ARGS, instance, command.method) || [];

        command.mentions = params;
      }

      for (const { name, method } of events) {
        this.client.on(name as any, (...args: any[]) =>
          instance[method](this.client, ...args).catch(e =>
            this.logger.error(e, null, 'Discord Event Fallthrough'),
          ),
        );
      }

      this.discord.addPlugin(instance, plugin.meta, groups, commands, loops);
    }
  }

  /**
   * Starts the Discord bot by adding the main message handler
   * and starting the event loops once the bot is initialized.
   */
  private initialize() {
    // Don't initialize the Discord bot during testing.
    if (this.config.get('NODE_ENV') === 'test') return;

    this.client.on('message', this.handler.handle.bind(this.handler));

    this.client.on('ready', () => {
      this.logger.log(`Bot Initialized`);

      // Run loops when the bot has finished loading.
      for (const [cname, plugin] of this.discord.plugins) {
        for (const [lname, loop] of plugin.loops) {
          this.logger.log(`Starting ${cname} Loop: ${lname}`);
          try {
            plugin.instance[loop.method].bind(plugin.instance)(this.client);
          } catch (error) {
            this.logger.error(error.message, error.stack);
          }
        }
      }
    });

    this.client.login(this.config.get('DISCORD_BOT_TOKEN'));
  }
}
