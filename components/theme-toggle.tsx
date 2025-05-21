"use client"

import { useTheme } from "@/components/theme-provider"
import { Sun, Moon } from "lucide-react"
import { useEffect } from "react"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === "dark"

  // Update data-theme attribute when theme changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme === "dark" ? "dark" : "light")
  }, [theme])

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      style={{
        backgroundColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)",
        color: "var(--text-primary)",
      }}
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  )
}
