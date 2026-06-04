import z from 'zod';

export const loginSchema = z.object({
  identifier: z.union([z.string().min(3), z.email()]),
  password: z.string().min(1, { error: 'Password wajib diisi' }).min(6, { error: 'Password minimal 6 karakter' }),
});

export type LoginDto = z.infer<typeof loginSchema>;
