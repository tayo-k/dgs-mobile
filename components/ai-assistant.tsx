"use client"

import type React from "react"

import { useState } from "react"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

function MarylandCrab({ className }: { className?: string }) {
  return <Image src="/maryland-crab.jpg" alt="Maryland Flag Crab" width={32} height={32} className={className} />
}

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/ai-assistant" }),
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || status === "in_progress") return

    sendMessage({ text: input })
    setInput("")
  }

  const suggestedPrompts = [
    "Find the cheapest gas station nearby",
    "Where's the fastest EV charger?",
    "Show stations with restrooms",
    "Compare prices within 5 miles",
  ]

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 right-4 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-white border-2 border-[#FDB813] shadow-lg transition-transform hover:scale-110 active:scale-95"
        aria-label="Open AI Assistant"
      >
        <MarylandCrab className="h-7 w-7" />
      </button>

      {/* AI Assistant Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex items-end justify-center bg-black/50 backdrop-blur-sm sm:items-center">
          <div className="flex h-[85vh] w-full flex-col bg-card sm:h-[600px] sm:max-w-md sm:rounded-t-2xl">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border bg-primary px-4 py-3 text-primary-foreground sm:rounded-t-2xl">
              <div className="flex items-center gap-2">
                <MarylandCrab className="h-5 w-5" />
                <h2 className="font-semibold">AI Fuel Assistant</h2>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1 transition-colors hover:bg-primary-foreground/20"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4">
              {messages.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                  <div className="rounded-full bg-primary/10 p-4">
                    <MarylandCrab className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">How can I help you today?</h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                      Ask me about fuel prices, charging stations, or get personalized recommendations
                    </p>
                  </div>
                  <div className="grid w-full gap-2">
                    {suggestedPrompts.map((prompt, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setInput(prompt)
                        }}
                        className="rounded-lg border border-border bg-background px-3 py-2 text-left text-sm transition-colors hover:bg-accent"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                          message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                        }`}
                      >
                        {message.parts.map((part, index) => {
                          if (part.type === "text") {
                            return (
                              <p key={index} className="whitespace-pre-wrap text-sm">
                                {part.text}
                              </p>
                            )
                          }
                          return null
                        })}
                      </div>
                    </div>
                  ))}
                  {status === "in_progress" && (
                    <div className="flex justify-start">
                      <div className="max-w-[80%] rounded-2xl bg-muted px-4 py-2">
                        <div className="flex gap-1">
                          <span className="h-2 w-2 animate-bounce rounded-full bg-foreground/40 [animation-delay:-0.3s]"></span>
                          <span className="h-2 w-2 animate-bounce rounded-full bg-foreground/40 [animation-delay:-0.15s]"></span>
                          <span className="h-2 w-2 animate-bounce rounded-full bg-foreground/40"></span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="border-t border-border p-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about fuel options..."
                  disabled={status === "in_progress"}
                  className="flex-1 rounded-full border border-border bg-background px-4 py-2 text-sm outline-none focus:border-primary disabled:opacity-50"
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={!input.trim() || status === "in_progress"}
                  className="h-10 w-10 rounded-full"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
