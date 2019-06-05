import { Module } from '@nestjs/common';
import { PermitsController } from './permits.controller';
import { PermitsService } from './permits.service';

@Module({
  controllers: [PermitsController],
  providers: [PermitsService]
})
export class PermitsModule {}
