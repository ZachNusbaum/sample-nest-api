import { Controller, Get, Param, UseFilters } from '@nestjs/common';
import { PostsService } from '../placeholder/posts/posts.service';
import { HttpNotFoundExceptionFilter } from '../filters/http-not-found-exception.filter';

@Controller('placeholder')
export class PlaceholderController {
  constructor(private readonly posts: PostsService) {}
  @Get()
  async getAll() {
    const posts = await this.posts.getAll();
    return posts;
  }

  @Get(':id')
  @UseFilters(new HttpNotFoundExceptionFilter())
  async getOne(@Param('id') id) {
    return await this.posts.getOne(id);
  }
}
