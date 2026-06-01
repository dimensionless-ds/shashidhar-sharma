"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Calendar, Newspaper } from "lucide-react"
import Image from "next/image"

const categories = [
  { id: "all", name: "All" },
  { id: "leadership", name: "Leadership" },
  { id: "workplace", name: "Workplace" },
  { id: "sustainability", name: "Sustainability" },
  { id: "mindset", name: "Mindset" },
]

const articles = [
  {
    id: 1,
    title: "From Skillsets to Mindsets: Rewiring the Young Generation in the Age of AI",
    excerpt:
      "Exploring how the young generation needs to shift from traditional skillsets to adaptive mindsets in an AI-driven world.",
    category: "leadership",
    readTime: "8 min read",
    date: "2024",
    featured: true,
    link: "https://www.linkedin.com/pulse/from-skillsets-mindsets-rewiring-young-generation-age-sharma-mg4yc/",
  },
  {
    id: 2,
    title: "Workplace Strategy Insights",
    excerpt:
      "Key insights on modern workplace strategy and how organizations can adapt to the changing nature of work.",
    category: "workplace",
    readTime: "5 min read",
    date: "2024",
    featured: false,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7445100478763315200/",
  },
  {
    id: 3,
    title: "The Future of Work",
    excerpt:
      "Exploring the evolving landscape of work and what it means for leaders, organizations, and employees.",
    category: "workplace",
    readTime: "6 min read",
    date: "2024",
    featured: false,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7446957687583600642/",
  },
  {
    id: 4,
    title: "Leadership in Times of Change",
    excerpt:
      "How leaders can navigate uncertainty and guide their teams through transformational periods with clarity and purpose.",
    category: "leadership",
    readTime: "7 min read",
    date: "2024",
    featured: false,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7447230019380314112/",
  },
  {
    id: 5,
    title: "Sustainability and Business",
    excerpt:
      "The intersection of sustainability and business success - why ESG matters for the future of organizations.",
    category: "sustainability",
    readTime: "6 min read",
    date: "2024",
    featured: false,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7447508211554902016/",
  },
  {
    id: 6,
    title: "Cognitive Workplace Strategy",
    excerpt:
      "Understanding how cognitive workplace strategy can enhance human performance while reducing cognitive overload.",
    category: "workplace",
    readTime: "5 min read",
    date: "2024",
    featured: false,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7447957949261553665/",
  },
  {
    id: 7,
    title: "Mindset for Success",
    excerpt:
      "Developing the right mindset for personal and professional success in today's dynamic environment.",
    category: "mindset",
    readTime: "4 min read",
    date: "2024",
    featured: false,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7447959103840129025/",
  },
  {
    id: 8,
    title: "Climate and Workplace Connection",
    excerpt:
      "How climate change is reshaping workplace strategies and what organizations need to do to adapt.",
    category: "sustainability",
    readTime: "6 min read",
    date: "2024",
    featured: false,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7448304055442915328/",
  },
  {
    id: 9,
    title: "Green Footprint Leadership",
    excerpt:
      "Leading with sustainability in mind - insights from the Green Footprint Trust initiatives.",
    category: "sustainability",
    readTime: "5 min read",
    date: "2024",
    featured: false,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7448792724130140160/",
  },
]

export default function ArticlesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState("all")
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    // Fallback: set visible after a short delay if observer doesn't trigger
    const timer = setTimeout(() => setIsVisible(true), 500)

    return () => {
      observer.disconnect()
      clearTimeout(timer)
    }
  }, [])

  const filteredArticles =
    activeCategory === "all"
      ? articles
      : articles.filter((article) => article.category === activeCategory)

  const featuredArticle = articles.find((article) => article.featured)
  const regularArticles = filteredArticles.filter((article) => !article.featured)

  return (
    <section ref={sectionRef} id="articles" className="py-24 bg-secondary/30 relative">
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-sm font-medium text-gold uppercase tracking-wider">
            Insights & Ideas
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Articles & Essays
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Thoughts on leadership, creativity, and the human experience. Each piece is crafted
            to inspire reflection and spark transformation.
          </p>
          <div className="w-24 h-1 gold-gradient mx-auto rounded-full mt-6" />
        </div>

        {/* Media Coverage Showcase */}
        <div
          className={`mb-16 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-card border border-border rounded-xl overflow-hidden premium-shadow">
            <div className="grid md:grid-cols-3 gap-0">
              {/* Left side: Icon and text */}
              <div className="p-8 md:p-10 flex flex-col justify-center bg-secondary/20">
                <div className="flex items-center gap-3 mb-4">
                  <Newspaper className="w-8 h-8 text-gold" />
                  <span className="text-sm font-bold uppercase tracking-wider text-gold">
                    Press Coverage
                  </span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Featured in Major Publications
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Recognized by leading newspapers, magazines, and media outlets for expertise in workplace strategy, sustainability, and thought leadership.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gold font-bold text-lg">20+</p>
                    <p className="text-muted-foreground text-xs">Publications</p>
                  </div>
                  <div>
                    <p className="text-gold font-bold text-lg">50+</p>
                    <p className="text-muted-foreground text-xs">Articles & Features</p>
                  </div>
                </div>
              </div>

              {/* Right side: Media collage */}
              <div className="md:col-span-2 relative aspect-video md:aspect-auto">
                <Image
                  src="/images/media-coverage-collage.jpg"
                  alt="Media coverage and press features"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Events & Speaking Showcase */}
        <div
          className={`mb-16 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-card border border-border rounded-xl overflow-hidden premium-shadow">
            <div className="grid md:grid-cols-3 gap-0">
              {/* Left side: Events collage */}
              <div className="md:col-span-2 relative aspect-video md:aspect-auto order-2 md:order-1">
                <Image
                  src="/images/events-collage.jpg"
                  alt="Events and speaking engagements"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right side: Icon and text */}
              <div className="p-8 md:p-10 flex flex-col justify-center bg-secondary/20 order-1 md:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-8 h-8 text-gold" />
                  <span className="text-sm font-bold uppercase tracking-wider text-gold">
                    Events & Speaking
                  </span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Keynote Speaker & Event Leader
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Invited to speak at major corporate events, sustainability conferences, and workplace strategy summits across India and internationally. A sought-after thought leader facilitating transformational conversations.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gold font-bold text-lg">100+</p>
                    <p className="text-muted-foreground text-xs">Speaking Events</p>
                  </div>
                  <div>
                    <p className="text-gold font-bold text-lg">30+</p>
                    <p className="text-muted-foreground text-xs">Organizations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "gold-gradient text-foreground"
                  : "bg-card border border-border text-muted-foreground hover:border-gold/50 hover:text-foreground"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        {activeCategory === "all" && featuredArticle && (
          <div
            className={`mb-12 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <a
              href={featuredArticle.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-card border border-border rounded-xl overflow-hidden premium-shadow hover:border-gold/30 transition-all duration-300 group cursor-pointer"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Featured image placeholder */}
                <div className="aspect-video md:aspect-auto bg-secondary relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <p className="font-serif text-6xl text-gold/20">Featured</p>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 px-3 py-1 gold-gradient text-foreground text-xs font-bold rounded-full">
                    FEATURED
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="px-3 py-1 bg-secondary rounded-full text-xs font-medium capitalize">
                      {featuredArticle.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredArticle.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredArticle.date}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-gold transition-colors">
                    {featuredArticle.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {featuredArticle.excerpt}
                  </p>

                  <div>
                    <span className="inline-flex items-center text-gold font-medium group-hover:gap-3 gap-2 transition-all">
                      Read on LinkedIn
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        )}

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularArticles.map((article, index) => (
            <a
              key={article.id}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-card border border-border rounded-xl p-6 hover:border-gold/30 transition-all duration-300 cursor-pointer premium-shadow block ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 4) * 100}ms` }}
            >
              {/* Category and meta */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-secondary rounded-full text-xs font-medium text-muted-foreground capitalize">
                  {article.category}
                </span>
                <span className="text-xs text-muted-foreground">{article.date}</span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-gold transition-colors line-clamp-2">
                {article.title}
              </h3>

              {/* Excerpt */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                {article.excerpt}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {article.readTime}
                </span>
                <span className="inline-flex items-center text-gold text-sm font-medium group-hover:gap-2 gap-1 transition-all">
                  Read on LinkedIn
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* View All CTA */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-medium px-8"
          >
            <a
              href="https://www.linkedin.com/in/shashidhar-sharma/recent-activity/all/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All on LinkedIn
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
