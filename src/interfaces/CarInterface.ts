import { Schema } from 'mongoose';
import { z } from 'zod';
import { VehicleSchema } from './VehicleInterface';

export type Car = z.infer<typeof CarZodSchema>;

export const CarMongoSchema = new Schema({
  model: String,
  year: Number,
  color: String,
  buyValue: Number,
  doorsQty: Number,
  seatsQty: Number,
}, { versionKey: false });

// https://github.com/colinhacks/zod#extend
export const CarZodSchema = VehicleSchema.extend({
  doorsQty: z.number().int().min(2).max(4),
  seatsQty: z.number().int().min(2).max(7),
});
