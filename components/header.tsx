"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { useTheme } from "@/components/theme-provider"
import ThemeToggle from "@/components/theme-toggle"
// Import the ThemeSelector component
import ThemeSelector from "@/components/theme-selector"

interface HeaderProps {
  className?: string
}

export default function Header({ className = "" }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "shadow-md" : ""} ${className}`}
      style={{ backgroundColor: "var(--background-color)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex-shrink-0 lg:hidden">
            <Link
              href="/"
              className="text-2xl font-bold font-poppins tracking-tight transition-colors duration-300"
              style={{ color: "var(--primary-color)" }}
            >
              Dr. Kabongo Salumu
            </Link>
          </div>

          {/* Desktop menu - hidden on mobile, visible on desktop but only for screens without sidebar */}
          <nav className="hidden md:flex md:items-center md:space-x-8 lg:hidden">
            <Link
              href="/"
              className="text-base font-medium transition-colors duration-200 hover:text-primary-600"
              style={{ color: "var(--text-color)" }}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-base font-medium transition-colors duration-200 hover:text-primary-600"
              style={{ color: "var(--text-color)" }}
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-base font-medium transition-colors duration-200 hover:text-primary-600"
              style={{ color: "var(--text-color)" }}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-base font-medium transition-colors duration-200 hover:text-primary-600"
              style={{ color: "var(--text-color)" }}
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeSelector />
            <ThemeToggle />
            <div className="hidden md:block lg:hidden">
              <Link href="/contact" className="btn btn-primary" style={{ backgroundColor: "var(--primary-color)" }}>
                Book Appointment
              </Link>
            </div>
          </div>

          {/* Theme toggle for mobile */}
          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
