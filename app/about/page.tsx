import Header from "@/components/header"
import AboutHero from "@/components/about-hero"
import MissionVisionValues from "@/components/mission-vision-values"
import OurStory from "@/components/our-story"
import MobileAppCTA from "@/components/mobile-app-cta"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="bg-amber-50">
      <Header />
      <AboutHero />
      <MissionVisionValues />
      <OurStory />
      <MobileAppCTA />
      <Footer />
    </main>
  )
}
