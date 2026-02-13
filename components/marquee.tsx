"use client"

import { useAestheticMode } from "@/contexts/aesthetic-mode-context"

export function Marquee() {
  const { isTerminal } = useAestheticMode()

  const items = [
    "TypeScript",
    "React",
    "Next.js",
    "Python",
    "FastAPI",
    "Node.js",
    "Tailwind",
    "PostgreSQL",
    "MongoDB",
    "Sanity",
    "Firebase",
    "Stripe",
    "Playwright",
    "Docker",
    "Vercel",
    "Claude AI",
    "GitHub Actions",
  ]

  return (
    <div className="relative my-12 overflow-hidden border-y border-border bg-secondary/50 py-3">
      <div className="flex animate-marquee items-center gap-6 whitespace-nowrap" style={{ animation: "marquee 40s linear infinite" }}>
        {[...items, ...items].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-6 text-xs font-medium uppercase tracking-widest text-muted-foreground"
          >
            <span className="cursor-default transition-colors hover:text-primary">
              {isTerminal && <span className="text-accent/60">$ </span>}
              {item}
            </span>
            <span className="text-border" aria-hidden="true">|</span>
          </span>
        ))}
      </div>
    </div>
  )
}
