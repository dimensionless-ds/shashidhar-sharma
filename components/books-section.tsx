"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RazorpayPayment } from "@/components/razorpay-payment"

const books = [
  { id: 1, title: "Work and Workplace at the Edge of Intelligence", subtitle: "Why the Future Depends on AI, Climate, and the Human Mind", category: "Work · AI · Future", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JkOXIYGXcdVjFxlA4pbLslTe9cqwQ6.png", description: "A wakeup call to truly understand the choices we must make for the future we want. This book explores how AI, climate change, and human psychology will reshape work and workplace productivity.", price: "Rs. 695", bestseller: true, amazonLink: "#" },
  { id: 5, title: "Songs of the Mist", subtitle: "Book 1 - The Monk Key Series", category: "Spiritual fiction", image: "/images/books/book-5.jpg", description: "A spiritual fiction masterpiece that reinterprets the Bhagavad Gita for modern readers. Follow the mystical journey through ancient wisdom and discover timeless truths that resonate with the soul.", price: "Rs. 499", bestseller: true, amazonLink: "https://www.amazon.in/Songs-Mist-Shashi/dp/B0D8WDPRDL/ref=tmm_hrd_swatch_0?_encoding=UTF8" },
  { id: 7, title: "Haiku - Sound Of One Hand Clapping", subtitle: "Love, Life & Living", category: "Poetry · Haiku", image: "/images/books/book-7.jpg", description: "A real treasure for those who enjoy haiku poetry created by the late great Japanese poet Matsuo Basho. Divided into three sections - Love, Life & Living - this book will help you appreciate the wonderful form of Haiku.", price: "Rs. 1299", bestseller: false, amazonLink: "https://www.amazon.in/HAIKU-Sound-One-Hand-Clapping/dp/9392849575" },
  { id: 10, title: "Kuhase ke geet", subtitle: "The Monk Key Series", category: "Hindi poetry", image: "/images/books/book-10.jpg", description: "A beautiful collection of Hindi poetry that explores themes of nature, spirituality, and the human experience. These verses offer profound insights into the journey of self-discovery and inner awakening.", price: "Rs. 299", bestseller: false, amazonLink: "#" },
  { id: 8, title: "How to Write Haiku", subtitle: "A Beginner's Guide - The Monk Key Series", category: "Writing · Poetry", image: "/images/books/book-8.jpg", description: "Drawing from three decades of reading and writing Haiku, this guide offers a holistic approach to understanding and writing this iconic 5-7-5 syllable poetry form.", price: "Rs. 199", bestseller: false, amazonLink: "https://www.amazon.in/gp/product/B093DWRH44" },
  { id: 4, title: "How to Write a Bestseller", subtitle: "A Beginner's Guide - The Monk Key Series", category: "Writing · Craft", image: "/images/books/book-4.jpg", description: "Unlock the secrets of successful writing. This practical guide takes you through the journey of crafting compelling stories, finding your voice, and turning your passion for writing into a bestselling book.", price: "Rs. 299", bestseller: false, amazonLink: "#" },
] as const

export default function BooksSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeBook, setActiveBook] = useState<number | null>(null)
  const [mobileBook, setMobileBook] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const openerRef = useRef<HTMLButtonElement>(null)

  const selected = activeBook === null ? null : books.find((book) => book.id === activeBook) ?? null
  const selectedIndex = selected ? books.findIndex((book) => book.id === selected.id) : -1

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setIsVisible(true), { threshold: 0.1 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => { observer.disconnect(); clearTimeout(timer) }
  }, [])

  useEffect(() => {
    const slug = window.location.hash.startsWith("#book-") ? window.location.hash.slice(6) : null
    if (slug) {
      const matchingBook = books.find((book) => book.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") === slug)
      if (matchingBook) setActiveBook(matchingBook.id)
    }
  }, [])

  useEffect(() => {
    if (!selected) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    dialogRef.current?.focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveBook(null)
      if (event.key === "ArrowRight") setActiveBook(books[(selectedIndex + 1) % books.length].id)
      if (event.key === "ArrowLeft") setActiveBook(books[(selectedIndex - 1 + books.length) % books.length].id)
    }
    document.addEventListener("keydown", onKeyDown)
    return () => { document.body.style.overflow = previousOverflow; document.removeEventListener("keydown", onKeyDown); openerRef.current?.focus(); if (window.location.hash.startsWith("#book-")) window.history.replaceState(null, "", "#books") }
  }, [selected, selectedIndex])

  const openBook = (id: number) => { setActiveBook(id); openerRef.current = document.activeElement as HTMLButtonElement; window.history.replaceState(null, "", `#book-${books.find((book) => book.id === id)?.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`) }
  const mobile = books[mobileBook]

  return (
    <section ref={sectionRef} id="books" className="relative bg-background py-24" aria-labelledby="books-title">
      <div className="absolute right-0 top-1/4 size-64 rounded-full bg-gold/5 blur-3xl" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className={`mb-14 text-center transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <span className="text-sm font-medium uppercase tracking-[0.22em] text-gold">Published works</span>
          <h2 id="books-title" className="mt-4 font-serif text-4xl font-bold text-foreground md:text-6xl">Books That Inspire Change</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">Six journeys into human potential, practical wisdom, and the ideas shaping a changing world.</p>
          <div className="gold-gradient mx-auto mt-6 h-1 w-24 rounded-full" />
        </header>

        <div className="md:hidden">
          <BookCard book={mobile} onOpen={openBook} compact />
          <div className="mt-5 flex items-center justify-between"><span className="font-mono text-sm text-muted-foreground">{String(mobileBook + 1).padStart(2, "0")} / 06</span><div className="flex gap-2"><Button variant="outline" size="icon" aria-label="Previous book" onClick={() => setMobileBook((mobileBook - 1 + books.length) % books.length)}><ChevronLeft /></Button><Button size="icon" aria-label="Next book" onClick={() => setMobileBook((mobileBook + 1) % books.length)}><ChevronRight /></Button></div></div>
        </div>
        <div className="hidden gap-4 md:grid md:grid-cols-3 lg:grid-cols-6 lg:gap-5">
          {books.map((book, index) => <BookCard key={book.id} book={book} onOpen={openBook} delay={index * 80} />)}
        </div>
      </div>

      {selected && <BookDialog book={selected} index={selectedIndex} onClose={() => setActiveBook(null)} onNavigate={(direction) => setActiveBook(books[(selectedIndex + direction + books.length) % books.length].id)} dialogRef={dialogRef} />}
    </section>
  )
}

function BookCard({ book, onOpen, delay = 0, compact = false }: { book: (typeof books)[number]; onOpen: (id: number) => void; delay?: number; compact?: boolean }) {
  return <article className={`group flex flex-col overflow-hidden rounded-xl border border-border bg-card premium-shadow transition-all duration-500 hover:-translate-y-1 hover:border-gold/50 ${compact ? "" : "h-full"}`} style={{ transitionDelay: `${delay}ms` }}>
    <button type="button" onClick={() => onOpen(book.id)} className="relative aspect-[3/4] overflow-hidden bg-secondary p-2 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
      <Image src={book.image} alt={`${book.title} book cover`} fill sizes="(max-width: 768px) 92vw, 16vw" className="object-contain transition-transform duration-500 group-hover:scale-105" />
      {book.bestseller && <span className="absolute left-3 top-3 rounded-full gold-gradient px-3 py-1 text-xs font-bold text-foreground">BESTSELLER</span>}
    </button>
    <div className="flex flex-1 flex-col p-4"><p className="mb-2 text-xs uppercase tracking-[0.16em] text-gold">{book.category}</p><h3 className="font-serif text-xl font-bold leading-tight text-foreground">{book.title}</h3><button type="button" onClick={() => onOpen(book.id)} className="mt-auto flex items-center gap-2 pt-6 text-sm font-semibold uppercase tracking-[0.12em] text-foreground hover:text-gold">View book <ArrowRight className="size-4" /></button></div>
  </article>
}

function BookDialog({ book, index, onClose, onNavigate, dialogRef }: { book: (typeof books)[number]; index: number; onClose: () => void; onNavigate: (direction: number) => void; dialogRef: React.RefObject<HTMLDivElement | null> }) {
  const verifiedPurchase = book.amazonLink !== "#"
  return <div className="fixed inset-0 z-[100] bg-black/70 p-2 backdrop-blur-sm sm:p-5" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
    <div ref={dialogRef} tabIndex={-1} role="dialog" aria-modal="true" aria-labelledby="book-dialog-title" className="mx-auto flex h-full max-w-[1440px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0B0D0E] text-[#F3EFE7] shadow-2xl outline-none sm:h-[94vh]">
      <header className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#0B0D0E]/95 px-5 py-4 backdrop-blur sm:px-8"><p className="truncate text-xs uppercase tracking-[0.18em] text-[#A5A39D]">Books / {book.title}</p><button type="button" onClick={onClose} className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-[#A5A39D] hover:text-[#F3EFE7]" aria-label="Close book details"><X className="size-5" /> Close</button></header>
      <div className="min-h-0 flex-1 overflow-y-auto"><main className="mx-auto max-w-6xl px-5 py-8 sm:px-10 sm:py-12">
        <div className="grid gap-10 md:grid-cols-[minmax(220px,35%)_1fr] md:items-start"><div className="mx-auto w-full max-w-sm"><div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-[#151718] shadow-2xl"><Image src={book.image} alt={`${book.title} cover`} fill sizes="(max-width: 768px) 85vw, 35vw" className="object-contain" priority /></div></div><div><p className="text-xs uppercase tracking-[0.22em] text-[#A5A39D]">Book {String(index + 1).padStart(2, "0")} / 06</p><h1 id="book-dialog-title" className="mt-4 font-serif text-4xl leading-tight sm:text-6xl">{book.title}</h1><p className="mt-4 text-lg text-[#E27A28]">{book.subtitle}</p><p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#C8C3BA]">{book.description}</p><div className="mt-8 flex flex-wrap gap-3">{verifiedPurchase ? <a href={book.amazonLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#E27A28] px-5 py-3 text-sm font-semibold text-black hover:bg-[#F19A58]">Buy the book <ArrowRight className="size-4" /></a> : <RazorpayPayment amount={Number(book.price.replace(/[^\d]/g, ""))} description={`Purchase: ${book.title}`} type="book" onSuccess={() => undefined} />}<button type="button" onClick={() => navigator.share?.({ title: book.title, text: book.subtitle, url: window.location.href })} className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold hover:border-[#E27A28]">Share</button></div></div></div>
        <div className="mt-16 grid gap-12 border-t border-white/10 pt-10 md:grid-cols-[1.4fr_0.8fr]"><section><p className="text-xs uppercase tracking-[0.22em] text-[#E27A28]">About the book</p><p className="mt-5 max-w-3xl font-serif text-2xl leading-relaxed text-[#F3EFE7]">{book.description}</p></section><section><p className="text-xs uppercase tracking-[0.22em] text-[#E27A28]">Book details</p><dl className="mt-5 space-y-3 text-sm text-[#A5A39D]"><div className="flex justify-between gap-4 border-b border-white/10 pb-3"><dt>Author</dt><dd className="text-right text-[#F3EFE7]">Shashidhar Sharma</dd></div><div className="flex justify-between gap-4 border-b border-white/10 pb-3"><dt>Format</dt><dd className="text-right text-[#F3EFE7]">Book</dd></div><div className="flex justify-between gap-4 border-b border-white/10 pb-3"><dt>Price</dt><dd className="text-right text-[#F3EFE7]">{book.price}</dd></div></dl></section></div>
        <section className="mt-16 border-t border-white/10 pt-10"><p className="text-xs uppercase tracking-[0.22em] text-[#E27A28]">What this book explores</p><div className="mt-5 flex flex-wrap gap-3">{book.category.split(" · ").map((tag) => <span key={tag} className="rounded-full border border-white/15 px-4 py-2 text-sm text-[#C8C3BA]">{tag}</span>)}</div></section>
      </main></div>
      <footer className="flex shrink-0 items-center justify-between border-t border-white/10 bg-[#151718] px-5 py-4 sm:px-8"><button type="button" onClick={() => onNavigate(-1)} className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-[#A5A39D] hover:text-[#F3EFE7]"><ArrowLeft className="size-4" /> Previous</button><span className="text-xs text-[#A5A39D]">{String(index + 1).padStart(2, "0")} / 06</span><button type="button" onClick={() => onNavigate(1)} className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-[#A5A39D] hover:text-[#F3EFE7]">Next <ArrowRight className="size-4" /></button></footer>
    </div>
  </div>
}

