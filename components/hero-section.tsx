"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown, BookOpen, Mic } from "lucide-react"

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden bg-background"
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 items-start">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Headline */}
            <h1 className="font-serif text-xl sm:text-2xl lg:text-3xl xl:text-3xl font-bold text-foreground leading-tight mb-8 text-balance">
              The future will not ask how intelligent our systems were.{" "}
              <span className="gold-text-gradient">It will ask what kind of humans they produced.</span>
              {" "}And there is no neutral answer.
            </h1>

            {/* Professional Bio */}
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
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
          <div className="order-1 lg:order-2">
            <div className="flex flex-col gap-6">
              {/* Main image container */}
              <div className="relative w-72 sm:w-80 md:w-96 aspect-square rounded-lg overflow-hidden premium-shadow-lg mx-auto lg:mx-0">
                <Image
                  src="/images/author-hero.jpg"
                  alt="Shashidhar Sharma - Author and Speaker"
                  fill
                  className="object-cover object-center"
                  priority
                />
                {/* Gold accent overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-1 gold-gradient" />
              </div>

              {/* Floating quote card */}
              <div className="bg-card border border-border rounded-lg p-6 sm:p-8 premium-shadow mx-auto lg:mx-0">
                <p className="font-serif text-lg sm:text-xl lg:text-2xl italic text-foreground leading-relaxed text-pretty">
                  &quot;The silence between thoughts is the space where creativity is born.&quot;
                </p>
                <p className="text-sm text-gold mt-3 font-medium">- Songs of the Mist @2016</p>
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
