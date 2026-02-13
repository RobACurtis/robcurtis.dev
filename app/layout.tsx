import type { Metadata } from "next"
import { JetBrains_Mono, Inter } from "next/font/google"

import { AestheticModeProvider } from "@/contexts/aesthetic-mode-context"
import "./globals.css"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Rob Curtis | Full Stack Software Engineer",
  description:
    "Full Stack Software Engineer specializing in TypeScript, React, Next.js, and Python. Building fast, scalable web applications.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${jetbrainsMono.variable} ${inter.variable}`}
      data-aesthetic="terminal"
      suppressHydrationWarning
    >
      <body className="font-mono antialiased">
        <AestheticModeProvider>{children}</AestheticModeProvider>
      </body>
    </html>
  )
}
