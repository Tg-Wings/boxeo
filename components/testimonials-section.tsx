"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "Campeón Nacional Amateur",
    content:
      "Elite Boxing Perú me dio las herramientas para convertirme en campeón. Los entrenadores son de clase mundial y el ambiente es increíble.",
    rating: 5,
    image: "/boxeador-peruano-profesional.png",
  },
  {
    name: "María González",
    role: "Boxeadora Profesional",
    content:
      "Aquí encontré no solo entrenamiento de elite, sino una familia. La disciplina y técnica que aprendí me llevaron al siguiente nivel.",
    rating: 5,
    image: "/boxeadora-peruana-profesional.png",
  },
  {
    name: "Luis Ramírez",
    role: "Entusiasta del Fitness",
    content:
      "Llegué buscando fitness y encontré una pasión. El boxeo cambió mi vida y aquí recibí el mejor entrenamiento posible.",
    rating: 5,
    image: "/hombre-peruano-fitness-boxeo.png",
  },
]

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Lo Que Dicen Nuestros Campeones</h2>
          <p className="text-lg text-white/70">Testimonios reales de boxeadores que han crecido con nosotros</p>
        </div>

        <div className="relative">
          <div className="bg-gradient-to-r from-gray-900 to-black border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="flex items-center justify-center mb-6">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-primary fill-current" />
              ))}
            </div>

            <blockquote className="text-xl md:text-2xl text-white text-center mb-8 leading-relaxed font-light">
              "{testimonials[currentTestimonial].content}"
            </blockquote>

            <div className="flex items-center justify-center gap-4">
              <img
                src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full object-cover border-2 border-primary/30"
              />
              <div className="text-center">
                <p className="text-white font-semibold text-lg">{testimonials[currentTestimonial].name}</p>
                <p className="text-primary text-sm">{testimonials[currentTestimonial].role}</p>
              </div>
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/10"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/10"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial ? "bg-primary scale-110" : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
