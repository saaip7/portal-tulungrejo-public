"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

interface Slide {
  image: string
  title: string
  description: string
  buttonText?: string
  buttonLink?: string
}

interface HeroSlideshowProps {
  slides: Slide[]
  autoPlayInterval?: number
}

export function HeroSlideshow({ slides, autoPlayInterval = 5000 }: HeroSlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    if (slides.length <= 1) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [slides.length, autoPlayInterval])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  if (slides.length === 0) return null

  return (
    <section className="container mx-auto px-[5vw] py-8">
      <div className="relative h-72 rounded-3xl overflow-hidden shadow-xl">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              width={1400}
              height={700}
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute bottom-0 left-0 right-0 h-52 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-end pr-8 md:pr-16">
              <div className="flex flex-col items-end text-right">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{slide.title}</h1>
                <div className="flex max-w-lg text-right mb-6">
                  <p className="text-md md:text-lg text-white/90">{slide.description}</p>
                </div>
                {slide.buttonText && slide.buttonLink && (
                  <Link 
                    href={slide.buttonLink}
                    className="inline-flex items-center px-4 py-2 bg-white text-blue-800 font-medium text-sm rounded-md hover:bg-blue-50 transition-colors duration-300 shadow-md hover:shadow-lg transform"
                  >
                    {slide.buttonText}
                    <svg 
                      className="ml-1 w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M13 7l5 5m0 0l-5 5m5-5H6" 
                      />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Circle Indicators */}
        {slides.length > 1 && (
          <div className="absolute bottom-6 right-8 md:right-16 flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75 hover:scale-110"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
