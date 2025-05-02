import { z } from 'zod';

export const serviceSchema = z.object({
  name: z.string().min(2),
  description: z.string().min(10),
  price: z.number().positive(),
  rating: z.number().min(0).max(5),
});