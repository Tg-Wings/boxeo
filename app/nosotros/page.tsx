import Navigation from "@/components/navigation"
import NosotrosSection from "@/components/sections/nosotros-section"
import Footer from "@/components/footer"

export default function NosotrosPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      <div className="pt-16">
        <NosotrosSection />
      </div>

      <Footer />
    </main>
  )
}
