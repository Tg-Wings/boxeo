"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

const carouselData = [
  {
    image: "/boxeador-peruano-entrenando-en-gimnasio-moderno-co.png",
    title: "Elite Boxing Perú",
    subtitle: "Forjando Campeones",
    description:
      "El gimnasio de boxeo más prestigioso del Perú. Entrena como los grandes campeones peruanos con equipamiento de clase mundial y técnicas profesionales.",
  },
  {
    image: "/ring-de-boxeo-profesional-en-lima-con-luces-dram-t.png",
    title: "Torneos Nacionales",
    subtitle: "Competencia de Elite",
    description:
      "Organizamos los torneos de boxeo más importantes del Perú. Desde Lima hasta todo el país, creamos oportunidades para que brilles en el ring.",
  },
  {
    image: "/boxeador-peruano-levantando-cintur-n-de-campe-n-co.png",
    title: "Campeones Peruanos",
    subtitle: "Tradición y Gloria",
    description:
      "Siguiendo la tradición de grandes boxeadores peruanos, desarrollamos el talento nacional desde principiantes hasta profesionales de clase mundial.",
  },
  {
    image: "/clase-de-boxeo-grupal-en-gimnasio-peruano-con-inst.png",
    title: "Entrenamiento Profesional",
    subtitle: "Técnica de Campeones",
    description:
      "Aprende las técnicas que han hecho famoso al boxeo peruano con nuestros entrenadores certificados internacionalmente.",
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const router = useRouter()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length)
  }

  return (
    <>
      <div className="hidden">
        {carouselData.slice(0, 2).map((slide, index) => (
          <Image
            key={index}
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            width={1920}
            height={1080}
            priority
          />
        ))}
      </div>

      <div className="relative h-screen w-full overflow-hidden bg-black">
        {carouselData.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority={index < 2}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />

            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl animate-fade-in">
                  <div className="text-primary font-semibold text-sm sm:text-base md:text-lg lg:text-xl mb-2 sm:mb-4 tracking-wide">
                    {slide.subtitle}
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-serif font-bold text-white mb-4 sm:mb-6 tracking-tight leading-none">
                    {slide.title}
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-2xl">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Button
                      size="lg"
                      onClick={() => router.push("/comenzar")}
                      className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium group w-full sm:w-auto"
                    >
                      <Play className="mr-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                      Comenzar Ahora
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => router.push("/instalaciones")}
                      className="border-2 border-white text-white hover:bg-white hover:text-black px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium bg-transparent transition-all duration-300 w-full sm:w-auto"
                    >
                      Ver Instalaciones
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 sm:p-3 lg:p-4 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 group"
        >
          <ChevronLeft size={20} className="sm:w-6 sm:h-6 group-hover:-translate-x-1 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 sm:p-3 lg:p-4 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 group"
        >
          <ChevronRight size={20} className="sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
        </button>

        <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3">
          {carouselData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 ${
                index === currentSlide
                  ? "w-6 sm:w-8 h-2 sm:h-3 bg-primary rounded-full"
                  : "w-2 sm:w-3 h-2 sm:h-3 bg-white/50 hover:bg-white/70 rounded-full"
              }`}
            />
          ))}
        </div>

        <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 right-4 sm:right-6 lg:right-8 text-white/60 text-xs sm:text-sm animate-bounce hidden md:block">
          <div className="flex flex-col items-center gap-2">
            <span>Scroll</span>
            <div className="w-px h-6 sm:h-8 bg-white/40"></div>
          </div>
        </div>
      </div>

      {/* <VideoFormModal isOpen={showVideoModal} onClose={() => setShowVideoModal(false)} /> */}
      {/* <InstalacionesModal isOpen={showInstalacionesModal} onClose={() => setShowInstalacionesModal(false)} /> */}
    </>
  )
}
