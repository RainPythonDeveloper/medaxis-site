import { useMemo } from "react"
import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ChevronRight, ArrowLeft, Grid3X3, Search, Package } from "lucide-react"
import { Container } from "@/components/shared/container"
import { ProductCard } from "@/components/shared/product-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { solutions } from "@/data/solutions"
import { products } from "@/data/products"
import { useState } from "react"

export function CatalogPage() {
  const { slug } = useParams<{ slug: string }>()
  const [search, setSearch] = useState("")

  const currentCategory = solutions.find((s) => s.slug === slug)

  const filteredProducts = useMemo(() => {
    let items = slug ? products.filter((p) => p.category === slug) : products

    if (search.trim()) {
      const q = search.toLowerCase()
      items = items.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.article.includes(q)
      )
    }

    return items
  }, [slug, search])

  return (
    <div className="min-h-screen bg-[#FFFCF9] pt-[108px]">
      <Container>
        {/* Breadcrumbs */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 text-sm text-warm-gray-600 py-6"
        >
          <Link to="/" className="hover:text-[#C66B54] transition-colors">
            Главная
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link to="/catalog" className={`hover:text-[#C66B54] transition-colors ${!currentCategory ? "text-[#2D1810] font-medium" : ""}`}>
            Каталог
          </Link>
          {currentCategory && (
            <>
              <ChevronRight className="h-4 w-4" />
              <span className="text-[#2D1810] font-medium">{currentCategory.name}</span>
            </>
          )}
        </motion.nav>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 pb-20">
          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="sticky top-[120px] space-y-6">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm text-warm-gray-600 hover:text-[#C66B54] transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                На главную
              </Link>

              <div>
                <h2 className="text-lg font-bold text-[#2D1810] mb-4 flex items-center gap-2">
                  <Grid3X3 className="h-5 w-5 text-[#C66B54]" />
                  Категории
                </h2>
                <nav className="flex flex-col gap-1">
                  <Link
                    to="/catalog"
                    className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                      !slug
                        ? "bg-[#C66B54] text-white"
                        : "text-[#5D4037] hover:bg-warm-gray-50 hover:text-[#C66B54]"
                    }`}
                  >
                    Все категории
                  </Link>
                  {solutions.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/catalog/${s.slug}`}
                      className={`px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                        slug === s.slug
                          ? "bg-[#C66B54] text-white font-medium"
                          : "text-[#5D4037] hover:bg-warm-gray-50 hover:text-[#C66B54]"
                      }`}
                    >
                      {s.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </motion.aside>

          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-[#2D1810]">
                  {currentCategory ? currentCategory.name : "Каталог оборудования"}
                </h1>
                <p className="text-sm text-warm-gray-600 mt-1">
                  {filteredProducts.length}{" "}
                  {filteredProducts.length === 1
                    ? "товар"
                    : filteredProducts.length < 5
                      ? "товара"
                      : "товаров"}
                </p>
              </div>

              <div className="relative w-full sm:w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-warm-gray-300" />
                <Input
                  placeholder="Поиск по названию..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10 h-11 rounded-xl border-warm-gray-200 bg-white"
                />
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filteredProducts.map((product, i) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.5) }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <Package className="h-16 w-16 text-warm-gray-200 mb-4" />
                <h3 className="text-lg font-semibold text-[#2D1810] mb-2">Товары не найдены</h3>
                <p className="text-warm-gray-600 mb-6">Попробуйте изменить параметры поиска</p>
                <Button
                  variant="ghost"
                  onClick={() => setSearch("")}
                  className="text-[#C66B54] hover:text-[#A85542]"
                >
                  Сбросить поиск
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      </Container>
    </div>
  )
}
