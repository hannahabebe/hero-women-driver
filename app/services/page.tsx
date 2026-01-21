import Header from "@/components/header"
import Footer from "@/components/footer"
import MobileAppCTA from "@/components/mobile-app-cta"
import ServicesGrid from "@/components/services-grid"

import Image from "next/image"

export default function ServicesPage() {
  return (
    // <section className="relative py-16 md:py-24 bg-[var(--neutral-pink)] overflow-hidden h-[920px] md:h-[650px] lg:h-[1117px]">
    <section className="min-h-screen">
      <Header />

      {/* Page Title Section */}
      <div className="relative overflow-hidden bg-[var(--neutral-pink)] mx-auto py-10 md:py-20 lg:py-30 text-center">
        <div className="absolute h-[150px] md:h-[230px] lg:h-[428.95px] -inset-1 md:-inset-5 lg:inset-0 pointer-events-none z-0">
            <Image
              src="/images/Blobs.png"
              alt="Side wave decorative"
              fill
              className="mt-[200px]"
              priority
            />
        </div>
        <div className="mx-auto">
          <h1 className="mb-4">
            OUR  <span className="text-[var(--accent)]">SERVICES</span>
          </h1>

          <div className="w-24 h-1 bg-[var(--accent)] mx-auto mb-6"></div>

          <p className="type-subheading text-[var(--primary-2)] font-light mx-auto">
            Safe rides designed for students, powered by women drivers.
          </p>
        </div>

        {/* Services Grid div */}
        <div className="max-w-6xl mx-auto relative z-10">
          <ServicesGrid />
        </div>

        {/* Explore More Button */}
        <div className="type-heading mt-10">
          <button className="bg-gradient-to-r from-[#F75270] to-[#DC143C]  text-white font-bold py-3 px-8 rounded-lg transition-all hover:opacity-70">
            EXPLORE MORE
          </button>
        </div>
      </div>

      {/* Mobile App CTA */}
      <MobileAppCTA />

      {/* Footer */}
      <Footer />
    </section>
  )
}
