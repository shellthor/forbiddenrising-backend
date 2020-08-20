import { OnQueueCompleted, OnQueueError, OnQueueFailed, Process, Processor } from '@nestjs/bull'
import { BadRequestException, Logger, Injectable } from '@nestjs/common'
import { Job } from 'bull'
import { EntityManager, MikroORM } from '@mikro-orm/core'
import { RaiderIOService } from '../raiderIO/raiderIO.service'
import { Raid } from './raid.entity'

@Injectable()
@Processor('raid')
export class RaidQueue {
  private readonly logger: Logger = new Logger(RaidQueue.name)
  private readonly em: EntityManager

  constructor(private readonly orm: MikroORM, private readonly raiderIOService: RaiderIOService) {
    this.em = orm.em.fork()
  }

  @Process({ name: 'updateRaids' })
  private async updateRaids() {
    const data = await this.raiderIOService.getGuildRaiderIO()

    if (!data.raid_progression || !data.raid_rankings) {
      throw new BadRequestException('No data available for RaiderIO guild update.')
    }

    const raids = await this.em.find(Raid, {
      slug: { $in: Object.keys(data.raid_rankings) },
    })

    for (const slug of Object.keys(data.raid_rankings)) {
      let raid = raids.find(r => r.slug === slug)

      if (!raid) {
        raid = new Raid(slug)
        this.em.persist(raid)
      } else if (raid.locked) {
        continue
      }

      raid.summary = data.raid_progression[raid.slug].summary
      raid.bosses = data.raid_progression[raid.slug].total_bosses
      raid.normal_bosses_killed = data.raid_progression[raid.slug].normal_bosses_killed
      raid.heroic_bosses_killed = data.raid_progression[raid.slug].heroic_bosses_killed
      raid.mythic_bosses_killed = data.raid_progression[raid.slug].mythic_bosses_killed

      if (data.raid_rankings[raid.slug].mythic.world > 0) {
        raid.difficulty = 'Mythic'
        raid.world = data.raid_rankings[raid.slug].mythic.world
        raid.region = data.raid_rankings[raid.slug].mythic.region
        raid.realm = data.raid_rankings[raid.slug].mythic.realm
        raid.progress = raid.mythic_bosses_killed / raid.bosses
      } else if (data.raid_rankings[raid.slug].heroic.world > 0) {
        raid.difficulty = 'Heroic'
        raid.world = data.raid_rankings[raid.slug].heroic.world
        raid.region = data.raid_rankings[raid.slug].heroic.region
        raid.realm = data.raid_rankings[raid.slug].heroic.realm
        raid.progress = raid.heroic_bosses_killed / raid.bosses
      } else {
        raid.difficulty = 'Normal'
        raid.world = data.raid_rankings[raid.slug].normal.world
        raid.region = data.raid_rankings[raid.slug].normal.region
        raid.realm = data.raid_rankings[raid.slug].normal.realm
        raid.progress = raid.normal_bosses_killed / raid.bosses
      }
    }

    await this.em.flush()

    return raids
  }

  @OnQueueError()
  private onError(error: Error): void {
    this.logger.error(error)
  }

  @OnQueueCompleted()
  private onCompleted(job: Job<number>, result: Raid[]): void {
    this.logger.log(`Update completed for ${result.length} raids.`)
    this.em.clear()
  }

  @OnQueueFailed()
  private onFailed(job: Job<number>, error: Error): void {
    this.logger.error(`Job[${job.id}] failed: ${JSON.stringify(error.message)}`)
  }
}
