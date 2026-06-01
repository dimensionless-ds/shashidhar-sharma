"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Play, Headphones, ArrowRight, Youtube } from "lucide-react"

const episodes = [
  {
    id: 1,
    title: "What Corporate Bengaluru Wants",
    videoId: "_4eFd1cVER0",
    thumbnail: "https://img.youtube.com/vi/_4eFd1cVER0/maxresdefault.jpg",
  },
  {
    id: 2,
    title: "Workplace Evolution and Its Design Impact",
    videoId: "NOjgF7kbxDU",
    thumbnail: "https://img.youtube.com/vi/NOjgF7kbxDU/maxresdefault.jpg",
  },
  {
    id: 3,
    title: "Spiral of Silence | Climate Change Keynote Speech @ HNI Mumbai",
    videoId: "BaCF70zrlyw",
    thumbnail: "https://img.youtube.com/vi/BaCF70zrlyw/maxresdefault.jpg",
  },
  {
    id: 4,
    title: "WorkGreen: India's Largest Conclave on Workplace Strategy & Climate Change",
    videoId: "NTmIGH-B97I",
    thumbnail: "https://img.youtube.com/vi/NTmIGH-B97I/maxresdefault.jpg",
  },
]

export default function PodcastSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    // Fallback: set visible after a short delay if observer doesn't trigger
    const timer = setTimeout(() => setIsVisible(true), 500)

    return () => {
      observer.disconnect()
      clearTimeout(timer)
    }
  }, [])

  return (
    <section ref={sectionRef} id="podcasts-keynotes" className="py-24 bg-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-sm font-medium text-gold uppercase tracking-wider">
            Podcasts & Keynotes
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-background mt-4 mb-6">
            Inspiring Conversations & Talks
          </h2>
          <p className="text-background/70 max-w-2xl mx-auto text-lg">
            Engaging podcasts, powerful keynote speeches, and thought-provoking conversations exploring
            leadership, creativity, and the future of work.
          </p>
          <div className="w-24 h-1 gold-gradient mx-auto rounded-full mt-6" />
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Featured Video */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-background rounded-xl overflow-hidden premium-shadow-lg">
              {/* Main Video */}
              <div className="relative aspect-video bg-secondary">
                {isPlaying ? (
                  <iframe
                    src="https://www.youtube.com/embed/NTmIGH-B97I?autoplay=1&list=PL2qVWU-7FqfB3mSTluVQUI5cNb-Nba7VM"
                    title="Featured Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                ) : (
                  <>
                    <img
                      src="https://img.youtube.com/vi/NTmIGH-B97I/maxresdefault.jpg"
                      alt="Featured Video Thumbnail"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                    
                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button 
                        onClick={() => setIsPlaying(true)}
                        className="w-20 h-20 rounded-full gold-gradient flex items-center justify-center hover:scale-110 transition-transform premium-shadow"
                      >
                        <Play className="w-8 h-8 text-foreground fill-foreground ml-1" />
                      </button>
                    </div>

                    {/* Video info overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-gold text-sm font-medium mb-2">Featured Video</p>
                      <h3 className="font-serif text-2xl font-bold text-background mb-2">
                        WorkGreen: India&apos;s Largest Conclave
                      </h3>
                    </div>
                  </>
                )}
              </div>

              {/* Video stats and links */}
              <div className="p-6">
                <div className="flex items-center gap-6 mb-6 pb-6 border-b border-border">
                  <div className="text-center">
                    <p className="font-serif text-2xl font-bold text-foreground">50+</p>
                    <p className="text-xs text-muted-foreground">Videos</p>
                  </div>
                  <div className="text-center">
                    <p className="font-serif text-2xl font-bold text-foreground">10K+</p>
                    <p className="text-xs text-muted-foreground">Views</p>
                  </div>
                  <div className="text-center">
                    <p className="font-serif text-2xl font-bold text-foreground">100+</p>
                    <p className="text-xs text-muted-foreground">Keynotes</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">
                  Watch on YouTube:
                </p>

                <a
                  href="https://www.youtube.com/@ShashiS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF0000] hover:bg-[#ff3333] text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
                >
                  <Youtube className="w-5 h-5" />
                  Subscribe on YouTube
                </a>
              </div>
            </div>
          </div>

          {/* Episode List */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-xl font-bold text-background flex items-center gap-2">
                <Headphones className="w-5 h-5 text-gold" />
                Recent Episodes
              </h3>
              <Button
                asChild
                variant="ghost"
                className="text-background/70 hover:text-background hover:bg-background/10"
              >
                <a href="https://www.youtube.com/@ShashiS" target="_blank" rel="noopener noreferrer">
                  View All
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </Button>
            </div>

            <div className="space-y-4">
              {episodes.map((episode, index) => (
                <a
                  key={episode.id}
                  href={`https://www.youtube.com/watch?v=${episode.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-4 bg-background/5 hover:bg-background/10 border border-background/10 hover:border-gold/30 rounded-lg p-4 transition-all duration-300 cursor-pointer"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Thumbnail */}
                  <div className="flex-shrink-0 relative w-32 h-20 rounded-lg overflow-hidden">
                    <img
                      src={episode.thumbnail}
                      alt={episode.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-gold/90 group-hover:bg-gold flex items-center justify-center transition-colors">
                        <Play className="w-4 h-4 text-foreground fill-foreground ml-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Episode info */}
                  <div className="flex-grow min-w-0 flex flex-col justify-center">
                    <h4 className="font-serif text-base font-bold text-background group-hover:text-gold transition-colors line-clamp-2">
                      {episode.title}
                    </h4>
                    <div className="flex items-center gap-2 text-background/50 text-xs mt-2">
                      <Youtube className="w-3 h-3" />
                      <span>YouTube</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Subscribe CTA */}
            <div className="mt-8 p-6 bg-gold/10 border border-gold/20 rounded-lg">
              <h4 className="font-serif text-lg font-bold text-background mb-2">
                Never Miss an Episode
              </h4>
              <p className="text-background/70 text-sm mb-4">
                Subscribe to get notified when new videos are released.
              </p>
              <a
                href="https://www.youtube.com/@ShashiS?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF0000] hover:bg-[#ff3333] text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Youtube className="w-5 h-5" />
                Subscribe Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
