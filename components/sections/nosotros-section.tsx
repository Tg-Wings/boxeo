import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Calendar, Star } from "lucide-react"

const stats = [
  { icon: Calendar, number: "20+", label: "Años Formando Campeones" },
  { icon: Award, number: "150+", label: "Torneos de Boxeo" },
  { icon: Users, number: "2K+", label: "Boxeadores Entrenados" },
  { icon: Star, number: "95%", label: "Éxito Profesional" },
]

const testimonios = [
  {
    texto:
      "Este gimnasio me convirtió en campeón. Los entrenadores son de clase mundial y las instalaciones excepcionales.",
    autor: "Miguel 'El Rayo' Hernández",
    cargo: "Campeón Nacional de Boxeo",
  },
  {
    texto: "Desde amateur hasta profesional, aquí encontré todo lo necesario para desarrollar mi carrera en el boxeo.",
    autor: "Ana 'La Guerrera' López",
    cargo: "Boxeadora Profesional",
  },
]

export default function NosotrosSection() {
  return (
    <section id="nosotros" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Nosotros</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Somos el gimnasio de boxeo más prestigioso del país, formando campeones desde hace más de 20 años con
            entrenadores de élite y instalaciones de clase mundial.
          </p>
        </div>

        {/* Estadísticas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-black border-gray-800 text-center !bg-black">
              <CardContent className="pt-6 !bg-black">
                <stat.icon className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Misión */}
        <div className="!bg-black border border-gray-800 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-serif font-bold text-white mb-4 text-center">Nuestra Misión</h3>
          <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
            Formar boxeadores de élite y organizar los mejores torneos de boxeo del país. Nos dedicamos a desarrollar el
            talento desde la base hasta el nivel profesional, combinando técnicas tradicionales con métodos de
            entrenamiento modernos para crear verdaderos campeones dentro y fuera del ring.
          </p>
        </div>

        {/* Testimonios */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonios.map((testimonio, index) => (
            <Card key={index} className="bg-black border-gray-800 !bg-black">
              <CardContent className="pt-6 !bg-black">
                <blockquote className="text-lg text-gray-300 italic mb-4">"{testimonio.texto}"</blockquote>
                <div className="text-white font-semibold">{testimonio.autor}</div>
                <div className="text-sm text-gray-400">{testimonio.cargo}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
