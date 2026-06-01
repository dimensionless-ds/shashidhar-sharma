"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Brain,
  Leaf,
  Users,
  Lightbulb,
  ArrowRight,
  Quote,
  Building2,
  Cpu,
  Globe,
} from "lucide-react"

const keyThemes = [
  {
    icon: Cpu,
    title: "Artificial Intelligence",
    description: "How AI is reshaping job roles, decision-making, and the very nature of work itself.",
  },
  {
    icon: Leaf,
    title: "Climate & Sustainability",
    description: "The environmental imperatives driving workplace transformation and green business practices.",
  },
  {
    icon: Brain,
    title: "The Human Mind",
    description: "Psychology, cognitive biases, and mental well-being in the age of digital transformation.",
  },
  {
    icon: Building2,
    title: "Workplace Design",
    description: "Creating physical and virtual spaces that enhance productivity, creativity, and collaboration.",
  },
  {
    icon: Globe,
    title: "Global Workforce",
    description: "Managing distributed teams, cultural diversity, and the new dynamics of remote work.",
  },
  {
    icon: Users,
    title: "Human-AI Collaboration",
    description: "Building symbiotic relationships between human workers and intelligent systems.",
  },
]

const insights = [
  {
    stat: "73%",
    label: "of jobs will be transformed by AI by 2030",
  },
  {
    stat: "2.5x",
    label: "productivity gains with AI-augmented workflows",
  },
  {
    stat: "60%",
    label: "of workers need reskilling for future roles",
  },
]

export default function WorkWorkplaceSection() {
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

  const scrollToBooks = () => {
    document.getElementById("books")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section ref={sectionRef} id="work-workplace" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gold/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-sm font-medium text-gold uppercase tracking-wider">
            Featured Book
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Work & Workplace at the Edge of Intelligence
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Exploring why the future of work and workplace productivity depends on AI, climate, and the human mind.
          </p>
          <div className="w-24 h-1 gold-gradient mx-auto rounded-full mt-6" />
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Book Image */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative">
              <div className="relative aspect-[3/4] max-w-md mx-auto rounded-xl overflow-hidden premium-shadow-lg">
                <Image
                  src="/images/books/book-1.jpg"
                  alt="Work and Workplace at the Edge of Intelligence"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold/30 rounded-xl -z-10 max-w-md mx-auto" />
            </div>
          </div>

          {/* Book Info */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Quote */}
            <div className="bg-card border border-border rounded-xl p-6 mb-8 relative">
              <Quote className="w-8 h-8 text-gold/30 absolute top-4 left-4" />
              <p className="text-foreground italic text-lg leading-relaxed pl-8 pr-4">
                This book is a wakeup call for us to truly understand the choice that we have to create, for the future we want.
              </p>
              <div className="mt-4 pl-8">
                <p className="text-gold font-medium">- Kay Sargent</p>
                <p className="text-foreground font-semibold text-sm">Sr. Principal, HOK - USA</p>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {insights.map((insight, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-card border border-border rounded-lg"
                >
                  <p className="font-serif text-2xl md:text-3xl font-bold text-gold">
                    {insight.stat}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 leading-tight">
                    {insight.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed mb-8">
              In this groundbreaking book, Shashidhar Sharma explores the convergence of artificial intelligence, 
              climate change, and human psychology that is fundamentally reshaping how we work. Drawing from 
              extensive research and real-world case studies, this book provides a roadmap for leaders, 
              organizations, and individuals navigating the unprecedented transformation of the modern workplace.
            </p>

            <Button
              onClick={scrollToBooks}
              size="lg"
              className="gold-gradient text-foreground hover:opacity-90 font-medium"
            >
              <Lightbulb className="w-5 h-5 mr-2" />
              Get Your Copy
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        {/* Key Themes Grid */}
        <div
          className={`transition-all duration-700 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="font-serif text-2xl font-bold text-foreground text-center mb-10">
            Key Themes Explored
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyThemes.map((theme, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:border-gold/30 transition-all duration-300 group premium-shadow"
              >
                <theme.icon className="w-10 h-10 text-gold mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-serif text-lg font-bold text-foreground mb-2">
                  {theme.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {theme.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
