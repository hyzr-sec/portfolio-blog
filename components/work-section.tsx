import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Binary Exploitation Framework",
    description: "Automated ROP chain generation and exploit development toolkit for security researchers.",
    tech: ["C++", "Python", "Assembly"],
    github: "https://github.com",
    demo: null,
  },
  {
    title: "Malware Analysis Engine",
    description: "Static and dynamic analysis pipeline for automated malware classification.",
    tech: ["Python", "Docker", "ML"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Vulnerability Scanner",
    description: "Web application security scanner focused on logic flaws and business vulnerabilities.",
    tech: ["Go", "PostgreSQL", "React"],
    github: "https://github.com",
    demo: null,
  },
]

export function WorkSection() {
  return (
    <section id="work" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Work</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-background p-6 rounded-lg border group hover:shadow-lg transition">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition">
                  <a href={project.github} className="hover:text-primary">
                    <Github size={16} />
                  </a>
                  {project.demo && (
                    <a href={project.demo} className="hover:text-primary">
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-muted rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
