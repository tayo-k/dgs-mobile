"use client"

import { Bookmark, MapPin, Navigation, DollarSign, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const savedStations = [
  {
    id: 2,
    name: "Tesla Supercharger",
    type: "ev",
    address: "456 Electric Ave",
    distance: "0.5 mi",
    price: "$0.28/kWh",
    savedDate: "2 days ago",
  },
  {
    id: 1,
    name: "Shell Station",
    type: "fuel",
    address: "123 Main Street",
    distance: "0.3 mi",
    price: "$3.89/gal",
    savedDate: "1 week ago",
  },
]

export function SavedStations() {
  return (
    <div className="flex h-full flex-col bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card px-4 py-4">
        <div className="flex items-center gap-2">
          <Bookmark className="h-5 w-5 text-primary" />
          <h1 className="text-xl font-semibold text-foreground">Saved Stations</h1>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">
          {savedStations.length} saved {savedStations.length === 1 ? "station" : "stations"}
        </p>
      </div>

      {/* Saved Stations List */}
      <div className="flex-1 overflow-y-auto">
        {savedStations.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center px-4 text-center">
            <Bookmark className="h-16 w-16 text-muted-foreground/30" />
            <h3 className="mt-4 text-lg font-semibold text-foreground">No saved stations yet</h3>
            <p className="mt-2 text-sm text-muted-foreground">Save your favorite stations for quick access</p>
          </div>
        ) : (
          <div className="space-y-3 p-4">
            {savedStations.map((station) => (
              <div
                key={station.id}
                className="rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/50 hover:shadow-md"
              >
                <div className="flex gap-3">
                  {/* Icon */}
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                      station.type === "ev" ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"
                    }`}
                  >
                    {station.type === "ev" ? <Zap className="h-6 w-6" /> : <Fuel className="h-6 w-6" />}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-semibold text-foreground">{station.name}</h3>
                        <div className="mt-0.5 flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="h-3.5 w-3.5" />
                          {station.address}
                        </div>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                        <div className="flex items-center gap-1 font-medium text-foreground">
                          <Navigation className="h-3.5 w-3.5" />
                          {station.distance}
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <DollarSign className="h-3.5 w-3.5" />
                          {station.price}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Link href={`/station/${station.id}`}>
                          <Button size="sm" variant="outline">
                            View
                          </Button>
                        </Link>
                        <Button size="sm" variant="ghost" className="text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <p className="mt-2 text-xs text-muted-foreground">Saved {station.savedDate}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
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
