import { Injectable, UnauthorizedException } from '@nestjs/common';
import fs from 'fs';
import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { User } from '../user/user.entity';
import { FileUpload } from './file.entity';
import { File } from './interfaces/file.interface';

const { unlink } = fs.promises;

@Injectable()
export class FileService {
  constructor(
    @InjectRepository(FileUpload)
    private readonly fileRepository: EntityRepository<FileUpload>,
  ) {}

  async create(files: File[], user?: User): Promise<FileUpload[]> {
    const fileEntities = files.map(file => {
      const fileEntity = new FileUpload();
      fileEntity.filename = file.filename;
      fileEntity.mimetype = file.mimetype;
      fileEntity.path = file.path;
      fileEntity.size = file.size;

      if (user) {
        fileEntity.author = user;
      }

      return fileEntity;
    });

    await this.fileRepository.persistAndFlush(fileEntities);

    return fileEntities;
  }

  find(ids: number[]): Promise<FileUpload[]> {
    return this.fileRepository.find({ id: { $in: ids } }, ['author']);
  }

  async delete(id: number, user?: User): Promise<FileUpload> {
    const file = await this.fileRepository.findOneOrFail(id, ['author']);

    if (user && file.author.id !== user.id) {
      throw new UnauthorizedException('You do not own this file');
    }

    await unlink(file.path);

    this.fileRepository.remove(file);
    await this.fileRepository.flush();

    return file;
  }
}
