import z from 'zod';

export const registerSchema = z.object({
  name: z.string().trim().min(1, 'name is required').max(120),
  email: z.email('invalid email').max(255),
  password: z.string().min(8, 'password must be at least 8 characters').max(128),
});

export type RegisterDto = z.infer<typeof registerSchema>;
