import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { PassportModule } from '@nestjs/passport'
import { SentryModule } from '@ntegral/nestjs-sentry'
import { MikroOrmModule } from '@mikro-orm/nestjs'
import { TerminusModule } from '@nestjs/terminus'
import { MulterExtendedModule } from 'nestjs-multer-extended'
import { StatusMonitorModule } from 'nest-status-monitor'

import * as Joi from 'joi'
import MikroOrmConfig from './mikro-orm.config'

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
import { HealthController } from './health/health.controller'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('development', 'production', 'test').default('development'),
        PORT: Joi.number().default(3000),
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
        DATABASE_URL: Joi.string().required(),
        REDIS_HOST: Joi.string().required(),
        REDIS_PORT: Joi.number().required(),
        REDIS_PASSWORD: Joi.string().required(),
        AWS_S3_BUCKET_NAME: Joi.string().required().default('forbiddenrising'),
        AWS_ACCESS_KEY_ID: Joi.string().required(),
        AWS_SECRET_ACCESS_KEY: Joi.string().required(),
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
    TerminusModule,
    MulterExtendedModule.registerAsync({
      useFactory: (config: ConfigService) => {
        return {
          accessKeyId: config.get('AWS_ACCESS_KEY_ID'),
          secretAccessKey: config.get('AWS_SECRET_ACCESS_KEY'),
          region: 'us-east-1',
          bucket: config.get('AWS_S3_BUCKET_NAME'),
          basePath: 'uploads/applications',
        }
      },
      inject: [ConfigService],
    }),
    StatusMonitorModule.setUp({
      pageTitle: 'Nest.js Monitoring Page',
      port: 3000,
      path: '/status',
      ignoreStartsWith: '/health/alive',
      spans: [
        {
          interval: 1, // Every second
          retention: 60, // Keep 60 datapoints in memory
        },
        {
          interval: 5, // Every 5 seconds
          retention: 60,
        },
        {
          interval: 15, // Every 15 seconds
          retention: 60,
        },
      ],
      chartVisibility: {
        cpu: true,
        mem: true,
        load: true,
        responseTime: true,
        rps: true,
        statusCodes: true,
      },
      healthChecks: [],
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
  controllers: [HealthController],
})
export class AppModule {}
