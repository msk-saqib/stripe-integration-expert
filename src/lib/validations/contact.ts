import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.email("Please enter a valid email address."),
  company: z.string().optional(),
  message: z.string().min(10, "Please provide a few more details (10+ characters)."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
