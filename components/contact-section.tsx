"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Instagram,
  Youtube,
  MessageCircle,
  BookOpen,
  Loader2,
  CheckCircle,
} from "lucide-react"
import { DonationSection } from "@/components/donation-section"

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/shashidhar-sharma/", label: "LinkedIn" },
  { icon: BookOpen, href: "https://substack.com/@shashidharsharma", label: "Substack" },
  { icon: Instagram, href: "https://www.instagram.com/sharmashashidhar/", label: "Instagram" },
  { icon: Youtube, href: "https://www.youtube.com/@ShashiS", label: "YouTube" },
]

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
        setTimeout(() => setSubmitStatus("idle"), 5000)
      } else {
        setSubmitStatus("error")
      }
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section ref={sectionRef} id="contact" className="py-24 bg-secondary/30 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-sm font-medium text-gold uppercase tracking-wider">
            Get in Touch
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Let&apos;s Connect
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Whether you&apos;re interested in speaking engagements, collaborations, or just want
            to say hello, I&apos;d love to hear from you.
          </p>
          <div className="w-24 h-1 gold-gradient mx-auto rounded-full mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-card border border-border rounded-xl p-8 premium-shadow">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background border-border focus:border-gold focus:ring-gold"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background border-border focus:border-gold focus:ring-gold"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Speaking Inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-background border-border focus:border-gold focus:ring-gold"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your event or inquiry..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-background border-border focus:border-gold focus:ring-gold resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-foreground text-background hover:bg-foreground/90 font-medium"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : submitStatus === "success" ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>

                {submitStatus === "error" && (
                  <p className="text-red-500 text-sm text-center">
                    Failed to send message. Please try again or email directly.
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Contact Details */}
            <div className="bg-card border border-border rounded-xl p-8 premium-shadow mb-8">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a
                      href="mailto:shashidhar.sharma@gmail.com"
                      className="text-muted-foreground hover:text-gold transition-colors"
                    >
                      shashidhar.sharma@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <a
                      href="tel:+919731723023"
                      className="text-muted-foreground hover:text-gold transition-colors"
                    >
                      +91 97317 23023
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">Bengaluru, India</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm font-medium text-foreground mb-4">Follow Me</p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-secondary hover:gold-gradient flex items-center justify-center transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-foreground rounded-xl p-8">
              <h3 className="font-serif text-2xl font-bold text-background mb-3">
                Join the Newsletter
              </h3>
              <p className="text-background/70 mb-6">
                Get weekly insights on leadership, creativity, and personal growth delivered to
                your inbox.
              </p>

              <form
                onSubmit={async (e) => {
                  e.preventDefault()
                  const form = e.currentTarget
                  const emailInput = form.querySelector('input[type="email"]') as HTMLInputElement
                  const button = form.querySelector('button') as HTMLButtonElement
                  
                  if (emailInput?.value) {
                    button.disabled = true
                    button.textContent = "Subscribing..."
                    
                    try {
                      const response = await fetch("/api/newsletter", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ email: emailInput.value }),
                      })
                      
                      const data = await response.json()
                      
                      if (data.success) {
                        button.textContent = "Subscribed!"
                        emailInput.value = ""
                        setTimeout(() => { button.textContent = "Subscribe"; button.disabled = false }, 3000)
                      } else {
                        button.textContent = "Try Again"
                        button.disabled = false
                      }
                    } catch {
                      button.textContent = "Try Again"
                      button.disabled = false
                    }
                  }
                }}
                className="flex gap-3"
              >
                <Input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="flex-grow bg-background text-foreground border-0 focus:ring-2 focus:ring-gold"
                />
                <Button type="submit" className="gold-gradient text-foreground hover:opacity-90 font-medium px-6">
                  Subscribe
                </Button>
              </form>

              <p className="text-background/50 text-xs mt-4">
                Join 25,000+ subscribers. No spam, unsubscribe anytime.
              </p>
            </div>

            {/* AI Chatbot Placeholder */}
            <div className="mt-8 p-6 bg-card border border-dashed border-border rounded-xl text-center">
              <MessageCircle className="w-10 h-10 text-gold mx-auto mb-3" />
              <p className="font-medium text-foreground mb-1">Talk to our AI Assistant &quot;Ask Shashi&quot;</p>
              <p className="text-sm text-muted-foreground">
                An AI-powered assistant to answer your questions about books and speaking
                engagements.
              </p>
            </div>

            {/* Donation Section */}
            <DonationSection />
          </div>
        </div>
      </div>
    </section>
  )
}
