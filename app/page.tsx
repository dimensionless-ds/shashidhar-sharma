import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import BooksSection from "@/components/books-section"
import ArticlesSection from "@/components/articles-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <BooksSection />
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-xs uppercase tracking-[.25em] text-gold">Work ahead</p>
        <h2 className="mt-4 max-w-3xl font-serif text-5xl md:text-6xl">Helping organisations navigate AI and the future of work.</h2>
        <a href="/speaking" className="mt-8 inline-block bg-foreground px-6 py-3 text-background">Explore the research</a>
      </section>
      <ArticlesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
