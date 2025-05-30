"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, X } from "lucide-react"
import Link from "next/link"

interface SearchResult {
  title: string
  description: string
  type: "dev-project" | "security-project" | "writeup" | "authored" | "paper"
  href: string
  tags: string[]
}

const searchData: SearchResult[] = [
  {
    title: "Modern Portfolio Platform",
    description: "Full-stack portfolio and blog platform built with Next.js",
    type: "dev-project",
    href: "#projects",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
  },
  {
    title: "Binary Exploitation Framework",
    description: "Automated ROP chain generation and exploit development toolkit",
    type: "security-project",
    href: "#projects",
    tags: ["C++", "Python", "Assembly"],
  },
  {
    title: "PicoCTF 2024 - Buffer Overflow 3",
    description: "Advanced buffer overflow exploitation with modern mitigations bypass",
    type: "writeup",
    href: "/writeups/picoctf-2024-buffer-overflow-3",
    tags: ["ROP", "Buffer Overflow", "x64"],
  },
  {
    title: "Advanced ROP Techniques in Modern Binary Exploitation",
    description: "Comprehensive analysis of return-oriented programming evolution and novel bypass techniques",
    type: "paper",
    href: "/papers/advanced-rop-techniques",
    tags: ["ROP", "Binary Exploitation", "Research"],
  },
  {
    title: "Automated Malware Analysis Using Machine Learning",
    description: "Novel approach to malware classification using deep learning techniques",
    type: "paper",
    href: "/papers/automated-malware-analysis",
    tags: ["Machine Learning", "Malware Analysis", "Deep Learning"],
  },
  {
    title: "Memory Safety in Systems Programming Languages",
    description: "Comparative study of memory safety mechanisms in Rust, C++, and emerging languages",
    type: "paper",
    href: "/papers/memory-safety-systems",
    tags: ["Memory Safety", "Rust", "C++"],
  },
  {
    title: "Side-Channel Attacks on Modern Processors",
    description: "Investigation of microarchitectural side-channel vulnerabilities in contemporary CPU designs",
    type: "paper",
    href: "/papers/side-channel-attacks",
    tags: ["Side-Channel", "Microarchitecture", "CPU Security"],
  },
]

interface GlobalSearchProps {
  isOpen: boolean
  onClose: () => void
}

export function GlobalSearch({ isOpen, onClose }: GlobalSearchProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])

  useEffect(() => {
    if (searchTerm.trim()) {
      const filtered = searchData.filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
      )
      setResults(filtered)
    } else {
      setResults([])
    }
  }, [searchTerm])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      return () => document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "dev-project":
        return "Development"
      case "security-project":
        return "Security"
      case "writeup":
        return "CTF Writeup"
      case "authored":
        return "Authored CTF"
      case "paper":
        return "Research Paper"
      default:
        return type
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "dev-project":
        return "border-blue-500 text-blue-500"
      case "security-project":
        return "border-red-500 text-red-500"
      case "writeup":
        return "border-green-500 text-green-500"
      case "authored":
        return "border-orange-500 text-orange-500"
      case "paper":
        return "border-purple-500 text-purple-500"
      default:
        return "border-gray-500 text-gray-500"
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20">
      <div className="w-full max-w-2xl mx-4">
        <Card className="border-2">
          <CardContent className="p-4">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search projects, papers, writeups, and more..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-10 font-mono"
                autoFocus
              />
              <button
                onClick={onClose}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 hover:opacity-70"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {results.length > 0 && (
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {results.map((result, index) => (
                  <Link
                    key={index}
                    href={result.href}
                    onClick={onClose}
                    className="block p-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold font-mono">{result.title}</h3>
                      <Badge variant="outline" className={`text-xs ${getTypeColor(result.type)}`}>
                        {getTypeLabel(result.type)}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{result.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {result.tags.slice(0, 3).map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {searchTerm && results.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                <p>No results found for "{searchTerm}"</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
