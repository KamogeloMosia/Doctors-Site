"use client"

import dynamic from "next/dynamic"
import { useScreenSize } from "@/hooks/use-screen-size"

// Dynamically import the sidebar component
const SideNavbar = dynamic(() => import("@/components/side-navbar"), {
  ssr: false,
  loading: () => <div className="hidden md:block md:w-64 lg:w-80 h-screen" />,
})

// Dynamically import the bottom navbar component
const BottomNavbar = dynamic(() => import("@/components/bottom-navbar"), {
  ssr: false,
  loading: () => null,
})

export default function DynamicNavigation() {
  const { isMobile } = useScreenSize()

  return (
    <>
      {/* Only render sidebar on tablet and desktop */}
      {!isMobile && <SideNavbar className="hidden md:block" />}

      {/* Only render bottom navbar on mobile */}
      {isMobile && <BottomNavbar />}
    </>
  )
}
