"use client"

import { useState, type FormEvent } from "react"
import { RevealSection } from "@/components/reveal-section"
import { TerminalWindow } from "@/components/terminal-window"
import { useAestheticMode } from "@/contexts/aesthetic-mode-context"
import { AlertCircle, Loader2 } from "lucide-react"
import { SocialLinks, socialLinks } from "@/components/social-links"

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { isTerminal } = useAestheticMode()

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    }

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const errorData = await res.json()
        throw new Error(errorData.error || "Failed to send message")
      }

      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  function handleReset() {
    setSubmitted(false)
    setError(null)
  }

  return (
    <section id="contact" className="px-6 py-12">
      <div className="mx-auto max-w-6xl">
        {/* Terminal mode header */}
        {isTerminal && (
          <RevealSection>
            <TerminalWindow title="dev@portfolio: ~/contact" basicTitle="Contact">
              <p className="text-sm">
                <span className="text-accent text-glow-amber">~/contact</span>
                <span className="text-muted-foreground">{" $ "}</span>
                <span className="text-foreground">./contact.sh</span>
              </p>
              <div className="mt-4 text-sm text-foreground/80">
                <p className="text-primary text-glow font-bold text-base">
                  {"# Let's connect"}
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Got a project in mind? Want to collaborate? Or just want to say hi?
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Fill in the fields below or find me at:
                </p>
              </div>

              {/* Social links as terminal output */}
              <div className="mt-4 space-y-1 text-xs">
                {socialLinks.map((link) => (
                  <p key={link.label}>
                    <span className="text-muted-foreground">{"-> "}</span>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline decoration-primary/30 underline-offset-2 transition-colors hover:text-accent hover:decoration-accent/30"
                    >
                      {link.user}
                    </a>
                  </p>
                ))}
              </div>
            </TerminalWindow>
          </RevealSection>
        )}

        {/* Contact form */}
        <RevealSection delay={isTerminal ? 100 : 0}>
          <div className={`${isTerminal ? "mt-8" : ""} overflow-hidden rounded-lg border border-border bg-card ${!isTerminal ? "shadow-sm" : ""}`}>
            {/* Title bar - terminal only */}
            {isTerminal && (
              <div className="flex items-center gap-2 border-b border-border bg-secondary px-4 py-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-destructive/80" aria-hidden="true" />
                  <span className="h-3 w-3 rounded-full bg-accent/80" aria-hidden="true" />
                  <span className="h-3 w-3 rounded-full bg-primary/80" aria-hidden="true" />
                </div>
                <span className="ml-2 text-xs text-muted-foreground">
                  nano message.txt
                </span>
              </div>
            )}

            <div className="p-5 md:p-6">
              {/* Clean mode header */}
              {!isTerminal && !submitted && (
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-foreground">Contact</h2>
                  <p className="mt-2 text-muted-foreground">
                    Got a project in mind? Want to collaborate? Drop me a message.
                  </p>
                  <SocialLinks className="mt-3" />
                </div>
              )}
              {submitted ? (
                <div className="py-8 text-center">
                  {isTerminal ? (
                    <>
                      <p className="text-sm text-primary text-glow">
                        {">>> Message sent successfully! <<<"}
                      </p>
                      <p className="mt-2 text-xs text-muted-foreground">
                        {"Thanks for reaching out. I'll get back to you soon."}
                      </p>
                      <p className="mt-4 text-xs text-muted-foreground">
                        <span className="text-accent">$</span> echo $?
                      </p>
                      <p className="text-xs text-primary">0</p>
                      <button
                        onClick={handleReset}
                        className="mt-6 text-xs text-muted-foreground hover:text-primary transition-colors"
                      >
                        <span className="text-accent">$</span> ./contact.sh --new
                      </button>
                    </>
                  ) : (
                    <>
                      <p className="text-lg font-semibold text-primary">
                        Message sent!
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {"Thanks for reaching out. I'll get back to you soon."}
                      </p>
                      <button
                        onClick={handleReset}
                        className="mt-4 text-sm text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
                      >
                        Send another message
                      </button>
                    </>
                  )}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-xs text-muted-foreground">
                        {isTerminal ? (
                          <>
                            <span className="text-accent">$</span> read -p {"\"name: \""}
                          </>
                        ) : (
                          "Name"
                        )}
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className="rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground caret-primary placeholder:text-muted-foreground/40 outline-none transition-colors focus:border-primary"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs text-muted-foreground">
                        {isTerminal ? (
                          <>
                            <span className="text-accent">$</span> read -p {"\"email: \""}
                          </>
                        ) : (
                          "Email"
                        )}
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground caret-primary placeholder:text-muted-foreground/40 outline-none transition-colors focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="subject" className="text-xs text-muted-foreground">
                      {isTerminal ? (
                        <>
                          <span className="text-accent">$</span> read -p {"\"subject: \""}
                        </>
                      ) : (
                        "Subject"
                      )}
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {["Freelance", "Full-time", "Collab", "Hello"].map((option) => (
                        <label key={option} className="cursor-pointer">
                          <input type="radio" name="subject" value={option} className="peer sr-only" />
                          <span className="inline-flex items-center rounded-md border border-border px-3 py-1.5 text-xs text-muted-foreground transition-all peer-checked:border-primary peer-checked:text-primary peer-checked:bg-primary/10 hover:border-muted-foreground">
                            {isTerminal ? `--${option.toLowerCase()}` : option}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs text-muted-foreground">
                      {isTerminal ? (
                        <>
                          <span className="text-accent">$</span> cat {"<< EOF"}
                        </>
                      ) : (
                        "Message"
                      )}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell me about your project..."
                      className="resize-none rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground caret-primary placeholder:text-muted-foreground/40 outline-none transition-colors focus:border-primary"
                    />
                    {isTerminal && <p className="text-xs text-muted-foreground">EOF</p>}
                  </div>

                  {error && (
                    <div className={`flex items-start gap-2 rounded-md p-3 ${
                      isTerminal
                        ? "border border-destructive/50 bg-destructive/10"
                        : "border border-red-200 bg-red-50"
                    }`}>
                      {isTerminal ? (
                        <span className="text-destructive text-xs font-mono">stderr:</span>
                      ) : (
                        <AlertCircle className="h-4 w-4 text-red-600 mt-0.5 shrink-0" />
                      )}
                      <p className={`text-sm ${isTerminal ? "text-destructive" : "text-red-600"}`}>
                        {error}
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className={`inline-flex items-center justify-center gap-2 self-start rounded-md px-6 py-2.5 text-sm font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                      isTerminal
                        ? "border border-primary bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground disabled:hover:bg-primary/10 disabled:hover:text-primary"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                    }`}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        {isTerminal ? "sending..." : "Sending..."}
                      </>
                    ) : isTerminal ? (
                      <>
                        <span>$</span> send_message
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  )
}
