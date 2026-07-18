import { z } from "zod";

export const signupSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters."),
  email: z.string().email("Enter a valid email."),
  mobile: z.string().optional(),
  password: z.string().min(6, "Password must be at least 6 characters."),
});

export type SignupData = z.infer<typeof signupSchema>;