import { z } from "zod";

export const feedbackCategories = [
  { value: "class", label: "Class experience" },
  { value: "trainer", label: "Trainer / instructor" },
  { value: "facilities", label: "Studio & facilities" },
  { value: "membership", label: "Membership & pricing" },
  { value: "website", label: "Website & booking" },
  { value: "general", label: "General suggestion" },
] as const;

export const feedbackSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  rating: z
    .number({ error: "Please select a rating." })
    .int()
    .min(1, "Please select a rating.")
    .max(5),
  category: z.string().min(1, "Please select a feedback category."),
  message: z.string().min(10, "Feedback must be at least 10 characters."),
  wouldRecommend: z.boolean(),
});

export type FeedbackFormValues = z.infer<typeof feedbackSchema>;
