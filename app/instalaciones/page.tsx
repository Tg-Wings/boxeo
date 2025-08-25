"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import Image from "next/image"
import Navigation from "@/components/navigation"

const instalaciones = [
  {
    id: 1,
    title: "Ring Principal de Competición",
    image: "/ring-de-boxeo-profesional-en-lima-con-luces-dram-t.png",
    description:
      "Ring profesional de competición con especificaciones internacionales, iluminación LED profesional y sistema de sonido integrado.",
    features: ["Dimensiones oficiales 6x6m", "Lona profesional", "Cuerdas de alta tensión", "Iluminación LED"],
    info: "Utilizado para entrenamientos avanzados, sparring y competiciones oficiales.",
  },
  {
    id: 2,
    title: "Área de Sacos de Boxeo",
    image: "/boxeador-peruano-entrenando-con-saco.png",
    description:
      "Zona equipada con sacos pesados, sacos de velocidad y sacos de doble extremo para entrenamiento técnico completo.",
    features: ["12 sacos pesados", "6 sacos de velocidad", "4 sacos doble extremo", "Área de 200m²"],
    info: "Espacio dedicado al desarrollo de potencia, técnica y coordinación.",
  },
  {
    id: 3,
    title: "Gimnasio de Acondicionamiento",
    image: "/gimnasio-de-boxeo-peruano-moderno.png",
    description:
      "Área de fitness completa con equipamiento especializado para el acondicionamiento físico de boxeadores.",
    features: ["Equipos cardiovasculares", "Pesas libres", "Máquinas funcionales", "Área de estiramiento"],
    info: "Fortalecimiento y acondicionamiento específico para boxeo.",
  },
  {
    id: 4,
    title: "Vestuarios y Duchas",
    image: "/vestuarios-modernos-gimnasio-boxeo.png",
    description: "Vestuarios amplios y modernos con duchas individuales, casilleros de seguridad y área de descanso.",
    features: ["Duchas individuales", "Casilleros seguros", "Área de descanso", "Ventilación moderna"],
    info: "Comodidad y privacidad para todos nuestros miembros.",
  },
  {
    id: 5,
    title: "Área de Entrenamiento Grupal",
    image: "/clase-de-boxeo-grupal-en-gimnasio-peruano-con-inst.png",
    description: "Espacio amplio diseñado para clases grupales, entrenamientos funcionales y sesiones de técnica.",
    features: ["Espacio para 30 personas", "Espejos de pared completa", "Sistema de audio", "Piso especializado"],
    info: "Perfecto para clases grupales y entrenamientos en equipo.",
  },
  {
    id: 6,
    title: "Zona de Recuperación",
    image: "/area-recuperacion-spa-gimnasio-moderno.png",
    description: "Área dedicada a la recuperación post-entrenamiento con equipos de fisioterapia y relajación.",
    features: ["Camillas de masaje", "Equipos de fisioterapia", "Zona de hidratación", "Ambiente relajante"],
    info: "Recuperación profesional para optimizar tu rendimiento.",
  },
]

export default function InstalacionesPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % instalaciones.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + instalaciones.length) % instalaciones.length)
    }
  }

  return (
    <div className="min-h-screen !bg-black text-white">
      <Navigation />

      <main className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Nuestras Instalaciones
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
              Descubre las mejores instalaciones de boxeo en Perú, equipadas con tecnología de vanguardia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {instalaciones.map((instalacion, index) => (
              <div key={instalacion.id} className="group cursor-pointer" onClick={() => setSelectedImage(index)}>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
                  <Image
                    src={instalacion.image || "/placeholder.svg"}
                    alt={instalacion.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button className="bg-primary hover:bg-primary/90 text-white">Ver Detalles</Button>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                  {instalacion.title}
                </h3>
                <p className="text-white/70 text-sm line-clamp-2">{instalacion.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Modal de imagen */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <X size={24} />
            </button>

            <div className="bg-black rounded-lg overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src={instalaciones[selectedImage].image || "/placeholder.svg"}
                  alt={instalaciones[selectedImage].title}
                  fill
                  sizes="90vw"
                  className="object-cover"
                />
              </div>

              <div className="p-6 space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
                    {instalaciones[selectedImage].title}
                  </h2>
                  <p className="text-white/80 text-lg leading-relaxed">{instalaciones[selectedImage].description}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Características</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {instalaciones[selectedImage].features.map((feature, index) => (
                      <li key={index} className="flex items-center text-white/70">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-4">
                  <p className="text-white/80 italic">{instalaciones[selectedImage].info}</p>
                </div>
              </div>
            </div>

            {/* Navegación */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
