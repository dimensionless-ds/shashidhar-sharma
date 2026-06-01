"use client"

import { useState, useRef, useEffect } from "react"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { X, Send, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const quickReplies = [
  "Recommend a book",
  "Invite to Speak",
  "Leadership Advice",
  "Latest Articles",
  "Podcasts",
]

export default function AskShashiChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  })

  const isLoading = status === "streaming" || status === "submitted"

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const handleSend = () => {
    if (!input.trim() || isLoading) return
    sendMessage({ text: input })
    setInput("")
  }

  const handleQuickReply = (reply: string) => {
    sendMessage({ text: reply })
  }

  const getMessageText = (message: typeof messages[0]) => {
    return message.parts
      ?.filter((p): p is { type: "text"; text: string } => p.type === "text")
      .map((p) => p.text)
      .join("") || ""
  }

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-gold hover:bg-gold-dark text-foreground font-semibold px-4 py-3 rounded-full shadow-premium transition-all duration-300 hover:scale-105 ${
          isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        aria-label="Open Ask Shashi chatbot"
      >
        <Image
          src="/images/chatbot-icon.png"
          alt="Ask Shashi"
          width={32}
          height={32}
          className="rounded-full"
        />
        <span className="hidden sm:inline">Ask Shashi</span>
        <span className="text-lg">⭐</span>
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] bg-background border border-border rounded-2xl shadow-premium overflow-hidden transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-95 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="bg-foreground text-background p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/chatbot-icon.png"
              alt="Ask Shashi"
              width={40}
              height={40}
              className="rounded-full bg-background p-1"
            />
            <div>
              <h3 className="font-serif font-bold text-lg flex items-center gap-1">
                Ask Shashi <span>⭐</span>
              </h3>
              <p className="text-xs text-background/70">AI Assistant</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-background/10 rounded-full transition-colors"
            aria-label="Close chatbot"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages Area */}
        <div className="h-[350px] overflow-y-auto p-4 space-y-4 bg-muted/30">
          {messages.length === 0 ? (
            <div className="text-center space-y-4">
              <div className="bg-background rounded-xl p-4 shadow-sm">
                <p className="text-muted-foreground text-sm">
                  Welcome — I&apos;m Ask Shashi 👋
                </p>
                <p className="text-muted-foreground text-sm mt-2">
                  I can help you explore books, leadership ideas, speaking requests, articles, and more.
                </p>
                <p className="text-foreground font-medium text-sm mt-3">
                  How may I help you today?
                </p>
              </div>
              
              {/* Quick Replies */}
              <div className="flex flex-wrap gap-2 justify-center">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => handleQuickReply(reply)}
                    className="text-xs bg-background border border-border hover:border-gold hover:text-gold px-3 py-2 rounded-full transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <>
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                      message.role === "user"
                        ? "bg-gold text-foreground rounded-br-md"
                        : "bg-background border border-border rounded-bl-md"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap leading-relaxed">
                      {getMessageText(message)}
                    </p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-background border border-border rounded-2xl rounded-bl-md px-4 py-3">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </>
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-border bg-background">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSend()
            }}
            className="flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-muted border-0 rounded-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
              disabled={isLoading}
            />
            <Button
              type="submit"
              size="icon"
              disabled={!input.trim() || isLoading}
              className="bg-gold hover:bg-gold-dark text-foreground rounded-full w-10 h-10 flex-shrink-0"
            >
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
