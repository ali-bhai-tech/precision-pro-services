import { z } from "zod";

const optionalText = (max) => z.string().trim().max(max).optional();

export const contactRequestSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100, "Name is too long."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number.")
    .max(30, "Phone number is too long.")
    .regex(/^[+\d\s().-]+$/, "Please enter a valid phone number."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(254, "Email is too long."),
  service: z.string().trim().min(1, "Please select a service.").max(120),
  date: optionalText(10).refine((value) => !value || /^\d{4}-\d{2}-\d{2}$/.test(value), {
    message: "Please enter a valid date.",
  }),
  time: optionalText(40),
  message: optionalText(2000),
});
