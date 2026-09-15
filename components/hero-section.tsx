"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown, ArrowRight, BookOpen, Mic } from "lucide-react"

const stagePhoto = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Sep%2015%2C%202026%20at%2003_04_31%20PM-tlT0YV0DBI09M2KHuCUzIxqculsb57.png"
const bookCover = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JkOXIYGXcdVjFxlA4pbLslTe9cqwQ6.png"

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative isolate min-h-[100svh] overflow-hidden bg-[#0b0d0e] text-[#f3efe7]">
      <Image
        src={stagePhoto}
        alt="Shashidhar Sharma speaking on stage"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[58%_20%] opacity-75 sm:object-[60%_18%] lg:object-[58%_center]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,13,14,.96)_0%,rgba(11,13,14,.82)_34%,rgba(11,13,14,.2)_72%,rgba(11,13,14,.42)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(11,13,14,.96)_0%,transparent_42%,rgba(11,13,14,.25)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1440px] flex-col justify-end px-5 pb-8 pt-28 sm:px-8 sm:pb-12 lg:px-14 lg:pb-16">
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-16">
          <div className="max-w-3xl">
            <p className="mb-5 flex items-center gap-3 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-[#e85a24]">
              <span className="h-px w-8 bg-[#e85a24]" /> Author / Thought Leader / Speaker
            </p>
            <h1 className="max-w-3xl font-serif text-[3.5rem] font-medium leading-[0.86] tracking-[-0.055em] text-[#f3efe7] sm:text-6xl lg:text-[6.7rem]">
              Rethinking work, intelligence and the human future.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-[#f3efe7]/72 sm:text-lg">
              Shashidhar Sharma explores how AI, human intelligence and changing workplaces are reshaping the way we work and live.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button onClick={() => scrollToSection("books")} size="lg" className="h-12 rounded-none bg-[#e85a24] px-6 text-[#fffaf2] hover:bg-[#f06b38]">
                <BookOpen data-icon="inline-start" /> Explore the book <ArrowRight data-icon="inline-end" />
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 rounded-none border-[#f3efe7]/45 bg-transparent px-6 text-[#f3efe7] hover:bg-[#f3efe7] hover:text-[#0b0d0e]">
                <a href="https://wa.me/919731723023?text=Hello%2C%20I%20would%20like%20to%20invite%20Shashidhar%20Sharma%20to%20speak%20at%20our%20event." target="_blank" rel="noopener noreferrer">
                  <Mic data-icon="inline-start" /> Invite Shashidhar
                </a>
              </Button>
            </div>
          </div>

          <div className="group relative mx-auto w-[136px] sm:w-[164px] lg:mx-0 lg:w-[210px]">
            <div className="absolute -inset-3 bg-[#e85a24]/20 blur-2xl transition-opacity duration-500 group-hover:opacity-70" />
            <div className="relative aspect-[0.7] rotate-[-2deg] overflow-hidden shadow-[18px_22px_45px_rgba(0,0,0,.5)] transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-0">
              <Image src={bookCover} alt="Work and Workplace at the Edge of Intelligence book cover" fill sizes="(max-width: 640px) 164px, 210px" className="object-cover" />
            </div>
            <p className="mt-4 text-[0.62rem] uppercase tracking-[0.2em] text-[#f3efe7]/55">Featured book</p>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-[#f3efe7]/20 pt-4 text-[0.65rem] uppercase tracking-[0.2em] text-[#f3efe7]/55">
          <span>01 / The author</span>
          <button type="button" onClick={() => scrollToSection("about")} className="flex items-center gap-2 transition-colors hover:text-[#e85a24]" aria-label="Scroll to discover more">
            Discover more <ArrowDown aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
