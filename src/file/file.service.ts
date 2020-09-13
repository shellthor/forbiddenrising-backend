import { Injectable, UnauthorizedException } from '@nestjs/common'
import { nanoid } from 'nanoid'
import { EntityRepository } from '@mikro-orm/core'
import { InjectRepository } from '@mikro-orm/nestjs'
import { User } from '../user/user.entity'
import { FileUpload } from './file.entity'
import { File } from './interfaces/file.interface'

@Injectable()
export class FileService {
  constructor(
    @InjectRepository(FileUpload)
    private readonly fileRepository: EntityRepository<FileUpload>,
  ) {}

  async create(file: File, user?: User): Promise<FileUpload> {
    const fileEntity = new FileUpload()
    fileEntity.filename = Date.now() + '-' + file.originalname
    fileEntity.mimetype = file.mimetype
    fileEntity.path = 'uploads/applications'
    fileEntity.encoding = file.encoding
    fileEntity.size = file.size
    fileEntity.file = file.buffer

    if (user) {
      fileEntity.author = user
    }

    await this.fileRepository.persistAndFlush(fileEntity)

    return fileEntity
  }

  find(ids: number[]): Promise<FileUpload[]> {
    return this.fileRepository.find({ id: { $in: ids } }, ['author'])
  }

  async delete(id: number, user?: User): Promise<FileUpload> {
    const file = await this.fileRepository.findOneOrFail(id, ['author'])

    if (user && file.author.id !== user.id) {
      throw new UnauthorizedException('You do not own this file')
    }

    // await unlink(file.path)

    this.fileRepository.remove(file)
    await this.fileRepository.flush()

    return file
  }
}
