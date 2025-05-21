"use client"

import type React from "react"
import { useState } from "react"
import { MessageCircle } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

interface WhatsAppFormProps {
  phoneNumber: string
  prefilledText: string
  buttonText: string
  className?: string
}

export default function WhatsAppForm({ phoneNumber, prefilledText, buttonText, className = "" }: WhatsAppFormProps) {
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { primaryColor } = useTheme()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Format the phone number (remove any non-digit characters)
    const formattedPhone = phoneNumber.replace(/\D/g, "")

    // Create the WhatsApp message with the form data
    const whatsappMessage = encodeURIComponent(`${prefilledText}\n\nMessage: ${message}`)

    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/${formattedPhone}?text=${whatsappMessage}`, "_blank", "noopener,noreferrer")

    // Reset form after a short delay
    setTimeout(() => {
      setMessage("")
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div>
        <label htmlFor="message" className="form-label" style={{ color: "var(--text-color)" }}>
          <MessageCircle className="inline-block w-4 h-4 mr-1 -mt-0.5" /> Your Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="form-input"
          style={{ color: "var(--text-color)", backgroundColor: "var(--background-color)" }}
          rows={3}
          required
          placeholder="How can we help you?"
        />
      </div>

      <button
        type="submit"
        className="form-button text-white"
        disabled={isSubmitting}
        style={{ backgroundColor: primaryColor }}
      >
        <MessageCircle className="mr-2 h-5 w-5" />
        {isSubmitting ? "Connecting..." : buttonText}
      </button>
    </form>
  )
}
