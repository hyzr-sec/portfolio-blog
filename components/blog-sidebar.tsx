"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import Link from "next/link"

const categories = [
  { name: "Binary Exploitation", count: 8, slug: "binary-exploitation" },
  { name: "Malware Analysis", count: 6, slug: "malware-analysis" },
  { name: "Reverse Engineering", count: 5, slug: "reverse-engineering" },
  { name: "Web Security", count: 4, slug: "web-security" },
  { name: "Cryptography", count: 3, slug: "cryptography" },
  { name: "Tools & Tutorials", count: 7, slug: "tools-tutorials" },
]

const popularTags = [
  "ROP",
  "Assembly",
  "IDA Pro",
  "Ghidra",
  "Python",
  "C++",
  "Cryptography",
  "Buffer Overflow",
  "Static Analysis",
  "Dynamic Analysis",
  "Shellcode",
  "API Security",
]

const recentPosts = [
  {
    title: "Advanced ROP Chain Construction",
    slug: "advanced-rop-chain-construction",
    date: "2024-01-15",
  },
  {
    title: "Reverse Engineering Obfuscated Malware",
    slug: "reverse-engineering-obfuscated-malware",
    date: "2024-01-10",
  },
  {
    title: "Building Secure APIs",
    slug: "building-secure-apis",
    date: "2024-01-05",
  },
]

export function BlogSidebar() {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = () => {
    if (searchTerm.trim()) {
      // In a real app, this would trigger a search
      console.log("Searching for:", searchTerm)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  return (
    <div className="space-y-6">
      {/* Search */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg">Search Articles</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input
              placeholder="Search..."
              className="bg-background"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <Button size="icon" onClick={handleSearch}>
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg">Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 rounded hover:bg-muted transition-colors cursor-pointer"
            >
              <span className="text-sm">{category.name}</span>
              <Badge variant="secondary" className="text-xs">
                {category.count}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Popular Tags */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg">Popular Tags</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {popularTags.map((tag, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Posts */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg">Recent Posts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentPosts.map((post, index) => (
            <Link key={index} href={`/blog/${post.slug}`} className="block group">
              <div className="space-y-1">
                <h4 className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-xs text-muted-foreground">{new Date(post.date).toLocaleDateString()}</p>
              </div>
            </Link>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
