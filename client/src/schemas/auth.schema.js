import {z} from "zod"

const min = import.meta.env.VITE_FIELD_MIN_LENGTH || 5

export const loginSchema = z.object({
    email: z
        .string()
        .trim()
        .min(1, {message: "Email is required"})
        .email({message: "Invalid email format"}),
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
    email: z
        .string()
        .trim()
        .min(1, {message: "Email is required"})
        .email({message: "Invalid email format"}),
    password: z
        .string()
        .trim()
        .min(min, {
            message: `Password must be at least ${min} characters long`,
        }),
})
