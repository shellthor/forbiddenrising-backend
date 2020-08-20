import { Test } from '@nestjs/testing'
import { AccessControlGuard } from '../auth/guards/access-control.guard'
import { UserController } from './user.controller'
import { User } from './user.entity'
import { UserService } from './user.service'

jest.mock('./user.service')

describe.only('User Controller', () => {
  let userController: UserController
  let userService: UserService

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    })
      .overrideGuard(AccessControlGuard)
      .useValue({ canActivate: () => true })
      .compile()

    userService = module.get<UserService>(UserService)
    userController = module.get<UserController>(UserController)
  })

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const users = [new User()]

      jest.spyOn(userService, 'findAll').mockResolvedValueOnce({ result: users, total: 1 })

      expect(await userController.findAll(null)).toBe(users)
    })
  })
})
