"use client"

import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const allItems = [
  // Development Projects
  {
    title: "Modern Portfolio Platform",
    description:
      "Full-stack portfolio and blog platform built with Next.js, featuring advanced SEO optimization and performance monitoring.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind", "React", "Node.js"],
    github: "https://github.com/hyzr-sec/portfolio-blog",
    demo: "https://hyzr.tech",
    category: "Web Development",
    type: "project",
    itemType: "development",
  },
{
  title: "Animatch – Pet Adoption Platform",
  description:
    "Animatch is a web app built with the LAMP stack that helps users adopt animals from shelters. It features user authentication, animal listings, adoption requests, and profile management — all in a lightweight and responsive interface.",
  tags: ["PHP", "HTML", "CSS", "JavaScript", "Apache", "Nginx", "MySQL", "Azure"],
  github: "https://github.com/hyzr-sec/animatch",
  demo: "https://animatch.hyzr.tech",
  category: "Web Development",
  type: "project",
  itemType: "development",
},
{
  title: "Ecole Primaire – School Management Desktop App",
  description:
    "Ecole Primaire is a simple desktop application built with JavaFX for managing school-related tasks in a primary school environment. It includes UML-based design and was wrapped into a Windows application for deployment.",
  tags: ["JavaFX", "Java", "UML", "Desktop App", "Windows"],
  github: "https://github.com/hyzr-sec/ecole_primaire", 
  category: "Desktop App",
  type: "project",
  itemType: "development",
},
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center font-mono">Projects</h2>

        <div className="space-y-6">
          {allItems.map((item, index) => (
            <div
              key={index}
              className="border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-semibold font-mono">{item.title}</h3>
                    <Badge variant="secondary" className="text-xs font-mono">
                      {item.category}
                    </Badge>
                    <Badge
                      variant="outline"
                      className={`text-xs font-mono ${
                        item.itemType === "security" ? "border-red-500 text-red-500" : "border-blue-500 text-blue-500"
                      }`}
                    >
                      {item.itemType === "security" ? "Security" : "Development"}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">{item.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs font-mono">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-2 ml-4">
                  <a
                    href={item.github}
                    className="p-2 border border-border rounded-lg hover:bg-muted transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                  </a>
                  {item.demo && (
                    <a
                      href={item.demo}
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
      </div>
    </section>
  )
}
