"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, MapPin } from "lucide-react"
import { useRouter } from "next/navigation"
import VideoFormModal from "./video-form-modal"

export default function CTASection() {
  const router = useRouter()
  const [showVideoModal, setShowVideoModal] = useState(false)

  return (
    <>
      <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/boxeo-ring-fondo-oscuro.png')] bg-cover bg-center opacity-10" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            ¿Listo para Ser el Próximo Campeón?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Únete a Elite Boxing Perú y comienza tu transformación hoy. Primera clase gratuita para nuevos miembros.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              onClick={() => router.push("/comenzar")}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-medium group"
            >
              Clase Gratuita
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-medium bg-transparent transition-all duration-300"
            >
              Ver Horarios
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-white/80">
              <Phone className="w-5 h-5 text-primary" />
              <span>+51 999 888 777</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-white/80">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Lima, Perú</span>
            </div>
          </div>
        </div>
      </section>

      <VideoFormModal isOpen={showVideoModal} onClose={() => setShowVideoModal(false)} />
    </>
  )
}
