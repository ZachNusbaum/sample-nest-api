import { Module } from '@nestjs/common';
import { PermitsController } from './permits.controller';
import { PermitsService } from './permits.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PermitSchema } from './schemas/permit.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Permit', schema: PermitSchema }]),
  ],
  controllers: [PermitsController],
  providers: [PermitsService],
})
export class PermitsModule {}
