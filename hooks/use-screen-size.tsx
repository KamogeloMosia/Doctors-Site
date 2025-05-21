"use client"

import { useState, useEffect } from "react"

type ScreenSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl"

export function useScreenSize() {
  const [screenSize, setScreenSize] = useState<ScreenSize>("md")
  const [width, setWidth] = useState(0)

  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return

    // Set initial width
    setWidth(window.innerWidth)

    // Function to update screen size
    const updateScreenSize = () => {
      const width = window.innerWidth
      setWidth(width)

      if (width < 480) {
        setScreenSize("xs")
      } else if (width < 640) {
        setScreenSize("sm")
      } else if (width < 768) {
        setScreenSize("md")
      } else if (width < 1024) {
        setScreenSize("lg")
      } else if (width < 1280) {
        setScreenSize("xl")
      } else {
        setScreenSize("2xl")
      }
    }

    // Initial check
    updateScreenSize()

    // Add event listener
    window.addEventListener("resize", updateScreenSize)

    // Cleanup
    return () => window.removeEventListener("resize", updateScreenSize)
  }, [])

  // Helper functions
  const isMobile = width < 768
  const isTablet = width >= 768 && width < 1024
  const isDesktop = width >= 1024

  return {
    screenSize,
    width,
    isMobile,
    isTablet,
    isDesktop,
  }
}
