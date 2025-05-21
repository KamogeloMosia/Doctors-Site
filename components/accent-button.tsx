"use client"

import { useTheme } from "@/components/theme-provider"
import type { ReactNode } from "react"

interface AccentButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  type?: "button" | "submit" | "reset"
  disabled?: boolean
}

export default function AccentButton({
  children,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}: AccentButtonProps) {
  const { theme } = useTheme()

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-accent ${className}`}
      style={{
        backgroundColor: "var(--accent-color)",
        color: "var(--accent-button-text-color)",
        border: "1px solid var(--accent-color)",
      }}
    >
      {children}
    </button>
  )
}
