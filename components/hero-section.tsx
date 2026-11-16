import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section id="home" className="relative isolate min-h-[92svh] overflow-hidden bg-[#0b0d0e] text-[#f3efe7]">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1G0A3374.JPG-Gj7HvuW4xsFqFxyk88X3fJdInFOZYO.jpeg"
        alt="Shashidhar Sharma presenting at the launch of Work and Workplace at the Edge of Intelligence"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[58%_center] opacity-75"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,13,14,.94)_0%,rgba(11,13,14,.78)_38%,rgba(11,13,14,.34)_72%,rgba(11,13,14,.2)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(11,13,14,.72)_0%,transparent_48%)]" />
      <div className="relative z-10 mx-auto flex min-h-[92svh] max-w-7xl flex-col justify-end px-6 pb-16 pt-32">
        <p className="text-xs uppercase tracking-[.28em] text-[#e85a24]">Author / keynote speaker / advisor</p>
        <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[.94] tracking-[-.05em] sm:text-6xl md:text-8xl">Work and Workplace at the Edge of intelligence</h1>
        <p className="mt-8 max-w-xl text-lg text-[#f3efe7]/85">Shashidhar Sharma is an author, keynote speaker, and advisor helping organisations navigate AI and the future of work.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/speaking" className="bg-[#e85a24] px-6 py-3 text-sm text-white">Book Shashi to speak</Link>
          <Link href="/research" className="border border-white/40 px-6 py-3 text-sm text-white">Explore the research</Link>
        </div>
      </div>
    </section>
  )
}
