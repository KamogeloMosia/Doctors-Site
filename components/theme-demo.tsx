"use client"

import { useState } from "react"
import { useTheme } from "@/components/theme-provider"
import ThemeToggle from "@/components/theme-toggle"
import { Palette } from "lucide-react"
// Import the ThemeSelector component
import ThemeSelector from "@/components/theme-selector"

export default function ThemeDemo() {
  const { theme, setTheme } = useTheme()
  const [showColorValues, setShowColorValues] = useState(false)

  // Get CSS variable value
  const getCssVar = (name: string) => {
    if (typeof window !== "undefined") {
      return getComputedStyle(document.documentElement).getPropertyValue(name)
    }
    return ""
  }

  return (
    <div className="max-w-3xl mx-auto p-6 rounded-lg shadow-md" style={{ backgroundColor: "var(--card-bg-color)" }}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold" style={{ color: "var(--primary-color)" }}>
          Theme System Demo
        </h2>
        <ThemeToggle />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold" style={{ color: "var(--text-color)" }}>
            Theme Selection
          </h3>
          <div className="flex items-center justify-between">
            <div className="text-sm" style={{ color: "var(--text-muted-color)" }}>
              Current theme:{" "}
              <span className="font-medium" style={{ color: "var(--text-color)" }}>
                {theme}
              </span>
            </div>
            <ThemeSelector />
          </div>
          <div className="text-sm" style={{ color: "var(--text-muted-color)" }}>
            Click the palette icon to select from multiple theme options
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold" style={{ color: "var(--text-color)" }}>
              Current Theme Colors
            </h3>
            <button
              onClick={() => setShowColorValues(!showColorValues)}
              className="flex items-center gap-1 text-sm px-2 py-1 rounded"
              style={{ color: "var(--text-muted-color)" }}
            >
              <Palette size={14} />
              {showColorValues ? "Hide Values" : "Show Values"}
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[
              { name: "Base Primary", var: "--base-primary" },
              { name: "Base Secondary", var: "--base-secondary" },
              { name: "Text Primary", var: "--text-primary" },
              { name: "Text Secondary", var: "--text-secondary" },
              { name: "Accent", var: "--accent" },
              { name: "Muted", var: "--muted" },
              { name: "Border", var: "--border" },
              { name: "Card", var: "--card" },
            ].map((color) => (
              <div
                key={color.var}
                className="flex items-center gap-2 p-2 rounded"
                style={{ backgroundColor: "var(--card-hover)" }}
              >
                <div
                  className="w-6 h-6 rounded-full"
                  style={{ backgroundColor: `var(${color.var})`, border: "1px solid var(--border)" }}
                ></div>
                <div>
                  <div className="text-sm font-medium" style={{ color: "var(--text-color)" }}>
                    {color.name}
                  </div>
                  {showColorValues && (
                    <div className="text-xs" style={{ color: "var(--text-muted-color)" }}>
                      {getCssVar(color.var)}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-lg font-semibold" style={{ color: "var(--text-color)" }}>
          UI Elements Preview
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-medium" style={{ color: "var(--text-color)" }}>
              Buttons
            </h4>
            <div className="flex flex-wrap gap-2">
              <button
                className="px-4 py-2 rounded-md"
                style={{ backgroundColor: "var(--primary-color)", color: "var(--button-text-color)" }}
              >
                Primary Button
              </button>
              <button
                className="px-4 py-2 rounded-md"
                style={{ backgroundColor: "var(--accent-color)", color: "var(--accent-button-text-color)" }}
              >
                Secondary Button
              </button>
              <button
                className="px-4 py-2 rounded-md border"
                style={{
                  backgroundColor: "transparent",
                  color: "var(--text-color)",
                  borderColor: "var(--border-color)",
                }}
              >
                Outline Button
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium" style={{ color: "var(--text-color)" }}>
              Text & Links
            </h4>
            <div className="space-y-2">
              <p style={{ color: "var(--text-color)" }}>
                This is regular text that adapts to the current theme. It should have good contrast against the
                background.
              </p>
              <p style={{ color: "var(--text-muted-color)" }}>
                This is muted text for secondary information with slightly less contrast.
              </p>
              <p>
                <a href="#" style={{ color: "var(--primary-color)" }}>
                  This is a link that uses the accent color
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-medium" style={{ color: "var(--text-color)" }}>
            Card & Form Elements
          </h4>
          <div
            className="p-4 rounded-lg border"
            style={{ backgroundColor: "var(--card-bg-color)", borderColor: "var(--border-color)" }}
          >
            <h5 className="text-lg font-medium mb-4" style={{ color: "var(--primary-color)" }}>
              Card Title
            </h5>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: "var(--text-color)" }}>
                  Input Field
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 rounded-md border"
                  placeholder="Type something..."
                  style={{
                    backgroundColor: "var(--background-color)",
                    color: "var(--text-color)",
                    borderColor: "var(--border-color)",
                  }}
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="checkbox"
                  className="mr-2 h-4 w-4"
                  style={{ accentColor: "var(--primary-color)" }}
                />
                <label htmlFor="checkbox" style={{ color: "var(--text-color)" }}>
                  Checkbox option
                </label>
              </div>
              <div>
                <button
                  className="w-full px-4 py-2 rounded-md"
                  style={{ backgroundColor: "var(--primary-color)", color: "var(--button-text-color)" }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
