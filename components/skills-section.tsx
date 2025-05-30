import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C/C++", level: 90 },
      { name: "Python", level: 85 },
      { name: "Assembly", level: 80 },
      { name: "JavaScript/TypeScript", level: 85 },
      { name: "Rust", level: 70 },
      { name: "Go", level: 65 },
    ],
  },
  {
    title: "Security & Reverse Engineering",
    skills: [
      { name: "Binary Analysis", level: 85 },
      { name: "Vulnerability Research", level: 80 },
      { name: "Penetration Testing", level: 75 },
      { name: "Malware Analysis", level: 70 },
      { name: "Cryptography", level: 75 },
    ],
  },
  {
    title: "Development & DevOps",
    skills: [
      { name: "React/Next.js", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "Docker", level: 75 },
      { name: "Linux Administration", level: 85 },
    ],
  },
]

export function SkillsSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-primary font-mono">$</span> ls -la skills/
            </h2>
            <p className="text-lg text-muted-foreground">
              A breakdown of my technical expertise and proficiency levels
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="border-border/50">
                <CardHeader>
                  <CardTitle className="font-mono text-primary">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground font-mono">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
