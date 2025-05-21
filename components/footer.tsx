import Link from "next/link"
import { Phone, MapPin } from "lucide-react"

interface FooterProps {
  className?: string
}

export default function Footer({ className = "" }: FooterProps) {
  return (
    <footer className={`bg-gray-900 pt-12 pb-6 transition-colors duration-300 ${className}`}>
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4 font-poppins text-white">Dr. Kabongo Salumu</h3>
            <p className="text-gray-300">Providing quality healthcare services in Kempton Park since 2001.</p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2" />
                <span>011 970 1590</span>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="h-4 w-4 mr-2 mt-1" />
                <div>
                  <p>Arwyp Medical Centre - Casualty Unit</p>
                  <p>20 Pine Avenue, Kempton Park</p>
                  <a
                    href="https://maps.google.com/?q=14+Centralpace+Kempton+Park"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    14 Centralpace, Kempton Park
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 font-poppins text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 font-poppins text-white">Office Hours</h3>
            <ul className="space-y-1 text-gray-300">
              <li>Monday - Friday: 8:00 AM - 5:00 PM</li>
              <li>Saturday: 8:00 AM - 12:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
            <p className="mt-4 text-gray-300">
              For emergencies outside of office hours, please visit the Arwyp Medical Centre Emergency Department.
            </p>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-700">
          <p className="text-gray-300 text-center">
            &copy; {new Date().getFullYear()} Dr. Kabongo Salumu. All rights reserved.
          </p>
          <p className="text-gray-400 text-center text-sm mt-2">
            The information provided on this website is for general informational purposes only and should not be
            considered as medical advice.
          </p>
        </div>
      </div>
    </footer>
  )
}
