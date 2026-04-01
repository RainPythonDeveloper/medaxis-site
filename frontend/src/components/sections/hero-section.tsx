import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.25, 0.4, 0.25, 1] as const },
  }),
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden" id="hero">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/main_picture.png')" }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A1614]/95 via-[#1A1614]/80 to-[#1A1614]/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1614]/60 via-transparent to-[#1A1614]/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,transparent_30%,rgba(26,22,20,0.5)_70%)]" />

      {/* Decorative elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[15%] top-[20%] h-64 w-64 rounded-full bg-[#C66B54]/15 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[10%] bottom-[20%] h-48 w-48 rounded-full bg-[#A85542]/10 blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1280px] items-center px-6 py-24 md:px-12 lg:px-16">
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex max-w-2xl flex-col space-y-8"
        >

          <motion.div custom={1} variants={fadeUp} className="space-y-4">

            <h1 className="text-3xl font-bold leading-tight text-white/95 md:text-4xl lg:text-5xl">
              Глубина детализации,
              <br />
              <span className="bg-gradient-to-r from-[#E59684] to-[#C66B54] bg-clip-text text-transparent">
                Уверенность в лечении
              </span>
            </h1>
          </motion.div>

          <motion.p
            custom={2}
            variants={fadeUp}
            className="max-w-lg text-lg leading-relaxed text-white/60"
          >
            Ультразвуковая диагностическая система премиум-класса для точной диагностики
            и уверенных клинических решений
          </motion.p>

          <motion.div custom={3} variants={fadeUp} className="flex items-center gap-4 pt-2">
            <Button
              size="lg"
              className="group h-14 rounded-full bg-gradient-to-r from-[#C66B54] to-[#A85542] px-10 text-lg font-semibold text-white shadow-xl shadow-[#C66B54]/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#C66B54]/40"
            >
              Подробнее
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Link
              to="/catalog"
              className="inline-flex items-center justify-center h-14 rounded-full border border-white/20 px-8 text-lg font-medium text-white/80 backdrop-blur-sm hover:border-white/40 hover:bg-white/5 hover:text-white transition-all"
            >
              Каталог
            </Link>
          </motion.div>

          {/* Stats mini row */}
          <motion.div
            custom={4}
            variants={fadeUp}
            className="flex items-center gap-8 border-t border-white/10 pt-8"
          >
            {[
              { value: "19+", label: "лет опыта" },
              { value: "89", label: "брендов" },
              { value: "6K+", label: "клиентов" },
            ].map((stat) => (
              <div key={stat.label}>
                <span className="block text-2xl font-bold text-white lg:text-3xl">
                  {stat.value}
                </span>
                <span className="text-sm text-white/40">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#FFFCF9] to-transparent" />
    </section>
  )
}
