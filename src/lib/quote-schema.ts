import { z } from "zod";

export const projectTypes = [
  { value: "drain-repair", label: "Drain repair", detail: "Slow drain, backup, or clog" },
  { value: "water-heater", label: "Water heater", detail: "Installation, repair, or tankless conversion" },
  { value: "bathroom-renovation", label: "Bathroom renovation", detail: "Rough-in, fixture moves, or finish plumbing" },
  { value: "gas-fitting", label: "Gas fitting", detail: "New line, appliance hookup, or relocation" },
  { value: "well-pump", label: "Well pump", detail: "Installation, repair, or troubleshooting" },
  { value: "commercial", label: "Commercial", detail: "Shop, office, or small commercial space" },
] as const;

export const urgencyOptions = [
  { value: "urgent", label: "Urgent — need help soon" },
  { value: "this-week", label: "This week, if possible" },
  { value: "planning-ahead", label: "Just planning ahead, no rush" },
] as const;

export const contactMethodOptions = [
  { value: "call", label: "Call me" },
  { value: "text", label: "Text me" },
  { value: "email", label: "Email me" },
] as const;

export const quoteFormSchema = z.object({
  projectType: z.enum(projectTypes.map((p) => p.value) as [string, ...string[]], {
    message: "Choose the option that's closest to your situation",
  }),
  serviceArea: z.string().min(1, "Select your service area"),
  description: z
    .string()
    .min(10, "A couple more details would help (10 characters minimum)")
    .max(1000, "Keep it under 1000 characters — we'll get the rest on the call"),
  address: z.string().max(200).optional(),
  photoCount: z.number().int().min(0).max(6),
  urgency: z.enum(urgencyOptions.map((u) => u.value) as [string, ...string[]], {
    message: "Let us know how urgent this is",
  }),
  contactMethod: z.enum(contactMethodOptions.map((c) => c.value) as [string, ...string[]], {
    message: "Choose how we should reach you",
  }),
  name: z.string().min(2, "Enter your name"),
  phone: z
    .string()
    .min(7, "Enter a valid phone number")
    .max(20, "Enter a valid phone number"),
  email: z.union([z.literal(""), z.string().email("Enter a valid email address")]).optional(),
});

export type QuoteFormValues = z.infer<typeof quoteFormSchema>;

export const quoteStepFields: Record<number, (keyof QuoteFormValues)[]> = {
  0: ["projectType"],
  1: ["serviceArea", "description", "address"],
  2: ["urgency", "contactMethod", "name", "phone", "email"],
  3: [],
};
