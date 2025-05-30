import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const recentPosts = [
  {
    title: "Advanced ROP Chain Construction in Modern Binaries",
    excerpt:
      "Exploring cutting-edge return-oriented programming techniques and automated chain generation for bypassing modern exploit mitigations.",
    date: "2024-01-15",
    readTime: "12 min read",
    category: "Binary Exploitation",
    slug: "advanced-rop-chain-construction",
    image: "/placeholder.svg?height=200&width=400",
    featured: true,
  },
  {
    title: "Reverse Engineering Obfuscated Malware",
    excerpt:
      "A comprehensive guide to analyzing heavily obfuscated malware samples using static and dynamic analysis techniques.",
    date: "2024-01-10",
    readTime: "15 min read",
    category: "Malware Analysis",
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
    slug: "building-secure-apis",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <BookOpen className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-4xl md:text-5xl font-bold">Latest Insights</h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deep dives into cybersecurity research, reverse engineering techniques, and software development best
              practices.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {recentPosts.map((post, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {post.featured && (
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-green-500 to-blue-500 text-white">
                      Featured
                    </Badge>
                  )}
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground space-x-2">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors duration-200 line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                    <Button variant="ghost" size="sm" asChild className="group-hover:text-primary">
                      <Link href={`/blog/${post.slug}`} className="flex items-center">
                        Read More
                        <ArrowRight className="h-3 w-3 ml-1 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View All Posts Button */}
          <div className="text-center">
            <Button size="lg" variant="outline" asChild>
              <Link href="/blog">
                View All Articles
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
