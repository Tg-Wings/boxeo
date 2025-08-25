import type React from "react"
import type { Metadata } from "next"
import { Geist, Manrope } from "next/font/google"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "Elite Boxing Perú - Gimnasio de Boxeo y Torneos",
  description:
    "El mejor gimnasio de boxeo en Perú. Entrenamientos profesionales, torneos nacionales e internacionales. Formamos campeones peruanos.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${geist.variable} ${manrope.variable} antialiased`}>
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
            .page-content {
              opacity: 0;
              visibility: hidden;
              transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
            }
            .page-content.loaded {
              opacity: 1;
              visibility: visible;
            }
            .loading-overlay {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              z-index: 9999;
              background: black;
            }
          `,
          }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
