"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { cn } from "@/lib/utils"

interface RevealSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function RevealSection({
  children,
  className,
  delay = 0,
}: RevealSectionProps) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-500",
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-6 opacity-0",
        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "ease-out",
      }}
    >
      {children}
    </div>
  )
}
