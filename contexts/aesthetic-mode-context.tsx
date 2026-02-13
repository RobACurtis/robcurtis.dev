"use client"

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react"

type AestheticMode = "terminal" | "basic"

interface AestheticModeContextValue {
  mode: AestheticMode
  setMode: (mode: AestheticMode) => void
  toggle: () => void
  isTerminal: boolean
  isBasic: boolean
}

const AestheticModeContext = createContext<AestheticModeContextValue | null>(null)

const STORAGE_KEY = "aesthetic-mode"

export function AestheticModeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<AestheticMode>("basic")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem(STORAGE_KEY) as AestheticMode | null
    if (stored === "terminal" || stored === "basic") {
      setModeState(stored)
      document.documentElement.setAttribute("data-aesthetic", stored)
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute("data-aesthetic", mode)
      localStorage.setItem(STORAGE_KEY, mode)
    }
  }, [mode, mounted])

  function setMode(newMode: AestheticMode) {
    setModeState(newMode)
  }

  function toggle() {
    setModeState((prev) => (prev === "terminal" ? "basic" : "terminal"))
  }

  // Prevent flash by not rendering until mounted
  if (!mounted) {
    return <div className="min-h-screen bg-background" />
  }

  return (
    <AestheticModeContext.Provider
      value={{
        mode,
        setMode,
        toggle,
        isTerminal: mode === "terminal",
        isBasic: mode === "basic",
      }}
    >
      {children}
    </AestheticModeContext.Provider>
  )
}

export function useAestheticMode() {
  const context = useContext(AestheticModeContext)
  if (!context) {
    throw new Error("useAestheticMode must be used within AestheticModeProvider")
  }
  return context
}
