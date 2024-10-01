import { z } from "zod";


export const usernameValidation = z
    .string()
    .min(2, "Username must be at least 2 characters long")
    .max(28, "Username must be at most 28 characters long")
    .regex( /^[a-zA-Z0-9_]+$/, "Username must not contain special characters");


export const signUPSchema = z.object({
    username: usernameValidation,
    email: z.string().email("Invalid email address"),
    password: z
        .string()
        .min(6, "Password must be at least 6 characters long")
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
            "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character"
        ),
    verifyCode: z.string(), 
})