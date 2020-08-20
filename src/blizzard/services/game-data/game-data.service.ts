import { HttpService, Injectable } from '@nestjs/common'
import { EntityManager, EntityRepository } from '@mikro-orm/core'
import { InjectRepository } from '@mikro-orm/nestjs'
import { BlizzardAsset } from '../../../blizzard-asset/blizzard-asset.entity'
import { AssetType } from '../../enums/asset-type.enum'
import { GameDataEndpoint } from '../../enums/game-data-api.enum'
import * as GameData from '../../interfaces/game-data'
import { TokenService } from '../token.service'

export type GameDataReturnType = {
  [GameDataEndpoint.AchievementCategoriesIndex]: void
  [GameDataEndpoint.AchievementCategory]: void
  [GameDataEndpoint.AchievementsIndex]: void
  [GameDataEndpoint.Achievement]: void
  [GameDataEndpoint.AchievementMedia]: void
  [GameDataEndpoint.AzeriteEssencesIndex]: void
  [GameDataEndpoint.AzeriteEssence]: void
  [GameDataEndpoint.AzeriteEssenceMedia]: void
  [GameDataEndpoint.ConnectedRealmsIndex]: void
  [GameDataEndpoint.ConnectedRealm]: void
  [GameDataEndpoint.CreatureFamiliesIndex]: void
  [GameDataEndpoint.CreatureFamily]: void
  [GameDataEndpoint.CreatureTypesIndex]: void
  [GameDataEndpoint.CreatureType]: void
  [GameDataEndpoint.Creature]: void
  [GameDataEndpoint.CreatureDisplayMedia]: void
  [GameDataEndpoint.CreatureFamilyMedia]: void
  [GameDataEndpoint.GuildCrestComponentsIndex]: void
  [GameDataEndpoint.GuildCrestBorderMedia]: void
  [GameDataEndpoint.GuildCrestEmblemMedia]: void
  [GameDataEndpoint.ItemClassesIndex]: void
  [GameDataEndpoint.ItemClass]: void
  [GameDataEndpoint.ItemSubclass]: void
  [GameDataEndpoint.Item]: void
  [GameDataEndpoint.ItemMedia]: GameData.ItemMedia
  [GameDataEndpoint.MythicKeystoneAffixIndex]: void
  [GameDataEndpoint.MythicKestoneAffix]: void
  [GameDataEndpoint.MythicRaidLeaderboard]: void
  [GameDataEndpoint.MountsIndex]: void
  [GameDataEndpoint.Mount]: void
  [GameDataEndpoint.MythicKeystoneDungeonsIndex]: void
  [GameDataEndpoint.MythicKeystoneDungeon]: void
  [GameDataEndpoint.MythicKeystoneIndex]: void
  [GameDataEndpoint.MythicKeystonePeriodsIndex]: void
  [GameDataEndpoint.MythicKeystonePeriod]: void
  [GameDataEndpoint.MythicKeystoneSeasonsIndex]: void
  [GameDataEndpoint.MythicKeystoneSeason]: void
  [GameDataEndpoint.MythicKeystoneLeaderboardsIndex]: void
  [GameDataEndpoint.MythicKeystoneLeaderboard]: void
  [GameDataEndpoint.PetsIndex]: void
  [GameDataEndpoint.Pet]: void
  [GameDataEndpoint.PlayableClassesIndex]: void
  [GameDataEndpoint.PlayableClass]: void
  [GameDataEndpoint.PlayableClassMedia]: void
  [GameDataEndpoint.PvPTalentSlots]: void
  [GameDataEndpoint.PlayableRacesIndex]: void
  [GameDataEndpoint.PlayableRace]: void
  [GameDataEndpoint.PlayableSpecializationsIndex]: void
  [GameDataEndpoint.PlayableSpecialization]: void
  [GameDataEndpoint.PowerTypesIndex]: void
  [GameDataEndpoint.PowerType]: void
  [GameDataEndpoint.PvPSeasonsIndex]: void
  [GameDataEndpoint.PvPSeason]: void
  [GameDataEndpoint.PvPLeaderboardsIndex]: void
  [GameDataEndpoint.PvPLeaderboard]: void
  [GameDataEndpoint.PvPRewardsIndex]: void
  [GameDataEndpoint.PvPTierMedia]: void
  [GameDataEndpoint.PvPTiersIndex]: void
  [GameDataEndpoint.PvPTier]: void
  [GameDataEndpoint.RealmsIndex]: void
  [GameDataEndpoint.Realm]: void
  [GameDataEndpoint.RegionsIndex]: void
  [GameDataEndpoint.Region]: void
  [GameDataEndpoint.ReputationFactionsIndex]: void
  [GameDataEndpoint.ReputationFaction]: void
  [GameDataEndpoint.ReputationTiersIndex]: void
  [GameDataEndpoint.ReputationTiers]: void
  [GameDataEndpoint.TitlesIndex]: void
  [GameDataEndpoint.Title]: void
  [GameDataEndpoint.WoWTokenIndex]: void
}

@Injectable()
export class GameDataService {
  constructor(
    @InjectRepository(BlizzardAsset)
    private readonly assetRepository: EntityRepository<BlizzardAsset>,
    private readonly tokenService: TokenService,
    private readonly http: HttpService,
    private readonly em: EntityManager,
  ) {}

  async getGameItemMedia(id: number): Promise<GameData.ItemMedia> {
    const asset = await this.assetRepository.findOne({
      id,
      type: AssetType.Icon,
    })

    if (!asset) {
      const data = await this.getGameData(GameDataEndpoint.ItemMedia, id)

      await this.em
        .getConnection()
        .execute(
          `insert into "blizzard_asset" (id, type, value) values (?, 'icon', ?) on conflict do nothing;`,
          [id, data.assets[0].value],
        )

      return data
    }

    return {
      _links: {
        self: {
          href: `https://us.api.blizzard.com/data/wow/media/item/${id}?namespace=static-8.2.5_31884-us`,
        },
      },
      assets: [
        {
          key: 'icon',
          value: asset.value,
        },
      ],
    }
  }

  async getGameData<T extends GameDataEndpoint>(
    endpoint: T,
    param: string | number = '',
  ): Promise<GameDataReturnType[T]> {
    await this.tokenService.getToken()

    const uri = `https://us.api.blizzard.com/data/wow${endpoint}/${param}?namespace=static-us&locale=en_US`

    return (await this.http.get(uri).toPromise()).data
  }
}
