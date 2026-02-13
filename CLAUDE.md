# CLAUDE.md

This file provides guidance for Claude Code when working on this project.

## Project Overview

Personal portfolio website (robcurtis.dev) with a terminal/CRT aesthetic. Built as a single-page application with section-based navigation.

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v3 with CSS variables for theming
- **UI Components**: shadcn/ui (Radix primitives)
- **Package Manager**: pnpm
- **Font**: JetBrains Mono (monospace throughout)

## Commands

```bash
pnpm dev          # Start dev server with Turbopack
pnpm build        # Production build
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

## Project Structure

```
app/
  layout.tsx      # Root layout with font setup
  page.tsx        # Main page composing all sections
  globals.css     # Tailwind + custom animations/effects

components/
  header.tsx      # Fixed nav with terminal-style commands
  hero-section.tsx    # ASCII art + typewriter intro
  marquee.tsx     # Scrolling tech stack
  about-section.tsx
  projects-section.tsx
  skills-section.tsx
  contact-section.tsx
  footer.tsx
  ui/             # shadcn/ui components

hooks/
  use-typewriter.ts   # Typewriter text animation
  use-scroll-reveal.ts # Intersection observer for reveal
  use-toast.ts        # Toast notifications
  use-mobile.tsx      # Mobile breakpoint detection

lib/
  utils.ts        # cn() helper for class merging
```

## Design System

The site uses a dark terminal theme with CSS variables:
- **Primary** (green): `hsl(120 40% 60%)` - main text, accents
- **Accent** (amber): `hsl(36 90% 55%)` - prompts, highlights
- **Background**: `hsl(220 16% 8%)` - dark blue-gray

Key visual effects in `globals.css`:
- `.scanline` - CRT scanline animation
- `.text-glow` / `.text-glow-amber` - neon glow effects
- `.animate-blink` - cursor blinking
- `.animate-marquee` - horizontal scroll animation

## Code Conventions

- Use `@/` path alias for imports (maps to project root)
- Components use named exports
- Client components marked with `"use client"` directive
- Tailwind classes use the `cn()` utility for conditional merging
- All colors reference CSS variables via `hsl(var(--name))`

## shadcn/ui

Components are in `components/ui/`. Add new components via:
```bash
npx shadcn@latest add [component-name]
```

Configuration in `components.json`:
- Style: default
- Base color: neutral
- Icons: lucide-react
