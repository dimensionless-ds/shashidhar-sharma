"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const timeline = [
  ["2026", "Work & Workplace at the Edge of Intelligence", "Published breakthrough work and currently leads workplace transformation initiatives globally as Country Manager – AWA India."],
  ["2021", "Green Footprint Trust & WorkGreen Conclave", "Founded Green Footprint Trust and launched WorkGreen Conclave."],
  ["2017", "Founder & Published Haiku Art Book", "Founded Ideas Into Action and GACS (Knowledge Platform). Published 'Haiku - Sound of One Hand Clapping.'"],
  ["2016", "Songs of the Mist – Bestselling Author", "Published 'Songs of the Mist,' a spiritual fiction masterpiece reinterpreting the Bhagavad Gita for modern readers."],
  ["2007", "Shadow Dancing With Mind Blog Launch", "Launched influential blog 'Shadow Dancing with Mind' which reached 1.7 million hits by 2010."],
  ["2003", "Co-ordinator & Traffic Consultant", "Co-ordinator – Citizens for Safe Roads (Chennai); Traffic Consultant – Digitisation and Police Control Room. Worked on urban safety and digital infrastructure initiatives."],
  ["2001 - 2003", "Founder: Green Chennai Conclave", "Founded the Green Chennai Conclave in 2001, a pioneering platform connecting workplace strategy with sustainability and environmental consciousness."],
  ["1988", "Secretary – Utsav Cultural Festival", "Coordinated major cultural initiatives and festivals, establishing foundation in event management and community engagement."],
  ["1987", "Cultural Secretary – G B Pant – Delhi University", "Began leadership journey in cultural and academic domains at one of India's premier institutions."],
] as const

export default function JourneyTimeline({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const item = timeline[active]

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const interval = window.setInterval(() => setActive((current) => (current + 1) % timeline.length), 5000)
    return () => window.clearInterval(interval)
  }, [paused])

  return (
    <section className={compact ? "bg-background" : "bg-background py-12 sm:py-16"} aria-labelledby="journey-title">
      <div className={compact ? "mx-auto max-w-4xl" : "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"}>
        <div className={compact ? "mb-4 rounded-lg border-2 border-gold p-3 text-center" : "mb-6 rounded-lg border-2 border-gold p-4 text-center sm:mb-8 sm:p-6"}>
          <h2 id="journey-title" className="font-serif text-2xl font-bold text-foreground md:text-3xl">A Journey Through Time</h2>
        </div>
        <div className="mx-auto max-w-4xl" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPaused(false) }}>
          <article key={active} className={compact ? "flex min-h-[190px] flex-col justify-center rounded-xl bg-secondary/40 p-5 text-center animate-fade-in" : "flex min-h-[240px] flex-col justify-center rounded-xl bg-secondary/40 p-6 text-center animate-fade-in sm:min-h-[280px] sm:p-12"} aria-live="polite">
            <p className="mb-3 font-serif text-2xl font-bold text-gold">{item[0]}</p>
            <p className="mb-3 text-xl font-medium text-foreground text-balance md:text-2xl">{item[1]}</p>
            <p className="mx-auto max-w-2xl leading-relaxed text-muted-foreground">{item[2]}</p>
          </article>
          <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="font-mono text-sm text-muted-foreground" aria-live="polite">{String(active + 1).padStart(2, "0")} / {String(timeline.length).padStart(2, "0")}</p>
            <div className="flex items-center gap-2" role="tablist" aria-label="Journey milestones">
              {timeline.map((entry, index) => <button key={entry[0]} type="button" role="tab" aria-selected={index === active} aria-label={`Show ${entry[0]}: ${entry[1]}`} onClick={() => setActive(index)} className={`h-2 rounded-full transition-all ${index === active ? "w-8 bg-gold" : "w-2 bg-muted-foreground/40 hover:bg-gold/60"}`} />)}
            </div>
            <div className="flex items-center gap-2">
              <button type="button" onClick={() => setActive((active - 1 + timeline.length) % timeline.length)} aria-label="Previous milestone" className="rounded-full border border-border p-3 text-foreground hover:border-gold hover:text-gold"><ChevronLeft className="h-5 w-5" /></button>
              <button type="button" onClick={() => setActive((active + 1) % timeline.length)} aria-label="Next milestone" className="rounded-full bg-gold p-3 text-primary-foreground hover:scale-105"><ChevronRight className="h-5 w-5" /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
