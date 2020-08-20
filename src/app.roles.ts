import { AccessControl } from 'accesscontrol'

export enum Roles {
  GuildMaster = 'Rank0',
  GuildMasterAlt = 'Rank1',
  CoGuildMaster = 'Rank2',
  Officer = 'Rank3',
  Veteran = 'Rank4',
  Raider = 'Rank5',
  RaiderAlt = 'Rank6',
  Recruit = 'Rank7',
  Member = 'Rank8',
  Guest = 'Rank9',
}

export const accessControl = new AccessControl()

accessControl
  .grant(Roles.Guest)
  .updateOwn('user', ['nickname', 'avatar'])
  .updateOwn('form-submission')
  .deleteOwn('user')
  .grant(Roles.Member)
  .extend(Roles.Guest)
  .grant(Roles.Recruit)
  .extend(Roles.Member)
  .grant(Roles.RaiderAlt)
  .extend(Roles.Member)
  .grant(Roles.Raider)
  .extend(Roles.RaiderAlt)
  .grant(Roles.Veteran)
  .extend(Roles.Raider)
  .grant(Roles.Officer)
  .extend(Roles.Veteran)
  .readAny('user')
  .createAny('slide')
  .updateAny('slide')
  .deleteAny('slide')
  .createAny('article')
  .updateAny('article')
  .deleteAny('article')
  .createAny('question')
  .updateAny('question')
  .deleteAny('question')
  .updateAny('form-submission')
  .deleteAny('form-submission')
  .grant(Roles.CoGuildMaster)
  .extend(Roles.Officer)
  .grant(Roles.GuildMasterAlt)
  .extend(Roles.CoGuildMaster)
  .grant(Roles.GuildMaster)
  .extend(Roles.GuildMasterAlt)
  .createAny('file-upload')
  .updateAny('file-upload')
  .deleteAny('file-upload')
  .createAny('form')
  .updateAny('form')
  .deleteAny('form')
  .createAny('raid')
  .updateAny('user')
  .deleteAny('user')
  .updateAny('raid')

export default accessControl
