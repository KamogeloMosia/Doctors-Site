"use client"

import type * as React from "react"
import { createContext, useContext, useEffect, useState } from "react"

// Update the Theme type to include our new theme options
type Theme =
  | "light"
  | "dark"
  | "system"
  | "professional-light"
  | "professional-dark"
  | "calm-light"
  | "calm-dark"
  | "vibrant-light"
  | "vibrant-dark"
  | "high-contrast-light"
  | "high-contrast-dark"
  | "nature-light"
  | "nature-dark"
type Palette = "default" | "custom" | string

type ThemeColors = {
  primary: string
  accent: string
  background: string
  cardBg: string
  text: string
  textMuted: string
  border: string
  buttonText: string
  accentButtonText: string
}

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  defaultPalette?: Palette
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
  palette: Palette
  setPalette: (palette: Palette) => void
  colors: ThemeColors
  setColors: (colors: Partial<ThemeColors>) => void
  resetToDefaultColors: (palette?: string) => void
}

const defaultLightColors: ThemeColors = {
  primary: "#111827",
  accent: "#f3f4f6",
  background: "#ffffff",
  cardBg: "#ffffff",
  text: "#1f2937",
  textMuted: "#6b7280",
  border: "#e5e7eb",
  buttonText: "#ffffff",
  accentButtonText: "#1f2937",
}

const defaultDarkColors: ThemeColors = {
  primary: "#f3f4f6",
  accent: "#374151",
  background: "#111827",
  cardBg: "#1f2937",
  text: "#f3f4f6",
  textMuted: "#9ca3af",
  border: "#374151",
  buttonText: "#ffffff",
  accentButtonText: "#ffffff",
}

// Predefined theme palettes
const palettes = {
  default: {
    light: { ...defaultLightColors },
    dark: { ...defaultDarkColors },
  },
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
  palette: "default",
  setPalette: () => null,
  colors: defaultLightColors,
  setColors: () => null,
  resetToDefaultColors: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  defaultPalette = "default",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)
  const [palette, setPalette] = useState<Palette>(defaultPalette)
  const [colors, setColorsState] = useState<ThemeColors>(defaultLightColors)

  // Function to set individual color properties
  const setColors = (newColors: Partial<ThemeColors>) => {
    setColorsState((prevColors) => ({
      ...prevColors,
      ...newColors,
    }))
  }

  // Function to reset colors to a predefined palette
  const resetToDefaultColors = (newPalette?: string) => {
    const paletteToUse = newPalette || palette
    const mode = theme === "dark" ? "dark" : "light"

    if (paletteToUse === "custom") {
      // Keep custom colors
      return
    }

    if (paletteToUse in palettes) {
      setColorsState(palettes[paletteToUse][mode])
    } else {
      // Fallback to default
      setColorsState(mode === "dark" ? defaultDarkColors : defaultLightColors)
    }
  }

  // Load saved theme and colors from localStorage
  useEffect(() => {
    const root = window.document.documentElement
    const savedTheme = localStorage.getItem("theme") as Theme | null
    const savedPalette = localStorage.getItem("palette") as Palette | null
    const savedColors = localStorage.getItem("themeColors")

    if (savedTheme) {
      setTheme(savedTheme)
      if (savedTheme === "dark") {
        root.classList.add("dark")
      } else {
        root.classList.remove("dark")
      }
    } else if (defaultTheme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      setTheme(systemTheme)
      if (systemTheme === "dark") {
        root.classList.add("dark")
      } else {
        root.classList.remove("dark")
      }
    }

    if (savedPalette) {
      setPalette(savedPalette)
    }

    if (savedColors) {
      try {
        const parsedColors = JSON.parse(savedColors)
        setColorsState(parsedColors)
      } catch (e) {
        console.error("Failed to parse saved colors", e)
        resetToDefaultColors(savedPalette || defaultPalette)
      }
    } else {
      resetToDefaultColors(savedPalette || defaultPalette)
    }
  }, [defaultTheme, defaultPalette])

  // Update the useEffect that handles theme changes to work with our new theme options
  // Find the useEffect that contains the line: root.setAttribute("data-theme", theme === "dark" ? "dark" : "light")
  // And replace that useEffect with this one:

  // Handle theme changes
  useEffect(() => {
    const root = window.document.documentElement
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    if (theme === "system") {
      const systemTheme = mediaQuery.matches ? "dark" : "light"
      if (systemTheme === "dark") {
        root.classList.add("dark")
        root.setAttribute("data-theme", "dark")
      } else {
        root.classList.remove("dark")
        root.setAttribute("data-theme", "light")
      }
    } else if (theme === "dark" || theme.endsWith("-dark")) {
      root.classList.add("dark")
      root.setAttribute("data-theme", theme)
    } else {
      root.classList.remove("dark")
      root.setAttribute("data-theme", theme)
    }

    localStorage.setItem("theme", theme)

    // When theme changes, update colors based on the current palette
    if (palette !== "custom") {
      resetToDefaultColors()
    }
  }, [theme, palette])

  // Apply colors to CSS variables
  useEffect(() => {
    const root = window.document.documentElement

    // Set CSS variables
    root.style.setProperty("--primary-color", colors.primary)
    root.style.setProperty("--accent-color", colors.accent)
    root.style.setProperty("--background-color", colors.background)
    root.style.setProperty("--card-bg-color", colors.cardBg)
    root.style.setProperty("--text-color", colors.text)
    root.style.setProperty("--text-muted-color", colors.textMuted)
    root.style.setProperty("--border-color", colors.border)
    root.style.setProperty("--button-text-color", colors.buttonText)
    root.style.setProperty("--accent-button-text-color", colors.accentButtonText)

    // Save to localStorage
    localStorage.setItem("themeColors", JSON.stringify(colors))
  }, [colors])

  // Handle palette changes
  useEffect(() => {
    localStorage.setItem("palette", palette)

    if (palette !== "custom") {
      resetToDefaultColors()
    }
  }, [palette])

  const value = {
    theme,
    setTheme,
    palette,
    setPalette,
    colors,
    setColors,
    resetToDefaultColors,
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
