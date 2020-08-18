export interface ReportInfo {
  report: Report;
  instances: Raid;
}

export interface Raid {
  [instance: string]: FightDifficulties;
}

export interface FightDifficulties {
  [difficulty: string]: Fights;
}

export interface Fights {
  [name: string]: FightInfo;
}

export interface FightInfo {
  ids: number[];
  kill: boolean;
  killId: number;
  percent: number;
  keystoneLevel?: number;
}

export interface WCLOptions {
  key: string;
  channel: string;
  watching: string[];
}

export interface ReportList {
  id: string;
  title: string;
  owner: string;
  start: number;
  end: number;
  zone: number;
}

export interface Report {
  fights: (Fight | QuickFight | BossFight | Keystone)[];
  lang: string;
  friendlies: Player[];
  enemies: Enemy[];
  friendlyPets: any; // NYI
  enemyPets: any; // NYI
  phases: Phase[];
  logVersion: number;
  gameVersion: number;
  title: string;
  owner: string;
  start: number;
  end: number;
  zone: number;
  exportedCharacters: Character[];
}

export interface Fight {
  id: number;
  start_time: number;
  end_time: number;
  boss: number;
  name: string;
}

export interface QuickFight extends Fight {
  originalBoss: number;
}

export interface BossFight extends Fight {
  size: number;
  difficulty: number;
  kill: boolean;
  partial: number;
  bossPercentage: number;
  fightPercentage: number;
  lastPhaseForPercentDisplay: number;
  maps: string[];
}

export interface Keystone extends Fight {
  size: number;
  difficulty: number;
  kill: boolean;
  partial: number;
  keystoneLevel: number;
  affixes: number[];
  bossPercentage: number;
  fightPercentage: number;
  lastPhaseForPercentageDisplay: number;
  maps: number[];
}

export interface Player {
  name: string;
  id: number;
  guild: number;
  type: string;
  server: string;
  icon: string;
  fights: Pick<Fight, 'id'>[];
}

export interface Enemy {
  name: string;
  id: number;
  guid: number;
  type: string;
  icon: string;
  fights: EnemyFight[];
}

export interface EnemyFight {
  id: number;
  instance: number;
  groups?: number;
}

export interface Phase {
  boss: number;
  phases: string[];
}

export interface Character {
  id: number;
  name: string;
  realm: string;
  region: string;
}

export interface Zone {
  id: number;
  name: string;
  frozen: boolean;
  encounters: Encounter[];
  brackets: Bracket;
}

export interface Encounter {
  id: number;
  name: string;
}

export interface Bracket {
  min: number;
  max: number;
  bucket: number;
  type: string;
}
