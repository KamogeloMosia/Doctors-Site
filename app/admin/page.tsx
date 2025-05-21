"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Eye, EyeOff, Lock, Save, Sun, Moon, Palette, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Footer from "@/components/footer"
import BottomNavbar from "@/components/bottom-navbar"
import { useTheme } from "@/components/theme-provider"
import ThemeSelector from "@/components/theme-selector"

// Admin password - in a real app, this would be handled server-side
const ADMIN_PASSWORD = "admin123"

export default function AdminPage() {
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isThemeSelectorOpen, setIsThemeSelectorOpen] = useState(false)
  const [error, setError] = useState("")
  const [saveSuccess, setSaveSuccess] = useState(false)

  // Use the theme context
  const { theme, setTheme, palette, colors } = useTheme()
  const isDarkMode = theme === "dark"

  // Check if user is already authenticated
  useEffect(() => {
    const authStatus = localStorage.getItem("adminAuthenticated")
    if (authStatus === "true") {
      setIsAuthenticated(true)
    }
    setIsLoading(false)
  }, [])

  // Handle password submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      localStorage.setItem("adminAuthenticated", "true")
      setError("")
    } else {
      setError("Invalid password. Please try again.")
    }
  }

  // Handle theme toggle
  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark")
  }

  // Open theme selector modal
  const openThemeSelector = () => {
    setIsThemeSelectorOpen(true)
  }

  // Save theme settings
  const saveSettings = () => {
    // Show success message
    setSaveSuccess(true)
    setTimeout(() => setSaveSuccess(false), 3000)
  }

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("adminAuthenticated")
    setIsAuthenticated(false)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div
          className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2"
          style={{ borderColor: "var(--primary-color)" }}
        ></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300">
      <main className="flex-grow pb-24 md:pb-16 transition-colors duration-300">
        {/* Back to home link */}
        <div className="max-w-7xl mx-auto pt-6 px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium transition-colors duration-200"
            style={{ color: "var(--text-color)" }}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>
        </div>

        <section className="section-padding">
          <div className="max-w-3xl mx-auto container-padding">
            <div className="text-center mb-8">
              <h1
                className="text-3xl md:text-4xl font-bold font-poppins mb-4"
                style={{ color: "var(--primary-color)" }}
              >
                Admin Dashboard
              </h1>
              <p style={{ color: "var(--text-color)" }}>Manage website theme and appearance</p>
            </div>

            {!isAuthenticated ? (
              <div className="card card-padding max-w-md mx-auto animate-fadeIn">
                <h2 className="text-xl font-bold mb-6 font-poppins" style={{ color: "var(--primary-color)" }}>
                  Admin Login
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="password" className="form-label">
                      <Lock className="inline-block w-4 h-4 mr-1 -mt-0.5" /> Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-input pr-10"
                        required
                        placeholder="Enter admin password"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => setShowPassword(!showPassword)}
                        style={{ color: "var(--text-color)" }}
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  {error && <p className="text-red-500 text-sm">{error}</p>}

                  <button type="submit" className="form-button" style={{ backgroundColor: "var(--primary-color)" }}>
                    Login
                  </button>
                </form>
              </div>
            ) : (
              <div className="space-y-8 animate-fadeIn">
                <div className="card card-padding">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold font-poppins" style={{ color: "var(--primary-color)" }}>
                      Theme Settings
                    </h2>
                    <button
                      onClick={handleLogout}
                      className="text-sm hover:opacity-80 transition-opacity duration-200"
                      style={{ color: "var(--text-color)" }}
                    >
                      Logout
                    </button>
                  </div>

                  <div className="space-y-6">
                    {/* Theme Toggle */}
                    <div
                      className="flex justify-between items-center p-4 rounded-lg"
                      style={{ backgroundColor: "var(--accent-color)" }}
                    >
                      <div className="flex items-center">
                        {isDarkMode ? <Moon className="h-5 w-5 mr-2" /> : <Sun className="h-5 w-5 mr-2" />}
                        <span>{isDarkMode ? "Dark Mode" : "Light Mode"}</span>
                      </div>
                      <button
                        onClick={toggleTheme}
                        className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
                        style={{
                          backgroundColor: isDarkMode ? "var(--primary-color)" : "#e5e7eb",
                        }}
                      >
                        <span
                          className={`${
                            isDarkMode ? "translate-x-6" : "translate-x-1"
                          } inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300`}
                        />
                      </button>
                    </div>

                    {/* Theme Customization */}
                    <div className="p-4 rounded-lg" style={{ backgroundColor: "var(--accent-color)" }}>
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center">
                          <Palette className="h-5 w-5 mr-2" />
                          <span>Theme Customization</span>
                        </div>
                      </div>

                      <p className="text-sm mb-4" style={{ color: "var(--text-muted-color)" }}>
                        Customize your website's colors and appearance. Choose from preset themes or create your own
                        custom theme.
                      </p>

                      <button
                        onClick={openThemeSelector}
                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200"
                        style={{
                          backgroundColor: "var(--primary-color)",
                          color: "var(--button-text-color)",
                        }}
                      >
                        <Palette className="mr-2 h-4 w-4" />
                        Open Theme Customizer
                      </button>
                    </div>

                    {/* Current Theme Info */}
                    <div className="p-4 rounded-lg" style={{ backgroundColor: "var(--accent-color)" }}>
                      <h3 className="font-medium mb-3">Current Theme</h3>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="block text-xs opacity-70">Mode:</span>
                          <span>{theme === "dark" ? "Dark" : "Light"}</span>
                        </div>
                        <div>
                          <span className="block text-xs opacity-70">Palette:</span>
                          <span>{palette === "custom" ? "Custom" : palette}</span>
                        </div>
                        <div>
                          <span className="block text-xs opacity-70">Primary Color:</span>
                          <div className="flex items-center">
                            <div
                              className="w-3 h-3 rounded-full mr-1"
                              style={{ backgroundColor: colors.primary }}
                            ></div>
                            <span>{colors.primary}</span>
                          </div>
                        </div>
                        <div>
                          <span className="block text-xs opacity-70">Accent Color:</span>
                          <div className="flex items-center">
                            <div className="w-3 h-3 rounded-full mr-1" style={{ backgroundColor: colors.accent }}></div>
                            <span>{colors.accent}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Save Button */}
                    <button
                      onClick={saveSettings}
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200"
                      style={{
                        backgroundColor: "var(--primary-color)",
                        color: "var(--button-text-color)",
                      }}
                    >
                      <Save className="mr-2 h-4 w-4" />
                      Save Settings
                    </button>

                    {saveSuccess && (
                      <div className="text-center text-green-500 animate-fadeIn">Settings saved successfully!</div>
                    )}
                  </div>
                </div>

                <div className="card card-padding">
                  <h2 className="text-xl font-bold mb-4 font-poppins" style={{ color: "var(--primary-color)" }}>
                    Preview
                  </h2>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg border" style={{ borderColor: "var(--border-color)" }}>
                      <h3 className="font-medium mb-2" style={{ color: "var(--primary-color)" }}>
                        Button Preview
                      </h3>
                      <button
                        className="px-4 py-2 rounded-md text-white transition-colors duration-200"
                        style={{ backgroundColor: "var(--primary-color)", color: "var(--button-text-color)" }}
                      >
                        Primary Button
                      </button>

                      <button
                        className="px-4 py-2 rounded-md ml-2 transition-colors duration-200"
                        style={{
                          backgroundColor: "var(--accent-color)",
                          color: "var(--accent-button-text-color)",
                        }}
                      >
                        Accent Button
                      </button>
                    </div>

                    <div className="p-4 rounded-lg border" style={{ borderColor: "var(--border-color)" }}>
                      <h3 className="font-medium mb-2" style={{ color: "var(--primary-color)" }}>
                        Text Preview
                      </h3>
                      <p className="transition-colors duration-200" style={{ color: "var(--primary-color)" }}>
                        This text is displayed in the primary color.
                      </p>
                      <p className="mt-2" style={{ color: "var(--text-color)" }}>
                        This is regular text in the theme's text color.
                      </p>
                      <p className="mt-2" style={{ color: "var(--text-muted-color)" }}>
                        This is muted text for secondary information.
                      </p>
                    </div>

                    <div className="p-4 rounded-lg border" style={{ borderColor: "var(--border-color)" }}>
                      <h3 className="font-medium mb-2" style={{ color: "var(--primary-color)" }}>
                        Card Preview
                      </h3>
                      <div
                        className="p-4 rounded-md transition-colors duration-200"
                        style={{
                          backgroundColor: "var(--card-bg-color)",
                          border: `1px solid var(--border-color)`,
                        }}
                      >
                        <h4 style={{ color: "var(--primary-color)" }}>Card Title</h4>
                        <p className="text-sm mt-1" style={{ color: "var(--text-color)" }}>
                          This is how cards will appear with the selected theme.
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-lg border" style={{ borderColor: "var(--border-color)" }}>
                      <h3 className="font-medium mb-2" style={{ color: "var(--primary-color)" }}>
                        Background & Accent Colors
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div
                          className="p-4 rounded-md transition-colors duration-200 text-center"
                          style={{
                            backgroundColor: "var(--background-color)",
                            border: `1px solid var(--border-color)`,
                          }}
                        >
                          <span style={{ color: "var(--text-color)" }}>Background Color</span>
                        </div>
                        <div
                          className="p-4 rounded-md transition-colors duration-200 text-center"
                          style={{
                            backgroundColor: "var(--accent-color)",
                            color: "var(--accent-button-text-color)",
                          }}
                        >
                          <span>Accent Color</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <BottomNavbar />

      {/* Theme Selector Modal */}
      {isThemeSelectorOpen && <ThemeSelector isModal={true} onClose={() => setIsThemeSelectorOpen(false)} />}
    </div>
  )
}
