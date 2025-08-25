import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif font-bold text-card-foreground mb-4">Torneos Elite</h3>
            <p className="text-muted mb-6 max-w-md">
              Líderes en organización de torneos profesionales. Creamos experiencias excepcionales que inspiran y
              celebran el talento en cada competencia.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted hover:text-primary transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-muted hover:text-primary transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-muted hover:text-primary transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-muted hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-muted hover:text-primary transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#torneos" className="text-muted hover:text-primary transition-colors">
                  Torneos
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-muted hover:text-primary transition-colors">
                  Galería
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-muted hover:text-primary transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-muted hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-muted">Organización de Torneos</span>
              </li>
              <li>
                <span className="text-muted">Gestión de Eventos</span>
              </li>
              <li>
                <span className="text-muted">Transmisiones en Vivo</span>
              </li>
              <li>
                <span className="text-muted">Ceremonias de Premiación</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted">© 2024 Torneos Elite. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
