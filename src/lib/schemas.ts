import { z } from "zod";



export const loginSchema = z.object({
    email: z.string().email({message: "Invalid email"}),
    password: z.string().min(8, {message: "Password must be at least 8 characters"}),
});

export const registerSchema = z.object({
    email: z.string().email({message: "Invalid email"}),
    username: z.string().min(3, {message: "Username must be at least 3 characters"}),
    password: z.string().min(8, {message: "Password must be at least 8 characters"}),
});

export type LoginSchema = z.infer<typeof loginSchema>;
export type RegisterSchema = z.infer<typeof registerSchema>;


export const createcategoryschema = z.object({
    name: z.string().min(3, {message: "Name must be at least 3 characters"}),
    color: z.enum(["red", "blue", "green", "yellow", "purple"]),
});

export type CreateCategorySchema = z.infer<typeof createcategoryschema>;