"use client"

import { Search, MapPin, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function SearchBar() {
  const [searchValue, setSearchValue] = useState("")
  const [isSearching, setIsSearching] = useState(false)

  const handleUseLocation = () => {
    setIsSearching(true)
    // Simulate getting location
    setTimeout(() => {
      setSearchValue("Current Location")
      setIsSearching(false)
    }, 1000)
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search address or place..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="h-12 w-full rounded-xl border border-input bg-background pl-11 pr-10 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
          {searchValue && (
            <button
              onClick={() => setSearchValue("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>

      <Button
        onClick={handleUseLocation}
        disabled={isSearching}
        variant="outline"
        className="h-10 w-full gap-2 rounded-lg border-primary/20 bg-primary/5 text-primary hover:bg-primary/10 hover:text-primary"
      >
        <MapPin className="h-4 w-4" />
        {isSearching ? "Getting location..." : "Use my current location"}
      </Button>
    </div>
  )
}
