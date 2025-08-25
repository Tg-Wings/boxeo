"use client"

import { useEffect, useState } from "react"

const stats = [
  { number: 500, label: "Boxeadores Entrenados", suffix: "+" },
  { number: 15, label: "Años de Experiencia", suffix: "" },
  { number: 50, label: "Campeones Formados", suffix: "+" },
  { number: 100, label: "Torneos Organizados", suffix: "%" },
]

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const section = document.getElementById("stats-section")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="stats-section" className="py-20 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Números que Hablan por Nosotros</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Más de una década formando campeones y organizando los mejores torneos de boxeo en el Perú
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="relative">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2 transition-all duration-300 group-hover:scale-110">
                  {isVisible ? <CountUpAnimation target={stat.number} suffix={stat.suffix} /> : "0"}
                </div>
                <p className="text-white/80 font-medium text-sm md:text-base">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CountUpAnimation({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [target])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}
