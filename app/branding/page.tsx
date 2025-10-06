import { MDDGSHeader } from "@/components/md-dgs-header"
import { SearchBar } from "@/components/search-bar"
import { FilterBar } from "@/components/filter-bar"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function BrandingOptions() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Maryland DGS Branding Options</h1>
          <p className="text-muted-foreground">
            Three professional branding approaches for the Maryland Department of General Services
          </p>
        </div>

        {/* Option 1: Classic Government */}
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold">Option 1: Classic Government</h2>
              <p className="text-muted-foreground">
                Traditional, authoritative design using official Maryland brand colors
              </p>
            </div>
            <Button size="sm" variant="outline">
              Apply Theme
            </Button>
          </div>
          <div className="overflow-hidden rounded-xl border-2 border-border bg-white shadow-lg">
            <MDDGSHeader variant="classic" />
            <div className="p-4">
              <SearchBar />
            </div>
            <FilterBar />
          </div>
          <div className="grid gap-3 rounded-lg bg-muted p-4 text-sm md:grid-cols-3">
            <div>
              <div className="font-semibold">Colors</div>
              <div className="text-muted-foreground">Maryland Red, Gold, Black, White</div>
            </div>
            <div>
              <div className="font-semibold">Style</div>
              <div className="text-muted-foreground">Professional, accessible, trustworthy</div>
            </div>
            <div>
              <div className="font-semibold">Best For</div>
              <div className="text-muted-foreground">Official government communications</div>
            </div>
          </div>
        </div>

        {/* Option 2: Modern Civic */}
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold">Option 2: Modern Civic</h2>
              <p className="text-muted-foreground">Contemporary, approachable design with clean aesthetics</p>
            </div>
            <Button size="sm" variant="outline">
              Apply Theme
            </Button>
          </div>
          <div className="overflow-hidden rounded-xl border-2 border-border bg-white shadow-lg">
            <MDDGSHeader variant="modern" />
            <div className="p-4">
              <SearchBar />
            </div>
            <FilterBar />
          </div>
          <div className="grid gap-3 rounded-lg bg-muted p-4 text-sm md:grid-cols-3">
            <div>
              <div className="font-semibold">Colors</div>
              <div className="text-muted-foreground">Softer red, bright gold, generous white space</div>
            </div>
            <div>
              <div className="font-semibold">Style</div>
              <div className="text-muted-foreground">Modern, friendly, accessible</div>
            </div>
            <div>
              <div className="font-semibold">Best For</div>
              <div className="text-muted-foreground">Public-facing citizen services</div>
            </div>
          </div>
        </div>

        {/* Option 3: Bold State Identity */}
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold">Option 3: Bold State Identity</h2>
              <p className="text-muted-foreground">Strong Maryland flag-inspired design with distinctive character</p>
            </div>
            <Button size="sm" variant="outline">
              Apply Theme
            </Button>
          </div>
          <div className="overflow-hidden rounded-xl border-2 border-border bg-white shadow-lg">
            <MDDGSHeader variant="bold" />
            <div className="p-4">
              <SearchBar />
            </div>
            <FilterBar />
          </div>
          <div className="grid gap-3 rounded-lg bg-muted p-4 text-sm md:grid-cols-3">
            <div>
              <div className="font-semibold">Colors</div>
              <div className="text-muted-foreground">Bold red, vibrant gold, strong contrast</div>
            </div>
            <div>
              <div className="font-semibold">Style</div>
              <div className="text-muted-foreground">Distinctive, memorable, confident</div>
            </div>
            <div>
              <div className="font-semibold">Best For</div>
              <div className="text-muted-foreground">State pride and brand recognition</div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border-2 border-primary/20 bg-primary/5 p-6">
          <h3 className="mb-3 font-semibold">All Options Include:</h3>
          <div className="grid gap-2 md:grid-cols-2">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span className="text-sm">WCAG AA accessibility compliance</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span className="text-sm">Official Maryland brand colors</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span className="text-sm">Mobile-first responsive design</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span className="text-sm">Professional government aesthetic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
