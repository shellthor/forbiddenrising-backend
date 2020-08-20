import { Body, Controller, Get, Param, Put, Query } from '@nestjs/common'
import { ApiOAuth2 } from '@nestjs/swagger'
import { Auth } from '../auth/decorators/auth.decorator'
import { FindAllDto } from './dto/find-all.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { Usr } from './user.decorator'
import { User } from './user.entity'
import { UserService } from './user.service'

@ApiOAuth2(['user'])
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Auth('user', 'read:any')
  @Get()
  findAll(@Query() findAllDto: FindAllDto): Promise<{ result: User[]; total: number }> {
    return this.userService.findAll(findAllDto.take, findAllDto.skip)
  }

  @Auth()
  @Get('/me')
  findMe(@Usr() user: User): User {
    delete user.discord_access_token
    delete user.discord_refresh_token
    delete user.blizzard_token

    return user
  }

  @Auth('user', 'read:any')
  @Get(':id')
  findOne(@Param('id') id: number): Promise<User> {
    return this.userService.findOne(id)
  }

  @Auth('user', 'update:own')
  @Put(':id')
  update(@Usr() user: User, @Body() updateUserDto: UpdateUserDto): Promise<User> {
    return this.userService.update(user.id, updateUserDto)
  }
}
