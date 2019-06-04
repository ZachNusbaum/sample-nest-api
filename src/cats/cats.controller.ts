import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private cats: CatsService) {}
  @Get()
  async findAll() {
    return this.cats.findAll();
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.cats.create(createCatDto);
  }

  @Get(':id')
  async show(@Param('id') id) {
    return this.cats.get(id);
  }
}
