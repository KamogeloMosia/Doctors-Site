"use client"

import type React from "react"

import { useState, useEffect } from "react"

interface MainContentProps {
  children: React.ReactNode
}

export default function MainContent({ children }: MainContentProps) {
  const [sidebarWidth, setSidebarWidth] = useState("16rem")

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarWidth("20rem") // 80px for lg screens
      } else if (window.innerWidth >= 768) {
        setSidebarWidth("16rem") // 64px for md screens
      } else {
        setSidebarWidth("0") // No sidebar on mobile
      }
    }

    // Check on mount and when window resizes
    handleResize()
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      className="transition-all duration-300 min-h-screen"
      style={{
        marginLeft: window.innerWidth >= 768 ? sidebarWidth : "0",
        width: window.innerWidth >= 768 ? `calc(100% - ${sidebarWidth})` : "100%",
      }}
    >
      {children}
    </div>
  )
}
