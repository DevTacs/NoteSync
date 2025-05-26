import {z} from "zod"

export const noteSchema = z.object({
    title: z.string().trim().min(1, {message: "Title is required"}),
    content: z.string().trim().min(1, {message: "Content is required"}),
})
