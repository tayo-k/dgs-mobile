"use client"

import { useState } from "react"
import { MapView } from "@/components/map-view"
import { SearchBar } from "@/components/search-bar"
import { StationList } from "@/components/station-list"
import { FilterBar } from "@/components/filter-bar"
import { BottomNav, type NavItem } from "@/components/bottom-nav"
import { AIAssistant } from "@/components/ai-assistant"
import { MDDGSHeader } from "@/components/md-dgs-header"
import { SavedStations } from "@/components/saved-stations"
import { ProfileView } from "@/components/profile-view"

export default function Home() {
  const [activeView, setActiveView] = useState<NavItem>("map")

  return (
    <div className="flex h-screen flex-col bg-background">
      <MDDGSHeader variant="modern" />

      {/* Header with Search */}
      <header className="relative z-20 bg-card shadow-sm">
        <div className="p-4 pb-3">
          <SearchBar />
        </div>
        <FilterBar />
      </header>

      {/* Main Content - Conditional rendering based on active view */}
      <main className="relative flex-1 overflow-hidden">
        {activeView === "map" && <MapView />}
        {activeView === "list" && (
          <>
            <MapView />
            <StationList />
          </>
        )}
        {activeView === "saved" && <SavedStations />}
        {activeView === "profile" && <ProfileView />}
      </main>

      {/* Bottom Navigation */}
      <BottomNav active={activeView} onActiveChange={setActiveView} />

      <AIAssistant />
    </div>
  )
}
