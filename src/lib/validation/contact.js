import { z } from "zod";
import { services } from "../../data/services";

const optionalText = (max) =>
  z.preprocess(
    (value) => (value === "" ? undefined : value),
    z.string().trim().max(max).optional(),
  );
const allowedTimes = ["Morning (8am – 12pm)", "Afternoon (12pm – 4pm)", "Evening (4pm – 7pm)"];

const validDate = (value) => {
  if (!value) return true;
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return (
    date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day
  );
};

export const contactRequestSchema = z
  .object({
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
    service: z
      .string()
      .trim()
      .min(1, "Please select a service.")
      .max(120)
      .refine(
        (value) => value === "Other / Not sure" || services.some((item) => item.title === value),
        {
          message: "Please select a valid service.",
        },
      ),
    date: optionalText(10).refine(
      (value) => Boolean(!value || (/^\d{4}-\d{2}-\d{2}$/.test(value) && validDate(value))),
      { message: "Please enter a valid date." },
    ),
    time: optionalText(40).refine((value) => !value || allowedTimes.includes(value), {
      message: "Please select a valid time.",
    }),
    message: optionalText(2000),
  })
  .strict();
