import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl">Doctors Site</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/" className="text-sm font-medium hover:underline">
            Home
          </Link>
          <Link href="/services" className="text-sm font-medium hover:underline">
            Services
          </Link>
          <Link href="/doctors" className="text-sm font-medium hover:underline">
            Doctors
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:underline">
            Contact
          </Link>
        </nav>
        <div className="ml-4 flex items-center gap-3">
          <ThemeToggle />
          <Button size="sm">Book Appointment</Button>
        </div>
      </div>
    </header>
  )
}
