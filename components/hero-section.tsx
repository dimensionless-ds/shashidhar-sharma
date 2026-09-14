"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown, BookOpen, Mic, ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"

const haikus = [
  ["No fear of dying", "It is beauty of being", "Emptiness of life"],
  ["O beautiful life", "Be the sea - Calm, receiving", "Cleansing and holding"],
  ["Moss, grass creeps upon", "The Ancient pond, winter moon", "Hides behind snow veils"],
  ["Her hands outstretched - wings", "Runs in meadow - Autumn leaves", "Butterflies in wake"],
  ["Red sky and green earth", "Mate; Pregnant with clouds, Monsoon", "Delivers in rains"],
] as const

export default function HeroSection() {
  const [haikuIndex, setHaikuIndex] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => setHaikuIndex((current) => (current + 1) % haikus.length), 12 * 60 * 60 * 1000)
    return () => window.clearInterval(interval)
  }, [])

  const haiku = haikus[haikuIndex]
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="relative flex items-start lg:items-center justify-center overflow-hidden bg-background pt-8 sm:pt-12 lg:min-h-screen lg:pt-16"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 gold-gradient" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 pb-12 pt-8 sm:pt-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start">
          {/* Content */}
          <div className="text-center lg:text-left order-1 lg:order-1">
            {/* Headline */}
            <h1 className="font-serif text-[2.65rem] sm:text-5xl lg:text-6xl font-semibold tracking-[-0.045em] text-foreground leading-[0.98] mb-7 text-balance">
              The future will not ask how intelligent our systems were.{" "}
              <span className="gold-text-gradient">It will ask what kind of humans they produced.</span>
              {" "}And there is no neutral answer.
            </h1>

            {/* Professional Bio */}
            <p className="text-[0.98rem] sm:text-base text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Country Head, AWA-India | Workplace Strategy, Change Management &amp; Productivity Expert | Author of bestsellers &quot;Songs of the Mist&quot; &amp; &quot;Work and Workplace at the Edge of Intelligence&quot; | Transforming the Future of Work | Founder Green Footprint Trust | Climate Awareness Activist | Keynote Speaker and Coach
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection("books")}
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 font-medium px-8 py-6 text-base"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Explore Books
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-medium px-8 py-6 text-base transition-colors"
              >
                <a
                  href="https://wa.me/919731723023?text=Hello%2C%20I%20would%20like%20to%20invite%20Shashidhar%20Sharma%20to%20speak%20at%20our%20event."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mic className="w-5 h-5 mr-2" />
                  Invite to Speak
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border">
              <div className="text-center lg:text-left">
                <p className="font-serif text-3xl sm:text-4xl font-bold text-foreground">9+</p>
                <p className="text-sm text-muted-foreground mt-1">Books Published</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="font-serif text-3xl sm:text-4xl font-bold text-foreground">100K+</p>
                <p className="text-sm text-muted-foreground mt-1">Readers Worldwide</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="font-serif text-3xl sm:text-4xl font-bold text-foreground">100+</p>
                <p className="text-sm text-muted-foreground mt-1">Speaking Events</p>
              </div>
            </div>
          </div>

          {/* Portrait */}
          <div className="order-2 lg:order-2">
            <div className="flex flex-col gap-6">
              {/* Main image container */}
              <div className="relative w-full max-w-[19rem] sm:max-w-96 aspect-[4/5] rounded-[1.25rem] overflow-hidden premium-shadow-lg mx-auto lg:mx-0">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/91232E1E-FEB1-4CD6-B4BB-58AA775260D5-kwOYO6AT4vTWPMhHs6FpALtaRItM8o.jpeg"
                  alt="Shashidhar Sharma - Author and Speaker"
                  fill
                  className="object-cover object-[center_20%]"
                  priority
                />
                {/* Gold accent overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-1 gold-gradient" />
              </div>

              {/* Haiku carousel */}
              <div className="relative bg-card border border-border rounded-lg p-5 pb-6 sm:p-8 premium-shadow mx-auto lg:mx-0 w-full" aria-live="polite">
                <div className="min-h-[132px] flex flex-col justify-center sm:pr-10">
                  {haiku.map((line) => (
                    <p key={line} className="font-serif text-lg sm:text-xl italic text-foreground leading-relaxed text-pretty">{line}</p>
                  ))}
                </div>
                <p className="text-sm text-gold mt-3 font-medium">— Haiku – Life, Love &amp; Living</p>
                <div className="absolute right-4 bottom-4 flex gap-1">
                  <button type="button" onClick={() => setHaikuIndex((haikuIndex - 1 + haikus.length) % haikus.length)} aria-label="Previous haiku" className="rounded-full border border-border p-1.5 text-muted-foreground hover:text-gold"><ChevronLeft className="h-4 w-4" /></button>
                  <button type="button" onClick={() => setHaikuIndex((haikuIndex + 1) % haikus.length)} aria-label="Next haiku" className="rounded-full bg-gold p-1.5 text-primary-foreground"><ChevronRight className="h-4 w-4" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16 lg:mt-24">
          <button
            onClick={() => scrollToSection("about")}
            className="animate-float group"
            aria-label="Scroll to about section"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                Discover More
              </span>
              <div className="w-10 h-10 rounded-full border-2 border-border flex items-center justify-center group-hover:border-gold transition-colors">
                <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-gold transition-colors" />
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}
