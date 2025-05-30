"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Search, Filter, Shield } from "lucide-react"
import { Input } from "@/components/ui/input"

const securityProjects = [
  {
    title: "Binary Exploitation Framework",
    description:
      "Comprehensive toolkit for modern binary exploitation research with automated ROP chain generation, shellcode development, and exploit templates for various vulnerability classes.",
    tags: ["C++", "Python", "Assembly", "ROP", "Exploitation", "Security"],
    github: "https://github.com",
    demo: null,
    category: "Binary Exploitation",
  },
  {
    title: "Malware Analysis Engine",
    description:
      "Scalable platform for automated malware analysis combining static and dynamic analysis techniques with machine learning classification and threat intelligence integration.",
    tags: ["Python", "Docker", "ML", "Malware", "Static Analysis", "Dynamic Analysis"],
    github: "https://github.com",
    demo: "https://demo.com",
    category: "Malware Analysis",
  },
  {
    title: "Vulnerability Scanner",
    description:
      "High-performance web application security scanner focused on logic flaws, business vulnerabilities, and OWASP Top 10 with custom payload generation.",
    tags: ["Go", "Security", "Web", "Scanner", "OWASP", "Pentesting"],
    github: "https://github.com",
    demo: null,
    category: "Web Security",
  },
  {
    title: "Cryptographic Protocol Analyzer",
    description:
      "Advanced tool for analyzing and testing cryptographic protocol implementations with support for various encryption algorithms and key exchange mechanisms.",
    tags: ["Rust", "Cryptography", "Protocol Analysis", "TLS", "Encryption"],
    github: "https://github.com",
    demo: null,
    category: "Cryptography",
  },
  {
    title: "CTF Challenge Platform",
    description:
      "Comprehensive platform for hosting and managing Capture The Flag competitions with automated scoring, challenge deployment, and team management.",
    tags: ["Python", "Django", "Docker", "CTF", "Competition", "Scoring"],
    github: "https://github.com",
    demo: "https://demo.com",
    category: "CTF Tools",
  },
  {
    title: "Reverse Engineering Toolkit",
    description:
      "Collection of specialized tools for binary analysis and reverse engineering workflows with custom disassemblers and static analysis utilities.",
    tags: ["Python", "IDA Pro", "Ghidra", "Binary Analysis", "Reverse Engineering"],
    github: "https://github.com",
    demo: null,
    category: "Reverse Engineering",
  },
]

export function SecurityProjectsSection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)

  // Get all unique tags
  const allTags = Array.from(new Set(securityProjects.flatMap((project) => project.tags)))

  // Filter projects based on search and tags
  const filteredProjects = securityProjects.filter((project) => {
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
    <section id="security-projects" className="py-24 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-3xl font-bold font-mono">Security & CTF Projects</h2>
          </div>
          <p className="text-muted-foreground font-mono">
            Tools and frameworks for cybersecurity research and CTF competitions
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search security projects..."
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
            <p className="text-muted-foreground font-mono">No security projects found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  )
}
