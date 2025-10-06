"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const variants = [
  {
    id: "variant-1",
    name: "Bold Burgundy",
    description: "Primary burgundy with mustard yellow accents",
    colors: ["#981E32", "#EAAB00", "#FFFFFF", "#000000"],
  },
  {
    id: "variant-2",
    name: "Golden State",
    description: "Primary mustard yellow with burgundy accents",
    colors: ["#EAAB00", "#981E32", "#FFFFFF", "#000000"],
  },
  {
    id: "variant-3",
    name: "Monochrome Elegance",
    description: "Black and white with gold highlights",
    colors: ["#000000", "#EAAB00", "#FFFFFF"],
  },
  {
    id: "variant-4",
    name: "Balanced Heritage",
    description: "Equal burgundy and gold with black text",
    colors: ["#981E32", "#EAAB00", "#000000", "#FFFFFF"],
  },
  {
    id: "variant-5",
    name: "Warm Contrast",
    description: "Burgundy background with gold and white elements",
    colors: ["#981E32", "#EAAB00", "#FFFFFF"],
  },
]

export default function VariantsPage() {
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null)

  const applyVariant = (variantId: string) => {
    // Remove all existing variant stylesheets
    const existingLinks = document.querySelectorAll("link[data-variant]")
    existingLinks.forEach((link) => link.remove())

    // Add the selected variant stylesheet
    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = `/${variantId}.css`
    link.setAttribute("data-variant", variantId)
    document.head.appendChild(link)

    setSelectedVariant(variantId)
  }

  const resetToDefault = () => {
    const existingLinks = document.querySelectorAll("link[data-variant]")
    existingLinks.forEach((link) => link.remove())
    setSelectedVariant(null)
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-foreground">Maryland Flag Color Variants</h1>
          <p className="text-lg text-muted-foreground">
            Five design variants inspired by the Maryland state flag colors: Burgundy (#981E32), Mustard Yellow
            (#EAAB00), Black (#000000), and White (#FFFFFF)
          </p>
        </div>

        {selectedVariant && (
          <Card className="border-2 border-primary bg-card p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-card-foreground">
                Currently viewing:{" "}
                <span className="font-bold">{variants.find((v) => v.id === selectedVariant)?.name}</span>
              </p>
              <Button onClick={resetToDefault} variant="outline" size="sm">
                Reset to Default
              </Button>
            </div>
          </Card>
        )}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {variants.map((variant) => (
            <Card key={variant.id} className="overflow-hidden border-2 hover:border-primary transition-colors">
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-card-foreground">{variant.name}</h3>
                  <p className="text-sm text-muted-foreground">{variant.description}</p>
                </div>

                <div className="flex gap-2">
                  {variant.colors.map((color, index) => (
                    <div
                      key={index}
                      className="h-12 flex-1 rounded-md border-2 border-border"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>

                <Button
                  onClick={() => applyVariant(variant.id)}
                  className="w-full"
                  variant={selectedVariant === variant.id ? "default" : "outline"}
                >
                  {selectedVariant === variant.id ? "Applied" : "Apply Variant"}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <Card className="border-2 bg-card p-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-card-foreground">About the Maryland Flag</h2>
            <p className="text-muted-foreground leading-relaxed">
              The Maryland state flag features a unique heraldic design with four colors: vivid burgundy (#981E32),
              mustard yellow (#EAAB00), black (#000000), and white (#FFFFFF). The flag combines the yellow-and-black
              Calvert family arms with the red-and-white Crossland family arms in a distinctive quartered pattern.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              These five design variants explore different ways to incorporate Maryland's iconic colors into the fuel
              and charging station finder app, from bold burgundy-focused designs to balanced heritage themes.
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}
