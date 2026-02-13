"use client"

import { useState, useEffect } from "react"

export function useTypewriter(
  text: string,
  speed = 40,
  startDelay = 0
) {
  const [displayedText, setDisplayedText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout
    let charIndex = 0

    const startTyping = () => {
      const type = () => {
        if (charIndex < text.length) {
          setDisplayedText(text.slice(0, charIndex + 1))
          charIndex++
          timeout = setTimeout(type, speed)
        } else {
          setIsComplete(true)
        }
      }
      type()
    }

    timeout = setTimeout(startTyping, startDelay)

    return () => clearTimeout(timeout)
  }, [text, speed, startDelay])

  return { displayedText, isComplete }
}
