"use client"

import { useAestheticMode } from "@/contexts/aesthetic-mode-context"
import { Monitor, Terminal } from "lucide-react"

export function AestheticToggle() {
  const { toggle, isTerminal } = useAestheticMode()

  return (
    <button
      onClick={toggle}
      className="relative flex h-8 items-center gap-1 rounded-full border border-border bg-secondary p-1 transition-colors hover:border-primary/50"
      aria-label={isTerminal ? "Switch to basic mode" : "Switch to terminal mode"}
      role="switch"
      aria-checked={isTerminal}
    >
      {/* Terminal icon */}
      <span
        className={`relative z-10 flex h-6 w-6 items-center justify-center rounded-full transition-colors ${
          isTerminal ? "text-primary-foreground" : "text-muted-foreground"
        }`}
      >
        <Terminal className="h-3.5 w-3.5" />
      </span>

      {/* Monitor icon */}
      <span
        className={`relative z-10 flex h-6 w-6 items-center justify-center rounded-full transition-colors ${
          !isTerminal ? "text-primary-foreground" : "text-muted-foreground"
        }`}
      >
        <Monitor className="h-3.5 w-3.5" />
      </span>

      {/* Sliding background */}
      <span
        className={`absolute top-1 h-6 w-6 rounded-full bg-primary transition-all duration-200 ${
          isTerminal ? "left-1" : "left-[calc(100%-1.75rem)]"
        }`}
      />
    </button>
  )
}
