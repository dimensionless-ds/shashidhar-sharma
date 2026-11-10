"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

const slides = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/carousel_cover_why_everyone_should_read-B7a5dLUVhOHNykF2b10u3LAIJj1vGO.png",
    alt: "Shashidhar Sharma speaking in front of a patterned wall",
    title: "Why Everyone Should Read",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/carousel_slide2_every_book_opens_a_new_world-x4v6YYN2xLjtgq6D4OvztX915rOKf9.png",
    alt: "Shashidhar Sharma speaking to a panel in a purple-lit room",
    title: "Every book opens a new world.",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/carousel_slide3_reading_sharpens_your_mind-lQGdbm9O6clCtxwTI2Jp2fVJseaCb0.png",
    alt: "Shashidhar Sharma presenting in a modern room",
    title: "Reading sharpens your mind, daily.",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/carousel_slide4_stories_build_empathy-su6qA2xShcZhmyf9fUyEHkIUXqLqoT.png",
    alt: "Shashidhar Sharma with a reader holding his book",
    title: "Stories build empathy you can't take.",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/carousel_slide5_great_ideas_between_pages-w0vMiPDS4pg7IctK2geUvrZaHjtFNi.png",
    alt: "A group gathered for a conversation in a bookstore cafe",
    title: "Great ideas live between the pages.",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/carousel_slide6_books_teach_what_lectures_never_can-1gtqYBwiruNBSVO05FfU5hRQcLCwO5.png",
    alt: "A group photo from a book discussion",
    title: "Books teach what lectures never can.",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/carousel_slide7_ten_pages_a_day-79xlsVBlnMbWJTQyPnK6BnBeWaGmMn.png",
    alt: "Shashidhar Sharma with a group of readers",
    title: "Ten pages a day changes everything.",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/carousel_slide8_buy_on_amazon-mqh4R4XTEadJ0l2l2HbLIUCQv9rrod.png",
    alt: "Shashidhar Sharma holding his book beside a reader",
    title: "To buy this book on Amazon, checkout link in bio.",
  },
] as const

export default function ReadingGallery() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const slide = slides[active]

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
      if (event.key === "ArrowRight") setActive((current) => (current + 1) % slides.length)
      if (event.key === "ArrowLeft") setActive((current) => (current - 1 + slides.length) % slides.length)
    }
    document.body.style.overflow = "hidden"
    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.body.style.overflow = ""
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [open])

  return (
    <section className="border-y border-border bg-foreground px-6 py-14 text-background" aria-labelledby="reading-gallery-title">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-gold">A life in ideas</p>
          <h2 id="reading-gallery-title" className="mt-4 max-w-3xl font-serif text-4xl md:text-6xl">Stories, conversations, and the books behind the work.</h2>
        </div>
        <button type="button" onClick={() => setOpen(true)} className="shrink-0 border border-background/40 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-colors hover:bg-background hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">Open gallery</button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setOpen(false)}>
          <div role="dialog" aria-modal="true" aria-labelledby="gallery-slide-title" className="relative flex w-full max-w-5xl flex-col overflow-hidden bg-[#0b0d0e] shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">Reading gallery · {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</p>
              <button type="button" onClick={() => setOpen(false)} className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-white/70 hover:text-white" aria-label="Close reading gallery"><X aria-hidden="true" /> Close</button>
            </div>
            <div className="relative aspect-[4/3] bg-black sm:aspect-[16/10]">
              <img src={slide.src} alt={slide.alt} className="size-full object-contain" />
              <button type="button" onClick={() => setActive((active - 1 + slides.length) % slides.length)} className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-black/50 p-3 text-white hover:bg-black/80" aria-label="Previous gallery image"><ChevronLeft aria-hidden="true" /></button>
              <button type="button" onClick={() => setActive((active + 1) % slides.length)} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-black/50 p-3 text-white hover:bg-black/80" aria-label="Next gallery image"><ChevronRight aria-hidden="true" /></button>
            </div>
            <div className="flex items-end justify-between gap-5 px-5 py-5 sm:px-8">
              <h3 id="gallery-slide-title" className="max-w-3xl font-serif text-2xl text-white sm:text-4xl">{slide.title}</h3>
              <div className="hidden shrink-0 gap-1.5 sm:flex" aria-label="Choose gallery image">{slides.map((item, index) => <button key={item.src} type="button" onClick={() => setActive(index)} aria-label={`Show image ${index + 1}`} aria-current={index === active} className={`size-2 rounded-full transition-colors ${index === active ? "bg-gold" : "bg-white/30 hover:bg-white/70"}`} />)}</div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
