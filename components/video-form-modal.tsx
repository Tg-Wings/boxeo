"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { User, Mail, Phone, MessageSquare } from "lucide-react"

interface VideoFormModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function VideoFormModal({ isOpen, onClose }: VideoFormModalProps) {
  const [showVideo, setShowVideo] = useState(true)
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    edad: "",
    experiencia: "",
    mensaje: "",
  })

  const handleVideoEnd = () => {
    setShowVideo(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Crear mensaje para WhatsApp
    const mensaje = `¡Hola! Me interesa unirme a Elite Boxing Perú 🥊

*Mis datos:*
• Nombre: ${formData.nombre}
• Email: ${formData.email}
• Teléfono: ${formData.telefono}
• Edad: ${formData.edad}
• Experiencia: ${formData.experiencia}
• Mensaje: ${formData.mensaje}

¡Espero su respuesta!`

    // Abrir WhatsApp
    const whatsappUrl = `https://wa.me/51934498803?text=${encodeURIComponent(mensaje)}`
    window.open(whatsappUrl, "_blank")

    onClose()
    setShowVideo(true)
    setFormData({ nombre: "", email: "", telefono: "", edad: "", experiencia: "", mensaje: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] sm:w-[90vw] md:w-[80vw] lg:w-[70vw] xl:max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto bg-black border-gray-800 text-white p-4 sm:p-6">
        {showVideo ? (
          <div className="space-y-4 sm:space-y-6">
            <div className="text-center mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl font-serif text-white mb-2">Bienvenido a Elite Boxing Perú</h2>
            </div>
            <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                preload="auto"
                onEnded={handleVideoEnd}
                poster="/boxeador-peruano-profesional-en-ring.png"
                playsInline
              >
                <source
                  src="https://videocdn.cdnpk.net/videos/a8946862-9e29-4669-9310-bbfe3d858494/horizontal/previews/clear/large.mp4?token=exp=1756099984~hmac=f3b1122387f1673b3b410dd89c573240e99200d194f6a7d8d793b9ef3540f20c"
                  type="video/mp4"
                />
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
            <div className="text-center">
              <Button
                onClick={handleVideoEnd}
                className="bg-primary hover:bg-primary/90 w-full sm:w-auto px-6 sm:px-8 py-3"
              >
                Saltar Video y Continuar
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="text-center mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Completa tu Información</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Te contactaremos por WhatsApp para coordinar tu primera clase gratuita
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Nombre Completo *
                </label>
                <Input
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="!bg-black !border-gray-700 !text-white focus:!bg-black"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email *
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="!bg-black !border-gray-700 !text-white focus:!bg-black"
                  placeholder="tu@email.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Teléfono *
                </label>
                <Input
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  className="!bg-black !border-gray-700 !text-white focus:!bg-black"
                  placeholder="+51 999 888 777"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Edad</label>
                <Input
                  name="edad"
                  type="number"
                  value={formData.edad}
                  onChange={handleChange}
                  className="!bg-black !border-gray-700 !text-white focus:!bg-black"
                  placeholder="25"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Experiencia en Boxeo</label>
              <select
                name="experiencia"
                value={formData.experiencia}
                onChange={handleChange}
                className="w-full !bg-black border border-gray-700 text-white rounded-md px-3 py-2 focus:!bg-black"
              >
                <option value="">Selecciona tu nivel</option>
                <option value="principiante">Principiante (Sin experiencia)</option>
                <option value="basico">Básico (Menos de 1 año)</option>
                <option value="intermedio">Intermedio (1-3 años)</option>
                <option value="avanzado">Avanzado (Más de 3 años)</option>
                <option value="profesional">Profesional/Competitivo</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Mensaje Adicional
              </label>
              <Textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                className="!bg-black !border-gray-700 !text-white resize-none focus:!bg-black"
                rows={3}
                placeholder="Cuéntanos tus objetivos o cualquier pregunta..."
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowVideo(true)}
                className="flex-1 border-gray-700 text-white hover:bg-gray-800 py-3"
              >
                Ver Video Nuevamente
              </Button>
              <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90 py-3">
                Enviar a WhatsApp
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
