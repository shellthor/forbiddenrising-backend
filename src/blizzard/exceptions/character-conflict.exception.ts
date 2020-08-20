import { ConflictException } from '@nestjs/common'

export class CharacterConflictException extends ConflictException {
  constructor(name: string, realm: string) {
    super('CharacterConflict', `${name}-${realm} was found to be in conflict.`)
  }
}
