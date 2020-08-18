import { Controller, Get, Param } from '@nestjs/common';
import { Auth } from '../auth/decorators/auth.decorator';
import { FindCharacterDto } from './../blizzard/dto/find-character.dto';
import { FormCharacter } from './form-character.entity';
import { FormCharacterService } from './form-character.service';

@Controller('form-character')
export class FormCharacterController {
  constructor(private readonly formCharacterService: FormCharacterService) {}

  @Auth()
  @Get('/:region/:realm/:name')
  formCharacterData(@Param() findCharacterDto: FindCharacterDto): Promise<FormCharacter> {
    return this.formCharacterService.create(findCharacterDto, true);
  }
}
