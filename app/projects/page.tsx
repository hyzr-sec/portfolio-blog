import type { Metadata } from "next"
import { ProjectsGrid } from "@/components/projects-grid"
import { ProjectsFilter } from "@/components/projects-filter"

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore my portfolio of security research projects, development work, and open-source contributions.",
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">All Projects</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive collection of my work in cybersecurity research, software development, and open-source
              contributions. Each project represents a deep dive into different aspects of technology and security.
            </p>
          </div>

          <ProjectsFilter />
          <ProjectsGrid />
        </div>
      </div>
    </div>
  )
}
