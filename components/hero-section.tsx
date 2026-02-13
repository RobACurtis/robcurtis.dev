"use client"

import { useTypewriter } from "@/hooks/use-typewriter"
import { useEffect, useState } from "react"
import { useAestheticMode } from "@/contexts/aesthetic-mode-context"
import { Wave } from "@/components/wave/wave"
import { Marquee } from "@/components/marquee"
import { SocialLinks } from "@/components/social-links"
import { ChevronDown } from "lucide-react"

const asciiArt = `
            _                    _   _           _
  _ __ ___ | |__   ___ _   _ _ __| |_(_)___    __| | _____   __
 | '__/ _ \\| '_ \\ / __| | | | '__| __| / __|  / _\` |/ _ \\ \\ / /
 | | | (_) | |_) | (__| |_| | |  | |_| \\__ \\ | (_| |  __/\\ V /
 |_|  \\___/|_.__/ \\___|\\__,_|_|   \\__|_|___(_)\\__,_|\\___| \\_/
`

export function HeroSection() {
  const [loaded, setLoaded] = useState(false)
  const [showAscii, setShowAscii] = useState(false)
  const { isTerminal } = useAestheticMode()
  const { displayedText: nameText, isComplete: nameComplete } = useTypewriter(
    "echo \"Hey, I'm Rob — Full-Stack Engineer building fast, scalable web apps\"",
    30,
    isTerminal ? 800 : 0
  )
  const { displayedText: descText, isComplete: descComplete } = useTypewriter(
    "Fast, elegant, responsive. I build web apps powered by AI automation and a drive to ship what matters.",
    25,
    isTerminal ? 3200 : 0
  )

  useEffect(() => {
    setLoaded(true)
    const timer = setTimeout(() => setShowAscii(true), 200)
    return () => clearTimeout(timer)
  }, [])

  // Basic mode hero
  if (!isTerminal) {
    return (
      <section className="relative flex min-h-screen flex-col justify-center px-6 pt-16">
        <div className="mx-auto w-full max-w-5xl">
          <div className="flex items-center gap-10 lg:gap-16">
            {/* Left: Content */}
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
                Rob Curtis
              </h1>
              <p className="mt-4 text-xl text-primary md:text-2xl">
                Full-Stack Engineer
              </p>
              <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
                Fast, elegant, responsive. I build web apps powered by AI automation and a drive to ship what matters.
              </p>

              {/* Status info */}
              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                <span>Los Angeles, CA</span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-primary">Online</span>
                </span>
              </div>

              {/* Social links */}
              <SocialLinks className="mt-6" />

              {/* CTA buttons */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  Get in Touch
                </a>
              </div>
            </div>

            {/* Right: Wave */}
            <div className="hidden h-64 w-64 flex-shrink-0 md:block lg:h-80 lg:w-80">
              <Wave />
            </div>
          </div>

          </div>

        {/* Tech marquee - full width */}
        <div className="mt-12">
          <Marquee />
        </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
        >
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </a>
      </section>
    )
  }

  return (
    <section className="relative flex min-h-screen flex-col justify-center px-6 pt-16">
      <div className="mx-auto w-full max-w-6xl">
        {/* Terminal window */}
        <div className="overflow-hidden rounded-lg border border-border bg-card">
          {/* Title bar */}
          <div className="flex items-center gap-2 border-b border-border bg-secondary px-4 py-2.5">
            <div className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-destructive/80" aria-hidden="true" />
              <span className="h-3 w-3 rounded-full bg-accent/80" aria-hidden="true" />
              <span className="h-3 w-3 rounded-full bg-primary/80" aria-hidden="true" />
            </div>
            <span className="ml-2 text-xs text-muted-foreground">
              rob@dev: ~
            </span>
          </div>

          {/* Terminal content */}
          <div className="p-6 md:p-8 lg:p-10">
            {/* ASCII art + System info + Wave */}
            <div className="flex items-stretch justify-between gap-6">
              {/* Left: ASCII + Info */}
              <div className="flex-1">
                <pre
                  className={`hidden sm:block text-[0.5rem] lg:text-[0.6rem] leading-tight text-primary/60 text-glow transition-opacity duration-700 ${
                    showAscii ? "opacity-100" : "opacity-0"
                  }`}
                  aria-hidden="true"
                >
                  {asciiArt}
                </pre>

                {/* System info */}
                <div
                  className={`mt-6 flex flex-col gap-1 text-xs text-muted-foreground transition-all duration-500 ${
                    loaded ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <p>
                    <span className="text-primary">Location:</span> Los Angeles, CA
                  </p>
                  <p>
                    <span className="text-primary">Status:</span>{" "}
                    <span className="inline-flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                      <span className="text-primary text-glow">Online</span>
                    </span>
                  </p>
                </div>
              </div>

              {/* Right: Wave */}
              <div className="hidden w-48 flex-shrink-0 sm:block md:w-64 lg:w-80">
                <Wave />
              </div>
            </div>

            {/* Divider */}
            <div className="my-6 border-t border-border/50" />

            {/* Command 1: Name */}
            <div className="flex flex-col gap-2">
              <p className="text-sm md:text-base">
                <span className="text-accent text-glow-amber">{"~"}</span>
                <span className="text-muted-foreground">{" $ "}</span>
                <span className="text-foreground">{nameText}</span>
                <span className={`text-primary ${nameComplete ? "opacity-0" : "animate-blink"}`}>|</span>
              </p>

              {/* Output */}
              <div className={`ml-0 mt-2 transition-opacity duration-500 ${nameComplete ? "opacity-100" : "opacity-0"}`}>
                <h1 className="text-2xl font-bold text-primary text-glow md:text-4xl lg:text-5xl">
                  Rob Curtis
                </h1>
                <p className="mt-1 text-base text-accent text-glow-amber md:text-lg">
                  Full-Stack Engineer
                </p>

                {/* Social links */}
                <SocialLinks size="sm" className="mt-4" />
              </div>
            </div>

            {/* Command 2: Description */}
            <div className={`mt-8 flex flex-col gap-2 transition-opacity duration-500 ${nameComplete ? "opacity-100" : "opacity-0"}`}>
              <p className="text-sm md:text-base">
                <span className="text-accent text-glow-amber">{"~"}</span>
                <span className="text-muted-foreground">{" $ "}</span>
                <span className="text-muted-foreground">cat intro.txt</span>
              </p>
              <p className="mt-1 text-sm leading-relaxed text-foreground/80 md:text-base">
                {descText}
                <span className={`text-primary ${descComplete ? "opacity-0" : "animate-blink"}`}>|</span>
              </p>
            </div>

            {/* CTA + Marquee */}
            <div className={`mt-8 transition-opacity duration-500 ${descComplete ? "opacity-100" : "opacity-0"}`}>
              {/* CTA prompt */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-md border border-primary bg-primary/10 px-5 py-2.5 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  <span>$</span> ls ~/projects
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground transition-all hover:border-accent hover:text-accent"
                >
                  <span>$</span> ./contact.sh
                </a>
              </div>
            </div>
          </div>
        </div>

        </div>

      {/* Tech marquee - full width */}
      <div className="mt-8">
        <Marquee />
      </div>
    </section>
  )
}
