import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlaceholderModule } from './placeholder/placeholder.module';
import { CatsModule } from './cats/cats.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PermitsModule } from './permits/permits.module';

@Module({
  imports: [
    PlaceholderModule,
    CatsModule,
    MongooseModule.forRoot(process.env.MONGO_URL || 'mongodb://localhost/nest'),
    PermitsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
