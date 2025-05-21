import Image from "next/image"
import Link from "next/link"
import { Clock, MapPin, Phone, Calendar, ChevronRight } from "lucide-react"
import AppointmentButton from "@/components/appointment-button"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b" style={{ borderColor: "var(--border-color)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
              <div className="mx-auto max-w-7xl lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                  <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                    <div className="lg:py-24">
                      <h1 className="mt-4 text-4xl tracking-tight font-extrabold sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl font-poppins">
                        <span className="block">Dr. Kabongo Salumu</span>
                        <span className="block" style={{ color: "var(--text-muted-color)" }}>
                          General Practitioner
                        </span>
                      </h1>
                      <p
                        className="mt-3 text-base sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
                        style={{ color: "var(--text-muted-color)" }}
                      >
                        Providing quality healthcare services in Kempton Park since 2001. Dedicated to comprehensive
                        patient care with over 20 years of experience.
                      </p>
                      <div className="mt-10 sm:mt-12">
                        <div className="sm:flex sm:justify-center lg:justify-start">
                          <div className="rounded-md shadow">
                            <AppointmentButton className="btn-lg w-full" />
                          </div>
                          <div className="mt-3 sm:mt-0 sm:ml-3">
                            <Link
                              href="/services"
                              className="btn btn-accent btn-lg w-full flex items-center justify-center"
                            >
                              Our Services
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="/placeholder-vig2k.png"
            alt="Dr. Kabongo Salumu, General Practitioner in Kempton Park"
            width={1200}
            height={800}
            priority
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding" style={{ backgroundColor: "var(--accent-color)" }}>
        <div className="max-w-7xl mx-auto container-padding">
          <div className="lg:text-center">
            <h2
              className="text-base font-semibold tracking-wide uppercase font-poppins"
              style={{ color: "var(--text-muted-color)" }}
            >
              About
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl font-poppins">
              Experienced Healthcare Professional
            </p>
            <p className="mt-4 max-w-2xl text-xl lg:mx-auto" style={{ color: "var(--text-muted-color)" }}>
              Providing compassionate and comprehensive medical care to patients in Kempton Park for over two decades.
            </p>
          </div>

          <div className="mt-12">
            <div className="responsive-grid-2">
              <div className="relative">
                <h3 className="text-2xl font-bold mb-4 font-poppins">Professional Background</h3>
                <ul className="feature-list">
                  <li className="feature-list-item">
                    <ChevronRight className="feature-list-icon" />
                    <span className="feature-list-text">General Practitioner with over 20 years of experience</span>
                  </li>
                  <li className="feature-list-item">
                    <ChevronRight className="feature-list-icon" />
                    <span className="feature-list-text">Medical degree obtained through international studies</span>
                  </li>
                  <li className="feature-list-item">
                    <ChevronRight className="feature-list-icon" />
                    <span className="feature-list-text">Practicing in Johannesburg and Kempton Park since 2001</span>
                  </li>
                  <li className="feature-list-item">
                    <ChevronRight className="feature-list-icon" />
                    <span className="feature-list-text">
                      Currently practicing at the Casualty Unit of Arwyp Medical Centre
                    </span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <h3 className="text-2xl font-bold mb-4 font-poppins">Our Approach</h3>
                <ul className="feature-list">
                  <li className="feature-list-item">
                    <ChevronRight className="feature-list-icon" />
                    <span className="feature-list-text">Patient-centered care with personalized treatment plans</span>
                  </li>
                  <li className="feature-list-item">
                    <ChevronRight className="feature-list-icon" />
                    <span className="feature-list-text">
                      Comprehensive approach to both acute and chronic conditions
                    </span>
                  </li>
                  <li className="feature-list-item">
                    <ChevronRight className="feature-list-icon" />
                    <span className="feature-list-text">Focus on preventative care and patient education</span>
                  </li>
                  <li className="feature-list-item">
                    <ChevronRight className="feature-list-icon" />
                    <span className="feature-list-text">
                      Access to advanced medical technology through Arwyp Medical Centre
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-10 text-center">
              <Link href="/about" className="btn btn-primary">
                Learn More About Dr. Salumu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="lg:text-center">
            <h2
              className="text-base text-gray-600 font-semibold tracking-wide uppercase font-poppins"
              style={{ color: "var(--text-muted-color)" }}
            >
              Services
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl font-poppins">
              Comprehensive Medical Care
            </p>
            <p className="mt-4 max-w-2xl text-xl lg:mx-auto" style={{ color: "var(--text-muted-color)" }}>
              Offering a wide range of general medical services to address all your healthcare needs.
            </p>
          </div>

          <div className="mt-12">
            <div className="responsive-grid-3">
              {[
                {
                  title: "General Consultations",
                  description:
                    "Comprehensive medical consultations for a wide range of health concerns and conditions.",
                },
                {
                  title: "Acute Care",
                  description:
                    "Prompt treatment for sudden illnesses, infections, injuries, and other immediate health concerns.",
                },
                {
                  title: "Chronic Disease Management",
                  description: "Ongoing care and management for conditions such as hypertension, diabetes, and asthma.",
                },
                {
                  title: "Preventative Care",
                  description:
                    "Regular check-ups, screenings, and vaccinations to maintain health and prevent disease.",
                },
                {
                  title: "Minor Procedures",
                  description:
                    "Various in-office procedures including suturing, incision and drainage, and lesion removal.",
                },
                {
                  title: "Health Assessments",
                  description:
                    "Comprehensive evaluations including blood pressure monitoring, ECGs, and other vital tests.",
                },
              ].map((service, index) => (
                <div key={index} className="card card-hover p-6 hover-lift">
                  <h3 className="text-xl font-bold mb-3 font-poppins">{service.title}</h3>
                  <p style={{ color: "var(--text-muted-color)" }}>{service.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link href="/services" className="btn btn-primary">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section id="contact" className="section-padding" style={{ backgroundColor: "var(--accent-color)" }}>
        <div className="max-w-7xl mx-auto container-padding">
          <div className="lg:text-center mb-10">
            <h2
              className="text-base font-semibold tracking-wide uppercase font-poppins"
              style={{ color: "var(--text-muted-color)" }}
            >
              Contact
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl font-poppins">
              Visit Our Practice
            </p>
            <p className="mt-4 max-w-2xl text-xl lg:mx-auto" style={{ color: "var(--text-muted-color)" }}>
              Conveniently located in Kempton Park with easy access to quality healthcare.
            </p>
          </div>
          <div className="mt-12">
            <div className="responsive-grid-2">
              <div className="card p-6 md:p-8">
                <h3 className="text-xl font-bold mb-6 font-poppins">Practice Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 mt-1 flex-shrink-0" style={{ color: "var(--text-muted-color)" }} />
                    <div className="ml-3" style={{ color: "var(--text-muted-color)" }}>
                      <p className="font-semibold">Primary Practice:</p>
                      <p>Arwyp Medical Centre - Casualty Unit</p>
                      <p>20 Pine Avenue, Kempton Park, 1619</p>
                      <p>Gauteng, South Africa</p>
                      <p className="mt-2 font-semibold">Secondary Address:</p>
                      <div className="flex items-start text-gray-300">
                        <MapPin className="h-4 w-4 mr-2 mt-1" />
                        <div>
                          <a
                            href="https://maps.google.com/?q=14+Centralpace+Kempton+Park"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            <p>14 Centralpace</p>
                            <p>Kempton Park</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 flex-shrink-0" style={{ color: "var(--text-muted-color)" }} />
                    <span className="ml-3" style={{ color: "var(--text-muted-color)" }}>
                      011 970 1590
                    </span>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 mt-1 flex-shrink-0" style={{ color: "var(--text-muted-color)" }} />
                    <div className="ml-3" style={{ color: "var(--text-muted-color)" }}>
                      <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p>Saturday: 8:00 AM - 12:00 PM</p>
                      <p>Sunday: Closed</p>
                      <p className="mt-2 text-sm">
                        *For emergencies outside of these hours, please visit the Arwyp Medical Centre Emergency
                        Department.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-6 font-poppins">Make an Appointment</h3>
                  <p style={{ color: "var(--text-muted-color)" }} className="mb-4">
                    To schedule an appointment with Dr. Kabongo Salumu, please call our office during business hours or
                    use the button below to request an appointment online.
                  </p>
                </div>
                <div className="mt-6">
                  <AppointmentButton className="w-full" />
                  <div className="mt-4 flex items-center justify-center">
                    <Calendar className="h-5 w-5 mr-2" style={{ color: "var(--text-muted-color)" }} />
                    <span style={{ color: "var(--text-muted-color)" }}>
                      For urgent matters, please call: 011 970 1590
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
