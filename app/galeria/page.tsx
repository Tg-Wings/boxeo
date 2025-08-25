import Navigation from "@/components/navigation"
import GaleriaSection from "@/components/sections/galeria-section"
import Footer from "@/components/footer"

export default function GaleriaPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      <div className="pt-16">
        <GaleriaSection />
      </div>

      <Footer />
    </main>
  )
}
