import { Controller, Get } from '@nestjs/common';
import { PostsService } from '../placeholder/posts/posts.service';

@Controller('placeholder')
export class PlaceholderController {
  constructor(private readonly posts: PostsService) {}
  @Get()
  async getAll() {
    let posts = await this.posts.getAll();
    console.log(posts);
    return posts;
  }
}
