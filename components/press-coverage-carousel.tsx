"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  {
    src: "/images/press-coverage/image-1.jpg",
    alt: "Bookends - Launched on a wing and a prayer - Literary festival article",
  },
  {
    src: "/images/press-coverage/image-2.jpg",
    alt: "Indian Express - A Quest to the Himalayas After Love & Heartbreak",
  },
  {
    src: "/images/press-coverage/image-3.jpg",
    alt: "Mixed media advantage - Apparao Galleries book presentation event",
  },
  {
    src: "/images/press-coverage/image-4.jpg",
    alt: "Hindi newspaper - कुहासे का गीत article about the book",
  },
  {
    src: "/images/press-coverage/image-5.jpg",
    alt: "WeWork Events - How To Write And Publish A Best-Seller",
  },
  {
    src: "/images/press-coverage/image-6.jpg",
    alt: "Cognitive Workplace Summit 1.0 speaking engagement",
  },
  {
    src: "/images/press-coverage/image-7.jpg",
    alt: "Author speaking at professional conference podium",
  },
  {
    src: "/images/press-coverage/image-8.jpg",
    alt: "GRI Institute panel discussion event",
  },
  {
    src: "/images/press-coverage/image-9.jpg",
    alt: "City Life Chennai - Bitter truth with a sugar coating article",
  },
  {
    src: "/images/press-coverage/image-10.jpg",
    alt: "Cognitive Workplace Summit panel discussion",
  },
]

export default function PressCoverageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  if (!isHydrated) {
    return (
      <div className="relative w-full h-full">
        <div className="relative w-full aspect-video bg-card rounded-lg overflow-hidden">
          <Image
            src={images[0].src}
            alt={images[0].alt}
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === 0
                  ? "bg-gold w-6"
                  : "bg-border"
              }`}
            />
          ))}
        </div>
        <div className="text-center mt-4 text-sm text-muted-foreground">
          1 / {images.length}
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full h-full">
      {/* Image container */}
      <div className="relative w-full aspect-video bg-card rounded-lg overflow-hidden">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-gold/90 hover:bg-gold text-foreground transition-all duration-300 shadow-lg"
        aria-label="Previous press coverage"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-gold/90 hover:bg-gold text-foreground transition-all duration-300 shadow-lg"
        aria-label="Next press coverage"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-gold w-6"
                : "bg-border hover:bg-muted-foreground"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="text-center mt-4 text-sm text-muted-foreground">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  )
}
