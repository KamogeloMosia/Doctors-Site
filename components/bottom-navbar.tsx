"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import { ChevronRight, ChevronLeft } from "lucide-react"

interface BottomNavbarProps {
  className?: string
}

export default function BottomNavbar({ className = "" }: BottomNavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(true)
  const pathname = usePathname()
  const navbarRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isCollapsed, setIsCollapsed] = useState(false)

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Load Material Icons
  useEffect(() => {
    const link = document.createElement("link")
    link.href = "https://fonts.googleapis.com/icon?family=Material+Icons"
    link.rel = "stylesheet"
    document.head.appendChild(link)

    return () => {
      document.head.removeChild(link)
    }
  }, [isMobile])

  // If not mobile, don't render the component
  if (!isMobile) return null

  // Main navigation items
  const navItems = [
    { href: "/", label: "Home", icon: "home" },
    { href: "/services", label: "Services", icon: "medical_services" },
    { href: "/contact", label: "Contact", icon: "call" },
    { href: "/about", label: "About", icon: "person" },
    { href: "#", label: "Options", icon: "settings", onClick: () => setIsMenuOpen(!isMenuOpen) },
  ]

  const isActive = (path: string) => pathname === path

  // Handle horizontal scrolling
  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <>
      {/* Main bottom navbar - only show on small screens */}
      <div
        className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${className}`}
        ref={navbarRef}
      >
        <div
          className={`flex items-center justify-between rounded-full px-3 py-2 shadow-lg transition-all duration-300 ${
            isCollapsed ? "w-auto" : ""
          }`}
          style={{
            backgroundColor: "rgba(33, 33, 33, 0.95)",
            backdropFilter: "blur(10px)",
          }}
        >
          {/* Scrollable container for icons */}
          <div
            ref={scrollContainerRef}
            className={`flex items-center overflow-x-auto scrollbar-hide px-1 transition-all duration-300 ${
              isCollapsed ? "max-w-[180px]" : "max-w-[calc(100vw-80px)]"
            }`}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {isCollapsed
              ? // When collapsed, only show active icon with label
                navItems.map((item) =>
                  isActive(item.href) ? (
                    <div key={item.href} className="flex items-center bg-white/20 rounded-full py-1 px-3">
                      <span className="material-icons text-xl text-white">{item.icon}</span>
                      <span className="ml-2 text-white text-sm">{item.label}</span>
                    </div>
                  ) : null,
                )
              : // When expanded, show all icons
                navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex flex-col items-center justify-center p-2 min-w-[56px] ${
                      isActive(item.href) ? "text-white" : "text-white/70 hover:text-white"
                    }`}
                    onClick={item.onClick}
                    aria-label={item.label}
                  >
                    <span className="material-icons text-xl">{item.icon}</span>
                  </Link>
                ))}
          </div>

          {/* Toggle button */}
          <button
            onClick={toggleNavbar}
            className="flex items-center justify-center ml-1 p-2 text-white hover:text-opacity-80 transition-transform hover:scale-110 sm:hidden"
            aria-label={isCollapsed ? "Expand navbar" : "Collapse navbar"}
          >
            {isCollapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-[#212121] rounded-xl p-4 shadow-xl"
            style={{ width: "90%", maxWidth: "400px" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white font-medium">More Options</h3>
              <button onClick={() => setIsMenuOpen(false)} className="text-white hover:text-opacity-80">
                <span className="material-icons">close</span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {navItems.slice(0, 4).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center text-white hover:bg-white/10 rounded-lg p-3 transition-colors ${
                    isActive(item.href) ? "bg-white/20" : "text-opacity-70"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="material-icons mr-3">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              ))}
              <Link
                href="/contact"
                className="flex items-center justify-center bg-white text-black text-sm font-medium px-4 py-3 rounded-lg hover:bg-opacity-90 transition-colors col-span-2 mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
