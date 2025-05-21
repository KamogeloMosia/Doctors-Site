"use client"

import type React from "react"
import { useState } from "react"
import { MessageCircle, Calendar, Clock } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

interface WhatsAppAppointmentProps {
  phoneNumber: string
}

export default function WhatsAppAppointment({ phoneNumber }: WhatsAppAppointmentProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    preferredDate: "",
    preferredTime: "",
    reason: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const { primaryColor } = useTheme()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Format the phone number (remove any non-digit characters)
    const formattedPhone = phoneNumber.replace(/\D/g, "")

    // Create the WhatsApp message with the form data
    const whatsappMessage = encodeURIComponent(
      `Appointment Request\n\nName: ${formData.fullName}\nPreferred Date: ${formData.preferredDate}\nPreferred Time: ${formData.preferredTime}\nReason for Visit: ${formData.reason}`,
    )

    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/${formattedPhone}?text=${whatsappMessage}`, "_blank", "noopener,noreferrer")

    // Reset form after a short delay
    setTimeout(() => {
      setFormData({
        fullName: "",
        preferredDate: "",
        preferredTime: "",
        reason: "",
      })
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <div className="card p-6 border border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h3
          className="text-xl font-semibold mb-4 font-poppins tracking-tight"
          style={{ color: "var(--primary-color)" }}
        >
          Book an Appointment
        </h3>

        <div>
          <label htmlFor="fullName" className="form-label" style={{ color: "var(--text-color)" }}>
            Your Full Name
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            autoComplete="name"
            value={formData.fullName}
            onChange={handleChange}
            className="form-input"
            style={{ color: "var(--text-color)", backgroundColor: "var(--background-color)" }}
            required
            placeholder="John Doe"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="preferredDate" className="form-label" style={{ color: "var(--text-color)" }}>
              <Calendar className="inline-block w-4 h-4 mr-1 -mt-0.5" /> Preferred Date
            </label>
            <input
              type="date"
              name="preferredDate"
              id="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              className="form-input"
              style={{ color: "var(--text-color)", backgroundColor: "var(--background-color)" }}
              required
              min={new Date().toISOString().split("T")[0]}
            />
          </div>

          <div>
            <label htmlFor="preferredTime" className="form-label" style={{ color: "var(--text-color)" }}>
              <Clock className="inline-block w-4 h-4 mr-1 -mt-0.5" /> Preferred Time
            </label>
            <select
              id="preferredTime"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              className="form-select"
              style={{ color: "var(--text-color)", backgroundColor: "var(--background-color)" }}
              required
            >
              <option value="">Select a time</option>
              <option>Morning (9:00 AM - 12:00 PM)</option>
              <option>Afternoon (1:00 PM - 4:00 PM)</option>
              <option>Specific: 9:00 AM</option>
              <option>Specific: 10:00 AM</option>
              <option>Specific: 11:00 AM</option>
              <option>Specific: 1:00 PM</option>
              <option>Specific: 2:00 PM</option>
              <option>Specific: 3:00 PM</option>
              <option>Specific: 4:00 PM</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="reason" className="form-label" style={{ color: "var(--text-color)" }}>
            Reason for Visit (Optional)
          </label>
          <textarea
            id="reason"
            name="reason"
            rows={2}
            value={formData.reason}
            onChange={handleChange}
            className="form-input"
            style={{ color: "var(--text-color)", backgroundColor: "var(--background-color)" }}
            placeholder="Please briefly describe your symptoms or reason for the appointment"
          />
        </div>

        <button
          type="submit"
          className="form-button text-white"
          disabled={isSubmitting}
          style={{ backgroundColor: primaryColor }}
        >
          <MessageCircle className="mr-2 h-5 w-5" />
          {isSubmitting ? "Connecting..." : "Book via WhatsApp"}
        </button>
      </form>
    </div>
  )
}
