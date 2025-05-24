import {z} from "zod"

const min = process.env.FIELD_MIN_LENGTH || 5

export const loginSchema = z.object({
    email: z.string().trim().email({
        message: "Invalid email format",
    }),

    password: z
        .string()
        .trim()
        .min(min, {
            message: `Password must be at least ${min} characters long`,
        }),
})

export const registerSchema = z.object({
    username: z
        .string()
        .trim()
        .min(min, {
            message: `Username must be at least ${min} characters long`,
        }),
    email: z.string().trim().email({
        message: "Invalid email format",
    }),
    password: z
        .string()
        .trim()
        .min(min, {
            message: `Password must be at least ${min} characters long`,
        }),
})
