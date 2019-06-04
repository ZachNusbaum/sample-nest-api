import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlaceholderModule } from './placeholder/placeholder.module';

@Module({
  imports: [PlaceholderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
