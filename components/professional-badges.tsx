"use client"

export default function ProfessionalBadges() {
  const badges = [
    "Bestselling Author & Thought Leader",
    "Country Head - AWA India",
    "Sustainability Expert",
    "Climate Activist",
    "Workplace Strategist",
    "Keynote Speaker & Coach",
  ]

  return (
    <div className="flex items-center justify-start gap-2 overflow-x-auto px-1 pb-1 sm:flex-wrap sm:justify-center sm:overflow-visible">
      {badges.map((badge, index) => (
        <div
          key={index}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-secondary/40 hover:bg-secondary/60 transition-colors whitespace-nowrap"
        >
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse-soft" />
          <span className="text-xs font-medium text-muted-foreground">{badge}</span>
        </div>
      ))}
    </div>
  )
}
