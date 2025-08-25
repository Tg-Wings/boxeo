"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, MapPin, Clock, Users } from "lucide-react"

interface InstalacionesModalProps {
  isOpen: boolean
  onClose: () => void
}

const instalaciones = [
  {
    id: 1,
    nombre: "Ring Principal",
    imagen: "/ring-de-boxeo-profesional-en-lima-con-luces-dram-t.png",
    descripcion:
      "Ring profesional de competencia con especificaciones internacionales. Equipado con sistema de iluminación LED y suelo de alta calidad para entrenamientos y combates oficiales.",
    caracteristicas: ["Dimensiones: 6.1m x 6.1m", "Cuerdas profesionales", "Lona antideslizante", "Iluminación LED"],
  },
  {
    id: 2,
    nombre: "Área de Sacos",
    imagen: "/boxeador-peruano-entrenando-con-saco.png",
    descripcion:
      "Zona dedicada con 12 sacos de boxeo de diferentes pesos y tipos. Incluye sacos pesados, de velocidad y dobles para entrenamientos completos.",
    caracteristicas: ["12 sacos profesionales", "Diferentes pesos", "Área de 200m²", "Suelo acolchado"],
  },
  {
    id: 3,
    nombre: "Gimnasio de Fuerza",
    imagen: "/gimnasio-de-boxeo-peruano-moderno.png",
    descripcion:
      "Área de acondicionamiento físico con equipamiento especializado para boxeadores. Máquinas cardiovasculares y pesas libres de última generación.",
    caracteristicas: ["Equipos Technogym", "Área cardiovascular", "Pesas libres", "Zona funcional"],
  },
  {
    id: 4,
    nombre: "Vestuarios Premium",
    imagen: "/vestuarios-modernos-gimnasio-boxeo.png",
    descripcion:
      "Vestuarios amplios y modernos con casilleros individuales, duchas con agua caliente y área de relajación para después del entrenamiento.",
    caracteristicas: ["Casilleros individuales", "Duchas modernas", "Área de relajación", "Seguridad 24/7"],
  },
  {
    id: 5,
    nombre: "Sala de Clases Grupales",
    imagen: "/clase-de-boxeo-grupal-en-gimnasio-peruano-con-inst.png",
    descripcion:
      "Espacio amplio para clases grupales de boxeo fitness, acondicionamiento y técnicas básicas. Capacidad para 20 personas simultáneamente.",
    caracteristicas: [
      "Capacidad: 20 personas",
      "Espejos de pared a pared",
      "Sistema de audio",
      "Ventilación especializada",
    ],
  },
  {
    id: 6,
    nombre: "Área de Recuperación",
    imagen: "/area-recuperacion-spa-gimnasio-moderno.png",
    descripcion:
      "Zona de recuperación con sauna, jacuzzi y área de masajes para la recuperación post-entrenamiento de nuestros atletas de elite.",
    caracteristicas: ["Sauna finlandesa", "Jacuzzi terapéutico", "Sala de masajes", "Área de estiramiento"],
  },
]

export default function InstalacionesModal({ isOpen, onClose }: InstalacionesModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextInstalacion = () => {
    setCurrentIndex((prev) => (prev + 1) % instalaciones.length)
  }

  const prevInstalacion = () => {
    setCurrentIndex((prev) => (prev - 1 + instalaciones.length) % instalaciones.length)
  }

  const currentInstalacion = instalaciones[currentIndex]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl w-[95vw] max-h-[95vh] overflow-hidden bg-black border-gray-800 text-white p-0">
        <div className="overflow-y-auto max-h-[95vh] p-6">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-serif text-white text-center">
              Nuestras Instalaciones de Clase Mundial
            </h2>
          </div>

          <div className="space-y-6 md:space-y-8">
            {/* Imagen y controles - ahora arriba */}
            <div className="relative">
              <div className="relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden">
                <img
                  src={currentInstalacion.imagen || "/placeholder.svg"}
                  alt={currentInstalacion.nombre}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {/* Controles de navegación */}
                <button
                  onClick={prevInstalacion}
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 md:p-3 rounded-full transition-all"
                >
                  <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
                </button>
                <button
                  onClick={nextInstalacion}
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 md:p-3 rounded-full transition-all"
                >
                  <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
                </button>

                {/* Indicadores */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {instalaciones.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                        index === currentIndex ? "bg-primary" : "bg-white/50 hover:bg-white/70"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Contenido de texto - ahora abajo */}
            <div className="space-y-4">
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-white">
                  {currentInstalacion.nombre}
                </h3>
                <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed">
                  {currentInstalacion.descripcion}
                </p>

                <div className="space-y-3">
                  <h4 className="text-lg md:text-xl font-semibold text-white">Características:</h4>
                  <ul className="space-y-2">
                    {currentInstalacion.caracteristicas.map((caracteristica, index) => (
                      <li key={index} className="flex items-center gap-3 text-gray-300 text-sm md:text-base">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        {caracteristica}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 p-3 md:p-4 bg-gray-900 rounded-lg">
                <div className="text-center">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary mx-auto mb-2" />
                  <p className="text-xs md:text-sm text-gray-300">San Isidro</p>
                  <p className="text-xs text-gray-400">Lima, Perú</p>
                </div>
                <div className="text-center">
                  <Clock className="w-5 h-5 md:w-6 md:h-6 text-primary mx-auto mb-2" />
                  <p className="text-xs md:text-sm text-gray-300">6AM - 10PM</p>
                  <p className="text-xs text-gray-400">Lun - Vie</p>
                </div>
                <div className="text-center">
                  <Users className="w-5 h-5 md:w-6 md:h-6 text-primary mx-auto mb-2" />
                  <p className="text-xs md:text-sm text-gray-300">500+ Miembros</p>
                  <p className="text-xs text-gray-400">Activos</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center pt-4 mt-6 border-t border-gray-800 gap-4">
            <span className="text-gray-400 text-sm md:text-base">
              {currentIndex + 1} de {instalaciones.length}
            </span>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={prevInstalacion}
                className="border-gray-700 text-white hover:bg-gray-800 bg-transparent text-sm md:text-base px-3 md:px-4"
              >
                Anterior
              </Button>
              <Button
                onClick={nextInstalacion}
                className="bg-primary hover:bg-primary/90 text-sm md:text-base px-3 md:px-4"
              >
                Siguiente
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
