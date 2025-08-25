"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function LoadingModal() {
  const [isLoading, setIsLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    document.body.style.overflow = "hidden"

    const pageContent = document.querySelector(".page-content")
    if (pageContent) {
      pageContent.classList.remove("loaded")
    }

    const link = document.createElement("link")
    link.rel = "preload"
    link.as = "image"
    link.href = "/boxeadores-fondo-modal.jpeg"
    document.head.appendChild(link)

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 0.67
      })
    }, 100)

    const timer = setTimeout(() => {
      setIsLoading(false)
      document.body.style.overflow = "unset"

      const pageContent = document.querySelector(".page-content")
      if (pageContent) {
        pageContent.classList.add("loaded")
      }

      setTimeout(() => setIsVisible(false), 300)
    }, 15000)

    return () => {
      clearTimeout(timer)
      clearInterval(progressInterval)
      document.body.style.overflow = "unset"
      if (link.parentNode) {
        link.parentNode.removeChild(link)
      }
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-300 ${!isLoading ? "opacity-0" : "opacity-100"}`}
    >
      <Image
        src="/boxeadores-fondo-modal.jpeg"
        alt="Boxeadores fondo"
        fill
        className="object-cover"
        priority
        quality={90}
        fetchPriority="high"
        loading="eager"
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative flex flex-col items-center gap-8">
        <div className="text-center space-y-4">
          <div className="text-white text-4xl font-sans font-light tracking-wide">BoxPeru Elite</div>
          <div className="text-white/80 text-lg font-light">Preparando tu experiencia profesional</div>
        </div>

        <div className="w-80 bg-white/20 rounded-full h-3 overflow-hidden backdrop-blur-sm">
          <div
            className="h-full bg-white transition-all duration-100 ease-out rounded-full shadow-lg"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="text-white text-sm font-light">{Math.round(progress)}%</div>
      </div>
    </div>
  )
}
