import type { Metadata } from "next"
import { BlogGrid } from "@/components/blog-grid"
import { BlogSidebar } from "@/components/blog-sidebar"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical articles on cybersecurity, reverse engineering, binary exploitation, and software development.",
}

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Technical Blog</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              In-depth articles on cybersecurity research, reverse engineering techniques, and software development
              insights.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <BlogGrid />
            </div>
            <div className="lg:col-span-1">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
