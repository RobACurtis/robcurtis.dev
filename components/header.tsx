"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { useAestheticMode } from "@/contexts/aesthetic-mode-context"
import { AestheticToggle } from "@/components/aesthetic-toggle"

const navLinks = [
  { label: "About", href: "#about", cmd: "cd ~/about" },
  { label: "Projects", href: "#projects", cmd: "ls ~/projects" },
  { label: "Skills", href: "#skills", cmd: "cat skills.txt" },
  { label: "Contact", href: "#contact", cmd: "./contact.sh" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { isTerminal } = useAestheticMode()

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a
          href="#"
          className="group flex items-center gap-2 text-sm text-primary text-glow"
        >
          {isTerminal ? (
            <>
              <span className="text-accent">$</span>
              <span>~/robcurtis/</span>
              <span className="animate-blink text-primary">_</span>
            </>
          ) : (
            <span className="font-semibold">robcurtis.dev</span>
          )}
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              {isTerminal ? (
                <>
                  <span className="text-accent opacity-0 transition-opacity group-hover:opacity-100">
                    {"$ "}
                  </span>
                  {link.cmd}
                </>
              ) : (
                link.label
              )}
            </a>
          ))}
          <div className="ml-2">
            <AestheticToggle />
          </div>
        </nav>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <AestheticToggle />
          <button
            className="flex h-8 w-8 items-center justify-center text-muted-foreground hover:text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav
          className="md:hidden border-t border-border bg-background px-6 pb-6 pt-4"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 px-2 py-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                onClick={() => setMobileOpen(false)}
              >
                {isTerminal ? (
                  <>
                    <span className="text-accent">$</span>
                    {link.cmd}
                  </>
                ) : (
                  link.label
                )}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
