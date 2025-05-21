"use client"

import type React from "react"

import { useState, useEffect } from "react"
import SideNavbar from "@/components/side-navbar"
import BottomNavbar from "@/components/bottom-navbar"

interface ResponsiveLayoutProps {
  children: React.ReactNode
}

export default function ResponsiveLayout({ children }: ResponsiveLayoutProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Function to check if viewport is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768) // md breakpoint is 768px
    }

    // Initial check
    checkMobile()

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar - hidden on mobile, visible on tablet/desktop */}
      <SideNavbar className="hidden md:block" />

      {/* Main content area - full width on mobile, adjusted width on tablet/desktop */}
      <main className="flex-1 md:ml-64 lg:ml-80 transition-all duration-300">
        {children}

        {/* Bottom navbar - visible only on mobile */}
        {isMobile && <BottomNavbar />}
      </main>
    </div>
  )
}
