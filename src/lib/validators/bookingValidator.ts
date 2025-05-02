import { z } from 'zod';

export const bookingSchema = z.object({
  serviceId: z.string(),
  date: z.string().datetime(),
  status: z.enum(['pending', 'confirmed', 'cancelled']),
});