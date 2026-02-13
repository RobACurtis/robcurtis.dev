"use client"

import { useAestheticMode } from "@/contexts/aesthetic-mode-context"
import { SocialLinks } from "@/components/social-links"

export function Footer() {
  const { isTerminal } = useAestheticMode()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-6">
          {/* Social links */}
          <SocialLinks showLabels={false} />

          {/* Footer text */}
          {isTerminal ? (
            <div className="flex flex-col items-center gap-2 text-xs text-muted-foreground">
              <p>
                <span className="text-accent">$</span> echo{" "}
                <span className="text-foreground/70">
                  {`"Rob Curtis · ${year}"`}
                </span>
              </p>
              <p>
                <span className="text-primary">exit</span> 0
              </p>
            </div>
          ) : (
            <p className="text-xs text-muted-foreground">
              © {year} Rob Curtis. Los Angeles, CA.
            </p>
          )}
        </div>
      </div>
    </footer>
  )
}
