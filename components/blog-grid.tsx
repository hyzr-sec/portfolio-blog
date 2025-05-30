import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const blogPosts = [
  {
    title: "Advanced ROP Chain Construction in Modern Binaries",
    excerpt:
      "Exploring cutting-edge return-oriented programming techniques and automated chain generation for bypassing modern exploit mitigations in contemporary software.",
    date: "2024-01-15",
    readTime: "12 min read",
    category: "Binary Exploitation",
    tags: ["ROP", "Assembly", "Exploitation", "Security"],
    slug: "advanced-rop-chain-construction",
    image: "/placeholder.svg?height=200&width=400",
    featured: true,
  },
  {
    title: "Reverse Engineering Obfuscated Malware",
    excerpt:
      "A comprehensive guide to analyzing heavily obfuscated malware samples using static and dynamic analysis techniques with modern tools.",
    date: "2024-01-10",
    readTime: "15 min read",
    category: "Malware Analysis",
    tags: ["Malware", "IDA Pro", "Ghidra", "Analysis"],
    slug: "reverse-engineering-obfuscated-malware",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Building Secure APIs: A Developer's Guide",
    excerpt:
      "Essential security practices for API development, covering authentication, authorization, input validation, and common vulnerabilities.",
    date: "2024-01-05",
    readTime: "8 min read",
    category: "Web Security",
    tags: ["API", "Security", "Authentication", "Best Practices"],
    slug: "building-secure-apis",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Memory Corruption Vulnerabilities in C/C++",
    excerpt:
      "Deep dive into buffer overflows, use-after-free, and other memory corruption bugs with practical exploitation examples.",
    date: "2023-12-28",
    readTime: "10 min read",
    category: "Binary Exploitation",
    tags: ["C++", "Memory", "Vulnerabilities", "Exploitation"],
    slug: "memory-corruption-vulnerabilities",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Static Analysis with Ghidra: Advanced Techniques",
    excerpt:
      "Leveraging Ghidra's powerful features for complex binary analysis and reverse engineering workflows in security research.",
    date: "2023-12-20",
    readTime: "9 min read",
    category: "Reverse Engineering",
    tags: ["Ghidra", "Static Analysis", "Reverse Engineering"],
    slug: "static-analysis-ghidra-advanced",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Cryptographic Implementation Flaws",
    excerpt:
      "Common cryptographic implementation mistakes and how to identify them during security assessments and code reviews.",
    date: "2023-12-15",
    readTime: "7 min read",
    category: "Cryptography",
    tags: ["Cryptography", "Vulnerabilities", "Implementation"],
    slug: "cryptographic-implementation-flaws",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export function BlogGrid() {
  return (
    <div className="space-y-8">
      {blogPosts.map((post, index) => (
        <Card
          key={index}
          className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
        >
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={400}
                height={200}
                className="w-full h-48 md:h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {post.featured && (
                <Badge className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                  Featured
                </Badge>
              )}
            </div>

            <div className="md:col-span-2">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {post.category}
                  </Badge>
                  <div className="flex items-center text-xs text-muted-foreground space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors duration-200 line-clamp-2">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed line-clamp-3">{post.excerpt}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center text-sm text-primary hover:underline group-hover:translate-x-1 transition-transform"
                  >
                    Read More
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </Link>
                </div>
              </CardContent>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
