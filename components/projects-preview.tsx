import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const featuredProjects = [
  {
    title: "Binary Exploitation Framework",
    description:
      "A comprehensive toolkit for binary exploitation research and CTF challenges, featuring automated ROP chain generation and exploit development utilities.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["C++", "Python", "Assembly", "Security"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
  {
    title: "Reverse Engineering Toolkit",
    description:
      "Collection of tools for malware analysis and binary reverse engineering, including custom disassemblers and static analysis utilities.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Python", "IDA Pro", "Ghidra", "Malware"],
    github: "https://github.com",
    featured: true,
  },
  {
    title: "Secure Chat Application",
    description:
      "End-to-end encrypted messaging app with custom cryptographic implementation and security-focused architecture.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React", "Node.js", "Cryptography", "WebRTC"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
]

export function ProjectsPreview() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-primary font-mono">$</span> ls projects/
            </h2>
            <p className="text-lg text-muted-foreground">
              Featured projects showcasing my work in security research and development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="border-border/50 overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
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
                  <CardTitle className="font-mono">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline" className="font-mono">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
