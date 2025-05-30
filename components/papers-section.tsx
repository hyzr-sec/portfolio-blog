"use client"

import { Badge } from "@/components/ui/badge"
import { FileText, ExternalLink } from "lucide-react"
import Link from "next/link"

const papers = [
  {
    title: "Advanced ROP Techniques in Modern Binary Exploitation",
    description:
      "Comprehensive analysis of return-oriented programming evolution and novel bypass techniques for contemporary exploit mitigations including CFI and CET.",
    tags: ["ROP", "Binary Exploitation", "Mitigations", "CFI", "CET", "Research"],
    paperUrl: "/papers/advanced-rop-techniques",
    category: "Binary Security Research",
    journal: "IEEE Security & Privacy",
    year: "2023",
    coAuthors: ["Dr. Sarah Johnson", "Prof. Michael Chen"],
  },
  {
    title: "Automated Malware Analysis Using Machine Learning",
    description:
      "Novel approach to malware classification and family detection using deep learning techniques with static and dynamic feature extraction.",
    tags: ["Machine Learning", "Malware Analysis", "Deep Learning", "Classification", "Feature Extraction"],
    paperUrl: "/papers/automated-malware-analysis",
    category: "AI Security Research",
    journal: "ACM CCS Conference",
    year: "2022",
    coAuthors: ["Dr. Emily Rodriguez", "Prof. David Kim"],
  },
  {
    title: "Memory Safety in Systems Programming Languages",
    description:
      "Comparative study of memory safety mechanisms in Rust, C++, and emerging systems languages with performance analysis.",
    tags: ["Memory Safety", "Rust", "C++", "Systems Programming", "Performance Analysis"],
    paperUrl: "/papers/memory-safety-systems",
    category: "Programming Languages Research",
    journal: "USENIX Security Symposium",
    year: "2023",
    coAuthors: ["Prof. Lisa Wang"],
  },
  {
    title: "Side-Channel Attacks on Modern Processors",
    description:
      "Investigation of microarchitectural side-channel vulnerabilities in contemporary CPU designs and proposed mitigation strategies.",
    tags: ["Side-Channel", "Microarchitecture", "CPU Security", "Spectre", "Meltdown", "Mitigations"],
    paperUrl: "/papers/side-channel-attacks",
    category: "Hardware Security Research",
    journal: "IEEE Symposium on Security and Privacy",
    year: "2024",
    coAuthors: ["Dr. Robert Zhang", "Prof. Anna Martinez"],
  },
]

export function PapersSection() {
  return (
    <section id="papers" className="py-24 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <FileText className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-3xl font-bold font-mono">Research Papers</h2>
          </div>
          <p className="text-muted-foreground font-mono">
            Published research in cybersecurity, systems programming, and computer security
          </p>
        </div>

        <div className="space-y-6">
          {papers.map((paper, index) => (
            <div
              key={index}
              className="border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 bg-background"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-semibold font-mono">{paper.title}</h3>
                    <Badge variant="outline" className="text-xs font-mono border-purple-500 text-purple-500">
                      Research Paper
                    </Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">{paper.description}</p>

                  {/* Paper-specific info */}
                  <div className="text-sm text-muted-foreground mb-4">
                    <p>
                      <strong>Published:</strong> {paper.journal} ({paper.year})
                    </p>
                    {paper.coAuthors && (
                      <p>
                        <strong>Co-authors:</strong> {paper.coAuthors.join(", ")}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {paper.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs font-mono">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-2 ml-4">
                  <Link
                    href={paper.paperUrl}
                    className="p-2 border border-border rounded-lg hover:bg-muted transition-colors"
                  >
                    <FileText size={16} />
                  </Link>
                  <a
                    href={`${paper.paperUrl}?download=true`}
                    className="p-2 border border-border rounded-lg hover:bg-muted transition-colors"
                    title="Download PDF"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
