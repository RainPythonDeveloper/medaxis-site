import { Link } from "react-router-dom"
import { ShoppingCart, Minus, Plus, Trash2, Phone, Package, MessageCircle } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"
import { useCart } from "@/context/cart-context"

export function CartDrawer() {
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
    itemsWithoutPrice,
    isCartOpen,
    setCartOpen,
  } = useCart()

  return (
    <Sheet open={isCartOpen} onOpenChange={setCartOpen}>
      <SheetContent side="right" className="sm:max-w-[420px] flex flex-col p-0">
        {/* Header */}
        <SheetHeader className="border-b border-warm-gray-200 p-5">
          <div className="flex items-center justify-between">
            <SheetTitle className="text-lg font-bold text-[#2D1810]">Корзина</SheetTitle>
            {totalItems > 0 && (
              <span className="text-sm text-warm-gray-500">
                {totalItems} {formatItemsWord(totalItems)}
              </span>
            )}
          </div>
          <SheetDescription className="sr-only">Товары в вашей корзине</SheetDescription>
        </SheetHeader>

        {/* Body */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 p-8 text-center">
            <ShoppingCart className="h-16 w-16 text-warm-gray-200" />
            <div>
              <p className="text-lg font-semibold text-[#2D1810]">Корзина пуста</p>
              <p className="text-sm text-warm-gray-500 mt-1">Добавьте товары из каталога</p>
            </div>
            <Link
              to="/catalog"
              onClick={() => setCartOpen(false)}
              className="inline-flex items-center justify-center gap-2 h-10 px-6 rounded-xl bg-[#C66B54] text-white text-sm font-semibold hover:bg-[#A85542] transition-colors"
            >
              Перейти в каталог
            </Link>
          </div>
        ) : (
          <>
            {/* Items list */}
            <div className="flex-1 overflow-y-auto divide-y divide-warm-gray-100">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-3 p-4">
                  {/* Image */}
                  <Link
                    to={`/product/${item.product.id}`}
                    onClick={() => setCartOpen(false)}
                    className="w-16 h-16 rounded-lg border border-warm-gray-200 bg-white flex items-center justify-center shrink-0 overflow-hidden"
                  >
                    {item.product.image ? (
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="h-full w-full object-contain p-1"
                      />
                    ) : (
                      <Package className="h-8 w-8 text-warm-gray-200" />
                    )}
                  </Link>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${item.product.id}`}
                      onClick={() => setCartOpen(false)}
                      className="text-sm font-medium text-[#2D1810] line-clamp-2 hover:text-[#C66B54] transition-colors"
                    >
                      {item.product.name}
                    </Link>
                    <p className="text-xs text-warm-gray-400 mt-0.5">
                      {item.product.brand} &middot; Арт.: {item.product.article}
                    </p>

                    {/* Price */}
                    <div className="mt-1.5">
                      {item.product.price !== null ? (
                        <span className="text-sm font-bold text-[#2D1810]">
                          {(item.product.price * item.quantity).toLocaleString("ru-RU")} {item.product.currency}
                        </span>
                      ) : (
                        <span className="text-xs text-warm-gray-500">Цена по запросу</span>
                      )}
                    </div>

                    {/* Quantity + Remove */}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-warm-gray-200 rounded-lg overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="h-7 w-7 flex items-center justify-center text-warm-gray-500 hover:bg-warm-gray-50 hover:text-[#C66B54] transition-colors"
                          aria-label="Уменьшить количество"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="h-7 w-8 flex items-center justify-center text-sm font-medium text-[#2D1810] border-x border-warm-gray-200">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          disabled={item.quantity >= 99}
                          className="h-7 w-7 flex items-center justify-center text-warm-gray-500 hover:bg-warm-gray-50 hover:text-[#C66B54] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                          aria-label="Увеличить количество"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="h-7 w-7 flex items-center justify-center text-warm-gray-400 hover:text-red-500 transition-colors ml-auto"
                        aria-label="Удалить из корзины"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <SheetFooter className="border-t border-warm-gray-200 p-5 gap-3">
              {/* Totals */}
              <div className="space-y-1.5">
                {totalPrice > 0 && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-warm-gray-600">Предварительная сумма:</span>
                    <span className="text-lg font-bold text-[#2D1810]">
                      {totalPrice.toLocaleString("ru-RU")} ₸
                    </span>
                  </div>
                )}
                {itemsWithoutPrice > 0 && (
                  <p className="text-xs text-warm-gray-500">
                    * Цена {itemsWithoutPrice} {formatItemsWord(itemsWithoutPrice)} уточняется по запросу
                  </p>
                )}
                <p className="text-xs text-warm-gray-400">
                  Точную стоимость уточняйте у менеджера
                </p>
              </div>

              {/* Primary CTA */}
              <a
                href="tel:+77072958452"
                className="inline-flex items-center justify-center gap-2 h-13 px-6 rounded-xl bg-gradient-to-r from-[#C66B54] to-[#A85542] text-white font-semibold text-base shadow-lg shadow-[#C66B54]/25 hover:shadow-xl hover:shadow-[#C66B54]/35 transition-all duration-300"
              >
                <Phone className="h-5 w-5" />
                Позвоните для заказа
              </a>

              {/* Secondary CTA */}
              <a
                href="/#contact"
                onClick={() => setCartOpen(false)}
                className="inline-flex items-center justify-center gap-2 h-10 px-6 rounded-xl border border-[#C66B54] text-[#C66B54] text-sm font-semibold hover:bg-[#C66B54]/5 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                Или оставьте заявку
              </a>

              {/* Clear cart */}
              <button
                onClick={clearCart}
                className="text-xs text-warm-gray-400 hover:text-red-500 transition-colors"
              >
                Очистить корзину
              </button>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}

function formatItemsWord(count: number): string {
  const mod10 = count % 10
  const mod100 = count % 100
  if (mod100 >= 11 && mod100 <= 19) return "товаров"
  if (mod10 === 1) return "товар"
  if (mod10 >= 2 && mod10 <= 4) return "товара"
  return "товаров"
}
