import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Container } from "@/components/shared/container"
import { stats } from "@/data/stats"

function AnimatedCounter({ target }: { target: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const numericValue = parseInt(target.replace(/\s/g, ""), 10)

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const increment = numericValue / steps
    let step = 0

    const timer = setInterval(() => {
      step++
      const current = Math.min(Math.round(increment * step), numericValue)
      setCount(current)
      if (step >= steps) clearInterval(timer)
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, numericValue])

  const formatted = count.toLocaleString("ru-RU").replace(/,/g, " ")

  return <span ref={ref}>{formatted}</span>
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] as const },
  }),
}

export function CompanySection() {
  return (
    <section className="py-20 lg:py-32" id="company">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] as const }}
          >
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-[#C66B54] mb-4">
              О компании
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#2D1810] leading-tight">
              Компания{" "}
              <span className="bg-gradient-to-r from-[#C66B54] to-[#A85542] bg-clip-text text-transparent">
                MedAxis
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] as const }}
            className="flex flex-col justify-center"
          >
            <p className="text-lg text-[#5D4037]/80 leading-relaxed">
              Один из крупнейших поставщиков медицинского оборудования и расходных материалов
              в Казахстане и Центральной Азии. Мы предлагаем комплексные решения для оснащения
              медицинских учреждений любого уровня.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Primary Feature Card */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            className="sm:col-span-2 relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#C66B54] to-[#A85542] p-8 text-white"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10">
              <span className="text-6xl lg:text-7xl font-extrabold leading-none">
                <AnimatedCounter target={stats[0].number} />
              </span>
              <p className="text-white/80 mt-3 text-base leading-relaxed whitespace-pre-line">
                {stats[0].label}
              </p>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            className="sm:col-span-2 lg:col-span-2 rounded-2xl border border-warm-gray-200 bg-gradient-to-br from-warm-gray-50 to-white p-8 group hover:border-[#C66B54]/30 transition-colors duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#C66B54]/10 flex items-center justify-center shrink-0">
                <div className="w-3 h-3 rounded-full bg-[#C66B54]" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#2D1810] mb-2">Наша миссия</h3>
                <p className="text-[#5D4037]/70 leading-relaxed">
                  Обеспечивать медицинские учреждения современным оборудованием и технологиями
                  для повышения качества диагностики и лечения пациентов.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stat Cards */}
          {stats.slice(1).map((stat, i) => (
            <motion.div
              key={stat.number}
              custom={i + 2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-2xl border border-warm-gray-200 bg-white p-6 hover:border-[#C66B54]/30 hover:shadow-lg hover:shadow-[#C66B54]/5 transition-all duration-300"
            >
              <span className="block text-4xl lg:text-5xl font-extrabold text-[#2D1810] leading-none group-hover:text-[#C66B54] transition-colors duration-300">
                <AnimatedCounter target={stat.number} />
              </span>
              <span className="block text-sm text-[#5D4037]/60 mt-3 leading-snug whitespace-pre-line">
                {stat.label}
              </span>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C66B54] to-[#A85542] rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.a
            href="#contact"
            custom={6}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            className="group relative overflow-hidden rounded-2xl bg-[#2D1810] p-6 flex items-center justify-between cursor-pointer hover:bg-[#3D2820] transition-colors duration-300"
          >
            <span className="font-semibold text-lg text-white">Подробнее о компании</span>
            <div className="w-12 h-12 rounded-full bg-[#C66B54] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <ArrowRight className="h-5 w-5 text-white" />
            </div>
          </motion.a>
        </div>
      </Container>
    </section>
  )
}
