export function Logo({ variant = "default" }: { variant?: "default" | "white" }) {
  return (
    <a href="/" className="text-2xl font-bold tracking-tight no-underline">
      <span className={variant === "white" ? "text-white" : "text-text-main"}>
        Med
      </span>
      <span className="text-primary">Axis</span>
    </a>
  )
}
