import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"
import { Container } from "@/components/shared/container"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { services } from "@/data/services"
import { cn } from "@/lib/utils"

export function ServicesSection() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section className="bg-[#1A1614] py-20 lg:py-32 relative overflow-hidden" id="services">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(198,107,84,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(198,107,84,0.05),transparent_50%)]" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10 lg:gap-16 relative">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] as const }}
            className="lg:sticky lg:top-32 lg:self-start space-y-10"
          >
            <div>
              <span className="inline-block text-sm font-semibold uppercase tracking-wider text-[#C66B54] mb-4">
                Услуги
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
                Сопровождаем
                <br />
                клиента на
                <br />
                <span className="bg-gradient-to-r from-[#C66B54] to-[#E59684] bg-clip-text text-transparent">
                  всех этапах
                </span>
              </h2>
            </div>

            {/* Counter */}
            <div className="flex items-end gap-3">
              <span className="text-5xl lg:text-6xl font-bold text-white tabular-nums leading-none">
                {String(current + 1).padStart(2, "0")}
              </span>
              <div className="flex items-center gap-2 pb-2">
                <div className="w-8 h-px bg-warm-gray-600" />
                <span className="text-lg text-warm-gray-600 tabular-nums">
                  {String(count).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* Nav Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => api?.scrollPrev()}
                disabled={!api?.canScrollPrev()}
                className={cn(
                  "w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-300",
                  api?.canScrollPrev()
                    ? "border-warm-gray-600 text-white hover:border-[#C66B54] hover:bg-[#C66B54]/10 hover:text-[#C66B54]"
                    : "border-warm-gray-800 text-warm-gray-700 cursor-not-allowed"
                )}
                aria-label="Предыдущий"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => api?.scrollNext()}
                disabled={!api?.canScrollNext()}
                className={cn(
                  "w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-300",
                  api?.canScrollNext()
                    ? "border-warm-gray-600 text-white hover:border-[#C66B54] hover:bg-[#C66B54]/10 hover:text-[#C66B54]"
                    : "border-warm-gray-800 text-warm-gray-700 cursor-not-allowed"
                )}
                aria-label="Следующий"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            <a
              href="#services"
              className="inline-flex items-center gap-2 text-warm-gray-300 hover:text-[#C66B54] text-sm font-medium transition-colors duration-300"
            >
              Все услуги
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>

          {/* Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] as const }}
          >
            <Carousel setApi={setApi} opts={{ align: "start" }} className="w-full">
              <CarouselContent className="-ml-5">
                {services.map((service) => {
                  const Icon = service.icon
                  return (
                    <CarouselItem key={service.title} className="pl-5 basis-full lg:basis-1/2">
                      <article className="group flex flex-col rounded-2xl overflow-hidden bg-gradient-to-br from-[#2D2520] to-[#1A1614] border border-warm-gray-800/50 hover:border-[#C66B54]/30 transition-all duration-500 h-full">
                        <div className="relative h-52 flex items-center justify-center bg-gradient-to-br from-[#2D2520] to-[#1A1614] overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-[#C66B54]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <Icon className="h-24 w-24 text-warm-gray-700 group-hover:text-[#C66B54]/40 group-hover:scale-110 transition-all duration-500" />
                          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1A1614] to-transparent h-20" />
                          <h3 className="absolute bottom-4 left-6 text-white text-2xl font-bold">
                            {service.title}
                          </h3>
                        </div>
                        <div className="p-6 flex-1">
                          <p className="text-warm-gray-300/80 leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                        <div className="px-6 pb-6">
                          <div className="h-px w-full bg-gradient-to-r from-[#C66B54]/0 via-[#C66B54]/20 to-[#C66B54]/0 group-hover:via-[#C66B54]/50 transition-all duration-500" />
                        </div>
                      </article>
                    </CarouselItem>
                  )
                })}
              </CarouselContent>
            </Carousel>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
