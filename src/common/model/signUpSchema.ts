import {z} from "zod";

export const SignUpSchema = z.object({
    username: z
        .string()
        .min(3,{ message: 'Minimum number of characters 6' })
        .max(10, { message: 'Maximum number of characters 30' }),
    email: z
        .string()
        .email({ message: 'Enter your email' }),
    password: z
        .string()
        .min(5)
        .max(15),
    passwordConfirm: z
        .string()
        .min(5)
        .max(15)
})
export type SignUpSchemaType = z.infer<typeof SignUpSchema>;