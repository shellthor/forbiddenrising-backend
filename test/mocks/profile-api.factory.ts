import { AxiosResponse } from 'axios';
import {
  CharacterEquipmentSummary,
  CharacterMediaSummary,
  CharacterProfileSummary,
  CharacterRaids,
  CharacterSpecializationsSummary,
} from 'src/blizzard/interfaces/profile';
import CharacterEquipmentSummaryMock from './character-equipment-summary.mock';
import CharacterMediaSummaryMock from './character-media-summary.mock';
import CharacterProfileSummaryMock from './character-profile-summary.mock';
import CharacterRaidsMock from './character-raids.mock';
import CharacterSpecializationsSummaryMock from './character-specialization-summary.mock';

export class ProfileServiceMock {
  private readonly axios: AxiosResponse = {
    data: null,
    status: 200,
    statusText: 'testing',
    headers: {},
    config: null,
    request: null,
  };

  constructor(public readonly id: number, public readonly name: string) {}

  private getAxiosResponse<T>(data: T): AxiosResponse<T> {
    return Object.assign({}, this.axios, { data });
  }

  getCharacterProfileSummary(): AxiosResponse<CharacterProfileSummary> {
    return this.getAxiosResponse(CharacterProfileSummaryMock(this.id, this.name));
  }

  getCharacterSpecializationsSummary(): AxiosResponse<CharacterSpecializationsSummary> {
    return this.getAxiosResponse(CharacterSpecializationsSummaryMock(this.id, this.name));
  }

  getCharacterMediaSummary(): AxiosResponse<CharacterMediaSummary> {
    return this.getAxiosResponse(CharacterMediaSummaryMock(this.id, this.name));
  }

  getCharacterEquipmentSummary(): AxiosResponse<CharacterEquipmentSummary> {
    return this.getAxiosResponse(CharacterEquipmentSummaryMock(this.id, this.name));
  }

  getCharacterRaids(): AxiosResponse<CharacterRaids> {
    return this.getAxiosResponse(CharacterRaidsMock(this.id, this.name));
  }
}
