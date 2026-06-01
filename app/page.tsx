import Navbar from "@/components/navbar"
import ProfessionalBadges from "@/components/professional-badges"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import BooksSection from "@/components/books-section"
import WorkWorkplaceSection from "@/components/work-workplace-section"
import PodcastSection from "@/components/podcast-section"
import ArticlesSection from "@/components/articles-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import AskShashiChatbot from "@/components/ask-shashi-chatbot"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="fixed top-20 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProfessionalBadges />
        </div>
      </div>
      <div className="pt-24" />
      <HeroSection />
      <AboutSection />
      <BooksSection />
      <WorkWorkplaceSection />
      <PodcastSection />
      <ArticlesSection />
      <ContactSection />
      <Footer />
      <AskShashiChatbot />
    </main>
  )
}
