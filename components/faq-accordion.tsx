"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

interface FaqItem {
  question: string
  answer: string
}

interface FaqAccordionProps {
  items: FaqItem[]
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700 transition-colors duration-300">
      {items.map((item, index) => (
        <div key={index} className="py-6">
          <button
            className="flex w-full items-start justify-between text-left focus:outline-none group"
            onClick={() => toggleAccordion(index)}
            aria-expanded={openIndex === index}
          >
            <span
              className="text-lg font-semibold font-poppins group-hover:text-black dark:group-hover:text-gray-200 transition-colors duration-200"
              style={{ color: "var(--text-color)" }}
            >
              {item.question}
            </span>
            <span className="ml-6 flex-shrink-0">
              {openIndex === index ? (
                <ChevronUp className="h-6 w-6" style={{ color: "var(--text-color)" }} />
              ) : (
                <ChevronDown
                  className="h-6 w-6 group-hover:text-black dark:group-hover:text-white transition-colors duration-200"
                  style={{ color: "var(--text-muted-color)" }}
                />
              )}
            </span>
          </button>
          <div
            className={`mt-3 pr-12 transition-all duration-300 ease-in-out overflow-hidden ${
              openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p
              className="text-base leading-relaxed transition-colors duration-300"
              style={{ color: "var(--text-muted-color)" }}
            >
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
