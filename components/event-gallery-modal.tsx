"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Camera, ChevronLeft, ChevronRight, X } from "lucide-react"
import type { SpeakingEvent } from "@/data/events"

type EventGalleryModalProps = {
  event: SpeakingEvent | null
  eventIndex: number
  events: SpeakingEvent[]
  onClose: () => void
  onChangeEvent: (index: number) => void
}

export default function EventGalleryModal({ event, eventIndex, events, onClose, onChangeEvent }: EventGalleryModalProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const touchStartX = useRef<number | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const openerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!event) return
    openerRef.current = document.activeElement as HTMLElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    closeButtonRef.current?.focus()

    const onKeyDown = (keyboardEvent: KeyboardEvent) => {
      if (keyboardEvent.key === "Escape") {
        if (lightboxIndex !== null) setLightboxIndex(null)
        else onClose()
      }
      if (lightboxIndex !== null && event.images.length > 1) {
        if (keyboardEvent.key === "ArrowRight") setLightboxIndex((lightboxIndex + 1) % event.images.length)
        if (keyboardEvent.key === "ArrowLeft") setLightboxIndex((lightboxIndex - 1 + event.images.length) % event.images.length)
      }
    }
    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener("keydown", onKeyDown)
      openerRef.current?.focus()
      setLightboxIndex(null)
    }
  }, [event, eventIndex, lightboxIndex, onClose])

  if (!event) return null
  const hasImages = event.images.length > 0
  const isFirstEvent = eventIndex === 0
  const isLastEvent = eventIndex === events.length - 1

  return (
    <div className="fixed inset-0 z-[100] bg-[#0B0D0E]/95 p-2 backdrop-blur-md sm:p-4 md:p-6" role="dialog" aria-modal="true" aria-labelledby="event-gallery-title">
      <div className="mx-auto flex h-[calc(100dvh-1rem)] max-w-[1500px] flex-col overflow-hidden border border-white/10 bg-[#0B0D0E] text-[#F3EFE7] shadow-2xl sm:h-[calc(100dvh-2rem)] md:h-[92dvh]">
        <header className="sticky top-0 z-10 flex shrink-0 items-start justify-between gap-4 border-b border-white/10 px-4 py-4 sm:px-7 sm:py-5">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#A5A39D]">Speaking / Event Archive</p>
            <h2 id="event-gallery-title" className="mt-2 max-w-3xl font-serif text-xl leading-tight sm:text-3xl">{event.title}</h2>
          </div>
          <button ref={closeButtonRef} type="button" onClick={onClose} className="inline-flex min-h-11 shrink-0 items-center gap-2 border border-white/15 px-3 text-xs uppercase tracking-[0.18em] text-[#A5A39D] transition-colors hover:border-[#f26b21] hover:text-[#F3EFE7]" aria-label="Close event archive">
            <X className="size-4" aria-hidden="true" /> Close
          </button>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
          <div className="p-4 sm:p-7 md:p-10">
            <div className="mb-8 flex items-end justify-between border-b border-white/10 pb-5">
              <div>
                <p className="font-serif text-4xl text-[#f26b21]">{String(eventIndex + 1).padStart(2, "0")}</p>
                {(event.date || event.location || event.organization) && <p className="mt-2 text-xs uppercase tracking-[0.16em] text-[#A5A39D]">{[event.date, event.location, event.organization].filter(Boolean).join(" · ")}</p>}
              </div>
              <Camera className="size-7 text-[#f26b21]" aria-hidden="true" />
            </div>

            {hasImages ? (
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                {event.images.map((src, index) => (
                  <button key={`${src}-${index}`} type="button" onClick={() => setLightboxIndex(index)} className={`group relative aspect-[4/3] overflow-hidden bg-white/5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f26b21] ${index === 0 ? "sm:col-span-2 sm:row-span-2 sm:aspect-auto" : ""}`} aria-label={`Open image ${index + 1} of ${event.images.length}`}>
                    <Image src={src} alt={`${event.title}, event photograph ${index + 1}`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition duration-500 group-hover:scale-[1.02]" loading="lazy" />
                  </button>
                ))}
              </div>
            ) : (
              <div className="flex min-h-[320px] flex-col items-center justify-center border border-dashed border-white/15 px-6 text-center sm:min-h-[440px]">
                <Camera className="mb-5 size-8 text-[#f26b21]" aria-hidden="true" />
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#A5A39D]">Event Archive</p>
                <p className="mt-3 max-w-sm font-serif text-2xl">Images from this event will be added soon.</p>
              </div>
            )}

            {event.description && <p className="mt-8 max-w-2xl text-base leading-relaxed text-[#A5A39D]">{event.description}</p>}

            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
              <button type="button" disabled={isFirstEvent} onClick={() => onChangeEvent(eventIndex - 1)} className="inline-flex min-h-11 items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#A5A39D] transition-colors hover:text-[#F3EFE7] disabled:pointer-events-none disabled:opacity-30"><ArrowLeft className="size-4" /> Previous event</button>
              <button type="button" disabled={isLastEvent} onClick={() => onChangeEvent(eventIndex + 1)} className="inline-flex min-h-11 items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#A5A39D] transition-colors hover:text-[#F3EFE7] disabled:pointer-events-none disabled:opacity-30">Next event <ArrowRight className="size-4" /></button>
            </div>
          </div>
        </div>
      </div>

      {lightboxIndex !== null && hasImages && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/95 p-4" role="dialog" aria-modal="true" aria-label="Event image viewer">
          <button type="button" onClick={() => setLightboxIndex(null)} className="absolute right-4 top-4 inline-flex min-h-11 min-w-11 items-center justify-center border border-white/20 text-[#F3EFE7] hover:border-[#f26b21]" aria-label="Close image viewer"><X className="size-5" /></button>
          <button type="button" onClick={() => setLightboxIndex((lightboxIndex - 1 + event.images.length) % event.images.length)} className="absolute left-2 top-1/2 inline-flex min-h-11 min-w-11 -translate-y-1/2 items-center justify-center text-[#F3EFE7] hover:text-[#f26b21] sm:left-6" aria-label="Previous image"><ChevronLeft className="size-8" /></button>
          <div
            className="relative h-[78dvh] w-[86vw] max-w-6xl touch-pan-y"
            onTouchStart={(touchEvent) => { touchStartX.current = touchEvent.changedTouches[0]?.clientX ?? null }}
            onTouchEnd={(touchEvent) => {
              const startX = touchStartX.current
              const endX = touchEvent.changedTouches[0]?.clientX
              touchStartX.current = null
              if (startX === null || endX === undefined || Math.abs(endX - startX) < 45) return
              setLightboxIndex((endX < startX ? lightboxIndex + 1 : lightboxIndex - 1 + event.images.length) % event.images.length)
            }}
          ><Image src={event.images[lightboxIndex]} alt={`${event.title}, event photograph ${lightboxIndex + 1}`} fill sizes="90vw" className="object-contain" priority /></div>
          <button type="button" onClick={() => setLightboxIndex((lightboxIndex + 1) % event.images.length)} className="absolute right-2 top-1/2 inline-flex min-h-11 min-w-11 -translate-y-1/2 items-center justify-center text-[#F3EFE7] hover:text-[#f26b21] sm:right-6" aria-label="Next image"><ChevronRight className="size-8" /></button>
          <p className="absolute bottom-[max(1rem,env(safe-area-inset-bottom))] left-1/2 -translate-x-1/2 text-xs tracking-[0.2em] text-[#A5A39D]">{String(lightboxIndex + 1).padStart(2, "0")} / {String(event.images.length).padStart(2, "0")}</p>
        </div>
      )}
    </div>
  )
}
