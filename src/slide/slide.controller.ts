import { Body, CacheTTL, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common'
import { Auth } from '../auth/decorators/auth.decorator'
import { CreateSlideDto } from './dto/create-slide.dto'
import { UpdateSlideDto } from './dto/update-slide.dto'
import { Slide } from './slide.entity'
import { SlideService } from './slide.service'

@Controller('slide')
export class SlideController {
  constructor(private readonly slideService: SlideService) {}

  @Auth('slide', 'create:any')
  @Post()
  create(@Body() createSlideDto: CreateSlideDto): Promise<Slide> {
    return this.slideService.create(createSlideDto)
  }

  @Get()
  @CacheTTL(600)
  findAll(@Query('take') take?: number, @Query('skip') skip?: number): Promise<Slide[]> {
    return this.slideService.findAll(take, skip)
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Slide> {
    return this.slideService.findOne(id)
  }

  @Auth('slide', 'update:any')
  @Put(':id')
  update(@Param('id') id: number, @Body() updateSlideDto: UpdateSlideDto): Promise<Slide> {
    return this.slideService.update(id, updateSlideDto)
  }

  @Auth('slide', 'delete:any')
  @Delete(':id')
  delete(@Param('id') id: number): Promise<Slide> {
    return this.slideService.delete(id)
  }
}
