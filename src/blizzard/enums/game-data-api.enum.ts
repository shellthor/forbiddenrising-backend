export enum GameDataEndpoint {
  // Achievement API
  AchievementCategoriesIndex = '/achievement-category/index',
  AchievementCategory = '/achievement-category/',
  AchievementsIndex = '/achievement/index',
  Achievement = '/achievement',
  AchievementMedia = '/media/achievement',
  // Azerite Essence API
  AzeriteEssencesIndex = '/azerite-essence/index',
  AzeriteEssence = '/azerite-essence/',
  AzeriteEssenceMedia = '/media/azierite-essence/',
  // Connected Realm API
  ConnectedRealmsIndex = '/connected-realm/index',
  ConnectedRealm = '/connected-realm/',
  // Creature API
  CreatureFamiliesIndex = '/creature-family/index',
  CreatureFamily = '/creature-family/',
  CreatureTypesIndex = '/creature-type/index',
  CreatureType = '/creature-type/',
  Creature = '/creature/',
  CreatureDisplayMedia = '/media/creature-display/',
  CreatureFamilyMedia = '/media/creature-family/',
  // Guild Crest API
  GuildCrestComponentsIndex = '/guild-crest/index',
  GuildCrestBorderMedia = '/media/guild-crest/border/',
  GuildCrestEmblemMedia = '/media/guild-crest/emblem/',
  // Item API
  ItemClassesIndex = '/data/wow/item-class/index',
  ItemClass = '/data/wow/item-class/',
  ItemSubclass = '/data/wow/item-class/{itemClassId}/item-subclass/{itemSubclassId}',
  Item = '/data/wow/item/',
  ItemMedia = '/media/item',
  // Mythic Keystone Affix API
  MythicKeystoneAffixIndex = '/keystone-affix/index',
  MythicKestoneAffix = '/keystone-affix/',
  // Mythic Raid Leaderboard API
  MythicRaidLeaderboard = '/leaderboard/hall-of-fame/{raid}/{faction}',
  // Mount API
  MountsIndex = '/mount/index',
  Mount = '/mount/{mountId}',
  // Mythic Keystone Dungeon API
  MythicKeystoneDungeonsIndex = '/mythic-keystone/dungeon/index',
  MythicKeystoneDungeon = '/mythic-keystone/dungeon/{dungeonId}',
  MythicKeystoneIndex = '/mythic-keystone/index',
  MythicKeystonePeriodsIndex = '/mythic-keystone/period/index',
  MythicKeystonePeriod = '/mythic-keystone/period/{periodId}',
  MythicKeystoneSeasonsIndex = '/mythic-keystone/season/index',
  MythicKeystoneSeason = '/mythic-keystone/season/{seasonId}',
  // Mythic Keystone Leaderboard API
  MythicKeystoneLeaderboardsIndex = '/connected-realm/{connectedRealmId}/mythic-leaderboard/index',
  MythicKeystoneLeaderboard = '/connected-realm/{connectedRealmId}/mythic-leaderboard/{dungeonId}/period/{period}',
  // Pet API
  PetsIndex = '/pet/index',
  Pet = '/pet/{petId}',
  // Playable Class API
  PlayableClassesIndex = '/playable-class/index',
  PlayableClass = '/playable-class/{classId}',
  PlayableClassMedia = '/media/playable-class/{playableClassId}',
  PvPTalentSlots = '/playable-class/{classId}/pvp-talent-slots',
  // Playable Race API
  PlayableRacesIndex = '/playable-race/index',
  PlayableRace = '/playable-race/{playableRaceId}',
  // Playable Specialization API
  PlayableSpecializationsIndex = '/plaable-specialization/index',
  PlayableSpecialization = '/playable-specialization/{specId}',
  // Power Type API
  PowerTypesIndex = '/power-type/index',
  PowerType = '/power-type/{powerTypeId}',
  // PvP Season API
  PvPSeasonsIndex = '/pvp-season/index',
  PvPSeason = '/pvp-season/{pvpSeasonId}',
  PvPLeaderboardsIndex = '/pvp-season/{pvpSeasonId}/pvp-leaderboard/index',
  PvPLeaderboard = '/pvp-season/{pvpSeasonId}/pvp-leaderboard/{pvpBracket}',
  PvPRewardsIndex = '/pvp-season/{pvpSeasonId}/pvp-reward/index',
  // PvP Tier API
  PvPTierMedia = '/media/pvp-tier/{pvpTierId}',
  PvPTiersIndex = '/pvp-tier/index',
  PvPTier = '/pvp-tier/{pvpTierId}',
  // Realm API
  RealmsIndex = '/realm/index',
  Realm = '/realm/{realmSlug}',
  // Region API
  RegionsIndex = '/region/index',
  Region = '/region/{regionId}',
  // Reputations API
  ReputationFactionsIndex = '/reputation-faction/index',
  ReputationFaction = '/reputation-faction/{reputationFactionId}',
  ReputationTiersIndex = '/reputation-tiers/index',
  ReputationTiers = '/reputaton-tiers/{reputationTierId}',
  // Title API
  TitlesIndex = '/title/index',
  Title = '/title/{titleId}',
  // WoW Token API (CN Not Supported)
  WoWTokenIndex = '/token/index',
}
