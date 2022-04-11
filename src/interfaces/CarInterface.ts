import { z } from 'zod';
import { VehicleSchema } from './VehicleInterface';

// https://github.com/colinhacks/zod#extend
const CarSchema = VehicleSchema.extend({
  doorsQty: z.number().int().min(2).max(4),
  seatsQty: z.number().int().min(2).max(7),
});

type Car = z.infer<typeof CarSchema>;

export { CarSchema, Car };
