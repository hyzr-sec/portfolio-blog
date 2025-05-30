"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Star, GitFork } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    title: "Advanced Binary Exploitation Framework",
    description:
      "Comprehensive toolkit for modern binary exploitation research with automated ROP chain generation, shellcode development, and exploit templates.",
    longDescription:
      "This framework provides security researchers with advanced tools for binary exploitation. Features include automated gadget discovery, ROP chain construction, shellcode generation, and exploit development templates for various vulnerability classes.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["C++", "Python", "Assembly", "Security"],
    category: "Security Research",
    github: "https://github.com",
    demo: null,
    stars: 234,
    forks: 45,
    featured: true,
  },
  {
    title: "Malware Analysis Automation Platform",
    description:
      "Scalable platform for automated malware analysis combining static and dynamic analysis techniques with machine learning classification.",
    longDescription:
      "A comprehensive malware analysis platform that automates the process of analyzing suspicious binaries. Combines static analysis, dynamic analysis in sandboxed environments, and machine learning for classification and threat intelligence.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Python", "Docker", "Machine Learning", "Security"],
    category: "Binary Analysis",
    github: "https://github.com",
    demo: "https://demo.com",
    stars: 189,
    forks: 32,
    featured: true,
  },
  {
    title: "Secure Code Review Assistant",
    description:
      "AI-powered tool for automated security code review with custom rule engine and integration with popular IDEs and CI/CD pipelines.",
    longDescription:
      "An intelligent code review assistant that helps developers identify security vulnerabilities during the development process. Features custom rule engines, IDE integrations, and seamless CI/CD pipeline integration.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["TypeScript", "Node.js", "AI/ML", "Security"],
    category: "Tools & Utilities",
    github: "https://github.com",
    demo: "https://demo.com",
    stars: 156,
    forks: 28,
    featured: true,
  },
  {
    title: "Cryptographic Protocol Analyzer",
    description:
      "Tool for analyzing and testing cryptographic protocol implementations with support for various encryption algorithms and key exchange mechanisms.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Rust", "Cryptography", "Protocol Analysis"],
    category: "Security Research",
    github: "https://github.com",
    demo: null,
    stars: 98,
    forks: 19,
  },
  {
    title: "Real-time Vulnerability Scanner",
    description:
      "High-performance web application vulnerability scanner with real-time reporting and custom payload generation capabilities.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Go", "Security", "Web", "Performance"],
    category: "Tools & Utilities",
    github: "https://github.com",
    demo: "https://demo.com",
    stars: 145,
    forks: 23,
  },
  {
    title: "Modern Portfolio Platform",
    description:
      "Full-stack portfolio and blog platform built with Next.js, featuring advanced SEO optimization and performance monitoring.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    category: "Web Development",
    github: "https://github.com",
    demo: "https://demo.com",
    stars: 87,
    forks: 15,
  },
]

export function ProjectsGrid() {
  const [filter, setFilter] = useState("All")

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProjects.map((project, index) => (
        <Card
          key={`${project.title}-${index}`}
          className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
        >
          <div className="relative overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {project.featured && (
              <Badge className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                Featured
              </Badge>
            )}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
              <Button size="sm" variant="secondary" asChild>
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </Link>
              </Button>
              {project.demo && (
                <Button size="sm" asChild>
                  <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Link>
                </Button>
              )}
            </div>
          </div>

          <CardHeader>
            <div className="flex items-center justify-between mb-2">
              <Badge variant="secondary" className="text-xs">
                {project.category}
              </Badge>
              {project.stars && (
                <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                  <div className="flex items-center">
                    <Star className="h-3 w-3 mr-1" />
                    {project.stars}
                  </div>
                  <div className="flex items-center">
                    <GitFork className="h-3 w-3 mr-1" />
                    {project.forks}
                  </div>
                </div>
              )}
            </div>
            <CardTitle className="group-hover:text-primary transition-colors duration-200">{project.title}</CardTitle>
            <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
          </CardHeader>

          <CardContent>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <Badge key={tagIndex} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
