import { Controller, Get, Post, Body } from '@nestjs/common';
import { PermitsService } from './permits.service';
import { CreatePermitDto } from './dto/create-permit.dto';
import { Ulid } from 'id128';
@Controller('permits')
export class PermitsController {
  constructor(private readonly permits: PermitsService) {}

  @Get()
  async getAll() {
    return await this.permits.getAll();
  }

  @Post()
  async create(@Body() createPermitDto: CreatePermitDto) {
    createPermitDto.permitNumber = Ulid.generate().toRaw();
    return await this.permits.create(createPermitDto);
  }
}
