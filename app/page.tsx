import LoadingModal from "@/components/loading-modal"
import Navigation from "@/components/navigation"
import HeroCarousel from "@/components/hero-carousel"
import StatsSection from "@/components/stats-section"
import FeaturesSection from "@/components/features-section"
import TestimonialsSection from "@/components/testimonials-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <LoadingModal />
      <main className="min-h-screen bg-black page-content">
        <Navigation />

        <section id="inicio" className="min-h-screen">
          <HeroCarousel />
        </section>

        <StatsSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CTASection />

        <Footer />
      </main>
    </>
  )
}
