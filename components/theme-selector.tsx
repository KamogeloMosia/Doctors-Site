"use client"

import type React from "react"

import { useTheme } from "@/components/theme-provider"
import { Check, Sun, Moon, Palette, Zap, Leaf, Eye } from "lucide-react"
import { useState } from "react"

interface ThemeOption {
  id: Theme
  name: string
  icon: React.ReactNode
  description: string
}

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

export default function ThemeSelector() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const themeOptions: ThemeOption[] = [
    {
      id: "light",
      name: "Light",
      icon: <Sun className="h-4 w-4" />,
      description: "Default light theme",
    },
    {
      id: "dark",
      name: "Dark",
      icon: <Moon className="h-4 w-4" />,
      description: "Default dark theme",
    },
    {
      id: "professional-light",
      name: "Professional Light",
      icon: <Palette className="h-4 w-4" />,
      description: "Clean, professional appearance",
    },
    {
      id: "professional-dark",
      name: "Professional Dark",
      icon: <Palette className="h-4 w-4" />,
      description: "Professional dark mode",
    },
    {
      id: "calm-light",
      name: "Calm Light",
      icon: <Leaf className="h-4 w-4" />,
      description: "Soothing blue tones",
    },
    {
      id: "calm-dark",
      name: "Calm Dark",
      icon: <Leaf className="h-4 w-4" />,
      description: "Relaxing dark blue theme",
    },
    {
      id: "vibrant-light",
      name: "Vibrant Light",
      icon: <Zap className="h-4 w-4" />,
      description: "Energetic pink accents",
    },
    {
      id: "vibrant-dark",
      name: "Vibrant Dark",
      icon: <Zap className="h-4 w-4" />,
      description: "Bold purple theme",
    },
    {
      id: "high-contrast-light",
      name: "High Contrast Light",
      icon: <Eye className="h-4 w-4" />,
      description: "Maximum readability",
    },
    {
      id: "high-contrast-dark",
      name: "High Contrast Dark",
      icon: <Eye className="h-4 w-4" />,
      description: "High contrast dark mode",
    },
    {
      id: "nature-light",
      name: "Nature Light",
      icon: <Leaf className="h-4 w-4" />,
      description: "Fresh green theme",
    },
    {
      id: "nature-dark",
      name: "Nature Dark",
      icon: <Leaf className="h-4 w-4" />,
      description: "Forest-inspired dark theme",
    },
  ]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-2 rounded-md transition-colors duration-200"
        style={{
          backgroundColor: "var(--card-hover)",
          color: "var(--text-primary)",
          border: "1px solid var(--border)",
        }}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Palette className="h-5 w-5" />
        <span className="hidden sm:inline">Theme</span>
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} aria-hidden="true"></div>
          <div
            className="absolute right-0 mt-2 w-72 rounded-md shadow-lg z-50 overflow-hidden"
            style={{
              backgroundColor: "var(--card)",
              border: "1px solid var(--border)",
            }}
          >
            <div className="p-2">
              <div className="p-2 mb-2">
                <h3 className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                  Select Theme
                </h3>
                <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>
                  Choose from multiple theme options
                </p>
              </div>
              <div className="grid grid-cols-1 gap-1 max-h-80 overflow-y-auto">
                {themeOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => {
                      setTheme(option.id)
                      setIsOpen(false)
                    }}
                    className={`flex items-center gap-3 w-full text-left p-2 rounded-md transition-colors duration-200 ${
                      theme === option.id ? "bg-opacity-10" : "hover:bg-opacity-5"
                    }`}
                    style={{
                      backgroundColor: theme === option.id ? "var(--accent)" : "transparent",
                      color: "var(--text-primary)",
                    }}
                  >
                    <div
                      className="flex items-center justify-center w-8 h-8 rounded-full"
                      style={{
                        backgroundColor: theme === option.id ? "var(--accent)" : "var(--card-hover)",
                        color: theme === option.id ? "var(--text-secondary)" : "var(--text-primary)",
                      }}
                    >
                      {option.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">{option.name}</div>
                      <div className="text-xs" style={{ color: "var(--muted)" }}>
                        {option.description}
                      </div>
                    </div>
                    {theme === option.id && <Check className="h-4 w-4" style={{ color: "var(--accent)" }} />}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
