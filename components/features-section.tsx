import { Trophy, Users, Target, Award } from "lucide-react"

const features = [
  {
    icon: Trophy,
    title: "Entrenamiento de Elite",
    description:
      "Técnicas profesionales utilizadas por campeones mundiales, adaptadas para todos los niveles desde principiantes hasta profesionales.",
  },
  {
    icon: Users,
    title: "Comunidad Boxística",
    description:
      "Únete a la comunidad de boxeo más grande del Perú. Entrena junto a futuros campeones y veteranos del deporte.",
  },
  {
    icon: Target,
    title: "Objetivos Personalizados",
    description:
      "Planes de entrenamiento diseñados específicamente para tus metas, ya sea fitness, competencia o desarrollo profesional.",
  },
  {
    icon: Award,
    title: "Torneos Oficiales",
    description: "Organizamos y participamos en torneos oficiales reconocidos por la Federación Peruana de Boxeo.",
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            ¿Por Qué Elegir Elite Boxing Perú?
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Somos más que un gimnasio. Somos una institución dedicada a formar campeones y preservar la tradición
            boxística peruana.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-6 h-full transition-all duration-300 hover:border-primary/50 hover:bg-black/70">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-lg mb-4 group-hover:bg-primary/30 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
