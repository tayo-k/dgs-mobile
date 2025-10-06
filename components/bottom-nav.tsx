"use client"

import { Map, List, Bookmark, User } from "lucide-react"

export type NavItem = "map" | "list" | "saved" | "profile"

interface BottomNavProps {
  active: NavItem
  onActiveChange: (item: NavItem) => void
}

export function BottomNav({ active, onActiveChange }: BottomNavProps) {
  const navItems = [
    { id: "map" as NavItem, label: "Map", icon: Map },
    { id: "list" as NavItem, label: "List", icon: List },
    { id: "saved" as NavItem, label: "Saved", icon: Bookmark },
    { id: "profile" as NavItem, label: "Profile", icon: User },
  ]

  return (
    <nav className="border-t border-border bg-card">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = active === item.id

          return (
            <button
              key={item.id}
              onClick={() => onActiveChange(item.id)}
              className={`flex flex-1 flex-col items-center gap-1 rounded-lg py-2 transition-colors ${
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className="h-6 w-6" />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
