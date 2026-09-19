import Navbar from "@/components/navbar"
import ProfessionalBadges from "@/components/professional-badges"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import BooksSection from "@/components/books-section"
import WorkWorkplaceSection from "@/components/work-workplace-section"
import PodcastSection from "@/components/podcast-section"
import PressCoverageCarousel from "@/components/press-coverage-carousel"
import JourneyTimeline from "@/components/journey-timeline"
import SpeakingSection from "@/components/speaking-section"
import ArticlesSection from "@/components/articles-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import AskShashiChatbot from "@/components/ask-shashi-chatbot"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="relative mt-16 md:fixed md:top-20 md:mt-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProfessionalBadges />
        </div>
      </div>
      <div className="h-0 md:h-28" aria-hidden="true" />
      <HeroSection />
      <AboutSection />
      <BooksSection />
      <WorkWorkplaceSection />
      <JourneyTimeline />
      <PodcastSection />
      <section id="press" className="bg-background px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-gold">In the press</p>
            <h2 className="mt-4 font-serif text-4xl tracking-[-0.04em] text-foreground md:text-6xl">Ideas in public.</h2>
          </div>
          <PressCoverageCarousel />
        </div>
      </section>
      <SpeakingSection />
      <ArticlesSection />
      <ContactSection />
      <Footer />
      <AskShashiChatbot />
    </main>
  )
}
