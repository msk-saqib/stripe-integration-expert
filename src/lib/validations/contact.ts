import { z } from "zod";

export const CONTACT_TOPICS = [
  "Stripe Checkout Integration",
  "Subscription & Billing",
  "Connect / Marketplace",
  "Payment Methods",
  "Bug Fix / Support",
  "Something Else",
] as const;

export const contactSchema = z.object({
  firstName: z.string().min(1, "Please enter your first name."),
  lastName: z.string().min(1, "Please enter your last name."),
  workEmail: z.email("Please enter a valid email address."),
  company: z.string().optional(),
  topic: z.enum(CONTACT_TOPICS, { message: "Please select a topic." }),
  message: z.string().min(10, "Please provide a few more details (10+ characters)."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
