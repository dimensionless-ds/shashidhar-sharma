"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Books", href: "#books" },
  { name: "Work & Workplace", href: "#work-workplace" },
  { name: "Podcasts & Keynotes", href: "#podcasts-keynotes" },
  { name: "Articles", href: "#articles" },
  { name: "Contact", href: "#contact" },
]

const footerItems = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-16 py-3">
          {/* Logo */}
          <Link
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("#home")
            }}
            className="flex items-center"
          >
            <span className="font-serif text-xl sm:text-2xl font-semibold text-foreground tracking-[-0.03em] max-w-[190px] leading-[0.9]">
              Shashidhar Sharma<span className="text-gold">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="nav-item text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* AI Search */}
          <button
            type="button"
            onClick={() => scrollToSection("#ai-search")}
            className="hidden items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-gold hover:text-gold xl:flex"
            aria-label="Open AI search"
          >
            <Search className="size-3.5" aria-hidden="true" />
            Ask AI
            <kbd className="rounded border border-border px-1 font-mono text-[10px] text-muted-foreground/70">/</kbd>
          </button>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-foreground text-background hover:bg-foreground/90 font-medium px-6"
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden rounded-full border border-border p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-background border-t border-border px-4 py-6 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="block w-full text-left py-3 text-lg font-medium text-foreground hover:text-gold transition-colors border-b border-border/50 last:border-0"
            >
              {item.name}
            </button>
          ))}
          <button
            type="button"
            onClick={() => scrollToSection("#ai-search")}
            className="flex w-full items-center gap-2 border-b border-border/50 py-3 text-left text-lg font-medium text-foreground hover:text-gold"
          >
            <Search className="size-5" aria-hidden="true" />
            Ask AI
          </button>
          <Button
            onClick={() => scrollToSection("#contact")}
            className="w-full bg-foreground text-background hover:bg-foreground/90 font-medium mt-4"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </nav>
  )
}
