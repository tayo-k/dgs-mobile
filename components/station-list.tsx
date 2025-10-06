"use client"

import { useState } from "react"
import { MapPin, Navigation, Clock, DollarSign, Zap, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const stations = [
  {
    id: 1,
    name: "Shell Station",
    type: "fuel",
    address: "123 Main Street",
    distance: "0.3 mi",
    price: "$3.89/gal",
    status: "Open 24/7",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Tesla Supercharger",
    type: "ev",
    address: "456 Electric Ave",
    distance: "0.5 mi",
    price: "$0.28/kWh",
    status: "Open • 8 available",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Chevron",
    type: "fuel",
    address: "789 Oak Boulevard",
    distance: "0.7 mi",
    price: "$3.92/gal",
    status: "Open until 11 PM",
    rating: 4.2,
  },
  {
    id: 4,
    name: "ChargePoint Station",
    type: "ev",
    address: "321 Green Street",
    distance: "0.9 mi",
    price: "$0.32/kWh",
    status: "Open • 3 available",
    rating: 4.6,
  },
]

export function StationList() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      {/* Drag Handle */}
      <div
        className={`absolute bottom-0 left-0 right-0 z-10 flex flex-col bg-card transition-all duration-300 ${
          isExpanded ? "h-[85%]" : "h-[45%]"
        } rounded-t-3xl shadow-2xl`}
      >
        {/* Handle Bar */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex w-full flex-col items-center py-3 focus:outline-none"
        >
          <div className="h-1.5 w-12 rounded-full bg-border" />
        </button>

        {/* Header */}
        <div className="border-b border-border px-4 pb-3">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-foreground">Nearby Stations</h2>
              <p className="text-sm text-muted-foreground">{stations.length} stations found</p>
            </div>
            <Button variant="ghost" size="sm" className="gap-1 text-primary">
              <Navigation className="h-4 w-4" />
              Sort
            </Button>
          </div>
        </div>

        {/* Station List */}
        <div className="flex-1 overflow-y-auto px-4 py-2">
          <div className="space-y-3 pb-4">
            {stations.map((station) => (
              <StationCard key={station.id} station={station} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

function StationCard({ station }: { station: (typeof stations)[0] }) {
  return (
    <Link href={`/station/${station.id}`} className="block">
      <button className="w-full rounded-xl border border-border bg-card p-4 text-left transition-all hover:border-primary/50 hover:shadow-md active:scale-[0.98]">
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
              <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground" />
            </div>

            {/* Details */}
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
              <div className="flex items-center gap-1 font-medium text-foreground">
                <Navigation className="h-3.5 w-3.5" />
                {station.distance}
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <DollarSign className="h-3.5 w-3.5" />
                {station.price}
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <Clock className="h-3.5 w-3.5" />
                {station.status}
              </div>
            </div>
          </div>
        </div>
      </button>
    </Link>
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
