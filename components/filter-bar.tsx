"use client"

import { useState } from "react"
import { Fuel, Zap, DollarSign, Clock } from "lucide-react"

type FilterType = "all" | "fuel" | "ev" | "price" | "open"

export function FilterBar() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all")

  const filters = [
    { id: "all" as FilterType, label: "All", icon: null },
    { id: "fuel" as FilterType, label: "Fuel", icon: Fuel },
    { id: "ev" as FilterType, label: "EV Charging", icon: Zap },
    { id: "price" as FilterType, label: "Best Price", icon: DollarSign },
    { id: "open" as FilterType, label: "Open Now", icon: Clock },
  ]

  return (
    <div className="overflow-x-auto px-4 pb-3">
      <div className="flex gap-2">
        {filters.map((filter) => {
          const Icon = filter.icon
          const isActive = activeFilter === filter.id

          return (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {Icon && <Icon className="h-4 w-4" />}
              {filter.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
