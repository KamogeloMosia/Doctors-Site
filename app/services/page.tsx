import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ChevronRight } from "lucide-react"
import AppointmentButton from "@/components/appointment-button"

export default function ServicesPage() {
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
                Our Services
              </h1>
              <p className="mt-6 max-w-3xl text-xl text-gray-500 mx-auto">
                Comprehensive medical care designed to address your health needs with expertise and compassion.
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto container-padding">
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
                {
                  title: "Women's Health",
                  description:
                    "Services addressing women's specific health needs, including PAP smears and reproductive health.",
                },
                {
                  title: "Men's Health",
                  description: "Specialized care addressing men's health concerns and preventative screenings.",
                },
                {
                  title: "Referral Services",
                  description:
                    "Coordination with specialists and other healthcare providers for comprehensive care when needed.",
                },
              ].map((service, index) => (
                <div key={index} className="flex flex-col items-center text-center card card-hover p-6 hover-lift">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-poppins">{service.title}</h3>
                  <p className="text-base text-gray-500">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Services */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto container-padding">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-poppins">
              Detailed Service Information
            </h2>

            {/* General Consultations */}
            <div className="mb-16 lg:flex lg:items-center lg:gap-x-12">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <Image
                  src="/doctor-consultation.png"
                  alt="Dr. Salumu providing general consultation services"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">General Consultations</h3>
                <p className="text-gray-600 mb-4">
                  Dr. Salumu provides comprehensive medical consultations for patients of all ages. These consultations
                  are the foundation of good healthcare, allowing for thorough assessment and personalized treatment
                  plans.
                </p>
                <h4 className="text-lg font-semibold text-gray-900 mb-2 font-poppins">Our approach includes:</h4>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Thorough medical history review</li>
                  <li>• Comprehensive physical examination</li>
                  <li>• Diagnostic testing when necessary</li>
                  <li>• Clear explanation of findings and treatment options</li>
                  <li>• Development of personalized treatment plans</li>
                  <li>• Follow-up care as needed</li>
                </ul>
                <p className="text-gray-600">
                  Whether you're dealing with a new health concern or managing an ongoing condition, Dr. Salumu provides
                  the attentive care and medical expertise you need.
                </p>
              </div>
            </div>

            {/* Chronic Disease Management */}
            <div className="mb-16 lg:flex lg:items-center lg:gap-x-12 lg:flex-row-reverse">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <Image
                  src="/doctor-checking-blood-pressure.png"
                  alt="Blood pressure monitoring for chronic disease management"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">Chronic Disease Management</h3>
                <p className="text-gray-600 mb-4">
                  Managing chronic conditions requires ongoing care and attention. Dr. Salumu specializes in helping
                  patients effectively manage chronic diseases to improve quality of life and prevent complications.
                </p>
                <h4 className="text-lg font-semibold text-gray-900 mb-2 font-poppins">
                  Conditions we commonly manage:
                </h4>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Hypertension (high blood pressure)</li>
                  <li>• Diabetes</li>
                  <li>• Asthma and respiratory conditions</li>
                  <li>• Heart disease</li>
                  <li>• Arthritis</li>
                  <li>• Thyroid disorders</li>
                  <li>• Cholesterol management</li>
                </ul>
                <p className="text-gray-600">
                  Our approach to chronic disease management includes regular monitoring, medication management,
                  lifestyle counseling, and coordination with specialists when needed to ensure comprehensive care.
                </p>
              </div>
            </div>

            {/* Preventative Care */}
            <div className="mb-16 lg:flex lg:items-center lg:gap-x-12">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <Image
                  src="/doctor-preventative-care.png"
                  alt="Dr. Salumu explaining preventative care options to a patient"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">Preventative Care</h3>
                <p className="text-gray-600 mb-4">
                  Dr. Salumu believes that preventing illness is just as important as treating it. Our preventative care
                  services are designed to help you maintain optimal health and catch potential issues early.
                </p>
                <h4 className="text-lg font-semibold text-gray-900 mb-2 font-poppins">
                  Our preventative services include:
                </h4>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Regular health check-ups and physical examinations</li>
                  <li>• Age-appropriate health screenings</li>
                  <li>• Vaccinations for adults</li>
                  <li>• Lifestyle counseling for nutrition, exercise, and stress management</li>
                  <li>• Risk assessment for common health conditions</li>
                  <li>• Early detection of potential health issues</li>
                </ul>
                <p className="text-gray-600">
                  Regular preventative care is essential for long-term health and can help avoid more serious health
                  problems in the future.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto container-padding">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-poppins">Additional Services</h2>
            <div className="responsive-grid-2 gap-8">
              <div className="card card-padding">
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins">Minor Procedures</h3>
                <p className="text-gray-600 mb-4">
                  Dr. Salumu performs various minor procedures in-office, providing convenient care without the need for
                  hospital visits in many cases.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span>Suturing of minor wounds</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span>Incision and drainage of abscesses</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span>Removal of skin lesions</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span>Foreign body removal</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span>Joint injections</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <Image
                    src="/minor-procedures.png"
                    alt="Minor medical procedures"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-sm"
                  />
                </div>
              </div>

              <div className="card card-padding">
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins">Health Assessments</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive health assessments provide a complete picture of your current health status and identify
                  areas for improvement.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span>Blood pressure monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span>Electrocardiograms (ECG)</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span>Blood glucose testing</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span>Cholesterol screening</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span>Body mass index (BMI) assessment</span>
                  </li>
                </ul>
              </div>

              <div className="card card-padding">
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins">Women's Health</h3>
                <p className="text-gray-600 mb-4">
                  Dr. Salumu provides services specifically addressing women's health needs throughout all stages of
                  life.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span>PAP smears for cervical cancer screening</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span>Breast examinations</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span>Reproductive health consultations</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span>Menopause management</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span>Referrals for mammograms and other specialized tests</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <Image
                    src="/womens-health.png"
                    alt="Women's health services"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-sm"
                  />
                </div>
              </div>

              <div className="card card-padding">
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins">Men's Health</h3>
                <p className="text-gray-600 mb-4">
                  Services specifically addressing men's health concerns and preventative screenings.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span>Prostate health screenings</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span>Testicular examinations</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span>Sexual health consultations</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span>Management of male-specific health concerns</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span>Referrals for specialized testing when needed</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <Image
                    src="/mens-health.png"
                    alt="Men's health services"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="card card-padding border-l-4" style={{ borderLeftColor: "var(--primary-color)" }}>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins">Important Information</h3>
              <p className="text-gray-600 mb-4">
                The services listed on this page provide a general overview of what Dr. Salumu offers. The specific
                services available may vary based on individual patient needs and current medical circumstances.
              </p>
              <p className="text-gray-600">
                For the most accurate and up-to-date information about available services, or to inquire about a
                specific service not listed here, please contact our office directly at 011 970 1590.
              </p>
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
