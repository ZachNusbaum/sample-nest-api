import { Controller, Get, Post, Body } from '@nestjs/common';
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
}
