import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from '../placeholder/posts/posts.service';

@Controller('placeholder')
export class PlaceholderController {
  constructor(private readonly posts: PostsService) {}
  @Get()
  async getAll() {
    const posts = await this.posts.getAll();
    return posts;
  }

  @Get(':id')
  async getOne(@Param('id') id) {
    return await this.posts.getOne(id);
  }
}
