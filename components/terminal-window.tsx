"use client"

import { useAestheticMode } from "@/contexts/aesthetic-mode-context"

interface TerminalWindowProps {
  title?: string
  basicTitle?: string
  children: React.ReactNode
  className?: string
}

export function TerminalWindow({
  title = "bash",
  basicTitle,
  children,
  className = "",
}: TerminalWindowProps) {
  const { isTerminal } = useAestheticMode()

  if (!isTerminal) {
    return (
      <div className={`overflow-hidden rounded-xl border border-border bg-card shadow-sm ${className}`}>
        {basicTitle && (
          <div className="border-b border-border px-5 py-3 md:px-6">
            <h2 className="text-lg font-semibold text-foreground">{basicTitle}</h2>
          </div>
        )}
        <div className="p-5 md:p-6">
          {children}
        </div>
      </div>
    )
  }

  return (
    <div className={`overflow-hidden rounded-lg border border-border bg-card ${className}`}>
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-border bg-secondary px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-destructive/80" aria-hidden="true" />
          <span className="h-3 w-3 rounded-full bg-accent/80" aria-hidden="true" />
          <span className="h-3 w-3 rounded-full bg-primary/80" aria-hidden="true" />
        </div>
        <span className="ml-2 text-xs text-muted-foreground">
          {title}
        </span>
      </div>
      {/* Terminal body */}
      <div className="p-5 md:p-6">
        {children}
      </div>
    </div>
  )
}
