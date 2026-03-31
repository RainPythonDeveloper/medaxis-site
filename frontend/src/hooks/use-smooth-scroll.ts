import { useEffect } from "react"

export function useSmoothScroll(headerOffset = 120) {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement
      const anchor = target.closest<HTMLAnchorElement>('a[href^="#"]')
      if (!anchor) return

      const id = anchor.getAttribute("href")
      if (!id || id === "#") return

      const el = document.querySelector(id)
      if (!el) return

      e.preventDefault()
      const top = el.getBoundingClientRect().top + window.scrollY - headerOffset
      window.scrollTo({ top, behavior: "smooth" })
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [headerOffset])
}
