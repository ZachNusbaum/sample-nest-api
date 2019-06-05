import { Schema, SchemaTypes } from 'mongoose';

export const PermitSchema = new Schema({
  firstName: String,
  lastName: String,
  permitNumber: String,
  active: Boolean,
  createdAt: { type: SchemaTypes.Date, default: Date },
  expiresAt: { type: SchemaTypes.Date, default: null },
});
