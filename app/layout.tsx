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
  title: "BoxPeru Elite - Gimnasio de Boxeo Profesional en Lima, Perú",
  description:
    "El gimnasio de boxeo más prestigioso de Perú. Entrenamientos profesionales, torneos nacionales e internacionales. Formamos campeones peruanos desde hace 20+ años en Lima.",
  keywords:
    "boxeo peru, gimnasio boxeo lima, torneos boxeo peru, entrenamiento boxeo profesional, boxeo peruano, campeones boxeo peru, clases boxeo lima",
  authors: [{ name: "BoxPeru Elite" }],
  creator: "BoxPeru Elite",
  publisher: "BoxPeru Elite",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://boxeo-inky.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "es-PE": "/es-pe",
      es: "/es",
    },
  },
  openGraph: {
    title: "BoxPeru Elite - Gimnasio de Boxeo Profesional en Lima, Perú",
    description:
      "El gimnasio de boxeo más prestigioso de Perú. Entrenamientos profesionales, torneos nacionales e internacionales. Formamos campeones peruanos desde hace 20+ años.",
    url: "https://boxeo-inky.vercel.app",
    siteName: "BoxPeru Elite",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BoxPeru Elite - Gimnasio de Boxeo Profesional",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BoxPeru Elite - Gimnasio de Boxeo Profesional",
    description: "El gimnasio de boxeo más prestigioso de Perú. Entrenamientos profesionales y torneos nacionales.",
    images: ["/twitter-image.png"],
    creator: "@BoxPeruElite",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-site-verification-code",
  },
  category: "sports",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-PE" className={`${geist.variable} ${manrope.variable} antialiased`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsActivityLocation",
              name: "BoxPeru Elite",
              description: "Gimnasio de boxeo profesional en Lima, Perú. Entrenamientos de élite y torneos nacionales.",
              url: "https://boxeo-inky.vercel.app",
              telephone: "+51-934-498-803",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Av. Javier Prado Este 1234",
                addressLocality: "San Isidro",
                addressRegion: "Lima",
                postalCode: "15036",
                addressCountry: "PE",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -12.0464,
                longitude: -77.0428,
              },
              openingHours: ["Mo-Fr 06:00-22:00", "Sa-Su 08:00-20:00"],
              priceRange: "$$",
              image: "https://boxeo-inky.vercel.app/og-image.png",
              sameAs: [
                "https://www.facebook.com/BoxPeruElite",
                "https://www.instagram.com/boxperuelite",
                "https://www.youtube.com/c/BoxPeruElite",
              ],
              sport: "Boxing",
              amenityFeature: [
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Professional Boxing Ring",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Personal Training",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Group Classes",
                  value: true,
                },
              ],
            }),
          }}
        />

        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

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
