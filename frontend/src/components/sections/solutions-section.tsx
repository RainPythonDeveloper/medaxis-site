import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowUpRight, ArrowRight } from "lucide-react"
import { Container } from "@/components/shared/container"
import { solutions } from "@/data/solutions"

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.04, ease: [0.25, 0.4, 0.25, 1] as const },
  }),
}

export function SolutionsSection() {
  return (
    <section className="py-20 lg:py-32" id="solutions">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] as const }}
          className="mb-12"
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-[#C66B54] mb-4">
            Направления
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#2D1810] leading-tight">
            Индивидуальные решения под{" "}
            <span className="bg-gradient-to-r from-[#C66B54] to-[#A85542] bg-clip-text text-transparent">
              любые медицинские учреждения
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.slug}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={itemVariants}
            >
              <Link
                to={`/catalog/${solution.slug}`}
                className="group relative flex items-center justify-between rounded-xl border border-warm-gray-200 bg-white px-6 py-5 hover:border-[#C66B54]/30 hover:bg-[#FFF5F2] hover:shadow-md hover:shadow-[#C66B54]/5 transition-all duration-300"
              >
                <span className="text-[#2D1810] font-medium group-hover:text-[#C66B54] transition-colors duration-300">
                  {solution.name}
                </span>
                <ArrowUpRight className="h-5 w-5 text-warm-gray-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[#C66B54] transition-all duration-300" />
              </Link>
            </motion.div>
          ))}

          {/* CTA Item */}
          <motion.div
            custom={solutions.length}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={itemVariants}
          >
            <Link
              to="/catalog"
              className="group flex items-center justify-between rounded-xl bg-gradient-to-r from-[#C66B54] to-[#A85542] px-6 py-5 text-white hover:shadow-lg hover:shadow-[#C66B54]/30 transition-all duration-300"
            >
              <span className="font-semibold">Все направления</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
