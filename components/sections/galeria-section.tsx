"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const galeriaImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/712aG78QtHL-removebg-preview-aruiXi3CrB2uLhAfgM89V3gUPCgsZa.png",
    alt: "Guantes de boxeo profesionales RING - Modelo Elite",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/712aG78QtHL-removebg-preview-aruiXi3CrB2uLhAfgM89V3gUPCgsZa.png",
    alt: "Guantes de boxeo profesionales RING - Entrenamiento",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/712aG78QtHL-removebg-preview-aruiXi3CrB2uLhAfgM89V3gUPCgsZa.png",
    alt: "Guantes de boxeo profesionales RING - Competición",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/712aG78QtHL-removebg-preview-aruiXi3CrB2uLhAfgM89V3gUPCgsZa.png",
    alt: "Guantes de boxeo profesionales RING - Sparring",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/712aG78QtHL-removebg-preview-aruiXi3CrB2uLhAfgM89V3gUPCgsZa.png",
    alt: "Guantes de boxeo profesionales RING - Amateur",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/712aG78QtHL-removebg-preview-aruiXi3CrB2uLhAfgM89V3gUPCgsZa.png",
    alt: "Guantes de boxeo profesionales RING - Juvenil",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/712aG78QtHL-removebg-preview-aruiXi3CrB2uLhAfgM89V3gUPCgsZa.png",
    alt: "Guantes de boxeo profesionales RING - Profesional",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/712aG78QtHL-removebg-preview-aruiXi3CrB2uLhAfgM89V3gUPCgsZa.png",
    alt: "Guantes de boxeo profesionales RING - Premium",
  },
]

export default function GaleriaSection() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (selectedImage) {
      // Bloquear scroll
      document.body.style.overflow = "hidden"
    } else {
      // Restaurar scroll
      document.body.style.overflow = "unset"
    }

    // Cleanup: restaurar scroll cuando el componente se desmonte
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [selectedImage])

  const navigateImage = (direction: "prev" | "next") => {
    if (!selectedImage) return

    const currentIdx = galeriaImages.findIndex((img) => img.src === selectedImage.src)
    let newIndex

    if (direction === "prev") {
      newIndex = currentIdx > 0 ? currentIdx - 1 : galeriaImages.length - 1
    } else {
      newIndex = currentIdx < galeriaImages.length - 1 ? currentIdx + 1 : 0
    }

    setSelectedImage(galeriaImages[newIndex])
    setCurrentIndex(newIndex)
  }

  return (
    <section id="galeria" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 sm:mb-6">
            Galería de BoxPeru Elite
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Momentos épicos de nuestros boxeadores y las mejores instalaciones de boxeo en Perú
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {galeriaImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl bg-gray-900 shadow-2xl aspect-square"
              onClick={() => {
                setSelectedImage(image)
                setCurrentIndex(index)
              }}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                className="object-cover group-hover:scale-110 transition-all duration-500"
                priority={index < 4} // Preload primeras 4 imágenes
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center p-4 sm:p-6">
                <div className="text-white text-center">
                  <span className="text-sm sm:text-lg font-semibold block mb-1 sm:mb-2">Ver imagen</span>
                  <span className="text-xs sm:text-sm text-gray-300 line-clamp-2">{image.alt}</span>
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-pink-500 rounded-xl transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-sm"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedImage(null)
            }}
          >
            <div className="relative w-full h-full max-w-6xl max-h-full flex flex-col">
              {/* Header del modal */}
              <div className="flex justify-between items-center mb-4 text-white">
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold mb-1">{selectedImage.alt}</h3>
                  <p className="text-sm text-gray-400">
                    {currentIndex + 1} de {galeriaImages.length}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="text-white bg-pink-500 hover:bg-pink-600 rounded-full p-2 sm:p-3 transition-all duration-200 shadow-lg ml-4"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Contenedor de imagen con navegación */}
              <div className="relative flex-1 flex items-center justify-center">
                {/* Botón anterior */}
                <button
                  onClick={() => navigateImage("prev")}
                  className="absolute left-2 sm:left-4 z-10 text-white bg-black/50 hover:bg-pink-500 rounded-full p-2 sm:p-3 transition-all duration-200 backdrop-blur-sm"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Imagen principal */}
                <div className="relative w-full h-full max-w-4xl max-h-full">
                  <Image
                    src={selectedImage.src || "/placeholder.svg"}
                    alt={selectedImage.alt}
                    fill
                    sizes="100vw"
                    className="object-contain rounded-lg shadow-2xl"
                    priority
                  />
                </div>

                {/* Botón siguiente */}
                <button
                  onClick={() => navigateImage("next")}
                  className="absolute right-2 sm:right-4 z-10 text-white bg-black/50 hover:bg-pink-500 rounded-full p-2 sm:p-3 transition-all duration-200 backdrop-blur-sm"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Indicadores de navegación */}
              <div className="flex justify-center mt-4 space-x-2">
                {galeriaImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedImage(galeriaImages[index])
                      setCurrentIndex(index)
                    }}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                      index === currentIndex ? "bg-pink-500" : "bg-gray-600 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
