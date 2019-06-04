import { Schema } from 'mongoose';

export const CatSchema = new Schema({
  id: String,
  name: String,
  age: Number,
  breed: String,
});
