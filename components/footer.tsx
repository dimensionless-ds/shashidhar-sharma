"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Linkedin, Instagram, Youtube, ArrowUp, BookOpen } from "lucide-react"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Books", href: "#books" },
  { name: "Work & Workplace", href: "#work-workplace" },
  { name: "Podcasts & Keynotes", href: "#podcasts-keynotes" },
  { name: "Articles", href: "#articles" },
  { name: "Contact", href: "#contact" },
]

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/shashidhar-sharma/", label: "LinkedIn" },
  { icon: BookOpen, href: "https://substack.com/@shashidharsharma", label: "Substack" },
  { icon: Instagram, href: "https://www.instagram.com/sharmashashidhar/", label: "Instagram" },
  { icon: Youtube, href: "https://www.youtube.com/@ShashiS", label: "YouTube" },
]

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-foreground text-background relative">
      {/* Gold accent line */}
      <div className="h-1 gold-gradient" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="#home" className="inline-block mb-6">
              <span className="font-serif text-2xl font-bold text-background">
                Shashidhar Sharma<span className="text-gold">.</span>
              </span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Author, speaker, and thought leader dedicated to inspiring transformation through
              the power of storytelling.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 hover:gold-gradient flex items-center justify-center transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-background/70 group-hover:text-foreground transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold text-background mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-background/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-serif text-lg font-bold text-background mb-6">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-background/70 hover:text-gold transition-colors text-sm">
                  Media Kit
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-gold transition-colors text-sm">
                  Press Releases
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-gold transition-colors text-sm">
                  Book Excerpts
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-gold transition-colors text-sm">
                  Speaking Topics
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-gold transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-gold transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-lg font-bold text-background mb-6">Stay Connected</h4>
            <p className="text-background/70 text-sm mb-4">
              Subscribe to receive updates on new books, articles, and events.
            </p>
            <form
              onSubmit={async (e) => {
                e.preventDefault()
                const form = e.currentTarget
                const emailInput = form.querySelector('input[type="email"]') as HTMLInputElement
                const button = form.querySelector('button') as HTMLButtonElement
                
                if (emailInput?.value) {
                  button.disabled = true
                  button.textContent = "..."
                  
                  try {
                    const response = await fetch("/api/newsletter", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ email: emailInput.value }),
                    })
                    
                    const data = await response.json()
                    
                    if (data.success) {
                      button.textContent = "Done!"
                      emailInput.value = ""
                      setTimeout(() => { button.textContent = "Join"; button.disabled = false }, 3000)
                    } else {
                      button.textContent = "Retry"
                      button.disabled = false
                    }
                  } catch {
                    button.textContent = "Retry"
                    button.disabled = false
                  }
                }
              }}
              className="flex gap-2 mb-4"
            >
              <Input
                type="email"
                placeholder="Your email"
                required
                className="flex-grow bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:border-gold focus:ring-gold text-sm"
              />
              <Button type="submit" className="gold-gradient text-foreground hover:opacity-90 px-4">
                Join
              </Button>
            </form>
            <p className="text-background/50 text-xs">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm">
            &copy; {new Date().getFullYear()} Shashidhar Sharma. All rights reserved. | Website created by Dimensionless@2026
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-background/50 hover:text-gold transition-colors text-sm group"
          >
            Back to top
            <div className="w-8 h-8 rounded-full border border-background/20 group-hover:border-gold flex items-center justify-center transition-colors">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  )
}
