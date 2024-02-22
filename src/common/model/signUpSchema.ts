import { z } from 'zod'

export const SignUpSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Minimum number of characters 6' })
    .max(10, { message: 'Maximum number of characters 30' })
    .trim(),
  email: z.string().email({ message: 'Incorrect email' }),
  password: z
    .string()
    .min(3, { message: 'Minimum number of characters 6' })
    .max(10, { message: 'Maximum number of characters 30' })
    .trim(),
  passwordConfirm: z
    .string()
    .min(3, { message: 'Minimum number of characters 6' })
    .max(10, { message: 'Maximum number of characters 30' }),
})
export type SignUpSchemaType = z.infer<typeof SignUpSchema>
