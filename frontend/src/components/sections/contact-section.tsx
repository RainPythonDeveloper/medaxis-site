import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { IMaskInput } from "react-imask"
import { toast } from "sonner"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Loader2, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Container } from "@/components/shared/container"
import { contactFormSchema, type ContactFormData } from "@/lib/validation"

const contactInfo = [
  {
    icon: Phone,
    label: "Телефон",
    value: "+7 (707) 295-84-52",
    href: "tel:+77072958452",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@medaxis.kz",
    href: "mailto:info@medaxis.kz",
  },
  {
    icon: MapPin,
    label: "Адрес",
    value: "г. Астана, пр. Туран 43",
    href: "#",
  },
]

export function ContactSection() {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  })

  const onSubmit = async (_data: ContactFormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(_data),
      })
      if (!res.ok) throw new Error()
      toast.success("Спасибо! Ваша заявка отправлена.")
      reset()
    } catch {
      toast.error("Произошла ошибка. Попробуйте ещё раз.")
    }
  }

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden" id="contact">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFF5F2] via-white to-[#FFE8E0]/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(198,107,84,0.06),transparent_50%)]" />

      <Container>
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] as const }}
            className="space-y-8"
          >
            <div>
              <span className="inline-block text-sm font-semibold uppercase tracking-wider text-[#C66B54] mb-4">
                Контакты
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold text-[#2D1810] leading-tight">
                Остались вопросы?
                <br />
                <span className="bg-gradient-to-r from-[#C66B54] to-[#A85542] bg-clip-text text-transparent">
                  Свяжитесь с нами
                </span>
              </h2>
            </div>

            <p className="text-lg text-[#5D4037]/70 leading-relaxed max-w-md">
              Оставьте заявку и наши специалисты свяжутся с вами в ближайшее время
              для консультации по любым вопросам.
            </p>

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-4 p-4 rounded-xl border border-warm-gray-200 bg-white hover:border-[#C66B54]/30 hover:shadow-md hover:shadow-[#C66B54]/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#C66B54]/10 flex items-center justify-center group-hover:bg-[#C66B54] transition-colors duration-300">
                    <item.icon className="h-5 w-5 text-[#C66B54] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <span className="block text-sm text-[#5D4037]/50">{item.label}</span>
                    <span className="block font-semibold text-[#2D1810]">{item.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] as const }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5 rounded-2xl border border-warm-gray-200 bg-white p-6 lg:p-8 shadow-lg shadow-[#C66B54]/5"
            >
              <h3 className="text-xl font-bold text-[#2D1810] mb-2">Оставить заявку</h3>

              {/* Name */}
              <div className="space-y-1.5">
                <Label htmlFor="name">Имя *</Label>
                <Input
                  id="name"
                  placeholder="Введите ваше имя"
                  className="h-12 rounded-xl border-warm-gray-200 bg-warm-gray-50 focus:bg-white transition-colors"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name.message}</p>
                )}
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <Label htmlFor="phone">Телефон *</Label>
                <Controller
                  control={control}
                  name="phone"
                  render={({ field }) => (
                    <IMaskInput
                      mask="+7 (000) 000-00-00"
                      value={field.value}
                      onAccept={(value: string) => field.onChange(value)}
                      placeholder="+7 (___) ___-__-__"
                      id="phone"
                      className="flex h-12 w-full rounded-xl border border-warm-gray-200 bg-warm-gray-50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus:bg-white transition-colors"
                    />
                  )}
                />
                {errors.phone && (
                  <p className="text-sm text-destructive">{errors.phone.message}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@mail.com"
                  className="h-12 rounded-xl border-warm-gray-200 bg-warm-gray-50 focus:bg-white transition-colors"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <Label htmlFor="message">Сообщение</Label>
                <Textarea
                  id="message"
                  placeholder="Ваш вопрос или комментарий"
                  rows={4}
                  className="rounded-xl border-warm-gray-200 bg-warm-gray-50 focus:bg-white transition-colors"
                  {...register("message")}
                />
              </div>

              {/* Consent */}
              <div className="space-y-1.5">
                <Controller
                  control={control}
                  name="consent"
                  render={({ field }) => (
                    <div className="flex items-start gap-2">
                      <Checkbox
                        id="consent"
                        checked={field.value === true}
                        onCheckedChange={(checked) => field.onChange(checked === true ? true : undefined)}
                        className="mt-0.5"
                      />
                      <Label htmlFor="consent" className="text-sm font-normal leading-snug cursor-pointer text-[#5D4037]/70">
                        Я согласен на{" "}
                        <a href="#" className="text-[#C66B54] underline hover:text-[#A85542]">
                          обработку персональных данных
                        </a>
                      </Label>
                    </div>
                  )}
                />
                {errors.consent && (
                  <p className="text-sm text-destructive">{errors.consent.message}</p>
                )}
              </div>

              {/* Submit */}
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full h-14 rounded-xl bg-gradient-to-r from-[#C66B54] to-[#A85542] text-white font-semibold text-base shadow-lg shadow-[#C66B54]/30 hover:shadow-xl hover:shadow-[#C66B54]/40 hover:scale-[1.01] transition-all duration-300"
              >
                {isSubmitting ? (
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                ) : (
                  <Send className="mr-2 h-5 w-5" />
                )}
                Отправить заявку
              </Button>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
