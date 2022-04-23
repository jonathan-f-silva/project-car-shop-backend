import { z } from 'zod';
import { VehicleSchema } from './VehicleInterface';

export const MotorcycleMongoSchema = {
  model: String,
  year: Number,
  color: String,
  buyValue: Number,
  category: String,
  engineCapacity: Number,
};

export const MotorcycleZodSchema = VehicleSchema.extend({
  category: z.enum(['Street', 'Custom', 'Trail']),
  engineCapacity: z.number().int().positive().max(2500),
});

export type Motorcycle = z.infer<typeof MotorcycleZodSchema>;
