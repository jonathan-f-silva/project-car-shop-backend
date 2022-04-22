import { z } from 'zod';

const ParamsSchema = z.object({
  id: z.string().min(24),
});

export default ParamsSchema;
