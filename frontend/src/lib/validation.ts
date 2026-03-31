import { z } from "zod"

export const contactFormSchema = z.object({
  name: z.string().min(2, "Минимум 2 символа"),
  phone: z
    .string()
    .regex(
      /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
      "Введите корректный номер телефона"
    ),
  email: z
    .string()
    .email("Некорректный email")
    .optional()
    .or(z.literal("")),
  message: z.string().optional(),
  consent: z.literal(true, {
    error: "Необходимо согласие на обработку данных",
  }),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
