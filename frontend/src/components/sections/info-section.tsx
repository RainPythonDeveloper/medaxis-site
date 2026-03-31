import { motion } from "framer-motion"
import { Container } from "@/components/shared/container"

export function InfoSection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[#FFF5F2] via-[#FFE8E0]/50 to-warm-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(198,107,84,0.06),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(198,107,84,0.04),transparent_50%)]" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as const }}
          className="relative max-w-3xl mx-auto text-center space-y-6"
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-[#C66B54]">
            Наша экспертиза
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#2D1810] leading-tight">
            Ведущий поставщик
            <br />
            <span className="bg-gradient-to-r from-[#C66B54] to-[#A85542] bg-clip-text text-transparent">
              медицинского оборудования
            </span>
          </h2>
          <p className="text-[#5D4037]/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Решаем задачи комплексного медицинского оснащения для государственных
            и частных клиник, диагностических центров и лабораторий
          </p>
        </motion.div>
      </Container>
    </section>
  )
}
