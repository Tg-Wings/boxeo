"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactoSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData)
    alert("¡Mensaje enviado! Nos pondremos en contacto contigo pronto.")
    setFormData({ nombre: "", email: "", telefono: "", mensaje: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contacto" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Contacto</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            ¿Listo para organizar tu próximo torneo? Contáctanos y hagamos realidad tu visión
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulario de contacto */}
          <Card className="bg-black border-gray-800 !bg-black">
            <CardHeader className="!bg-black">
              <CardTitle className="text-2xl font-serif text-white">Envíanos un mensaje</CardTitle>
            </CardHeader>
            <CardContent className="!bg-black">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="nombre"
                    placeholder="Tu nombre completo"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="!bg-black border-gray-700 text-white placeholder:text-gray-400 focus:!bg-black"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Tu correo electrónico"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="!bg-black border-gray-700 text-white placeholder:text-gray-400 focus:!bg-black"
                  />
                </div>
                <div>
                  <Input
                    name="telefono"
                    placeholder="Tu número de teléfono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="!bg-black border-gray-700 text-white placeholder:text-gray-400 focus:!bg-black"
                  />
                </div>
                <div>
                  <Textarea
                    name="mensaje"
                    placeholder="Cuéntanos sobre tu proyecto de torneo..."
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="!bg-black border-gray-700 text-white placeholder:text-gray-400 resize-none focus:!bg-black"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Información de contacto */}
          <div className="space-y-8">
            <Card className="bg-black border-gray-800 !bg-black">
              <CardContent className="pt-6 !bg-black">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-pink-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email</h3>
                    <p className="text-gray-300">info@torneoselite.com</p>
                    <p className="text-gray-300">eventos@torneoselite.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black border-gray-800 !bg-black">
              <CardContent className="pt-6 !bg-black">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-pink-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Teléfono</h3>
                    <p className="text-gray-300">+51 1 234-5678</p>
                    <p className="text-gray-300">+51 987-654-321</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black border-gray-800 !bg-black">
              <CardContent className="pt-6 !bg-black">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-pink-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Gimnasio</h3>
                    <p className="text-gray-300">
                      Av. Javier Prado Este 123
                      <br />
                      San Isidro, Lima - Perú
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black border-gray-800 !bg-black">
              <CardContent className="pt-6 !bg-black">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-pink-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Horarios</h3>
                    <p className="text-gray-300">
                      Lunes - Viernes: 6:00 AM - 10:00 PM
                      <br />
                      Sábados: 7:00 AM - 8:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
