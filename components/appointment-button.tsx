"use client"

import { Calendar } from "lucide-react"
import Link from "next/link"

interface AppointmentButtonProps {
  className?: string
}

export default function AppointmentButton({ className = "" }: AppointmentButtonProps) {
  const handleClick = () => {
    // In a real implementation, this might open a modal or navigate to a form
    // For now, we'll just use the contact page
    window.location.href = "/contact"
  }

  return (
    <Link
      href="/contact"
      className={`btn btn-primary flex items-center justify-center ${className}`}
      style={{ backgroundColor: "var(--primary-color)" }}
    >
      <Calendar className="mr-2 h-5 w-5" />
      Book Appointment
    </Link>
  )
}
