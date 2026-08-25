"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { Award, BookOpen, Users, Globe, ChevronLeft, ChevronRight } from "lucide-react"

const timeline = [
  {
    year: "1987",
    title: "Cultural Secretary – G B Pant – Delhi University",
    description:
      "Began leadership journey in cultural and academic domains at one of India's premier institutions.",
  },
  {
    year: "1988",
    title: "Secretary – Utsav Cultural Festival",
    description:
      "Coordinated major cultural initiatives and festivals, establishing foundation in event management and community engagement.",
  },
  {
    year: "2001 - 2003",
    title: "Founder: Green Chennai Conclave",
    description:
      "Founded the Green Chennai Conclave in 2001, a pioneering platform connecting workplace strategy with sustainability and environmental consciousness.",
  },
  {
    year: "2003",
    title: "Co-ordinator & Traffic Consultant",
    description:
      "Co-ordinator – Citizens for Safe Roads (Chennai); Traffic Consultant – Digitisation and Police Control Room. Worked on urban safety and digital infrastructure initiatives.",
  },
  {
    year: "2007",
    title: "Shadow Dancing With Mind Blog Launch",
    description:
      "Launched influential blog 'Shadow Dancing with Mind' which reached 1.7 million hits by 2010, becoming one of India's most-read blogs for three consecutive years (2014-15-16).",
  },
  {
    year: "2016",
    title: "Songs of the Mist – Bestselling Author",
    description:
      "Published 'Songs of the Mist,' a spiritual fiction masterpiece reinterpreting the Bhagavad Gita for modern readers. Ranked #29 on Amazon India bestseller list.",
  },
  {
    year: "2017",
    title: "Founder & Published Haiku Art Book",
    description:
      "Founded Ideas Into Action and GACS (Knowledge Platform). Published 'Haiku - Sound of One Hand Clapping,' an acclaimed art book blending poetry with visual imagery.",
  },
  {
    year: "2021",
    title: "Green Footprint Trust & WorkGreen Conclave",
    description:
      "Founded Green Footprint Trust and launched WorkGreen Conclave. Published 7 Kindle Books including bestsellers 'How to Write Haiku' and 'Living in COVID Times,' establishing significant presence in authored works.",
  },
  {
    year: "2026",
    title: "Work & Workplace at the Edge of Intelligence",
    description:
      "Published breakthrough work 'Work and Workplace at the Edge of Intelligence,' ranking #1 on Amazon's Administrative Section bestseller list. Currently Country Manager – AWA India, leading workplace transformation initiatives globally.",
  },
]

const achievements = [
  { icon: BookOpen, label: "5 Bestsellers", description: "Published Works" },
  { icon: Users, label: "100K+", description: "Readers Worldwide" },
  { icon: Globe, label: "25+", description: "Countries Reached" },
  { icon: Award, label: "15+", description: "Literary Awards" },
]

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0)
  const [isTimelinePaused, setIsTimelinePaused] = useState(false)
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

  useEffect(() => {
    if (isTimelinePaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const interval = window.setInterval(() => {
      setActiveTimelineIndex((current) => (current + 1) % timeline.length)
    }, 5000)

    return () => window.clearInterval(interval)
  }, [isTimelinePaused])

  const activeTimelineItem = timeline[activeTimelineIndex]

  const moveTimeline = (direction: 1 | -1) => {
    setActiveTimelineIndex(
      (current) => (current + direction + timeline.length) % timeline.length
    )
  }

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-secondary/30 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-sm font-medium text-gold uppercase tracking-wider">
            About the Author
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            The Journey of a Storyteller
          </h2>
          <div className="w-24 h-1 gold-gradient mx-auto rounded-full" />
        </div>

        {/* Biography Section with Image */}
        <div
            className={`transition-all duration-700 delay-200 mb-12 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Text Content */}
            <div className="lg:col-span-2">
              <div className="relative mb-8">
                <div className="absolute -left-4 top-0 w-1 h-full gold-gradient rounded-full" />
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6 pl-4">
                  Exploring Work, Environment & the Human Intelligence
                </h3>
              </div>

              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Shashidhar Sharma is Country Manager at AWA India, where he helps global organizations rethink workplaces for the AI era through Cognitive Workplace Strategy — designing spaces that support focus, wellbeing, and human connection.
                </p>
                <p>
                  Over 30 years, he has led workplace and transformation initiatives for Citigroup, Maersk, Michelin, Accenture, and Caterpillar, among others.
                </p>
                <p>
                  A civil engineer with advanced studies from IIM Indore, Yale, Michigan, and Penn, he is also a bestselling author (<em>Work and Workplace at the Edge of Intelligence</em>), blogger (<em>Shadow Dancing With Mind</em>), and founder of the Green Footprint Trust.
                </p>
              </div>
            </div>

            {/* Author Portrait Image and Card Section */}
            <div className="lg:col-span-1 flex flex-col gap-6">
              {/* Author Portrait Image */}
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden premium-shadow-lg">
                <Image
                  src="/images/author-headshot.jpg"
                  alt="Shashidhar Sharma - Professional Portrait"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 h-1 gold-gradient" />
              </div>

              {/* Quote Card with Author Info - Below Image */}
              <div className="bg-card border border-border rounded-lg p-6 premium-shadow">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="/images/author-portrait.jpg"
                      alt="Shashidhar Sharma"
                      width={48}
                      height={48}
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <p className="font-serif font-bold text-foreground">Shashidhar Sharma</p>
                    <p className="text-gold text-xs font-medium">Author & Speaker</p>
                  </div>
                </div>
                
                {/* Red Quote */}
                <p className="font-serif text-sm italic text-gold leading-relaxed">
                  His work ultimately asks a defining question of our times: How do we remain deeply human in an age of accelerating intelligence?
                </p>
              </div>

              {/* Achievement Cards */}
              <div className="grid grid-cols-2 gap-3">
                {achievements.map((item, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-3 text-center hover:border-gold/50 transition-colors premium-shadow"
                  >
                    <item.icon className="w-5 h-5 text-gold mx-auto mb-1" />
                    <p className="font-serif text-lg font-bold text-foreground">{item.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Timeline of the Journey */}
        <div
          className={`transition-all duration-700 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div             className="border-4 border-gold rounded-lg p-4 sm:p-6 mb-5 sm:mb-8 text-center">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
              A Journey Through Time
            </h3>
          </div>

          <div
            className="max-w-4xl mx-auto"
            onMouseEnter={() => setIsTimelinePaused(true)}
            onMouseLeave={() => setIsTimelinePaused(false)}
            onFocus={() => setIsTimelinePaused(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setIsTimelinePaused(false)
              }
            }}
          >
            <article
              key={activeTimelineIndex}
              className="bg-secondary/40 rounded-xl p-8 md:p-12 text-center min-h-[280px] flex flex-col justify-center animate-fade-in"
              aria-live="polite"
            >
              <p className="font-serif font-bold text-gold text-2xl mb-4">{activeTimelineItem.year}</p>
              <p className="font-medium text-foreground text-xl md:text-2xl mb-4 text-balance">
                {activeTimelineItem.title}
              </p>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                {activeTimelineItem.description}
              </p>
            </article>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-8">
              <p className="text-sm text-muted-foreground font-mono" aria-live="polite">
                {String(activeTimelineIndex + 1).padStart(2, "0")} / {String(timeline.length).padStart(2, "0")}
              </p>
              <div className="flex items-center gap-2" role="tablist" aria-label="Journey milestones">
                {timeline.map((item, index) => (
                  <button
                    key={item.year}
                    type="button"
                    role="tab"
                    aria-selected={index === activeTimelineIndex}
                    aria-label={`Show ${item.year}: ${item.title}`}
                    onClick={() => setActiveTimelineIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === activeTimelineIndex ? "w-8 bg-gold" : "w-2 bg-muted-foreground/40 hover:bg-gold/60"
                    }`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => moveTimeline(-1)}
                  aria-label="Previous milestone"
                  className="rounded-full border border-border p-3 text-foreground transition-colors hover:border-gold hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => moveTimeline(1)}
                  aria-label="Next milestone"
                  className="rounded-full bg-gold p-3 text-primary-foreground transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
