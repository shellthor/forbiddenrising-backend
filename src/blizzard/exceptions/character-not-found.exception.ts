import { NotFoundException } from '@nestjs/common'

export class CharacterNotFoundException extends NotFoundException {
  constructor(name: string, realm: string) {
    super('CharacterNotFound', `${name}-${realm} was not found.`)
  }
}
