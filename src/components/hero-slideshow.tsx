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
    <section className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-[5vw] py-4 sm:py-6 md:py-8">
      <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg md:shadow-xl">
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
              fill
              className="object-cover object-center"
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
            />
            <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 md:h-48 lg:h-52 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center sm:justify-end p-4 sm:p-6 md:p-8 lg:pr-16">
              <div className="flex flex-col items-center sm:items-end text-center sm:text-right max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-4 leading-tight">{slide.title}</h1>
                <div className="mb-3 sm:mb-4 md:mb-6">
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 leading-relaxed">{slide.description}</p>
                </div>
                {slide.buttonText && slide.buttonLink && (
                  <Link 
                    href={slide.buttonLink}
                    className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-white text-blue-800 font-medium text-xs sm:text-sm rounded-md hover:bg-blue-50 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                  >
                    {slide.buttonText}
                    <svg 
                      className="ml-1 w-3 h-3 sm:w-4 sm:h-4" 
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
          <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 right-4 sm:right-6 md:right-8 lg:right-16 flex space-x-2 sm:space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
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
