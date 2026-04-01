import { useMemo, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import {
  ChevronRight,
  ArrowLeft,
  Phone,
  Mail,
  Package,
  Truck,
  ShieldCheck,
  Wrench,
  MessageCircle,
  ShoppingCart,
} from "lucide-react"
import { toast } from "sonner"
import { Container } from "@/components/shared/container"
import { ProductCard } from "@/components/shared/product-card"
import { useCart } from "@/context/cart-context"
import { products, type Product } from "@/data/products"
import { solutions } from "@/data/solutions"

const statusLabels: Record<Product["status"], { text: string; className: string; dot: string }> = {
  in_stock: { text: "В наличии", className: "text-emerald-700 bg-emerald-50 border-emerald-200", dot: "bg-emerald-500" },
  coming_soon: { text: "Скоро в продаже", className: "text-amber-700 bg-amber-50 border-amber-200", dot: "bg-amber-500" },
  out_of_stock: { text: "Нет в наличии", className: "text-warm-gray-600 bg-warm-gray-50 border-warm-gray-200", dot: "bg-warm-gray-400" },
}

const benefits = [
  {
    icon: Truck,
    title: "Доставка по Казахстану",
    desc: "Бесплатная доставка по Астане. Отправляем в регионы через транспортные компании.",
  },
  {
    icon: ShieldCheck,
    title: "Гарантия на продукцию",
    desc: "Предоставляем гарантию и сервисное обслуживание по условиям договора.",
  },
  {
    icon: Wrench,
    title: "Сервисная поддержка",
    desc: "Полное техническое сопровождение, установка и обучение персонала.",
  },
]

export function ProductPage() {
  const { id } = useParams<{ id: string }>()
  const { addItem, setCartOpen } = useCart()

  const product = products.find((p) => p.id === id)

  const category = useMemo(
    () => (product ? solutions.find((s) => s.slug === product.category) : undefined),
    [product]
  )

  const relatedProducts = useMemo(
    () =>
      product
        ? products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3)
        : [],
    [product]
  )

  if (!product) {
    return (
      <div className="min-h-screen bg-[#FFFCF9] pt-[108px]">
        <Container>
          <div className="flex flex-col items-center justify-center py-32 text-center">
            <Package className="h-20 w-20 text-warm-gray-200 mb-6" />
            <h1 className="text-2xl font-bold text-[#2D1810] mb-3">Товар не найден</h1>
            <p className="text-warm-gray-600 mb-8">Возможно, товар был удалён или ссылка неверна.</p>
            <Link
              to="/catalog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#C66B54] text-white font-semibold hover:bg-[#A85542] transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Вернуться в каталог
            </Link>
          </div>
        </Container>
      </div>
    )
  }

  const status = statusLabels[product.status]

  return (
    <div className="min-h-screen bg-[#FFFCF9] pt-[108px]">
      <Container>
        {/* Breadcrumbs */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 text-sm text-warm-gray-600 py-6 flex-wrap"
        >
          <Link to="/" className="hover:text-[#C66B54] transition-colors">Главная</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link to="/catalog" className="hover:text-[#C66B54] transition-colors">Каталог</Link>
          {category && (
            <>
              <ChevronRight className="h-3.5 w-3.5" />
              <Link to={`/catalog/${product.category}`} className="hover:text-[#C66B54] transition-colors">
                {category.name}
              </Link>
            </>
          )}
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-[#2D1810] font-medium line-clamp-1">{product.name}</span>
        </motion.nav>

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mb-6"
        >
          <Link
            to={category ? `/catalog/${product.category}` : "/catalog"}
            className="inline-flex items-center gap-2 text-sm text-warm-gray-600 hover:text-[#C66B54] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Назад в каталог
          </Link>
        </motion.div>

        {/* Main product section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 lg:gap-14 pb-12">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="sticky top-[120px]">
              <div className="aspect-square rounded-2xl border border-warm-gray-200 bg-white flex items-center justify-center overflow-hidden">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain p-8"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-warm-gray-200 gap-4">
                    <Package className="h-28 w-28" />
                    <span className="text-sm text-warm-gray-300 font-medium">{product.brand}</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right: Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Brand + Article */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-[#C66B54]/10 text-[#C66B54] text-xs font-semibold uppercase tracking-wide">
                {product.brand}
              </span>
              <span className="text-xs text-warm-gray-400">
                Арт.: {product.article}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl lg:text-3xl font-bold text-[#2D1810] leading-tight">
              {product.name}
            </h1>

            {/* Status */}
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm font-medium ${status.className}`}>
              <span className={`w-2 h-2 rounded-full ${status.dot}`} />
              {status.text}
            </div>

            {/* Price */}
            <div className="pt-2">
              {product.price !== null ? (
                <div>
                  <span className="text-3xl font-bold text-[#2D1810]">
                    {product.price.toLocaleString("ru-RU")} {product.currency}
                  </span>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <span className="text-xl font-semibold text-[#5D4037]">
                    Цена по запросу
                  </span>
                </div>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              {product.status === "in_stock" && (
                <button
                  onClick={() => {
                    addItem(product)
                    toast.success("Добавлено в корзину", {
                      description: product.name,
                      action: {
                        label: "Открыть",
                        onClick: () => setCartOpen(true),
                      },
                    })
                  }}
                  className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-xl bg-gradient-to-r from-[#C66B54] to-[#A85542] text-white font-semibold text-base shadow-lg shadow-[#C66B54]/25 hover:shadow-xl hover:shadow-[#C66B54]/35 hover:scale-[1.02] transition-all duration-300"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Добавить в корзину
                </button>
              )}
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-xl border-2 border-[#C66B54] text-[#C66B54] font-semibold text-base hover:bg-[#C66B54]/5 transition-all duration-300"
              >
                <MessageCircle className="h-5 w-5" />
                Оставить заявку
              </a>
              <a
                href="tel:+77072958452"
                className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-xl border-2 border-[#C66B54] text-[#C66B54] font-semibold text-base hover:bg-[#C66B54]/5 transition-all duration-300"
              >
                <Phone className="h-5 w-5" />
                Позвонить
              </a>
            </div>

            {/* Contact mini-block */}
            <div className="rounded-xl border border-warm-gray-200 bg-white p-5 space-y-3">
              <p className="text-sm font-semibold text-[#2D1810]">
                Свяжитесь с нами для заказа
              </p>
              <div className="flex flex-col gap-2">
                <a href="tel:+77072958452" className="inline-flex items-center gap-2 text-sm text-[#5D4037] hover:text-[#C66B54] transition-colors">
                  <Phone className="h-4 w-4 text-[#C66B54]" />
                  +7 (707) 295-84-52
                </a>
                <a href="mailto:info@medaxis.kz" className="inline-flex items-center gap-2 text-sm text-[#5D4037] hover:text-[#C66B54] transition-colors">
                  <Mail className="h-4 w-4 text-[#C66B54]" />
                  info@medaxis.kz
                </a>
              </div>
            </div>

            {/* Tabs: Описание / Характеристики */}
            <ProductTabs product={product} />

            {/* Benefits */}
            <div className="pt-4 space-y-3">
              {benefits.map((b) => (
                <div key={b.title} className="flex gap-4 p-4 rounded-xl border border-warm-gray-200 bg-white">
                  <div className="w-10 h-10 rounded-lg bg-[#C66B54]/10 flex items-center justify-center shrink-0">
                    <b.icon className="h-5 w-5 text-[#C66B54]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#2D1810]">{b.title}</h3>
                    <p className="text-xs text-warm-gray-600 mt-0.5 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="py-12 border-t border-warm-gray-200"
          >
            <h2 className="text-xl font-bold text-[#2D1810] mb-8">Другие товары из этой категории</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </motion.section>
        )}

        <div className="pb-16" />
      </Container>
    </div>
  )
}

/* ─── Tabs component ─── */

type Tab = "description" | "specs"

function ProductTabs({ product }: { product: Product }) {
  const hasDescription = !!product.description
  const hasSpecs = !!(product.specs && product.specs.length > 0)
  const [activeTab, setActiveTab] = useState<Tab>(hasDescription ? "description" : "specs")

  if (!hasDescription && !hasSpecs) return null

  const tabs: { id: Tab; label: string; available: boolean }[] = [
    { id: "description", label: "Описание", available: hasDescription },
    { id: "specs", label: "Характеристики", available: hasSpecs },
  ]

  return (
    <div className="pt-4">
      {/* Tab buttons */}
      <div className="flex rounded-xl border border-warm-gray-200 bg-warm-gray-50 p-1">
        {tabs
          .filter((t) => t.available)
          .map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-white text-[#2D1810] shadow-sm"
                  : "text-warm-gray-500 hover:text-[#5D4037]"
              }`}
            >
              {tab.label}
            </button>
          ))}
      </div>

      {/* Tab content */}
      <div className="mt-5">
        {activeTab === "description" && hasDescription && (
          <motion.div
            key="description"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="text-sm text-[#5D4037]/80 leading-relaxed whitespace-pre-line"
          >
            {product.description}
          </motion.div>
        )}

        {activeTab === "specs" && hasSpecs && (
          <motion.div
            key="specs"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="rounded-xl border border-warm-gray-200 bg-white overflow-hidden"
          >
            {product.specs!.map((spec, i) => (
              <div
                key={spec.label}
                className={`flex items-start gap-4 px-5 py-3.5 ${
                  i % 2 === 0 ? "bg-warm-gray-50/50" : ""
                } ${i < product.specs!.length - 1 ? "border-b border-warm-gray-100" : ""}`}
              >
                <span className="text-sm text-warm-gray-500 min-w-[140px] shrink-0">{spec.label}</span>
                <span className="text-sm font-medium text-[#2D1810]">{spec.value}</span>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}
