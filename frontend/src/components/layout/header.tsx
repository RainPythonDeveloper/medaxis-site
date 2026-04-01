import { useState } from "react"
import { MapPin, Phone, Search, Heart, ShoppingCart, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Logo } from "@/components/shared/logo"
import { CartDrawer } from "@/components/shared/cart-drawer"
import { useScrollShadow } from "@/hooks/use-scroll-shadow"
import { useCart } from "@/context/cart-context"
import { navLinks } from "@/data/navigation"
import { cn } from "@/lib/utils"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const hasShadow = useScrollShadow()
  const { totalItems, setCartOpen } = useCart()

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-warm-white/95 backdrop-blur supports-[backdrop-filter]:bg-warm-white/80 transition-shadow duration-300",
        hasShadow ? "shadow-warm-lg" : ""
      )}
    >
      {/* Top Bar */}
      <div className="bg-[#C66B54] text-white">
        <div className="mx-auto max-w-[1280px] px-6 flex items-center justify-between h-11 text-sm">
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              <span>Казахстан</span>
            </div>
            <a href="tel:88001234567" className="flex items-center gap-1.5 hover:underline">
              <Phone className="h-4 w-4" />
              +7 (707) 295-84-52
            </a>
          </div>
          <a
            href="/#contact"
            className="hidden md:inline-flex items-center justify-center bg-white hover:bg-white/90 text-[#C66B54] h-7 px-3 text-xs font-semibold rounded-md transition-colors"
          >
            Свяжитесь с нами
          </a>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-b border-warm-gray-100">
        <div className="mx-auto max-w-[1280px] px-6 flex items-center justify-between h-16">
          <Logo />

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-3 py-2 text-sm font-medium text-text-main transition-colors hover:text-[#C66B54] group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C66B54] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            {[
              { icon: Search, label: "Поиск" },
              { icon: Heart, label: "Избранное" },
              { icon: Phone, label: "Позвонить" },
            ].map(({ icon: Icon, label }) => (
              <button
                key={label}
                className="hidden lg:flex p-2.5 rounded-lg text-text-light hover:bg-warm-gray-50 hover:text-[#C66B54] transition-colors"
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
              </button>
            ))}

            {/* Cart button — desktop */}
            <button
              className="hidden lg:flex relative p-2.5 rounded-lg text-text-light hover:bg-warm-gray-50 hover:text-[#C66B54] transition-colors"
              aria-label="Корзина"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#C66B54] text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </button>

            {/* Cart button — mobile */}
            <button
              className="lg:hidden relative p-2.5 rounded-lg text-text-light hover:bg-warm-gray-50 hover:text-[#C66B54] transition-colors"
              aria-label="Корзина"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#C66B54] text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </button>

            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger
                render={<Button variant="ghost" size="icon" className="lg:hidden" />}
              >
                <Menu className="h-6 w-6 text-[#C66B54]" />
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[400px]">
                <div className="flex flex-col gap-6 mt-8">
                  <nav className="flex flex-col gap-1">
                    {navLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="px-4 py-3 text-base font-medium rounded-lg hover:bg-warm-gray-50 transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </a>
                    ))}
                  </nav>
                  <a
                    href="/#contact"
                    className="w-full inline-flex items-center justify-center h-9 bg-[#C66B54] hover:bg-[#A85542] text-white font-medium rounded-lg transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    Свяжитесь с нами
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Cart Drawer */}
      <CartDrawer />
    </header>
  )
}
