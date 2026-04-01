import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

export function useSmoothScroll(headerOffset = 120) {
  const location = useLocation()
  const navigate = useNavigate()

  // Scroll to hash after navigation (e.g. coming from /catalog to /#services)
  useEffect(() => {
    if (!location.hash) return
    const timer = setTimeout(() => {
      const el = document.querySelector(location.hash)
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - headerOffset
        window.scrollTo({ top, behavior: "smooth" })
      }
    }, 100)
    return () => clearTimeout(timer)
  }, [location, headerOffset])

  // Handle click on internal links — anchor scrolling + SPA navigation
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement
      const anchor = target.closest<HTMLAnchorElement>("a[href]")
      if (!anchor) return

      const href = anchor.getAttribute("href")
      if (!href || href === "#") return

      // Skip external links and special protocols
      if (href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) return

      let hash = ""
      let pathname = ""

      if (href.startsWith("#")) {
        hash = href
        pathname = location.pathname
      } else if (href.includes("#")) {
        const [path, fragment] = href.split("#")
        hash = `#${fragment}`
        pathname = path || "/"
      } else {
        // Plain internal link like "/catalog" — navigate via router
        e.preventDefault()
        navigate(href)
        window.scrollTo({ top: 0, behavior: "smooth" })
        return
      }

      e.preventDefault()

      if (pathname === location.pathname) {
        const el = document.querySelector(hash)
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - headerOffset
          window.scrollTo({ top, behavior: "smooth" })
        }
      } else {
        navigate(pathname + hash)
      }
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [headerOffset, location.pathname, navigate])
}
