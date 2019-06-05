import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Permit } from '../interfaces/permit.interface';
import { CreatePermitDto } from './dto/create-permit.dto';
@Injectable()
export class PermitsService {
  constructor(@InjectModel('Permit') private readonly permits: Model<Permit>) {}

  async getAll() {
    return await this.permits.find().exec();
  }

  async create(createPermitDto: CreatePermitDto) {
    const permit = await this.permits.create(createPermitDto);
    return permit;
  }

  async verify(permitNumber: string) {
    const permit = await this.permits.findOne({ permitNumber });
    if (permit) {
      return {
        valid: true,
        id: permitNumber,
        expiresAt: permit.expiresAt,
        permitHolder: `${permit.lastName}, ${permit.firstName}`,
      };
    } else {
      return { valid: false };
    }
  }
}
