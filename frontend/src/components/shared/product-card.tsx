import { Link } from "react-router-dom"
import { ArrowRight, Package } from "lucide-react"
import type { Product } from "@/data/products"

const statusLabels: Record<Product["status"], { text: string; className: string }> = {
  in_stock: { text: "В наличии", className: "text-emerald-600" },
  coming_soon: { text: "Скоро в продаже", className: "text-[#C66B54]" },
  out_of_stock: { text: "Нет в наличии", className: "text-warm-gray-600" },
}

export function ProductCard({ product }: { product: Product }) {
  const status = statusLabels[product.status]

  return (
    <Link to={`/product/${product.id}`} className="block">
      <article className="group flex flex-col rounded-2xl border border-warm-gray-200 bg-white overflow-hidden hover:border-[#C66B54]/30 hover:shadow-lg hover:shadow-[#C66B54]/5 transition-all duration-300">
        {/* Article */}
        <div className="px-5 pt-4 text-xs text-warm-gray-300">
          Арт.: {product.article}
        </div>

        {/* Image placeholder */}
        <div className="flex items-center justify-center h-48 px-6 py-4">
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-warm-gray-200 gap-2">
              <Package className="h-16 w-16" />
              <span className="text-xs text-warm-gray-300">{product.brand}</span>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col flex-1 px-5 pb-5 gap-3">
          <h3 className="text-sm font-semibold text-[#2D1810] leading-snug line-clamp-3 min-h-[3.75rem]">
            {product.name}
          </h3>

          <div className="mt-auto space-y-2">
            <span className={`block text-sm font-medium ${status.className}`}>
              {status.text}
            </span>

            {product.price !== null ? (
              <span className="block text-lg font-bold text-[#2D1810]">
                {product.price.toLocaleString("ru-RU")} {product.currency}
              </span>
            ) : (
              <span className="block text-sm text-warm-gray-600">
                Цена по запросу
              </span>
            )}

            <span className="flex items-center justify-center gap-2 w-full h-10 rounded-xl bg-gradient-to-r from-[#C66B54] to-[#A85542] text-white text-sm font-semibold group-hover:shadow-md group-hover:shadow-[#C66B54]/20 transition-all duration-300">
              Подробнее
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}
