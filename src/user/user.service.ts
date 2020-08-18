import { BadRequestException, Injectable } from '@nestjs/common';
import { EntityRepository, QueryOrder, wrap } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { DiscordProfile, Provider } from '../auth/auth.service';
import { JWTPayload } from '../auth/dto/jwt.dto';
import { UpdateUserDiscordDTO } from './dto/update-user-discord.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';
import { Roles } from '../app.roles';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: EntityRepository<User>,
  ) {}

  async create(
    discord_id: string,
    access_token: string,
    refresh_token: string,
    profile: DiscordProfile,
  ): Promise<User> {
    const user = this.userRepository.create({
      discord_id,
      discord_username: profile.username,
      discord_discriminator: profile.discriminator,
      discord_access_token: access_token,
      discord_refresh_token: refresh_token,
      discord_avatar: profile.avatar,
      roles: [Roles.Fan],
    });

    await this.userRepository.persistAndFlush(user);

    return user;
  }

  async findAll(
    limit = 100,
    offset = 0,
  ): Promise<{
    result: User[];
    total: number;
  }> {
    const [result, total] = await this.userRepository.findAndCount(
      {},
      {
        orderBy: { id: QueryOrder.DESC },
        limit,
        offset,
      },
    );

    return { result, total };
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOneOrFail(id);
  }

  async findOneByJwtPayload(payload: JWTPayload): Promise<User> {
    return this.userRepository.findOne({ id: payload.id }, true);
  }

  async findOneByProviderId(thirdPartyId: number | string, provider: Provider): Promise<User> {
    if (provider === Provider.DISCORD) {
      return this.userRepository.findOne(
        { discord_id: thirdPartyId as string },
        { fields: ['discord_id'] },
      );
    }

    throw new BadRequestException('Invalid provider');
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userRepository.findOneOrFail(id);

    wrap(user).assign(updateUserDto);

    await this.userRepository.flush();

    return user;
  }

  async updateByDiscord(user: User, updateUserDiscorDto: UpdateUserDiscordDTO): Promise<User> {
    wrap(user).assign(updateUserDiscorDto);

    await this.userRepository.flush();

    return user;
  }
}
