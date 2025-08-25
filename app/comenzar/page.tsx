"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/navigation"

export default function ComenzarPage() {
  const [showVideo, setShowVideo] = useState(true)
  const [showForm, setShowForm] = useState(false)

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    edad: "",
    experiencia: "",
    mensaje: "",
  })

  useEffect(() => {
    if (showVideo) {
      const timer = setTimeout(() => {
        setShowVideo(false)
        setTimeout(() => {
          setShowForm(true)
        }, 500)
      }, 10000) // 10 segundos
      return () => clearTimeout(timer)
    }
  }, [showVideo])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const mensaje = `¡Hola! Me interesa comenzar en BoxPeru Elite.

*Información Personal:*
• Nombre: ${formData.nombre}
• Email: ${formData.email}
• Teléfono: ${formData.telefono}
• Edad: ${formData.edad}
• Experiencia: ${formData.experiencia}

*Mensaje:*
${formData.mensaje || "Sin mensaje adicional"}

¡Espero su respuesta para coordinar mi primera clase gratuita!`

    const whatsappUrl = `https://wa.me/51934498803?text=${encodeURIComponent(mensaje)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen !bg-black text-white">
      {showForm && <Navigation />}

      <main className={showForm ? "pt-20 pb-12" : "pt-0 pb-0"}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {showVideo && (
            <div
              className={`min-h-screen flex items-center justify-center transition-all duration-500 ease-in-out ${showVideo ? "opacity-100" : "opacity-0"}`}
            >
              <div className="relative w-full h-screen">
                <video className="w-full h-full object-cover" autoPlay muted playsInline preload="auto">
                  <source src="/box.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
              </div>
            </div>
          )}

          {showForm && (
            <div
              className={`transition-all duration-500 ease-in-out ${showForm ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} max-w-2xl mx-auto`}
            >
              <Card className="!bg-black border-gray-800">
                <CardContent className="p-6 sm:p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">Únete a Nosotros</h2>
                    <p className="text-white/80">
                      Te contactaremos por WhatsApp para coordinar tu primera clase gratuita
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Nombre Completo *</label>
                        <Input
                          required
                          value={formData.nombre}
                          onChange={(e) => handleInputChange("nombre", e.target.value)}
                          placeholder="Tu nombre completo"
                          className="!bg-black border-gray-700 text-white placeholder:text-gray-400 focus:!bg-black focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Email *</label>
                        <Input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="tu@email.com"
                          className="!bg-black border-gray-700 text-white placeholder:text-gray-400 focus:!bg-black focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Teléfono *</label>
                        <Input
                          required
                          value={formData.telefono}
                          onChange={(e) => handleInputChange("telefono", e.target.value)}
                          placeholder="+51 999 888 777"
                          className="!bg-black border-gray-700 text-white placeholder:text-gray-400 focus:!bg-black focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Edad</label>
                        <Input
                          value={formData.edad}
                          onChange={(e) => handleInputChange("edad", e.target.value)}
                          placeholder="25"
                          className="!bg-black border-gray-700 text-white placeholder:text-gray-400 focus:!bg-black focus:border-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Experiencia en Boxeo</label>
                      <Select onValueChange={(value) => handleInputChange("experiencia", value)}>
                        <SelectTrigger className="!bg-black border-gray-700 text-white focus:!bg-black focus:border-primary">
                          <SelectValue placeholder="Selecciona tu nivel" />
                        </SelectTrigger>
                        <SelectContent className="!bg-black border-gray-700">
                          <SelectItem value="principiante" className="text-white hover:!bg-gray-800">
                            Principiante
                          </SelectItem>
                          <SelectItem value="intermedio" className="text-white hover:!bg-gray-800">
                            Intermedio
                          </SelectItem>
                          <SelectItem value="avanzado" className="text-white hover:!bg-gray-800">
                            Avanzado
                          </SelectItem>
                          <SelectItem value="profesional" className="text-white hover:!bg-gray-800">
                            Profesional
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Mensaje Adicional</label>
                      <Textarea
                        value={formData.mensaje}
                        onChange={(e) => handleInputChange("mensaje", e.target.value)}
                        placeholder="Cuéntanos tus objetivos o cualquier pregunta..."
                        rows={4}
                        className="!bg-black border-gray-700 text-white placeholder:text-gray-400 focus:!bg-black focus:border-primary resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-lg font-medium"
                    >
                      Enviar a WhatsApp
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
