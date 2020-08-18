import { RaiderIOCharacter } from 'src/raiderIO/interfaces/raider-io-character.interface';
import CharacterRaiderIOMock from './character-raiderio.mock';

export class RaiderIOServiceMock {
  constructor(public readonly id: number, public readonly name: string) {}

  getCharacterRaiderIO(name: string): RaiderIOCharacter {
    return CharacterRaiderIOMock(name);
  }
}
