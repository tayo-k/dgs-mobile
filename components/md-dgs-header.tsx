"use client"

interface MDDGSHeaderProps {
  variant?: "classic" | "modern" | "bold"
}

export function MDDGSHeader({ variant = "classic" }: MDDGSHeaderProps) {
  const variants = {
    classic: {
      bg: "bg-[#c8122c]",
      text: "text-white",
      border: "border-[#ffc838]",
    },
    modern: {
      bg: "bg-white dark:bg-[#231f20]",
      text: "text-[#231f20] dark:text-white",
      border: "border-[#c8122c]/20",
    },
    bold: {
      bg: "bg-[#231f20]",
      text: "text-white",
      border: "border-[#ffc838]",
    },
  }

  const style = variants[variant]

  return (
    <div className={`${style.bg} ${style.text} border-b-2 ${style.border} px-4 py-4`}>
      <div className="flex items-center gap-4">
        <img src="/dgs-logo.png" alt="Maryland Department of General Services" className="h-12 w-auto" />
        <div className="flex-1">
          <h1 className="text-lg font-bold leading-tight">Fuel & Charging Finder</h1>
        </div>
      </div>
    </div>
  )
}
