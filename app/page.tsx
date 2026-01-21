import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import WhyChooseUs from "@/components/why-choose-us"
import Testimonials from "@/components/testimonials"
import MobileAppCTA from "@/components/mobile-app-cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-amber-50">
      <Header />
      <HeroSection />
      <WhyChooseUs />
      <Testimonials />
      <MobileAppCTA />
      <Footer />
    </main>
  )
}
