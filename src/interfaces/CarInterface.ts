import { z } from 'zod';
import { VehicleSchema } from './VehicleInterface';

export type Car = z.infer<typeof CarZodSchema>;

export const CarMongoSchema = {
  model: String,
  year: Number,
  color: String,
  buyValue: Number,
  doorsQty: Number,
  seatsQty: Number,
};

// https://github.com/colinhacks/zod#extend
export const CarZodSchema = VehicleSchema.extend({
  doorsQty: z.number().int().min(2).max(4),
  seatsQty: z.number().int().min(2).max(7),
});
