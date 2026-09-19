export type SpeakingEvent = {
  id: string
  title: string
  images: string[]
  date?: string
  location?: string
  description?: string
  organization?: string
  eventType?: string
  videoUrl?: string
  externalUrl?: string
}

export const speakingEvents: SpeakingEvent[] = [
  { id: "work-and-workgreen-conclave", title: "Work and Workgreen Conclave", images: [] },
  { id: "hilton-bangalore", title: "Hilton Bangalore", images: [] },
  { id: "ceo-india-summit", title: "CEO India Summit", images: [] },
  { id: "christ-university-speech", title: "Christ University Speech", images: [] },
  { id: "gospaze-event", title: "Gospaze Event", images: [] },
  { id: "zyeta-singapore-fireside-chat", title: "Zyeta Singapore Fireside Chat", images: [] },
]
