"use client"

import { ArrowLeft, Navigation, Phone, Clock, DollarSign, Star, Bookmark, Share2, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function StationDetail() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 flex items-center gap-3 border-b border-border bg-card px-4 py-3">
        <Link href="/">
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="flex-1 text-lg font-semibold text-foreground">Station Details</h1>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Share2 className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Bookmark className="h-5 w-5" />
        </Button>
      </header>

      {/* Content */}
      <main className="flex-1">
        {/* Map Preview */}
        <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200">
          <div className="flex h-full items-center justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent shadow-lg">
              <Zap className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>

        {/* Station Info */}
        <div className="space-y-6 p-4">
          {/* Title & Rating */}
          <div>
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Tesla Supercharger</h2>
                <p className="mt-1 text-muted-foreground">456 Electric Avenue, San Francisco, CA</p>
              </div>
              <div className="flex shrink-0 items-center gap-1 rounded-lg bg-accent/10 px-2.5 py-1.5">
                <Star className="h-4 w-4 fill-accent text-accent" />
                <span className="font-semibold text-accent">4.8</span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="rounded-xl bg-surface p-3 text-center">
                <Navigation className="mx-auto h-5 w-5 text-primary" />
                <p className="mt-1 text-sm font-semibold text-foreground">0.5 mi</p>
                <p className="text-xs text-muted-foreground">Distance</p>
              </div>
              <div className="rounded-xl bg-surface p-3 text-center">
                <DollarSign className="mx-auto h-5 w-5 text-primary" />
                <p className="mt-1 text-sm font-semibold text-foreground">$0.28/kWh</p>
                <p className="text-xs text-muted-foreground">Price</p>
              </div>
              <div className="rounded-xl bg-surface p-3 text-center">
                <Zap className="mx-auto h-5 w-5 text-accent" />
                <p className="mt-1 text-sm font-semibold text-foreground">8 available</p>
                <p className="text-xs text-muted-foreground">Chargers</p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="rounded-xl border border-border bg-card p-4">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-foreground">Hours</h3>
            </div>
            <p className="mt-2 text-muted-foreground">Open 24 hours</p>
          </div>

          {/* Amenities */}
          <div className="rounded-xl border border-border bg-card p-4">
            <h3 className="font-semibold text-foreground">Amenities</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Fast Charging", "Restrooms", "WiFi", "Convenience Store"].map((amenity) => (
                <span key={amenity} className="rounded-full bg-surface px-3 py-1.5 text-sm text-foreground">
                  {amenity}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <Button className="h-12 gap-2 rounded-xl">
              <Navigation className="h-5 w-5" />
              Directions
            </Button>
            <Button variant="outline" className="h-12 gap-2 rounded-xl bg-transparent">
              <Phone className="h-5 w-5" />
              Call
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
