"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, Search, Sparkles, X } from "lucide-react"
import { answerFromSearch, searchWebsite, type SearchDocument } from "@/lib/search-index"

const suggestions = [
  "What books has Shashidhar written?",
  "Tell me about Edge of Intelligence",
  "Where has Shashidhar spoken?",
  "Show me his recent videos",
]

const typeLabel: Record<SearchDocument["type"], string> = {
  book: "BOOK",
  idea: "IDEA",
  video: "VIDEO",
  journey: "JOURNEY",
  speaking: "EVENT",
  press: "PRESS",
}

export default function AiSearch() {
  const [query, setQuery] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const results = query.trim() ? searchWebsite(query) : []
  const answer = hasSearched ? answerFromSearch(query, results) : ""

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "/" && document.activeElement?.tagName !== "INPUT") {
        event.preventDefault()
        setIsOpen(true)
        inputRef.current?.focus()
      }
      if (event.key === "Escape") setIsOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  const submit = (event?: React.FormEvent) => {
    event?.preventDefault()
    if (!query.trim()) return
    setHasSearched(true)
    setIsOpen(true)
  }

  const setSuggestion = (suggestion: string) => {
    setQuery(suggestion)
    setHasSearched(true)
    setIsOpen(true)
    inputRef.current?.focus()
  }

  return (
    <section id="ai-search" className="relative z-30 border-y border-border bg-foreground px-4 py-6 text-background sm:px-6 lg:px-8 lg:py-8" aria-labelledby="ai-search-title">
      <div className="mx-auto max-w-5xl">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <p className="flex items-center gap-2 text-[0.65rem] font-medium uppercase tracking-[0.24em] text-gold-light"><Sparkles className="size-3" aria-hidden="true" /> Ask the author&apos;s digital library</p>
            <h2 id="ai-search-title" className="mt-2 font-serif text-xl tracking-[-0.02em] sm:text-2xl">Ask about the ideas.</h2>
          </div>
          <span className="hidden rounded border border-background/20 px-2 py-1 font-mono text-[0.6rem] text-background/50 sm:inline">/ TO SEARCH</span>
        </div>
        <form onSubmit={submit} className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-gold" aria-hidden="true" />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => { setQuery(event.target.value); setHasSearched(false); setIsOpen(true) }}
            onFocus={() => setIsOpen(true)}
            placeholder="Ask anything about Shashidhar Sharma, his books, ideas or talks..."
            aria-label="Ask about Shashidhar Sharma"
            className="w-full rounded-xl border border-background/20 bg-background/10 py-4 pl-12 pr-16 text-sm text-background outline-none backdrop-blur placeholder:text-background/45 focus:border-gold sm:text-base"
          />
          <button type="submit" aria-label="Search the website" className="absolute right-2 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-lg bg-gold text-foreground transition-transform hover:scale-105"><ArrowUpRight className="size-5" /></button>
        </form>
        {isOpen && (
          <div className="mt-3 overflow-hidden rounded-xl border border-background/15 bg-background text-foreground shadow-2xl">
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <span className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">{hasSearched ? "Answer" : "Suggested questions"}</span>
              <button type="button" onClick={() => setIsOpen(false)} aria-label="Close search results" className="rounded p-1 text-muted-foreground hover:text-foreground"><X className="size-4" /></button>
            </div>
            {!hasSearched ? (
              <div className="flex flex-wrap gap-2 p-4">
                {suggestions.map((suggestion) => <button key={suggestion} type="button" onClick={() => setSuggestion(suggestion)} className="rounded-full border border-border px-3 py-2 text-left text-xs text-muted-foreground transition-colors hover:border-gold hover:text-gold">{suggestion}</button>)}
              </div>
            ) : (
              <div className="p-4 sm:p-5">
                <p className="max-w-3xl text-sm leading-relaxed text-foreground sm:text-base">{answer}</p>
                {results.length === 0 && <div className="mt-5 flex flex-wrap gap-2">
                  {[['EXPLORE BOOKS', '#books'], ['EXPLORE IDEAS', '#work-workplace'], ['WATCH VIDEOS', '#podcasts-keynotes'], ['CONTACT', '#contact']].map(([label, href]) => <a key={href} href={href} onClick={() => setIsOpen(false)} className="rounded-full border border-border px-3 py-2 text-[0.65rem] font-medium tracking-[0.12em] text-gold hover:border-gold">{label}</a>)}
                </div>}
                {results.length > 0 && <>
                  <p className="mt-6 border-t border-border pt-4 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">Relevant content · source: verified website archive</p>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    {results.map((result) => <a key={result.id} href={result.url} onClick={() => setIsOpen(false)} className="group rounded-lg border border-border p-3 transition-colors hover:border-gold/60 hover:bg-secondary/50">
                      <div className="flex items-center justify-between gap-3"><span className="text-[0.6rem] font-medium tracking-[0.18em] text-gold">{typeLabel[result.type]}</span><ArrowUpRight className="size-3 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></div>
                      <p className="mt-2 font-serif text-base leading-tight">{result.title}</p>
                      <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">{result.excerpt}</p>
                      <span className="mt-3 inline-block text-[0.65rem] font-medium uppercase tracking-[0.14em] text-gold">{result.actionLabel} →</span>
                    </a>)}
                  </div>
                </>}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
