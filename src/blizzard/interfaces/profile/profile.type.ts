import { ProfileEndpoints } from '../../enums/profile-api.enum';
import {
  AccountCollectionsIndex,
  AccountMountsCollectionSummary,
  AccountPetsCollectionSummary,
  AccountProfileSummary,
  CharacterAchievementsSummary,
  CharacterAchievementStatistics,
  CharacterAppearanceSummary,
  CharacterCollectionsIndex,
  CharacterCompletedQuests,
  CharacterEquipmentSummary,
  CharacterHunterPetsSummary,
  CharacterMediaSummary,
  CharacterMountsCollectionSummary,
  CharacterMythicKeystoneProfileIndex,
  CharacterMythicKeystoneSeasonDetails,
  CharacterPetsCollectionSummary,
  CharacterProfileStatus,
  CharacterProfileSummary,
  CharacterPvPBracketStatistics,
  CharacterPvPSummary,
  CharacterQuests,
  CharacterReputationsSummary,
  CharacterSpecializationsSummary,
  CharacterStatisticsSummary,
  CharacterTitlesSummary,
  Guild,
  GuildAchievements,
  GuildActivity,
  GuildRoster,
  ProtectedCharacterProfileSummary,
} from './index';

export type ProfileEndpointReturnType = {
  // Account Profile API
  [ProfileEndpoints.AccountProfileSummary]: AccountProfileSummary;
  [ProfileEndpoints.ProtectedAccountProfileSummary]: ProtectedCharacterProfileSummary;
  [ProfileEndpoints.AccountCollectionsIndex]: AccountCollectionsIndex;
  [ProfileEndpoints.AccountMountsCollectionSummary]: AccountMountsCollectionSummary;
  [ProfileEndpoints.AccountPetsCollectionSummary]: AccountPetsCollectionSummary;
  // Character Achievements API
  [ProfileEndpoints.CharacterAchievementsSummary]: CharacterAchievementsSummary;
  [ProfileEndpoints.CharacterAchievementStatistics]: CharacterAchievementStatistics;
  // Character Appearance API
  [ProfileEndpoints.CharacterAppearanceSummary]: CharacterAppearanceSummary;
  // Character Collections API
  [ProfileEndpoints.CharacterCollectionsIndex]: CharacterCollectionsIndex;
  [ProfileEndpoints.CharacterMountsCollectionSummary]: CharacterMountsCollectionSummary;
  [ProfileEndpoints.CharacterPetsCollectionSummary]: CharacterPetsCollectionSummary;
  // Character Equipment API
  [ProfileEndpoints.CharacterEquipmentSummary]: CharacterEquipmentSummary;
  // Character Hunter Pets APi
  [ProfileEndpoints.CharacterHunterPetsSummary]: CharacterHunterPetsSummary;
  // Character Media Summary
  [ProfileEndpoints.CharacterMediaSummary]: CharacterMediaSummary;
  // Character Mythic Keystone Profile API
  [ProfileEndpoints.CharacterMythicKeystoneProfileIndex]: CharacterMythicKeystoneProfileIndex;
  [ProfileEndpoints.CharacterMythicKeystoneSeasonDetails]: CharacterMythicKeystoneSeasonDetails;
  // Character Profile Summary
  [ProfileEndpoints.CharacterProfileSummary]: CharacterProfileSummary;
  [ProfileEndpoints.CharacterProfileStatus]: CharacterProfileStatus;
  // Character PvP API
  [ProfileEndpoints.CharacterPvPBracketStatistics]: CharacterPvPBracketStatistics;
  [ProfileEndpoints.CharacterPvPSummary]: CharacterPvPSummary;
  // Character Quests API
  [ProfileEndpoints.CharacterQuests]: CharacterQuests;
  [ProfileEndpoints.CharacterCompletedQuests]: CharacterCompletedQuests;
  // Character Reputations API
  [ProfileEndpoints.CharacterReputationsSummary]: CharacterReputationsSummary;
  // Character Specializations API
  [ProfileEndpoints.CharacterSpecializationsSummary]: CharacterSpecializationsSummary;
  // Character Statistics API
  [ProfileEndpoints.CharacterStatisticsSummary]: CharacterStatisticsSummary;
  // Character Titles API
  [ProfileEndpoints.CharacterTitlesSummary]: CharacterTitlesSummary;
  // Guild API
  [ProfileEndpoints.Guild]: Guild;
  [ProfileEndpoints.GuildActivity]: GuildActivity;
  [ProfileEndpoints.GuildAchievements]: GuildAchievements;
  [ProfileEndpoints.GuildRoster]: GuildRoster;
};
