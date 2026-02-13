"use client"

import { RevealSection } from "@/components/reveal-section"
import { TerminalWindow } from "@/components/terminal-window"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import { SiGithub } from "@icons-pack/react-simple-icons"
import Image from "next/image"
import { useAestheticMode } from "@/contexts/aesthetic-mode-context"

const projects = [
  {
    name: "surfr-photographer",
    displayName: "Surfr",
    description: "A web application for surf photographers who want to showcase their photographs to the world. ",
    tags: ["React", "CSS", "Express", "AWS S3", "Bootstrap", "Node.js", "PostgreSQL"],
    gif: "/images/surfr-photographer.gif",
    image: "/images/surfr-photographer.gif",
    github: "https://github.com/RobACurtis/surfr-photographer",
    permissions: "drwxr-xr-x",
    size: "32K",
  },
  {
    name: "qrido",
    displayName: "qrido.love",
    description: "Free QR code generator with customizable styles, colors, and embedded icons. No signup required—generate QR codes for links, phone numbers, emails, WiFi credentials, and plain text instantly.",
    tags: ["React", "TypeScript", "Canvas API", "Tailwind", "Stripe", "Resend"],
    gif: "/images/qrido.gif",
    image: "/images/qrido.png",
    github: "https://github.com/RobACurtis/qrido.love",
    website: "https://qrido.love",
    permissions: "drwxr-xr-x",
    size: "24K",
  },
  // {
  //   name: "surfcode.lol",
  //   displayName: "SurfCode.lol",
  //   description: "A playful surf-themed coding adventure site featuring binary code puzzles and animated surfers. Built as a fun side project combining my love of surfing and programming.",
  //   tags: ["Next.js", "TypeScript", "Tailwind", "Animation"],
  //   gif: "/images/surfcode.lol.gif",
  //   image: "/images/surfcode.lol.png",
  //   github: "https://github.com/RobACurtis/surfcode.lol",
  //   website: "https://surfcode.lol",
  //   permissions: "drwxr-xr-x",
  //   size: "32K",
  // },
  {
    name: "spendsats.app",
    displayName: "spendsats.app",
    description: "Bitcoin DCA tracker that visualizes your stack performance over time. Track investments, monitor profit/loss, and see your cost basis with beautiful charts and real-time BTC price updates.",
    tags: ["React", "TypeScript", "Chart.js", "Vitest"],
    gif: "/images/spendsats.gif",
    image: "/images/spendsats.png",
    github: "https://github.com/RobACurtis/spend-sats",
    website: "https://spendsats.app",
    permissions: "drwxr-xr-x",
    size: "28K",
  },
  {
    name: "fatherjeremiah.com",
    displayName: "Father Jeremiah",
    description: "Professional portfolio website I architected, built, and continue to maintain for a Catholic author and spiritual director. The platform includes a curated book showcase, newsletter signup system, and seamless Substack connection—delivered with ongoing technical support, updates, and performance optimization to ensure long-term reliability and growth.",
    tags: ["Next.js", "Tailwind", "Vercel", "Resend", "Mailgun", "AWS S3"],
    gif: "/images/fatherjeremiah.gif",
    image: "/images/fatherjeremiah.png",
    website: "https://fatherjeremiah.com",
    permissions: "drwxr-xr-x",
    size: "18K",
  },
]

export function ProjectsSection() {
  const { isTerminal } = useAestheticMode()

  return (
    <section id="projects" className="px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <RevealSection>
          <TerminalWindow title="dev@portfolio: ~/projects" basicTitle="Projects">
            {isTerminal ? (
              <>
                {/* Command */}
                <p className="text-sm">
                  <span className="text-accent text-glow-amber">~/projects</span>
                  <span className="text-muted-foreground">{" $ "}</span>
                  <span className="text-foreground">ls -la</span>
                </p>

                {/* ls output header */}
                <div className="mt-4 text-xs text-muted-foreground">
                  <p>total {projects.length}</p>
                </div>

                {/* File listing rows */}
                <div className="mt-2 space-y-0.5 text-xs">
                  {projects.map((project) => (
                    <p key={project.name} className="text-muted-foreground">
                      <span>{project.permissions}</span>
                      {"  "}
                      <span className="text-accent">{project.size}</span>
                      {"  "}
                      <span className="text-primary">{project.name}/</span>
                    </p>
                  ))}
                </div>
              </>
            ) : (
              <p className="text-muted-foreground">
                In my free time I enjoy learning new tools, experimenting with AI, and building side projects. Here are a few of my personal web experiments.
              </p>
            )}
          </TerminalWindow>
        </RevealSection>

        {/* Project cards */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => {
            const primaryLink = project.website || project.github
            return (
              <RevealSection key={project.name} delay={index * 100}>
                <div className={`group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:border-primary/50 ${!isTerminal ? "shadow-sm" : ""}`}>
                  {/* Image */}
                  <a
                    href={primaryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={project.gif || project.image}
                        alt={`Screenshot of ${project.name}`}
                        fill
                        unoptimized={!!project.gif}
                        className={`object-cover transition-all duration-500 group-hover:scale-105 ${isTerminal ? "opacity-70 group-hover:opacity-90" : "opacity-100"}`}
                      />
                      {/* Scanline overlay - terminal only */}
                      {isTerminal && (
                        <div
                          className="absolute inset-0"
                          style={{
                            background: "repeating-linear-gradient(0deg, transparent, transparent 2px, hsla(220,16%,8%,0.15) 2px, hsla(220,16%,8%,0.15) 4px)",
                          }}
                          aria-hidden="true"
                        />
                      )}
                      {/* Hover arrow */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-md border border-primary text-primary ${isTerminal ? "bg-background/90" : "bg-white/90"}`}>
                          <ArrowUpRight className="h-5 w-5" />
                        </div>
                      </div>
                    </div>
                  </a>

                  {/* Info */}
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center gap-2">
                      {isTerminal && <span className="text-accent text-xs">$</span>}
                      <h3 className="text-sm font-bold text-primary">
                        {isTerminal ? `./${project.name}` : project.displayName}
                      </h3>
                    </div>
                    <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-sm border border-border bg-secondary px-2 py-0.5 text-[10px] text-muted-foreground"
                        >
                          {isTerminal ? `--${tag.toLowerCase().replace(/[\s.]/g, "-")}` : tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="mt-4 flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-primary"
                        >
                          <SiGithub className="h-4 w-4" />
                          <span>{isTerminal ? "gh repo view" : "GitHub"}</span>
                        </a>
                      )}
                      {project.website && (
                        <a
                          href={project.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-primary"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span>{isTerminal ? "curl" : "Live Site"}</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </RevealSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
