import Header from "@/components/header"
import Footer from "@/components/footer"
import MobileAppCTA from "@/components/mobile-app-cta"
import ContactHero from "@/components/contact-hero"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-amber-50">
      <Header />
      <ContactHero />
      <ContactForm />
      <MobileAppCTA />
      <Footer />
    </div>
  )
}
