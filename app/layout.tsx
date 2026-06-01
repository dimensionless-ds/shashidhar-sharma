import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  preload: true,
  fallback: ["Georgia", "serif"],
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
})

export const metadata: Metadata = {
  title: "Shashidhar Sharma | Author, Speaker, Thought Leader",
  description:
    "Shashidhar Sharma is a bestselling Indian author, keynote speaker, and thought leader. Explore his books, podcast, articles, and speaking engagements.",
  keywords: [
    "Shashidhar Sharma",
    "Indian author",
    "bestselling author",
    "motivational speaker",
    "thought leader",
    "leadership books",
    "entrepreneurship",
    "storytelling",
    "keynote speaker",
    "podcast",
    "articles",
    "writing",
  ],
  authors: [{ name: "Shashidhar Sharma" }],
  creator: "Shashidhar Sharma",
  publisher: "Shashidhar Sharma",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://shashidharsharma.com",
    siteName: "Shashidhar Sharma",
    title: "Shashidhar Sharma | Author, Speaker, Thought Leader",
    description:
      "Shashidhar Sharma is a bestselling Indian author, keynote speaker, and thought leader. Explore his books, podcast, articles, and speaking engagements.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shashidhar Sharma - Author, Speaker, Thought Leader",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shashidhar Sharma | Author, Speaker, Thought Leader",
    description:
      "Bestselling Indian author, keynote speaker, and thought leader. Exploring leadership, creativity, and the art of storytelling.",
    creator: "@shashidharsharma",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://shashidharsharma.com",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} antialiased bg-background`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://shashidharsharma.com/#person",
                  name: "Shashidhar Sharma",
                  description: "Bestselling Indian author, keynote speaker, and thought leader specializing in leadership, creativity, and storytelling",
                  jobTitle: ["Author", "Keynote Speaker", "Thought Leader"],
                  nationality: "India",
                  url: "https://shashidharsharma.com",
                  image: "https://shashidharsharma.com/images/profile.jpg",
                  sameAs: [
                    "https://www.linkedin.com/in/shashidharsharma/",
                    "https://twitter.com/shashidharsharma",
                    "https://www.instagram.com/shashidharsharma/",
                  ],
                  knowsAbout: [
                    "Leadership",
                    "Entrepreneurship",
                    "Storytelling",
                    "Creativity",
                    "Motivation",
                    "Business",
                    "Writing",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://shashidharsharma.com/#website",
                  url: "https://shashidharsharma.com",
                  name: "Shashidhar Sharma",
                  description: "Official website of Shashidhar Sharma - Author, Speaker, Thought Leader",
                  publisher: {
                    "@id": "https://shashidharsharma.com/#person",
                  },
                  inLanguage: "en",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
