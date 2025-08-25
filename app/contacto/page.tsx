import Navigation from "@/components/navigation"
import ContactoSection from "@/components/sections/contacto-section"
import Footer from "@/components/footer"

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      <div className="pt-16">
        <ContactoSection />
      </div>

      <Footer />
    </main>
  )
}
