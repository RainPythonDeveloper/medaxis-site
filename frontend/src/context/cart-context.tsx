import { createContext, useContext, useReducer, useEffect, useState, type ReactNode } from "react"
import { products, type Product } from "@/data/products"

/* ─── Types ─── */

export interface CartItem {
  product: Product
  quantity: number
}

type CartAction =
  | { type: "ADD_ITEM"; product: Product }
  | { type: "REMOVE_ITEM"; productId: string }
  | { type: "UPDATE_QUANTITY"; productId: string; quantity: number }
  | { type: "CLEAR_CART" }

interface CartContextValue {
  items: CartItem[]
  addItem: (product: Product) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
  itemsWithoutPrice: number
  isCartOpen: boolean
  setCartOpen: (open: boolean) => void
}

/* ─── Constants ─── */

const STORAGE_KEY = "medaxis-cart"
const MAX_QUANTITY = 99

/* ─── Reducer ─── */

function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case "ADD_ITEM": {
      if (action.product.status !== "in_stock") return state
      const existing = state.find((item) => item.product.id === action.product.id)
      if (existing) {
        if (existing.quantity >= MAX_QUANTITY) return state
        return state.map((item) =>
          item.product.id === action.product.id
            ? { ...item, quantity: Math.min(item.quantity + 1, MAX_QUANTITY) }
            : item
        )
      }
      return [...state, { product: action.product, quantity: 1 }]
    }
    case "REMOVE_ITEM":
      return state.filter((item) => item.product.id !== action.productId)
    case "UPDATE_QUANTITY": {
      if (action.quantity <= 0) {
        return state.filter((item) => item.product.id !== action.productId)
      }
      return state.map((item) =>
        item.product.id === action.productId
          ? { ...item, quantity: Math.min(action.quantity, MAX_QUANTITY) }
          : item
      )
    }
    case "CLEAR_CART":
      return []
    default:
      return state
  }
}

/* ─── localStorage helpers ─── */

function loadCart(): CartItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const stored: { productId: string; quantity: number }[] = JSON.parse(raw)
    const items: CartItem[] = []
    for (const entry of stored) {
      const product = products.find((p) => p.id === entry.productId)
      if (product && product.status === "in_stock" && entry.quantity > 0) {
        items.push({ product, quantity: Math.min(entry.quantity, MAX_QUANTITY) })
      }
    }
    return items
  } catch {
    localStorage.removeItem(STORAGE_KEY)
    return []
  }
}

function saveCart(items: CartItem[]) {
  const serialized = items.map((item) => ({
    productId: item.product.id,
    quantity: item.quantity,
  }))
  localStorage.setItem(STORAGE_KEY, JSON.stringify(serialized))
}

/* ─── Context ─── */

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, dispatch] = useReducer(cartReducer, [], loadCart)
  const [isCartOpen, setCartOpen] = useState(false)

  useEffect(() => {
    saveCart(items)
  }, [items])

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  const totalPrice = items.reduce(
    (sum, item) => (item.product.price !== null ? sum + item.product.price * item.quantity : sum),
    0
  )

  const itemsWithoutPrice = items.filter((item) => item.product.price === null).length

  const value: CartContextValue = {
    items,
    addItem: (product) => dispatch({ type: "ADD_ITEM", product }),
    removeItem: (productId) => dispatch({ type: "REMOVE_ITEM", productId }),
    updateQuantity: (productId, quantity) => dispatch({ type: "UPDATE_QUANTITY", productId, quantity }),
    clearCart: () => dispatch({ type: "CLEAR_CART" }),
    totalItems,
    totalPrice,
    itemsWithoutPrice,
    isCartOpen,
    setCartOpen,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
