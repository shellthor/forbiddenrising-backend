import { EntityManager, MikroORM } from '@mikro-orm/core'
import { OnQueueCompleted, OnQueueError, OnQueueFailed, Process, Processor } from '@nestjs/bull'
import { HttpException, Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Job } from 'bull'
import { FindGuildDto } from '../blizzard/dto/find-guild.dto'
import { RealmSlug } from '../blizzard/enums/realm.enum'
import { Region } from '../blizzard/enums/region.enum'
import { ProfileService } from '../blizzard/services/profile/profile.service'
import { GuildCharacter } from './character.entity'
import { CharacterService } from './character.service'
import { CharacterRemoveResult } from './interfaces/character-remove.interface'
import { CharacterUpdateResult } from './interfaces/character-update.interface'

@Processor('character')
export class CharacterQueue {
  private readonly logger: Logger = new Logger(CharacterQueue.name)
  private readonly em: EntityManager

  private findGuildDTO: FindGuildDto = {
    name: 'the-forbidden-rising',
    realm: RealmSlug.Hyjal,
    region: Region.US,
  }

  private minLVL: number

  constructor(
    private readonly characterService: CharacterService,
    private readonly profileService: ProfileService,
    private readonly config: ConfigService,
    orm: MikroORM,
  ) {
    this.minLVL = Math.max(this.config.get<number>('MINIMUM_CHARACTER_LEVEL'), 10)
    this.em = orm.em.fork()
  }

  @Process({ name: 'update-guild-members', concurrency: 1 })
  private async updateGuildMembers(job: Job): Promise<CharacterUpdateResult> {
    const [guildCharacters, roster] = await Promise.all([
      this.em.find(GuildCharacter, null),
      this.profileService.getGuildRoster(this.findGuildDTO, this.minLVL),
    ])

    const results: CharacterUpdateResult = {
      total: roster.data.members.length,
      processed: 0,
      success: 0,
      deleted: 0,
      ignored: 0,
      failed: 0,
    }

    await Promise.all(
      roster.data.members.map(async member => {
        let guildCharacter = guildCharacters.find(c => c.id === member.character.id)

        try {
          if (!guildCharacter) {
            guildCharacter = new GuildCharacter(
              member.character.name,
              member.character.realm.slug,
              Region.US,
            )

            this.em.persist(guildCharacter)
            results.added++
          } else {
            const status = await this.profileService.getCharacterProfileStatus(
              guildCharacter.getFindCharacterDTO(),
              guildCharacter.last_modified,
            )

            if (status.data.is_valid === false || status.data.id !== guildCharacter.id) {
              results.deleted++
              return this.em.remove(guildCharacter)
            }

            guildCharacter.last_modified = status.headers['last-modified']
          }

          guildCharacter.guild_rank = member.rank

          await this.characterService.populateGuildCharacter(guildCharacter)

          results.success++
        } catch (error) {
          if (error instanceof HttpException) {
            if (error.getStatus() === 304) {
              results.ignored++
              return
            }

            if (error.getStatus() === 404) {
              this.em.remove(guildCharacter)
              return
            }
          }

          console.error(error)
          this.logger.error(`Updating Error ${error}`, error.trace)
        }

        job.progress(++results.processed / results.total)
      }),
    )

    await this.em.flush()

    return results
  }

  @Process({ name: 'add-remove-members', concurrency: 1 })
  private async addOrRemoveMembers(): Promise<CharacterRemoveResult> {
    const roster = await this.profileService.getGuildRoster(this.findGuildDTO)

    const ids = roster.data.members.map(m => m.character.id)

    const notInGuild = await this.em.find(GuildCharacter, {
      id: { $nin: ids },
    })

    const names = notInGuild.map(m => m.name)

    this.em.remove(notInGuild)

    await this.em.flush()

    return { names }
  }

  @OnQueueError()
  private onError(_job: Job<number>, error: Error): void {
    console.error(error)
    this.logger.error('Global Error: ' + error)
  }

  @OnQueueCompleted()
  private onCompleted(
    job: Job<number>,
    results: CharacterUpdateResult | CharacterRemoveResult,
  ): void {
    if (job.name === 'update-guild-members') {
      const statuses = []

      Object.keys(results).forEach(result => {
        this.logger.debug(result)
        if (result === 'processed' || result === 'total' || results[result] === 0) return

        statuses.push(`${results[result]} ${result.charAt(0).toUpperCase() + result.slice(1)}`)
      })

      this.logger.log(
        `[Updated ${(results as CharacterUpdateResult).total} Guild Characters]: ${statuses.join(
          ', ',
        )}`,
      )
    }

    if (job.name === 'add-remove-members') {
      const len = (results as CharacterRemoveResult).names.length
      this.logger.log(
        `Removed ${len} Character${
          len === 0 ? 's' : len === 1 ? ':' : 's:'
        } ${(results as CharacterRemoveResult).names.join(', ')}`,
      )
    }
  }

  @OnQueueFailed()
  private onFailed(_job: Job<number>, error: Error): void {
    this.logger.error(error)
  }
}
