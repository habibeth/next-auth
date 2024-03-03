import * as z from "zod";


export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email must be required!"
    }),
    password: z.string().min(1, {
        message: "Password Must be Required!"
    }),
})