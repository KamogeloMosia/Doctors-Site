import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ResponsiveLayout from "@/components/responsive-layout"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
})

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Dr. Kabongo Salumu - General Practitioner in Kempton Park",
  description: "Experienced General Practitioner providing quality healthcare services in Kempton Park since 2001.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <body className="relative antialiased">
        <ThemeProvider>
          <ResponsiveLayout>
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </ResponsiveLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}
