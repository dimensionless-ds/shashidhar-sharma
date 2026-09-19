export type SearchDocument = {
  id: string
  type: "book" | "idea" | "video" | "journey" | "speaking" | "press"
  title: string
  excerpt: string
  url: string
  actionLabel: "BUY" | "READ" | "WATCH" | "VIEW"
  keywords: string[]
}

export const searchIndex: SearchDocument[] = [
  {
    id: "book-edge-intelligence",
    type: "book",
    title: "Work and Workplace at the Edge of Intelligence",
    excerpt: "A book about how AI, climate change, and the human mind will reshape work and workplace productivity.",
    url: "#books",
    actionLabel: "BUY",
    keywords: ["latest book", "edge of intelligence", "work", "workplace", "ai", "climate", "human mind", "productivity"],
  },
  {
    id: "book-songs-mist",
    type: "book",
    title: "Songs of the Mist",
    excerpt: "Spiritual fiction that reinterprets the Bhagavad Gita for modern readers.",
    url: "#books",
    actionLabel: "BUY",
    keywords: ["songs", "mist", "monk key", "spiritual", "fiction", "bhagavad gita"],
  },
  {
    id: "book-haiku-sound",
    type: "book",
    title: "Haiku - Sound Of One Hand Clapping",
    excerpt: "A collection of haiku exploring Love, Life & Living through the Japanese poetic form.",
    url: "#books",
    actionLabel: "BUY",
    keywords: ["haiku", "poetry", "love", "life", "living", "matsuo basho"],
  },
  {
    id: "book-kuhase",
    type: "book",
    title: "Kuhase ke geet",
    excerpt: "Hindi poetry exploring nature, spirituality, and the human experience.",
    url: "#books",
    actionLabel: "VIEW",
    keywords: ["kuhase", "hindi", "poetry", "nature", "spirituality"],
  },
  {
    id: "book-write-haiku",
    type: "book",
    title: "How to Write Haiku",
    excerpt: "A beginner's guide to understanding and writing the iconic 5-7-5 poetry form.",
    url: "#books",
    actionLabel: "BUY",
    keywords: ["write haiku", "beginner", "5 7 5", "poetry", "guide"],
  },
  {
    id: "book-write-bestseller",
    type: "book",
    title: "How to Write a Bestseller",
    excerpt: "A practical guide to crafting compelling stories, finding your voice, and writing a bestselling book.",
    url: "#books",
    actionLabel: "VIEW",
    keywords: ["bestseller", "writing", "stories", "author", "book"],
  },
  {
    id: "idea-ai",
    type: "idea",
    title: "Artificial Intelligence",
    excerpt: "How AI is reshaping job roles, decision-making, and the nature of work itself.",
    url: "#workplace",
    actionLabel: "READ",
    keywords: ["ai", "artificial intelligence", "jobs", "decision making", "work"],
  },
  {
    id: "idea-human-ai",
    type: "idea",
    title: "Human-AI Collaboration",
    excerpt: "Building symbiotic relationships between human workers and intelligent systems.",
    url: "#workplace",
    actionLabel: "READ",
    keywords: ["human ai", "collaboration", "intelligent systems", "workplace"],
  },
  {
    id: "video-edge",
    type: "video",
    title: "Edge of Intelligence",
    excerpt: "Featured video exploring the ideas behind Work and Workplace at the Edge of Intelligence.",
    url: "#podcasts-keynotes",
    actionLabel: "WATCH",
    keywords: ["edge of intelligence", "video", "youtube", "recent videos", "latest video"],
  },
  {
    id: "video-workgreen",
    type: "video",
    title: "WorkGreen: India's Largest Conclave on Workplace Strategy & Climate Change",
    excerpt: "A video about workplace strategy and climate change.",
    url: "#podcasts-keynotes",
    actionLabel: "WATCH",
    keywords: ["workgreen", "climate", "workplace strategy", "video", "conclave"],
  },
  {
    id: "video-bengaluru",
    type: "video",
    title: "What Corporate Bengaluru Wants",
    excerpt: "A conversation about the needs and direction of corporate Bengaluru.",
    url: "#podcasts-keynotes",
    actionLabel: "WATCH",
    keywords: ["bengaluru", "corporate", "video", "talk"],
  },
  {
    id: "journey-current",
    type: "journey",
    title: "2026 — Work & Workplace at the Edge of Intelligence",
    excerpt: "Published breakthrough work and currently leads workplace transformation initiatives globally as Country Manager – AWA India.",
    url: "#journey",
    actionLabel: "VIEW",
    keywords: ["journey", "2026", "current work", "awa india", "workplace transformation"],
  },
  {
    id: "journey-green",
    type: "journey",
    title: "2021 — Green Footprint Trust & WorkGreen Conclave",
    excerpt: "Founded Green Footprint Trust and launched WorkGreen Conclave.",
    url: "#journey",
    actionLabel: "VIEW",
    keywords: ["journey", "2021", "green footprint", "workgreen"],
  },
  {
    id: "speaking",
    type: "speaking",
    title: "Speaking & Keynotes",
    excerpt: "Explore speaking themes including leadership, motivation, creativity, storytelling, entrepreneurship, and team building.",
    url: "#speaking",
    actionLabel: "VIEW",
    keywords: ["speaking", "spoken", "keynote", "events", "leadership", "motivation", "creativity"],
  },
  {
    id: "press",
    type: "press",
    title: "Press Coverage",
    excerpt: "Selected press and media coverage about Shashidhar Sharma's work and writing.",
    url: "#press",
    actionLabel: "VIEW",
    keywords: ["press", "media", "indian express", "coverage", "articles"],
  },
]

const normalize = (value: string) => value.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim()

export function searchWebsite(query: string, limit = 6) {
  const normalizedQuery = normalize(query)
  if (!normalizedQuery) return []
  const queryTerms = normalizedQuery.split(" ").filter((term) => term.length > 1)

  return searchIndex
    .map((document) => {
      const haystack = normalize([document.title, document.excerpt, ...document.keywords].join(" "))
      const title = normalize(document.title)
      const score = queryTerms.reduce((total, term) => {
        if (title.includes(term)) return total + 5
        if (document.keywords.some((keyword) => normalize(keyword).includes(term))) return total + 3
        if (haystack.includes(term)) return total + 1
        return total
      }, 0)
      return { document, score }
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ document }) => document)
}

export function answerFromSearch(query: string, results: SearchDocument[]) {
  const normalizedQuery = normalize(query)
  if (!results.length) return "I couldn't find that on Shashidhar Sharma's website."
  if (normalizedQuery.includes("book") || normalizedQuery.includes("written")) {
    return `Shashidhar Sharma's website features ${results.filter((result) => result.type === "book").length || "several"} published works spanning workplace intelligence, spiritual fiction, poetry, and writing guides.`
  }
  if (normalizedQuery.includes("journey") || normalizedQuery.includes("career")) {
    return "Shashidhar Sharma's journey spans cultural leadership, writing, sustainability, workplace strategy, and his current work around intelligence and the future of work."
  }
  if (normalizedQuery.includes("speak") || normalizedQuery.includes("event") || normalizedQuery.includes("keynote")) {
    return "Shashidhar Sharma's speaking work covers leadership, motivation, creativity, storytelling, entrepreneurship, and team building."
  }
  if (normalizedQuery.includes("video") || normalizedQuery.includes("watch") || normalizedQuery.includes("youtube")) {
    return "The media archive includes Edge of Intelligence, workplace strategy, climate change, and corporate conversations."
  }
  return results[0].excerpt
}
