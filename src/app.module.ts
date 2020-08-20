import { APP_INTERCEPTOR } from '@nestjs/core'
import { Module, CacheModule, CacheInterceptor } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { PassportModule } from '@nestjs/passport'
import { SentryModule } from '@ntegral/nestjs-sentry'
import { MikroOrmModule } from '@mikro-orm/nestjs'
import * as redisStore from 'cache-manager-ioredis'
import * as Joi from 'joi'
import MikroOrmConfig from '../mikro-orm.config'

import { ArticleModule } from './article/article.module'
import { BlizzardModule } from './blizzard/blizzard.module'
import { AuthModule } from './auth/auth.module'
import { DiscordModule } from './discord/discord.module'
import { FormCharacterModule } from './form-character/form-character.module'
import { FormSubmissionModule } from './form-submission/form-submission.module'
import { FormModule } from './form/form.module'
import { CharacterModule } from './guild-character/character.module'
import { RaidModule } from './raid/raid.module'
import { RaiderIOModule } from './raiderIO/raiderIO.module'
import { UserModule } from './user/user.module'
import { SlideModule } from './slide/slide.module'

@Module({
  imports: [
    CacheModule.register({
      store: redisStore,
      host: 'localhost',
      port: 6379,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('development', 'production', 'test').default('development'),
        PORT: Joi.number().default(3333),
        SENTRY_DSN: Joi.string().required(),
        JWT_SECRET: Joi.string().default('testing'),
        BLIZZARD_CLIENTID: Joi.string().required(),
        BLIZZARD_SECRET: Joi.string().required(),
        BLIZZARD_CALLBACK: Joi.string().required(),
        MINIMUM_CHARACTER_LEVEL: Joi.number().default(110),
        CODECOV_TOKEN: Joi.string(),
        DISCORD_CLIENT_ID: Joi.string().required(),
        DISCORD_SECRET: Joi.string().required(),
        DISCORD_WEBHOOK: Joi.string().required(),
        DISCORD_CALLBACK: Joi.string().default('http://localhost:3000/callback'),
        BASE_URL: Joi.string().default('http://localhost:3000/'),
        GLOBAL_PREFIX: Joi.string().default('api'),
      }),
      envFilePath: ['.env', '.local.env'],
    }),
    PassportModule.register({
      defaultStrategy: 'blizzard',
    }),
    MikroOrmModule.forRoot(MikroOrmConfig),
    DiscordModule.forRoot({
      partials: ['REACTION', 'CHANNEL', 'MESSAGE', 'USER', 'GUILD_MEMBER'],
      ws: {
        intents: [
          'GUILDS',
          'GUILD_MEMBERS',
          'GUILD_MESSAGES',
          'GUILD_VOICE_STATES',
          'GUILD_MESSAGE_REACTIONS',
        ],
      },
    }),
    SentryModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        dsn: config.get('SENTRY_DSN'),
        debug: true,
      }),
      inject: [ConfigService],
    }),
    UserModule,
    AuthModule,
    SlideModule,
    ArticleModule,
    RaidModule,
    FormModule,
    FormCharacterModule,
    FormSubmissionModule,
    BlizzardModule,
    CharacterModule,

    RaiderIOModule,
  ],
  providers: [{ provide: APP_INTERCEPTOR, useClass: CacheInterceptor }],
})
export class AppModule {}
