import Footer from "@/components/footer"
import Header from "@/components/header"
import ResponsiveLayout from "@/components/responsive-layout"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import type React from "react"
import "./globals.css"

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
  // Add a base path meta tag to help with GitHub Pages routing
  const basePath = process.env.NODE_ENV === 'production' ? '/tailwind-landing' : '';
  
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <head>
        <meta name="base-path" content={basePath} />
        {/* Other head elements */}
      </head>
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
