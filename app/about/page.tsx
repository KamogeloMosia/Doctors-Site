import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ChevronRight } from "lucide-react"
import AppointmentButton from "@/components/appointment-button"

export default function AboutPage() {
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
            <div className="lg:text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl font-poppins">
                About Dr. Kabongo Salumu
              </h1>
              <p className="mt-6 max-w-3xl text-xl text-gray-500 lg:mx-auto">
                A dedicated General Practitioner with a passion for improving patient health and wellbeing through
                comprehensive care.
              </p>
            </div>
          </div>
        </section>

        {/* Profile Section */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="flex-1 min-w-0">
                <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-8 mb-8">
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <span>General Practitioner</span>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <span>20+ Years Experience</span>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <span>Arwyp Medical Centre</span>
                  </div>
                </div>
                <p className="text-lg leading-7 text-gray-500">
                  Dr. Kabongo Salumu is a distinguished General Practitioner with over 20 years of experience in the
                  field. He obtained his medical degree through international studies and began his practice in
                  Johannesburg in 2001.
                </p>
                <p className="mt-4 text-lg leading-7 text-gray-500">
                  Currently serving at the Casualty Unit of Arwyp Medical Centre in Kempton Park, Dr. Salumu is
                  dedicated to providing exceptional care to his patients. His approach combines thorough medical
                  knowledge with compassionate patient care, focusing on both treatment and preventative measures.
                </p>
                <p className="mt-4 text-lg leading-7 text-gray-500">
                  With extensive experience in general medicine, Dr. Salumu has developed expertise in managing a wide
                  range of medical conditions, from acute illnesses to chronic diseases. His commitment to patient
                  wellbeing and comprehensive healthcare has made him a trusted medical professional in the Kempton Park
                  community.
                </p>
              </div>
              <div className="mt-8 lg:mt-0 lg:ml-8">
                <div className="flex-shrink-0">
                  <Image
                    className="h-64 w-64 rounded-full object-cover shadow-lg lg:h-80 lg:w-80"
                    src="/placeholder-a8hfk.png"
                    alt="Dr. Kabongo Salumu, General Practitioner"
                    width={320}
                    height={320}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto container-padding">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-poppins">Professional Experience</h2>
            <div className="space-y-8">
              {[
                {
                  title: "General Practitioner",
                  organization: "Arwyp Medical Centre - Casualty Unit",
                  years: "Current Position",
                  description:
                    "Providing comprehensive medical care at the Casualty Unit, handling a wide range of medical conditions and emergencies.",
                },
                {
                  title: "General Medical Practice",
                  organization: "Kempton Park",
                  years: "2001 - Present",
                  description:
                    "Established practice in the Kempton Park area, building a reputation for quality patient care and medical expertise.",
                },
                {
                  title: "Medical Education",
                  organization: "International Medical Studies",
                  years: "Completed prior to 2001",
                  description:
                    "Obtained medical degree through international studies, providing a foundation for a successful medical career.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="border-l-4 border-gray-200 pl-4 hover:border-gray-500 transition-colors duration-300"
                >
                  <h3 className="text-lg font-bold text-gray-900 font-poppins">{item.title}</h3>
                  <p className="text-base font-medium text-gray-600">{item.organization}</p>
                  <p className="text-sm text-gray-500">{item.years}</p>
                  <p className="mt-2 text-base text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach to Patient Care */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto container-padding">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-poppins">Approach to Patient Care</h2>
            <div className="responsive-grid-2">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins">Our Philosophy</h3>
                <p className="text-gray-600 mb-4">
                  Dr. Salumu believes in a patient-centered approach to healthcare, where each individual receives
                  personalized attention and care tailored to their specific needs. His practice is built on the
                  following principles:
                </p>
                <ul className="feature-list">
                  {[
                    "Comprehensive assessment of each patient's health concerns",
                    "Clear communication about diagnoses and treatment options",
                    "Collaborative decision-making with patients about their care",
                    "Emphasis on preventative care and health education",
                    "Continuity of care for ongoing health management",
                  ].map((item, index) => (
                    <li key={index} className="feature-list-item">
                      <ChevronRight className="feature-list-icon" />
                      <span className="feature-list-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins">What to Expect</h3>
                <p className="text-gray-600 mb-4">
                  When you visit Dr. Salumu, you can expect a thorough and compassionate healthcare experience:
                </p>
                <ul className="feature-list">
                  {[
                    "A welcoming and respectful environment",
                    "Thorough medical history review and physical examination",
                    "Detailed explanation of your condition and treatment options",
                    "Prompt referrals to specialists when necessary",
                    "Follow-up care to monitor your progress and adjust treatment as needed",
                    "Access to the comprehensive facilities and services of Arwyp Medical Centre",
                  ].map((item, index) => (
                    <li key={index} className="feature-list-item">
                      <ChevronRight className="feature-list-icon" />
                      <span className="feature-list-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Affiliations */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto container-padding">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-poppins">Professional Affiliations</h2>
            <div className="card card-padding">
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <div className="mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                  <Image
                    src="/hospital-logo.png"
                    alt="Arwyp Medical Centre Logo"
                    width={120}
                    height={120}
                    className="rounded-lg bg-white p-2"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-poppins">Arwyp Medical Centre</h3>
                  <p className="text-gray-600 mb-4">
                    Dr. Salumu is proud to be affiliated with Arwyp Medical Centre, a leading healthcare provider in
                    South Africa committed to comprehensive patient care and wellness. The centre utilizes advanced
                    medical technology and maintains high standards of healthcare delivery.
                  </p>
                  <p className="text-gray-600">
                    Through this affiliation, Dr. Salumu's patients benefit from access to a wide range of specialized
                    medical services, advanced diagnostic equipment, and a network of healthcare professionals, ensuring
                    comprehensive care for all health needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-black">
          <div className="max-w-7xl mx-auto container-padding text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl font-poppins">
              Ready to schedule an appointment?
            </h2>
            <p className="mt-4 text-lg text-gray-300">Take the first step towards better health today.</p>
            <div className="mt-8 flex justify-center">
              <div className="inline-flex rounded-md shadow">
                <AppointmentButton className="btn-lg" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
