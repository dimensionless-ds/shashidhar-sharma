"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShoppingCart, BookOpen, Star, ArrowRight } from "lucide-react"
import { RazorpayPayment } from "@/components/razorpay-payment"

const books = [
  {
    id: 1,
    title: "Work and Workplace at the Edge of Intelligence",
    subtitle: "Why the Future Depends on AI, Climate, and the Human Mind",
    image: "/images/books/book-1.jpg",
    description:
      "A wakeup call to truly understand the choices we must make for the future we want. This book explores how AI, climate change, and human psychology will reshape work and workplace productivity.",
    rating: 5.0,
    reviews: 11,
    price: "Rs. 695",
    bestseller: true,
    amazonLink: "#",
    sampleLink: "#",
  },
  {
    id: 5,
    title: "Songs of the Mist",
    subtitle: "Book 1 - The Monk Key Series",
    image: "/images/books/book-5.jpg",
    description:
      "A spiritual fiction masterpiece that reinterprets the Bhagavad Gita for modern readers. Follow the mystical journey through ancient wisdom and discover timeless truths that resonate with the soul.",
    rating: 4.6,
    reviews: 51,
    price: "Rs. 499",
    bestseller: true,
    amazonLink: "https://www.amazon.in/Songs-Mist-Shashi/dp/B0D8WDPRDL/ref=tmm_hrd_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.6-vUgFdgNl4inxAwwrGPQO_G6TEDREw-Lc9AAK5Tqsz956Z4lMar6dk4W3bc76SLtvPoYmCTdSHQsFf1aDB9ag._Jx970hKEg7byNanT3ozTmpZs69EuWVmt1LybDYuj8E&qid=1776341309&sr=8-3",
    sampleLink: "#",
  },
  {
    id: 7,
    title: "Haiku - Sound Of One Hand Clapping",
    subtitle: "Love, Life & Living",
    image: "/images/books/book-7.jpg",
    description:
      "A real treasure for those who enjoy haiku poetry created by the late great Japanese poet Matsuo Basho. Divided into three sections - Love, Life & Living - this book will help you appreciate the wonderful form of Haiku, a powerful ancient Japanese style of poetry adored by millions.",
    rating: 5.0,
    reviews: 8,
    price: "Rs. 1299",
    bestseller: false,
    amazonLink: "https://www.amazon.in/HAIKU-Sound-One-Hand-Clapping/dp/9392849575/ref=sr_1_2?qid=1639124574&refinements=p_27%3AKatyayani&s=books&sr=1-2",
    sampleLink: "#",
  },
  {
    id: 10,
    title: "Kuhase ke geet",
    subtitle: "The Monk Key Series",
    image: "/images/books/book-10.jpg",
    description:
      "A beautiful collection of Hindi poetry that explores themes of nature, spirituality, and the human experience. These verses offer profound insights into the journey of self-discovery and inner awakening.",
    rating: 4.5,
    reviews: 12,
    price: "Rs. 299",
    bestseller: false,
    amazonLink: "#",
    sampleLink: "#",
  },
  {
    id: 8,
    title: "How to Write Haiku",
    subtitle: "A Beginner's Guide - The Monk Key Series",
    image: "/images/books/book-8.jpg",
    description:
      "Drawing from three decades of reading and writing Haiku, this guide offers a holistic approach to understanding and writing this iconic 5-7-5 syllable poetry form. Hope this book helps aspiring Haiku writers find deeper understanding and create their own poetic expressions.",
    rating: 4.1,
    reviews: 29,
    price: "Rs. 199",
    bestseller: false,
    amazonLink: "https://www.amazon.in/gp/product/B093DWRH44/ref=dbs_a_def_rwt_bibl_vppi_i1",
    sampleLink: "#",
  },
  {
    id: 4,
    title: "How to Write a Bestseller",
    subtitle: "A Beginner's Guide - The Monk Key Series",
    image: "/images/books/book-4.jpg",
    description:
      "Unlock the secrets of successful writing. This practical guide takes you through the journey of crafting compelling stories, finding your voice, and turning your passion for writing into a bestselling book.",
    rating: 4.0,
    reviews: 1,
    price: "Rs. 299",
    bestseller: false,
    amazonLink: "#",
    sampleLink: "#",
  },
  {
    id: 2,
    title: "Living in COVID Times",
    subtitle: "An Action Plan - The Monk Key Series",
    image: "/images/books/book-2.jpg",
    description:
      "In difficult times, life can be stressful. This book helps you align your passion, learn something new, and find solace and happiness. A practical guide for navigating uncertainty with resilience.",
    rating: 4.5,
    reviews: 2,
    price: "Rs. 399",
    bestseller: true,
    amazonLink: "#",
    sampleLink: "#",
  },
  {
    id: 3,
    title: "How to Create a Small Patch of Happiness",
    subtitle: "Life Lessons from Gardening - The Monk Key Series",
    image: "/images/books/book-3.jpg",
    description:
      "In difficult times, life can be stressful. Align your passion, learn something new to find solace and happiness. Discover how gardening can teach us profound life lessons about patience, growth, and joy.",
    rating: 5.0,
    reviews: 1,
    price: "Rs. 349",
    bestseller: false,
    amazonLink: "#",
    sampleLink: "#",
  },
  {
    id: 9,
    title: "How To Paint With Light",
    subtitle: "Learning Digital Photography - The Monk Key Series",
    image: "/images/books/book-9.jpg",
    description:
      "Photography is nothing but Painting with Light. This guide covers various photography genres from black and white street photography to colorful portraits. Hope this becomes the guide for your first few tentative steps on the path of visual discovery and delight.",
    rating: 3.5,
    reviews: 6,
    price: "Rs. 249",
    bestseller: false,
    amazonLink: "https://www.amazon.in/dp/B096FYVWJ6/ref=sr_1_1?dchild=1&keywords=Painting+with+Light+Goutam&qid=1622697944&s=books&sr=1-1",
    sampleLink: "#",
  },
]

export default function BooksSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredBook, setHoveredBook] = useState<number | null>(null)
  const [paymentSuccess, setPaymentSuccess] = useState<number | null>(null)
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

  return (
    <section ref={sectionRef} id="books" className="py-24 bg-background relative">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-sm font-medium text-gold uppercase tracking-wider">
            Published Works
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Books That Inspire Change
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Each book is a journey into the depths of human potential, offering insights and
            practical wisdom for personal and professional transformation.
          </p>
          <div className="w-24 h-1 gold-gradient mx-auto rounded-full mt-6" />
        </div>

        {/* Books Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book, index) => (
            <div
              key={book.id}
              className={`group transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredBook(book.id)}
              onMouseLeave={() => setHoveredBook(null)}
            >
              <div className="bg-card border border-border rounded-xl overflow-hidden premium-shadow hover:premium-shadow-lg transition-all duration-300 hover:border-gold/30 h-full flex flex-col">
                {/* Book Cover */}
                <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className={`object-cover transition-transform duration-500 ${
                      hoveredBook === book.id ? "scale-105" : "scale-100"
                    }`}
                  />
                  {book.bestseller && (
                    <div className="absolute top-4 left-4 px-3 py-1 gold-gradient text-foreground text-xs font-bold rounded-full">
                      BESTSELLER
                    </div>
                  )}
                  {/* Overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-foreground/60 flex items-center justify-center transition-opacity duration-300 ${
                      hoveredBook === book.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Button
                      variant="secondary"
                      className="bg-background text-foreground hover:bg-background/90"
                    >
                      <BookOpen className="w-4 h-4 mr-2" />
                      Quick Preview
                    </Button>
                  </div>
                </div>

                {/* Book Info */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-3">
                    {book.reviews > 0 ? (
                      <>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(book.rating)
                                  ? "text-gold fill-gold"
                                  : "text-border"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {book.rating} ({book.reviews.toLocaleString()} reviews)
                        </span>
                      </>
                    ) : (
                      <span className="text-sm text-muted-foreground italic">
                        No reviews yet - Be the first to review!
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-xl font-bold text-foreground mb-1">
                    {book.title}
                  </h3>
                  <p className="text-sm text-gold mb-3">{book.subtitle}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                    {book.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="font-serif text-2xl font-bold text-foreground">
                      {book.price}
                    </span>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-border hover:border-gold hover:text-gold"
                      >
                        Read Sample
                      </Button>
                    </div>
                  </div>
                  
                  <RazorpayPayment
                    amount={parseInt(book.price.replace(/[^\d]/g, ""))}
                    description={`Purchase: ${book.title}`}
                    type="book"
                    onSuccess={(paymentId) => {
                      setPaymentSuccess(book.id)
                      setTimeout(() => setPaymentSuccess(null), 5000)
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-medium px-8"
          >
            View All Books
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Razorpay Integration Placeholder */}
        <div
          className={`mt-16 p-8 bg-secondary/50 rounded-xl border border-border text-center transition-all duration-700 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-muted-foreground text-sm">
            Secure payments powered by <span className="font-semibold text-foreground">Razorpay</span>
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            UPI, Credit/Debit Cards, Net Banking, and more payment options available
          </p>
        </div>
      </div>
    </section>
  )
}
