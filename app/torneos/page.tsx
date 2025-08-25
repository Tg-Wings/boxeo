import Navigation from "@/components/navigation"
import TorneosSection from "@/components/sections/torneos-section"
import Footer from "@/components/footer"

export default function TorneosPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      <div className="pt-16">
        <TorneosSection />
      </div>

      <Footer />
    </main>
  )
}
