"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Mic,
  Users,
  Lightbulb,
  TrendingUp,
  Palette,
  BookOpen,
  Rocket,
  Calendar,
  MapPin,
  ArrowRight,
  CheckCircle,
} from "lucide-react"

const speakingTopics = [
  {
    icon: TrendingUp,
    title: "Leadership",
    description: "Authentic leadership principles for the modern era. How to inspire, influence, and impact.",
  },
  {
    icon: Rocket,
    title: "Motivation",
    description: "Igniting the spark within. Strategies for sustained motivation and peak performance.",
  },
  {
    icon: Palette,
    title: "Creativity",
    description: "Unlocking creative potential in individuals and teams. Innovation through imagination.",
  },
  {
    icon: BookOpen,
    title: "Storytelling",
    description: "The power of narrative in business and life. Crafting stories that move people to action.",
  },
  {
    icon: Lightbulb,
    title: "Entrepreneurship",
    description: "Building ventures with purpose. Lessons from two decades of building and scaling ideas.",
  },
  {
    icon: Users,
    title: "Team Building",
    description: "Creating high-performing teams through trust, communication, and shared vision.",
  },
]

const pastEvents = [
  { name: "TED x Mumbai", location: "Mumbai, India", year: "2024" },
  { name: "World Business Forum", location: "Singapore", year: "2023" },
  { name: "India Leadership Summit", location: "New Delhi", year: "2023" },
  { name: "Global Entrepreneurs Conference", location: "Dubai, UAE", year: "2022" },
]

const offerings = [
  "Keynote Speeches (45-90 minutes)",
  "Half-day Workshops",
  "Full-day Leadership Retreats",
  "Corporate Training Programs",
  "Virtual Speaking Engagements",
  "Panel Discussions & Moderation",
]

export default function SpeakingSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section ref={sectionRef} id="speaking" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-sm font-medium text-gold uppercase tracking-wider">
            Speaking Engagements
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Inspire Your Audience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Dynamic presentations that move minds and hearts. From intimate workshops to
            large-scale conferences, every talk is tailored to create lasting impact.
          </p>
          <div className="w-24 h-1 gold-gradient mx-auto rounded-full mt-6" />
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Speaker Profile */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden premium-shadow-lg">
                <Image
                  src="/images/speaking.jpg"
                  alt="Shashidhar Sharma Speaking at Conference"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />

                {/* Overlay content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Mic className="w-5 h-5 text-gold" />
                    <span className="text-gold font-medium text-sm">Keynote Speaker</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-background mb-2">
                    200+ Events Worldwide
                  </h3>
                  <p className="text-background/80 text-sm">
                    From Fortune 500 companies to global conferences
                  </p>
                </div>
              </div>

              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold/30 rounded-xl -z-10" />
            </div>

            {/* Past Events */}
            <div className="mt-10">
              <h4 className="font-serif text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-gold" />
                Recent Speaking Events
              </h4>
              <div className="space-y-4">
                {pastEvents.map((event, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-card border border-border rounded-lg hover:border-gold/30 transition-colors"
                  >
                    <div>
                      <p className="font-medium text-foreground">{event.name}</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {event.location}
                      </p>
                    </div>
                    <span className="text-gold font-serif font-bold">{event.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Speaking Topics & CTA */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="font-serif text-2xl font-bold text-foreground mb-8">
              Speaking Topics
            </h3>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {speakingTopics.map((topic, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-5 hover:border-gold/30 transition-all duration-300 group premium-shadow"
                >
                  <topic.icon className="w-8 h-8 text-gold mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-serif text-lg font-bold text-foreground mb-2">
                    {topic.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {topic.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Offerings */}
            <div className="bg-secondary/50 border border-border rounded-xl p-6 mb-8">
              <h4 className="font-serif text-lg font-bold text-foreground mb-4">
                What I Offer
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {offerings.map((offering, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                    <span>{offering}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-foreground rounded-xl p-8 text-center">
              <h4 className="font-serif text-2xl font-bold text-background mb-3">
                Book Shashidhar for Your Event
              </h4>
              <p className="text-background/70 mb-6">
                Let&apos;s create an unforgettable experience for your audience.
              </p>
              <Button
                onClick={scrollToContact}
                size="lg"
                className="gold-gradient text-foreground hover:opacity-90 font-medium px-8"
              >
                <Mic className="w-5 h-5 mr-2" />
                Inquire About Speaking
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
