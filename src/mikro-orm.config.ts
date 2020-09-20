import { Options } from '@mikro-orm/core'
import { SqlHighlighter } from '@mikro-orm/sql-highlighter'
import { NotFoundException } from '@nestjs/common'
import { Article } from './article/article.entity'
import { BlizzardAsset } from './blizzard-asset/blizzard-asset.entity'
import { DiscordConfig } from './discord/discord-plugin.entity'
import { FileUpload } from './file/file.entity'
import { FormCharacter } from './form-character/form-character.entity'
import { FormComment } from './form-comment/form-comment.entity'
import { FormQuestion } from './form-question/question.entity'
import { FormSubmission } from './form-submission/form-submission.entity'
import { Form } from './form/form.entity'
import { Character } from './guild-character/character.base.entity'
import { GuildCharacter } from './guild-character/character.entity'
import { Raid } from './raid/raid.entity'
import { Slide } from './slide/slide.entity'
import { User } from './user/user.entity'

const config: Options = {
  highlighter: new SqlHighlighter(),
  entities: [
    Article,
    BlizzardAsset,
    Character,
    GuildCharacter,
    FileUpload,
    Form,
    FormCharacter,
    FormComment,
    FormQuestion,
    FormSubmission,
    Raid,
    Slide,
    User,
    DiscordConfig,
  ],
  migrations: {
    tableName: 'mikro_orm_migrations', // migrations table name
    path: process.cwd() + '/migrations', // path to folder with migration files
    pattern: /^[\w-]+\d+\.ts$/, // how to match migration files
    transactional: true, // run each migration inside transaction
    disableForeignKeys: true, // try to disable foreign_key_checks (or equivalent)
    allOrNothing: true, // run all migrations in current batch in master transaction
    emit: 'ts', // migration generation mode
  },
  type: 'postgresql',
  clientUrl: process.env.DATABASE_URL,
  multipleStatements: true,
  // host: process.env.DATABASE_HOST || '127.0.0.1',
  // port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  // user: process.env.DATABASE_USERNAME || 'postgres',
  // password: process.env.DATABASE_PASSWORD || 'postgres',
  // dbName: process.env.DATABASE_NAME || 'postgres',
  // debug: process.env.NODE_ENV === 'development',
  strict: true,
  pool: { min: 0, max: 10 },
  driverOptions: {
    connection: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
  findOneOrFailHandler: () => {
    return new NotFoundException()
  },
}

export default config
