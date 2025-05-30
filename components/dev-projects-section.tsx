"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"

const devProjects = [
  {
    title: "Modern Portfolio Platform",
    description:
      "Full-stack portfolio and blog platform built with Next.js, featuring advanced SEO optimization and performance monitoring.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind", "React", "Node.js"],
    github: "https://github.com",
    demo: "https://demo.com",
    category: "Web Development",
  },
  {
    title: "Real-time Chat Application",
    description:
      "Scalable chat app with WebSocket support, user authentication, and message encryption for secure communication.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB", "JWT", "Encryption"],
    github: "https://github.com",
    demo: "https://demo.com",
    category: "Full Stack",
  },
  {
    title: "E-commerce API",
    description:
      "RESTful API for e-commerce platform with payment integration, inventory management, and order processing.",
    tags: ["Node.js", "Express", "PostgreSQL", "Stripe", "Docker", "Redis"],
    github: "https://github.com",
    demo: null,
    category: "Backend",
  },
  {
    title: "Task Management Dashboard",
    description: "Kanban-style project management tool with team collaboration features and real-time updates.",
    tags: ["Vue.js", "TypeScript", "Firebase", "Vuex", "CSS3", "PWA"],
    github: "https://github.com",
    demo: "https://demo.com",
    category: "Frontend",
  },
  {
    title: "DevOps Automation Suite",
    description:
      "CI/CD pipeline automation tools with Docker containerization, monitoring, and deployment orchestration.",
    tags: ["Docker", "Kubernetes", "Jenkins", "Terraform", "AWS", "Monitoring"],
    github: "https://github.com",
    demo: null,
    category: "DevOps",
  },
  {
    title: "Mobile Finance App",
    description:
      "Cross-platform mobile app for personal finance tracking with data visualization and budget management.",
    tags: ["React Native", "TypeScript", "SQLite", "Chart.js", "Expo", "Redux"],
    github: "https://github.com",
    demo: "https://demo.com",
    category: "Mobile",
  },
]

export function DevProjectsSection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)

  // Get all unique tags
  const allTags = Array.from(new Set(devProjects.flatMap((project) => project.tags)))

  // Filter projects based on search and tags
  const filteredProjects = devProjects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesTags = selectedTags.length === 0 || selectedTags.some((tag) => project.tags.includes(tag))

    return matchesSearch && matchesTags
  })

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  return (
    <section id="dev-projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center font-mono">Development Projects</h2>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 font-mono"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors flex items-center space-x-2"
            >
              <Filter size={16} />
              <span className="font-mono">Filter</span>
            </button>
          </div>

          {showFilters && (
            <div className="flex flex-wrap gap-2 p-4 bg-muted/50 rounded-lg">
              {allTags.map((tag) => (
                <Badge
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors font-mono"
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-semibold font-mono">{project.title}</h3>
                    <Badge variant="secondary" className="text-xs font-mono">
                      {project.category}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="text-xs cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors font-mono"
                        onClick={() => toggleTag(tag)}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-2 ml-4">
                  <a
                    href={project.github}
                    className="p-2 border border-border rounded-lg hover:bg-muted transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="p-2 border border-border rounded-lg hover:bg-muted transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground font-mono">No projects found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  )
}
