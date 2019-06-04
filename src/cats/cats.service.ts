import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCatDto } from './dto/create-cat.dto';

interface Cat {
  name: string;
  age: number;
  breed: string;
  id?: string;
}

@Injectable()
export class CatsService {
  constructor(@InjectModel('Cat') private readonly catModel: Model<Cat>) {}
  async findAll(): Promise<Cat[]> {
    return await this.catModel.find().exec();
  }
  async create(createCatDto: CreateCatDto) {
    const createdCat = new this.catModel(createCatDto);
    return await createdCat.save();
  }
}
