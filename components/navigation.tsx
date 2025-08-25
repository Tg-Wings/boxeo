"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { useRouter } from "next/navigation"

const navItems = [
  { name: "Inicio", href: "/" },
  { name: "Torneos", href: "/torneos" },
  { name: "Galería", href: "/galeria" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Contacto", href: "/contacto" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleNavigation = (href: string) => {
    setIsOpen(false)
    router.push(href)
    // Scroll to top después de la navegación
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-pink-500/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => handleNavigation("/")}
            className="text-2xl font-serif font-bold text-white hover:text-pink-400 transition-colors duration-200"
          >
            BoxPeru Elite
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className="text-white hover:text-pink-400 transition-colors duration-200 font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-200 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 hover:text-pink-400 transition-colors duration-200"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-black/98 border-t border-pink-500/20 backdrop-blur-md">
            <div className="py-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className="block w-full text-left px-6 py-3 text-white hover:text-pink-400 hover:bg-pink-500/10 transition-all duration-200 font-medium"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
