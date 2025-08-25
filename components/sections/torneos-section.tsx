import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Trophy, Users, MapPin } from "lucide-react"

const torneos = [
  {
    title: "Campeonato Nacional de Boxeo Perú",
    description:
      "El torneo de boxeo más prestigioso del país con los mejores peleadores peruanos e invitados internacionales.",
    fecha: "15-17 Marzo 2024",
    participantes: "64 boxeadores",
    premio: "S/. 250,000",
    ubicacion: "Coliseo Dibós, Lima",
    image: "/boxeador-peruano-profesional-en-ring.png",
  },
  {
    title: "Copa Amateur BoxPeru Elite",
    description: "Competencia para boxeadores amateur peruanos que buscan dar el salto al profesionalismo.",
    fecha: "22-24 Abril 2024",
    participantes: "128 boxeadores",
    premio: "S/. 80,000",
    ubicacion: "Gimnasio Nacional, Lima",
    image: "/boxeo-amateur-peruano-j-venes.png",
  },
  {
    title: "Torneo Juvenil Futuras Estrellas",
    description: "Desarrollo de nuevos talentos peruanos en el boxeo con categorías juveniles y cadetes.",
    fecha: "10-12 Mayo 2024",
    participantes: "96 jóvenes boxeadores",
    premio: "S/. 50,000",
    ubicacion: "BoxPeru Elite, Lima",
    image: "/boxeo-juvenil-peruano-entrenamiento.png",
  },
]

export default function TorneosSection() {
  return (
    <section id="torneos" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Próximos Torneos de Boxeo</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Únete a nuestros torneos de boxeo y compite con los mejores peleadores del Perú
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {torneos.map((torneo, index) => (
            <Card
              key={index}
              className="bg-gray-900 border-gray-800 hover:border-pink-500 transition-all duration-300 group shadow-2xl"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={torneo.image || "/placeholder.svg"}
                  alt={torneo.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-serif text-white group-hover:text-pink-400 transition-colors">
                  {torneo.title}
                </CardTitle>
                <CardDescription className="text-gray-400 leading-relaxed">{torneo.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <Calendar size={18} className="text-pink-500" />
                  {torneo.fecha}
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <Users size={18} className="text-pink-500" />
                  {torneo.participantes}
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <MapPin size={18} className="text-pink-500" />
                  {torneo.ubicacion}
                </div>
                <div className="flex items-center gap-3 text-sm text-pink-400 font-semibold">
                  <Trophy size={18} />
                  {torneo.premio}
                </div>
                <Button className="w-full mt-6 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-lg">
                  Inscribirse Ahora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
