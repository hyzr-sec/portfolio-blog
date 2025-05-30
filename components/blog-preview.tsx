import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

const recentPosts = [
  {
    title: "Advanced ROP Chain Construction Techniques",
    excerpt:
      "Exploring modern return-oriented programming techniques and automated chain generation for complex exploitation scenarios.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Binary Exploitation",
    slug: "advanced-rop-chain-construction",
  },
  {
    title: "Reverse Engineering Modern Malware",
    excerpt: "A deep dive into analyzing contemporary malware samples using static and dynamic analysis techniques.",
    date: "2024-01-10",
    readTime: "12 min read",
    category: "Malware Analysis",
    slug: "reverse-engineering-modern-malware",
  },
  {
    title: "Building Secure Applications from the Ground Up",
    excerpt: "Security-first development practices and common pitfalls to avoid when building modern web applications.",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Security",
    slug: "building-secure-applications",
  },
]

export function BlogPreview() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-primary font-mono">$</span> cat blog/latest
            </h2>
            <p className="text-lg text-muted-foreground">
              Latest insights on security research, reverse engineering, and development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {recentPosts.map((post, index) => (
              <Card key={index} className="border-border/50 group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  <CardTitle className="font-mono group-hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                    <Button variant="ghost" size="sm" asChild className="font-mono">
                      <Link href={`/blog/${post.slug}`}>
                        Read More
                        <ArrowRight className="h-3 w-3 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline" className="font-mono">
              <Link href="/blog">View All Posts</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
