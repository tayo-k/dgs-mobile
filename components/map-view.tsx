"use client"

import { Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MapView() {
  return (
    <div className="absolute inset-0 bg-surface">
      {/* Placeholder Map */}
      <div className="relative h-full w-full">
        {/* Map Background */}
        <div className="h-full w-full bg-gradient-to-br from-slate-100 to-slate-200">
          {/* Simulated map with markers */}
          <div className="relative h-full w-full">
            {/* Station Markers */}
            <div className="absolute left-1/4 top-1/3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary shadow-lg">
                <Fuel className="h-5 w-5 text-white" />
              </div>
            </div>
            <div className="absolute right-1/3 top-1/4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent shadow-lg">
                <Zap className="h-5 w-5 text-white" />
              </div>
            </div>
            <div className="absolute left-1/2 top-1/2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary shadow-lg">
                <Fuel className="h-5 w-5 text-white" />
              </div>
            </div>
            <div className="absolute right-1/4 top-2/3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent shadow-lg">
                <Zap className="h-5 w-5 text-white" />
              </div>
            </div>

            {/* User Location */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 shadow-lg ring-4 ring-blue-200">
                <div className="h-2 w-2 rounded-full bg-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Recenter Button */}
        <Button
          size="icon"
          className="absolute bottom-4 right-4 h-12 w-12 rounded-full bg-card text-foreground shadow-lg hover:bg-card/90"
        >
          <Navigation className="h-5 w-5" />
        </Button>

        {/* Map Attribution */}
        <div className="absolute bottom-2 left-2 rounded bg-white/90 px-2 py-1 text-xs text-muted-foreground">
          Map data © 2025
        </div>
      </div>
    </div>
  )
}

function Fuel({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 22h12" />
      <path d="M4 9h10" />
      <path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" />
      <path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5" />
    </svg>
  )
}

function Zap({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  )
}
