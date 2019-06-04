import { Module, HttpModule } from '@nestjs/common';
import { PlaceholderController } from './placeholder.controller';
import { PostsService } from './posts/posts.service';

@Module({
  controllers: [PlaceholderController],
  providers: [PostsService],
  exports: [PostsService],
  imports: [HttpModule],
})
export class PlaceholderModule {}
