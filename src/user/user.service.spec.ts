import { Test, TestingModule } from '@nestjs/testing'
import { UserFactory } from '../../test/factories/User'
import { Provider } from '../auth/auth.service'
import { UpdateUserDto } from './dto/update-user.dto'
import { User } from './user.entity'
import { UserService } from './user.service'

jest.mock('./user.service')

describe('UserService', () => {
  let service: UserService

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile()

    service = module.get<UserService>(UserService)
  })

  it('should return a user after create', async () => {
    const user = UserFactory.build()

    jest.spyOn(service, 'create').mockImplementation(async () => user as User)

    expect(await service.create(1, 'btag', '12345')).toEqual(user)
  })

  it('should return an array of users', async () => {
    const users = UserFactory.buildList(10)

    jest.spyOn(service, 'findAll').mockResolvedValue(users as never)

    expect(await service.findAll()).toEqual(users)
  })

  it('should return a single user', async () => {
    const user = UserFactory.build()

    jest.spyOn(service, 'findOne').mockReturnValue(Promise.resolve(user) as Promise<User>)

    expect(await service.findOne(1)).toEqual(user)
  })

  it('should return a single user from a payload', async () => {
    const user = UserFactory.build()

    jest
      .spyOn(service, 'findOneByJwtPayload')
      .mockReturnValue(Promise.resolve(user) as Promise<User>)

    expect(await service.findOneByJwtPayload({ id: 1 })).toEqual(user)
  })

  it('should return a single user from a provider id', async () => {
    const user = UserFactory.build()

    jest
      .spyOn(service, 'findOneByProviderId')
      .mockReturnValue(Promise.resolve(user) as Promise<User>)

    expect(await service.findOneByProviderId(1, Provider.BLIZZARD)).toEqual(user)
  })

  it('should return an array of users in the guild', async () => {
    const users = UserFactory.buildList(10)

    jest
      .spyOn(service, 'findAllWithGuildCharacters')
      .mockReturnValue(Promise.resolve(users) as Promise<User[]>)

    expect(await service.findAllWithGuildCharacters()).toEqual(users)
  })

  it('should return a user when updating', async () => {
    const user = UserFactory.build()

    jest.spyOn(service, 'update').mockImplementation(async () => user as User)

    expect(await service.update(1, new UpdateUserDto())).toEqual(user)
  })
})
