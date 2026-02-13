"use client"

import { RevealSection } from "@/components/reveal-section"
import { TerminalWindow } from "@/components/terminal-window"
import { useAestheticMode } from "@/contexts/aesthetic-mode-context"
import { MapPin, GraduationCap, Heart, Code, Laptop, Briefcase } from "lucide-react"

const timeline = [
  {
    year: "Origins",
    title: "Sarasota, Fl",
    description: "Where it all started. Grew up on the Gulf Coast of Florida with a natural curiosity for how things work and a love for building things from scratch.",
    icon: MapPin,
  },
  {
    year: "Education",
    title: "B.F.A. in specializing in photography",
    description: "Studied Fine Arts, where I learned to blend problem-solving with creativity. This background shapes how I approach software—treating each project as a balance of function and aesthetics.",
    icon: GraduationCap,
  },
  {
    year: "NYC",
    title: "Nonprofit & Web Dev",
    description: "Moved to New York City and worked with a nonprofit serving adults in shelters and mentoring youth in after school programs. Designed their website and ran donation-driven marketing campaigns—this is where my love for web development truly began.",
    icon: Heart,
  },
  {
    year: "Bootcamp",
    title: "LearningFuze",
    description: "Enrolled in LearningFuze, an intensive full-stack bootcamp where I learned JavaScript, React, Node.js, PostgreSQL, and modern development practices. Built real projects and solidified my foundation as a developer.",
    icon: Laptop,
  },
  {
    year: "Career",
    title: "Full-Stack Engineer",
    description: "Got hired as a full-stack engineer, where I've contributed to three product teams, shipped features that move the needle, and expanded my skills to include Python, MongoDB, and FastAPI. I have also taken on freelance clients, bringing their visions to life on the web.",
    icon: Briefcase,
  },
  {
    year: "Now",
    title: "Building & Exploring",
    description: "Currently focused on AI-powered tooling, automating workflows, and building side projects that push my skills. Always learning, always shipping.",
    icon: Code,
  },
]

export function AboutSection() {
  const { isTerminal } = useAestheticMode()

  return (
    <section id="about" className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <RevealSection>
          <TerminalWindow title="dev@portfolio: ~/about" basicTitle="About Me">
            {/* Terminal mode: just command */}
            {isTerminal && (
              <p className="text-sm">
                <span className="text-accent text-glow-amber">~/about</span>
                <span className="text-muted-foreground">{" $ "}</span>
                <span className="text-foreground">cat README.md</span>
              </p>
            )}

            {/* Basic mode: intro text */}
            {!isTerminal && (
              <div className="max-w-3xl">
                <p className="text-sm leading-relaxed text-foreground/80">
                  {"I'm a Full-Stack Engineer who builds fast, scalable web applications. I specialize in "}
                  <span className="text-primary font-medium">responsive, mobile-first TypeScript front-ends</span>
                  {" and robust back-ends that handle real-world traffic. Here's how I got here:"}
                </p>
              </div>
            )}
          </TerminalWindow>
        </RevealSection>

        {/* Terminal: text-based output */}
        {isTerminal && (
          <RevealSection delay={100}>
            <div className="mt-6 rounded-lg border border-border bg-card p-5">
              <div className="space-y-4 text-sm leading-relaxed">
                <p className="text-foreground/80">
                  {"I'm a Full-Stack Engineer who builds fast, scalable web applications. I specialize in "}
                  <span className="text-accent">responsive, mobile-first TypeScript front-ends</span>
                  {" and designing robust back-ends that handle real-world traffic."}
                </p>
                <p className="text-foreground/80">
                  {"Having contributed to "}
                  <span className="text-accent">three product teams</span>
                  {", I've honed my ability to adapt quickly, collaborate effectively, and ship features that truly move the needle. Whether it's with "}
                  <span className="text-accent">business stakeholders or freelance clients</span>
                  {", I bring their vision to life on the web."}
                </p>
                <p className="text-foreground/80">
                  {"I'm also passionate about "}
                  <span className="text-accent">AI-powered tooling</span>
                  {"—automating repetitive tasks, streamlining code reviews, and boosting overall team productivity."}
                </p>
                <p className="text-foreground/80">
                  {"Originally from "}
                  <span className="text-accent">Sarasota, Fl</span>
                  {", I later moved to "}
                  <span className="text-accent">New York City</span>
                  {", where I worked with a nonprofit serving adults in shelters and mentoring youth in after school programs. Building their website and running donation-driven marketing campaigns sparked my love for web development and showed me how technology can create real-world impact."}
                </p>
                <p className="text-foreground/80">
                  {"I hold a "}
                  <span className="text-accent">B.F.A. specializing in photography</span>
                  {", which informs my approach to software: I treat each project as a blend of problem-solving and creativity, striving to craft solutions that are both elegant and functional."}
                </p>
                <p className="text-foreground/80 border-t border-border/50 pt-4 mt-4">
                  <span className="text-accent">{">"}</span>
                  {" My goal is to create software that's not only functional but also a pleasure to use—and easy for teammates to read, maintain, and extend."}
                </p>
              </div>
            </div>
          </RevealSection>
        )}

        {/* Basic mode: Timeline */}
        {!isTerminal && (
          <>
            <div className="mt-8">
              {/* Mobile: simple stacked layout */}
              <div className="md:hidden relative">
                <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <RevealSection key={item.title} delay={index * 75}>
                      <div className="relative pl-12">
                        <div className="absolute left-0 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card z-10">
                          <item.icon className="h-4 w-4 text-primary" />
                        </div>
                        <div className="rounded-lg border border-border bg-card p-4 shadow-sm transition-colors hover:border-primary/50">
                          <p className="text-xs font-medium text-primary mb-1">{item.year}</p>
                          <h3 className="text-sm font-bold text-foreground">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </RevealSection>
                  ))}
                </div>
              </div>

              {/* Desktop: staggered two-column layout */}
              <div className="hidden md:block relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
                <div className="space-y-[-3rem]">
                  {timeline.map((item, index) => {
                    const isLeft = index % 2 === 0
                    return (
                      <RevealSection key={item.title} delay={index * 75}>
                        <div className="relative">
                          {/* Icon centered on timeline */}
                          <div className="absolute left-1/2 top-4 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card z-10">
                            <item.icon className="h-4 w-4 text-primary" />
                          </div>

                          <div className={`flex ${isLeft ? "justify-start" : "justify-end"}`}>
                            <div className={`w-[calc(50%-2rem)] ${isLeft ? "pr-4 text-right" : "pl-4 text-left"}`}>
                              <div className="rounded-lg border border-border bg-card p-4 shadow-sm transition-colors hover:border-primary/50">
                                <p className="text-xs font-medium text-primary mb-1">{item.year}</p>
                                <h3 className="text-sm font-bold text-foreground">
                                  {item.title}
                                </h3>
                                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </RevealSection>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Goal statement */}
            <RevealSection delay={500}>
              <div className="mt-12 rounded-lg border border-border bg-card p-6 text-center shadow-sm">
                <p className="text-sm text-muted-foreground italic">
                  "My goal is to create software that's not only functional but also a pleasure to use—and easy for teammates to read, maintain, and extend."
                </p>
              </div>
            </RevealSection>
          </>
        )}
      </div>
    </section>
  )
}
