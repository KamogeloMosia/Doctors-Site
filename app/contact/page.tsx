import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MapPin, Phone, Clock, AlertCircle } from "lucide-react"
import AppointmentButton from "@/components/appointment-button"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pb-24 md:pb-16">
        {/* Back to home link */}
        <div className="max-w-7xl mx-auto pt-6 px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-black transition-colors duration-200"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>
        </div>

        {/* Hero Section */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl font-poppins">
                Contact Us
              </h1>
              <p className="mt-6 max-w-3xl text-xl text-gray-500 mx-auto">
                Get in touch with Dr. Kabongo Salumu's office for appointments, inquiries, or any questions about our
                services.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Details and Map Section */}
        <section className="section-padding" style={{ backgroundColor: "var(--accent-color)" }}>
          <div className="max-w-7xl mx-auto container-padding">
            <div className="responsive-grid-2 gap-8 lg:gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold mb-6 font-poppins">Contact Information</h2>
                <div className="card card-padding">
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin
                        className="h-6 w-6 text-black mt-1 flex-shrink-0"
                        style={{ color: "var(--primary-color)" }}
                      />
                      <div className="ml-3">
                        <h3 className="text-lg font-semibold font-poppins">Primary Practice</h3>
                        <p style={{ color: "var(--text-muted-color)" }}>Arwyp Medical Centre - Casualty Unit</p>
                        <p style={{ color: "var(--text-muted-color)" }}>20 Pine Avenue</p>
                        <p style={{ color: "var(--text-muted-color)" }}>Kempton Park, 1619</p>
                        <p style={{ color: "var(--text-muted-color)" }}>Gauteng, South Africa</p>
                        <a
                          href="https://maps.google.com/?q=Arwyp+Medical+Centre+Kempton+Park"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm mt-1 inline-block hover:underline"
                          style={{ color: "var(--primary-color)" }}
                        >
                          Get directions
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <MapPin
                        className="h-6 w-6 text-black mt-1 flex-shrink-0"
                        style={{ color: "var(--primary-color)" }}
                      />
                      <div className="ml-3">
                        <h3 className="text-lg font-semibold font-poppins">Secondary Address</h3>
                        <p style={{ color: "var(--text-muted-color)" }}>14 Centralpace</p>
                        <p style={{ color: "var(--text-muted-color)" }}>Kempton Park</p>
                        <a
                          href="https://maps.google.com/?q=14+Centralpace+Kempton+Park"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm mt-1 inline-block hover:underline"
                          style={{ color: "var(--primary-color)" }}
                        >
                          Get directions
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Phone className="h-6 w-6 mt-1 flex-shrink-0" style={{ color: "var(--primary-color)" }} />
                      <div className="ml-3">
                        <h3 className="text-lg font-semibold font-poppins">Phone</h3>
                        <p style={{ color: "var(--text-muted-color)" }}>Direct Line: 011 970 1590</p>
                        <p style={{ color: "var(--text-muted-color)" }}>Arwyp Medical Centre: +27 11 922 1000</p>
                        <p style={{ color: "var(--text-muted-color)" }}>Emergency Department: +27 11 922 1172</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="h-6 w-6 mt-1 flex-shrink-0" style={{ color: "var(--primary-color)" }} />
                      <div className="ml-3">
                        <h3 className="text-lg font-semibold font-poppins">Office Hours</h3>
                        <p style={{ color: "var(--text-muted-color)" }}>Monday - Friday: 8:00 AM - 5:00 PM</p>
                        <p style={{ color: "var(--text-muted-color)" }}>Saturday: 8:00 AM - 12:00 PM</p>
                        <p style={{ color: "var(--text-muted-color)" }}>Sunday: Closed</p>
                        <p className="text-sm mt-2" style={{ color: "var(--text-muted-color)" }}>
                          For emergencies outside of these hours, please visit the Arwyp Medical Centre Emergency
                          Department.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map and Appointment */}
              <div>
                <h2 className="text-2xl font-bold mb-6 font-poppins">Location & Appointment</h2>
                <div className="card card-padding mb-6">
                  <div className="aspect-w-16 aspect-h-9 h-64 relative rounded-lg overflow-hidden mb-4">
                    <Image
                      src="/nyc-medical-district-bw-map.png"
                      alt="Map of Dr. Salumu's Office Location in Kempton Park"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold font-poppins mb-2">Make an Appointment</h3>
                  <p style={{ color: "var(--text-muted-color)" }} className="mb-4">
                    To schedule an appointment with Dr. Kabongo Salumu, please call our office during business hours or
                    use the button below to request an appointment online.
                  </p>
                  <AppointmentButton className="w-full" />
                </div>

                <div className="card card-padding border-l-4" style={{ borderLeftColor: "var(--primary-color)" }}>
                  <div className="flex items-start">
                    <AlertCircle className="h-6 w-6 mt-1 flex-shrink-0" style={{ color: "var(--primary-color)" }} />
                    <div className="ml-3">
                      <h3 className="text-lg font-semibold font-poppins">Emergency Information</h3>
                      <p style={{ color: "var(--text-muted-color)" }} className="mb-2">
                        For medical emergencies, please call emergency services at 10177 or visit the nearest emergency
                        department.
                      </p>
                      <p style={{ color: "var(--text-muted-color)" }}>
                        Arwyp Medical Centre Emergency Department is available 24/7 at +27 11 922 1172.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Table */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto container-padding">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 font-poppins">Complete Contact Information</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 border">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Contact Point
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Primary Practice Location
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Arwyp Medical Centre - Casualty Unit
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Address</td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      20 Pine Avenue, Kempton Park, 1619, Gauteng, South Africa
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Direct Phone Number
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">011 970 1590</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Arwyp Medical Centre General Inquiries
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">+27 11 922 1000</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Arwyp Medical Centre Emergency Department
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">+27 11 922 1172</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Secondary Address</td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      <a
                        href="https://maps.google.com/?q=14+Centralpace+Kempton+Park"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        14 Centralpace, Kempton Park
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="card card-padding">
              <h2 className="text-xl font-bold text-gray-900 mb-4 font-poppins">Important Information</h2>
              <p className="text-gray-600 mb-4">
                The information provided on this website is for general informational purposes only and should not be
                considered as medical advice. Always consult with Dr. Salumu or another qualified healthcare provider
                for specific guidance regarding your health concerns.
              </p>
              <p className="text-gray-600">
                For medical emergencies, please call emergency services at 10177 or visit the nearest emergency
                department immediately.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
