import { Options } from '@mikro-orm/core'
import { NotFoundException } from '@nestjs/common'
import dotenv from 'dotenv'
import { Article } from './src/article/article.entity'
import { BlizzardAsset } from './src/blizzard-asset/blizzard-asset.entity'
import { DiscordConfig } from './src/discord/discord-plugin.entity'
import { FileUpload } from './src/file/file.entity'
import { FormCharacter } from './src/form-character/form-character.entity'
import { FormComment } from './src/form-comment/form-comment.entity'
import { FormQuestion } from './src/form-question/question.entity'
import { FormSubmission } from './src/form-submission/form-submission.entity'
import { Form } from './src/form/form.entity'
import { Character } from './src/guild-character/character.base.entity'
import { GuildCharacter } from './src/guild-character/character.entity'
import { Raid } from './src/raid/raid.entity'
import { Slide } from './src/slide/slide.entity'
import { User } from './src/user/user.entity'

dotenv.config()

const config: Options = {
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
  type: 'mysql',
  host: process.env.DATABASE_HOST || '127.0.0.1',
  port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  user: process.env.DATABASE_USERNAME || 'postgres',
  password: process.env.DATABASE_PASSWORD || 'postgres',
  dbName: process.env.DATABASE_NAME || 'postgres',
  debug: process.env.NODE_ENV === 'development',
  strict: true,
  findOneOrFailHandler: () => {
    return new NotFoundException()
  },
}

export default config
