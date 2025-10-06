"use client"

import { User, Settings, Bell, MapPin, CreditCard, HelpCircle, LogOut, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProfileView() {
  const menuItems = [
    { icon: Settings, label: "Account Settings", href: "/settings" },
    { icon: Bell, label: "Notifications", href: "/notifications" },
    { icon: MapPin, label: "Location Preferences", href: "/location" },
    { icon: CreditCard, label: "Payment Methods", href: "/payment" },
    { icon: HelpCircle, label: "Help & Support", href: "/help" },
  ]

  return (
    <div className="flex h-full flex-col bg-background">
      {/* Profile Header */}
      <div className="bg-card px-4 py-6">
        <div className="flex items-center gap-4">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <User className="h-10 w-10 text-primary" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-foreground">John Doe</h2>
            <p className="text-sm text-muted-foreground">john.doe@maryland.gov</p>
            <Button variant="outline" size="sm" className="mt-2 bg-transparent">
              Edit Profile
            </Button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 border-b border-border bg-card px-4 py-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-foreground">12</div>
          <div className="text-xs text-muted-foreground">Saved</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-foreground">48</div>
          <div className="text-xs text-muted-foreground">Visits</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-foreground">3.2k</div>
          <div className="text-xs text-muted-foreground">Miles</div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <div className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.label}
                  className="flex w-full items-center gap-3 rounded-xl border border-border bg-card p-4 text-left transition-all hover:border-primary/50 hover:shadow-md active:scale-[0.98]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="flex-1 font-medium text-foreground">{item.label}</span>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </button>
              )
            })}
          </div>

          {/* Logout Button */}
          <Button
            variant="outline"
            className="mt-6 w-full gap-2 border-destructive/50 text-destructive hover:bg-destructive/10 bg-transparent"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-border bg-card px-4 py-3 text-center text-xs text-muted-foreground">
        Maryland Department of General Services
        <br />
        Version 1.0.0
      </div>
    </div>
  )
}
