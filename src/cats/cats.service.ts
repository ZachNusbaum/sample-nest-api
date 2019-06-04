import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './cat.interface';
@Injectable()
export class CatsService {
  constructor(@InjectModel('Cat') private readonly catModel: Model<Cat>) {}
  async findAll(): Promise<Cat[]> {
    return await this.catModel.find(null, '-__v').exec();
  }
  async create(createCatDto: CreateCatDto) {
    const createdCat = new this.catModel(createCatDto);
    return await createdCat.save();
  }
  async get(catID: string) {
    const cat = await this.catModel.findById(catID, '-_id -__v');
    return cat;
  }
}
