import { z } from "zod";

export const PROJECT_TYPES = [
  "New Stripe integration",
  "Migration from another provider",
  "Bug fix / support",
  "Not sure yet",
] as const;

export const BUDGET_RANGES = [
  "Under $2,500",
  "$2,500–$8,000",
  "$8,000–$25,000",
  "$25,000+",
] as const;

export const TIMELINES = [
  "ASAP",
  "Within a month",
  "1–3 months",
  "Just exploring",
] as const;

export const consultationStepOneSchema = z.object({
  projectType: z.enum(PROJECT_TYPES, { message: "Please select a project type." }),
  budget: z.enum(BUDGET_RANGES, { message: "Please select a budget range." }),
  timeline: z.enum(TIMELINES, { message: "Please select a timeline." }),
});

export const consultationStepTwoSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.email("Please enter a valid email address."),
  company: z.string().optional(),
  details: z.string().min(10, "A few sentences helps us scope this accurately."),
});

export const consultationSchema = consultationStepOneSchema.and(
  consultationStepTwoSchema,
);

export type ConsultationFormValues = z.infer<typeof consultationSchema>;
