"use client"

import { RevealSection } from "@/components/reveal-section"
import { TerminalWindow } from "@/components/terminal-window"
import { useAestheticMode } from "@/contexts/aesthetic-mode-context"
import { BarChart3, Plug, Sparkles, Wrench, Smartphone, Search, Mail, Megaphone, MessageSquare, Database, ShieldCheck, CreditCard } from "lucide-react"

const services = [
  {
    title: "Analytics Integration",
    description: "Set up tracking, dashboards, and data pipelines to measure what matters.",
    icon: BarChart3,
  },
  {
    title: "API Development & Integration",
    description: "Build robust APIs and connect third-party services to your stack.",
    icon: Plug,
  },
  {
    title: "AI Integration & Automation",
    description: "Implement AI-powered features and automate repetitive workflows.",
    icon: Sparkles,
  },
  {
    title: "Site Maintenance & Optimization",
    description: "Keep your site fast, secure, and up-to-date with ongoing support.",
    icon: Wrench,
  },
  {
    title: "Responsive, Mobile-First Design",
    description: "Build interfaces that look great and work smoothly on any device.",
    icon: Smartphone,
  },
  {
    title: "SEO & Technical SEO",
    description: "Optimize for search engines with meta tags, structured data, and performance.",
    icon: Search,
  },
  {
    title: "Email Integration",
    description: "Transactional emails, newsletters, and automated email workflows.",
    icon: Mail,
  },
  {
    title: "Landing Pages & A/B Testing",
    description: "Conversion-optimized pages with experimentation to maximize results.",
    icon: Megaphone,
  },
  {
    title: "Consulting & Code Reviews",
    description: "Architecture advice, tech stack decisions, and maintainable code practices.",
    icon: MessageSquare,
  },
  {
    title: "Headless CMS Integration",
    description: "Connect Sanity, Contentful, or other headless CMS platforms to your site.",
    icon: Database,
  },
  {
    title: "Authentication & Security",
    description: "Firebase Auth, JWT, OAuth, and secure user management.",
    icon: ShieldCheck,
  },
  {
    title: "E-commerce & Payments",
    description: "Stripe integration, checkout flows, and subscription billing.",
    icon: CreditCard,
  },
]

export function SkillsSection() {
  const { isTerminal } = useAestheticMode()

  return (
    <section id="skills" className="px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <RevealSection>
          <TerminalWindow title="dev@portfolio: ~/services" basicTitle="How I Bring Projects to Life">
            {isTerminal ? (
              <>
                <p className="text-sm">
                  <span className="text-accent text-glow-amber">~/services</span>
                  <span className="text-muted-foreground">{" $ "}</span>
                  <span className="text-foreground">cat services.json | jq</span>
                </p>
              </>
            ) : (
              <p className="text-muted-foreground">
                These are skills I've developed over years of working across different teams, projects, and clients. Whether it's a quick landing page or a full-stack application, here's how I can help.
              </p>
            )}
          </TerminalWindow>
        </RevealSection>

        {/* Services grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => (
            <RevealSection key={service.title} delay={idx * 75}>
              <div className={`h-full rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/50 ${!isTerminal ? "shadow-sm" : ""}`}>
                {isTerminal ? (
                  <>
                    <div className="flex items-center gap-2">
                      <span className="text-accent">$</span>
                      <service.icon className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="mt-3 text-sm font-bold text-primary">
                      {service.title}
                    </h3>
                  </>
                ) : (
                  <>
                    <service.icon className="h-5 w-5 text-primary" />
                    <h3 className="mt-3 text-sm font-semibold text-foreground">
                      {service.title}
                    </h3>
                  </>
                )}
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  )
}
