"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const categories = ["All", "Security Research", "Binary Analysis", "Web Development", "Tools & Utilities"]

interface ProjectsFilterProps {
  onFilterChange?: (category: string) => void
}

export function ProjectsFilter({ onFilterChange }: ProjectsFilterProps) {
  const [activeCategory, setActiveCategory] = useState("All")

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    onFilterChange?.(category)
  }

  return (
    <div className="flex flex-wrap gap-2 justify-center mb-12">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          size="sm"
          onClick={() => handleCategoryChange(category)}
          className="transition-all duration-200"
        >
          {category}
        </Button>
      ))}
    </div>
  )
}
