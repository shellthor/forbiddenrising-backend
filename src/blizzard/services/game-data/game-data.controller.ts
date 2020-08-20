import { Body, Controller, Get, Param } from '@nestjs/common'
import { GameDataAggregateDto } from '../../dto/game-data-endpoints.dto'
import { GameDataService } from './game-data.service'
import { ItemMedia } from '../../interfaces/game-data'

@Controller('game-data')
export class GameDataController {
  constructor(private readonly gameDataService: GameDataService) {}

  @Get('/item/:id')
  cacheItem(@Param('id') id: number): Promise<ItemMedia> {
    return this.gameDataService.getGameItemMedia(id)
  }

  @Get('/aggregate')
  getGameData(@Body() { endpoints, param }: GameDataAggregateDto): Promise<unknown> {
    return this.gameDataService.getGameData(endpoints[0], param)
  }
}
