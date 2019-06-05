import { Controller, Get, Post, Body, Param, Req } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  constructor(private cats: CatsService) {}
  @Get()
  async findAll() {
    return this.cats.findAll();
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return this.cats.create(createCatDto);
  }

  @Get('ip')
  showIP(@Req() request: Request) {
    const { headers, connection } = request;
    const { remoteAddress } = connection;
    return { ip: remoteAddress, headers };
  }

  @Get(':id')
  async show(@Param('id') id) {
    return this.cats.get(id);
  }
}
