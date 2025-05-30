import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const categories = [
  { name: "Security Research", count: 12 },
  { name: "Reverse Engineering", count: 8 },
  { name: "Binary Exploitation", count: 6 },
  { name: "Malware Analysis", count: 5 },
  { name: "Web Development", count: 9 },
  { name: "CTF Writeups", count: 15 },
  { name: "Tools & Tutorials", count: 7 },
]

const recentTags = [
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
]

export function BlogCategories() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-mono text-primary">Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={`/blog/category/${category.name.toLowerCase().replace(" ", "-")}`}
              className="flex items-center justify-between p-2 rounded hover:bg-muted transition-colors"
            >
              <span className="text-sm">{category.name}</span>
              <Badge variant="secondary" className="text-xs">
                {category.count}
              </Badge>
            </Link>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-mono text-primary">Popular Tags</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {recentTags.map((tag, index) => (
              <Link key={index} href={`/blog/tag/${tag.toLowerCase()}`}>
                <Badge
                  variant="outline"
                  className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {tag}
                </Badge>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
