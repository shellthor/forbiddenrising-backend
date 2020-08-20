import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'
import { Auth } from '../auth/decorators/auth.decorator'
import { CreateFormDto } from './dto/create-form.dto'
import { FindFormDto } from './dto/find-form.dto'
import { UpdateFormDto } from './dto/update-form.dto'
import { Form } from './form.entity'
import { FormService } from './form.service'

@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Auth('form', 'create:any')
  @Post()
  create(@Body() createFormDto: CreateFormDto): Promise<Form> {
    return this.formService.create(createFormDto)
  }

  @Get()
  findAll(): Promise<Form[]> {
    return this.formService.findAll()
  }

  @Get(':id')
  findOne(@Param() { id }: FindFormDto): Promise<Form> {
    return this.formService.findOne(id)
  }

  @Auth('form', 'update:any')
  @Patch(':id')
  update(@Param() { id }: FindFormDto, @Body() updateFormDto: UpdateFormDto): Promise<Form> {
    return this.formService.update(id, updateFormDto)
  }

  @Auth('form', 'delete:any')
  @Delete(':id')
  delete(@Param() { id }: FindFormDto): Promise<Form> {
    return this.formService.delete(id)
  }
}
