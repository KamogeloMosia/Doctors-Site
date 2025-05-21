"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import {
  Home,
  User,
  Stethoscope,
  Phone,
  Calendar,
  Settings,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Palette,
} from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import ThemeToggle from "@/components/theme-toggle"

interface SideNavbarProps {
  className?: string
}

export default function SideNavbar({ className = "" }: SideNavbarProps) {
  const pathname = usePathname()
  const { theme } = useTheme()
  const isAdmin = typeof window !== "undefined" ? localStorage.getItem("adminAuthenticated") === "true" : false
  const [collapsed, setCollapsed] = useState(false)

  // Adjust sidebar width based on screen size
  useEffect(() => {
    const handleResize = () => {
      // Auto-collapse on smaller tablets
      if (window.innerWidth < 1024 && window.innerWidth >= 768) {
        setCollapsed(true)
      } else if (window.innerWidth >= 1024) {
        setCollapsed(false)
      }
    }

    // Initial check
    handleResize()

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Update the navItems array to include the theme demo page
  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About", icon: User },
    { href: "/services", label: "Services", icon: Stethoscope },
    { href: "/contact", label: "Contact", icon: Phone },
    { href: "/theme-demo", label: "Theme Demo", icon: Palette },
  ]

  if (isAdmin) {
    navItems.push({ href: "/admin", label: "Admin", icon: Settings })
  }

  return (
    <aside
      className={`fixed top-0 left-0 h-screen transition-all duration-300 z-40 ${
        collapsed ? "w-20" : "w-64 lg:w-80"
      } ${className}`}
      style={{ borderColor: "var(--border-color)", backgroundColor: "var(--background-color)" }}
    >
      <div className="h-full flex flex-col border-r" style={{ borderColor: "var(--border-color)" }}>
        <div
          className={`p-6 border-b flex items-center justify-between ${collapsed ? "p-4" : ""}`}
          style={{ borderColor: "var(--border-color)" }}
        >
          {!collapsed ? (
            <Link href="/" className="text-xl font-bold font-poppins tracking-tight">
              <span style={{ color: "var(--primary-color)" }}>Dr. Salumu</span>
            </Link>
          ) : (
            <Link href="/" className="text-xl font-bold font-poppins tracking-tight">
              <span style={{ color: "var(--primary-color)" }}>DS</span>
            </Link>
          )}

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              const Icon = item.icon
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center p-3 rounded-md transition-colors duration-200 ${
                      isActive ? "bg-opacity-10" : "hover:bg-opacity-5"
                    }`}
                    style={{
                      backgroundColor: isActive ? "var(--primary-color)" : "transparent",
                      color: isActive ? "var(--primary-color)" : "var(--text-color)",
                      opacity: isActive ? 1 : 0.8,
                    }}
                    title={collapsed ? item.label : ""}
                  >
                    <Icon
                      className="w-5 h-5 flex-shrink-0"
                      style={{ color: isActive ? "var(--primary-color)" : "inherit" }}
                    />
                    {!collapsed && <span className="font-medium ml-3">{item.label}</span>}
                  </Link>
                </li>
              )
            })}
          </ul>

          {!collapsed && (
            <div className="mt-8">
              <h3
                className="px-3 text-xs font-semibold uppercase tracking-wider mb-2"
                style={{ color: "var(--text-muted-color)" }}
              >
                Quick Actions
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/contact"
                    className="flex items-center p-3 rounded-md transition-colors duration-200"
                    style={{ color: "var(--text-color)" }}
                  >
                    <MessageCircle className="w-5 h-5 mr-3" style={{ color: "var(--primary-color)" }} />
                    <span className="font-medium">Book Appointment</span>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </nav>

        <div
          className={`p-4 border-t ${collapsed ? "flex justify-center" : ""}`}
          style={{ borderColor: "var(--border-color)" }}
        >
          {!collapsed ? (
            <>
              <Link
                href="/contact"
                className="flex items-center justify-center p-3 rounded-md text-white transition-colors duration-200 mb-4"
                style={{ backgroundColor: "var(--primary-color)" }}
              >
                <Calendar className="w-5 h-5 mr-2" />
                <span className="font-medium">Book Appointment</span>
              </Link>
              <div className="flex items-center justify-between">
                <span className="text-sm" style={{ color: "var(--text-muted-color)" }}>
                  {theme === "dark" ? "Dark Mode" : "Light Mode"}
                </span>
                <ThemeToggle />
              </div>
            </>
          ) : (
            <ThemeToggle />
          )}
        </div>
      </div>
    </aside>
  )
}
