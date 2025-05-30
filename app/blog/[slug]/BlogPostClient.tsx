"use client"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Mock blog post data - in a real app, this would come from your database
const blogPosts = {
  "advanced-rop-chain-construction": {
    title: "Advanced ROP Chain Construction in Modern Binaries",
    date: "2024-01-15",
    readTime: "12 min read",
    category: "Binary Exploitation",
    tags: ["ROP", "Assembly", "Exploitation", "Security"],
    content: `
# Advanced ROP Chain Construction in Modern Binaries

Return-oriented programming (ROP) has evolved significantly since its introduction, becoming one of the most sophisticated exploitation techniques in modern cybersecurity. This comprehensive guide explores advanced ROP chain construction techniques that work against contemporary binaries with modern mitigations.

## Understanding Modern ROP Challenges

Today's exploitation landscape is vastly different from the early days of buffer overflows. Modern systems implement multiple layers of protection:

- **Address Space Layout Randomization (ASLR)**: Randomizes memory layout
- **Data Execution Prevention (DEP/NX)**: Prevents code execution in data segments  
- **Stack Canaries**: Detect stack buffer overflows
- **Control Flow Integrity (CFI)**: Validates indirect calls and jumps

These mitigations make traditional exploitation techniques ineffective, necessitating more sophisticated approaches like ROP.

## ROP Fundamentals Revisited

ROP works by chaining together small instruction sequences called "gadgets" that end in a return instruction. By controlling the stack, an attacker can execute arbitrary computation without injecting code.

\`\`\`assembly
; Example ROP gadget
pop rdi; ret    ; Load first argument into RDI
pop rsi; ret    ; Load second argument into RSI  
call system    ; Execute system call
\`\`\`

## Advanced Gadget Discovery

Modern ROP chain construction requires sophisticated gadget discovery techniques.

### Automated Gadget Mining

Tools like ROPgadget and ropper can identify potential gadgets, but manual analysis often reveals more useful sequences.

### Semantic Gadget Analysis

Beyond simple instruction sequences, we need to understand the semantic meaning of gadgets.

## Conclusion

Advanced ROP chain construction requires deep understanding of target binary architecture, available gadgets, and modern mitigation bypass techniques. The key to successful modern exploitation is combining theoretical knowledge with practical tooling and extensive testing.

Remember: This knowledge should only be used for legitimate security research, penetration testing, and defensive purposes.
    `,
  },
  "reverse-engineering-obfuscated-malware": {
    title: "Reverse Engineering Obfuscated Malware",
    date: "2024-01-10",
    readTime: "15 min read",
    category: "Malware Analysis",
    tags: ["Malware", "IDA Pro", "Ghidra", "Analysis"],
    content: `
# Reverse Engineering Obfuscated Malware

Modern malware increasingly employs sophisticated obfuscation techniques to evade detection and complicate analysis. This guide explores advanced methodologies for analyzing heavily obfuscated malware samples using both static and dynamic analysis approaches.

## The Evolution of Malware Obfuscation

Malware authors have evolved their techniques significantly over the past decade. What once were simple packers have become complex multi-stage obfuscation systems that challenge even experienced analysts.

### Common Obfuscation Techniques

1. **Control Flow Obfuscation**: Flattening, bogus control flow
2. **Data Obfuscation**: String encryption, constant hiding
3. **Anti-Analysis**: VM detection, debugger detection
4. **Code Virtualization**: Custom VMs, bytecode interpretation
5. **Metamorphic Engines**: Self-modifying code

## Static Analysis Approach

### Initial Triage

Before diving deep, perform initial triage to understand what you're dealing with.

## Conclusion

Reverse engineering obfuscated malware requires a combination of static analysis, dynamic analysis, automated tools, pattern recognition, and persistence. The key is to remain methodical and document your findings.
    `,
  },
  "building-secure-apis": {
    title: "Building Secure APIs: A Developer's Guide",
    date: "2024-01-05",
    readTime: "8 min read",
    category: "Web Security",
    tags: ["API", "Security", "Authentication", "Best Practices"],
    content: `
# Building Secure APIs: A Developer's Guide

API security is often treated as an afterthought in the development process, but it should be a fundamental consideration from the very beginning. This comprehensive guide covers essential security practices for building robust, secure APIs that can withstand modern attack vectors.

## The API Security Landscape

Modern applications rely heavily on APIs for communication between services, mobile apps, and third-party integrations. This increased reliance has made APIs attractive targets for attackers, leading to numerous high-profile breaches.

### Common API Vulnerabilities

The OWASP API Security Top 10 identifies the most critical API security risks:

1. **Broken Object Level Authorization**
2. **Broken User Authentication** 
3. **Excessive Data Exposure**
4. **Lack of Resources & Rate Limiting**
5. **Broken Function Level Authorization**

## Authentication and Authorization

### JWT Implementation Best Practices

JSON Web Tokens are widely used but often implemented incorrectly.

## Conclusion

Building secure APIs requires a multi-layered approach including authentication & authorization, input validation, rate limiting, security headers, error handling, and logging & monitoring.

Security should be built into every layer of your API, not added as an afterthought.
    `,
  },
}

type Props = {
  params: { slug: string }
}

export default function BlogPostClient({ params }: Props) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  // Convert markdown-like content to HTML with better formatting
  const formatContent = (content: string) => {
    const lines = content.split("\n").filter((line) => line.trim() !== "")
    let inCodeBlock = false
    let inList = false

    return (
      lines
        .map((line, index) => {
          // Handle code blocks
          if (line.startsWith("```")) {
            inCodeBlock = !inCodeBlock
            const lang = line.slice(3)
            return inCodeBlock && lang
              ? `<pre class="bg-muted p-4 rounded-lg overflow-x-auto mb-4 font-mono text-sm border"><code class="language-${lang}">`
              : `</code></pre>`
          }

          if (inCodeBlock) {
            return line
          }

          // Handle headings
          if (line.startsWith("# ")) {
            return `<h1 class="text-3xl font-bold mb-6 mt-8 first:mt-0">${line.slice(2)}</h1>`
          }
          if (line.startsWith("## ")) {
            return `<h2 class="text-2xl font-semibold mb-4 mt-8">${line.slice(3)}</h2>`
          }
          if (line.startsWith("### ")) {
            return `<h3 class="text-xl font-semibold mb-3 mt-6">${line.slice(4)}</h3>`
          }

          // Handle lists
          if (line.startsWith("- ")) {
            if (!inList) {
              inList = true
              return `<ul class="list-disc pl-6 mb-4 space-y-2"><li class="leading-relaxed">${line.slice(2)}</li>`
            }
            return `<li class="leading-relaxed">${line.slice(2)}</li>`
          } else if (inList) {
            inList = false
            return `</ul><p class="mb-4 leading-relaxed">${line}</p>`
          }

          // Handle numbered lists
          if (/^\d+\./.test(line)) {
            const content = line.replace(/^\d+\.\s*/, "")
            return `<li class="leading-relaxed"><strong>${content}</strong></li>`
          }

          // Handle inline code
          if (line.includes("`") && !line.startsWith("```")) {
            const formatted = line.replace(
              /`([^`]+)`/g,
              '<code class="bg-muted px-2 py-1 rounded text-sm font-mono">$1</code>',
            )
            return `<p class="mb-4 leading-relaxed">${formatted}</p>`
          }

          // Handle bold text
          if (line.includes("**")) {
            const formatted = line.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
            return `<p class="mb-4 leading-relaxed">${formatted}</p>`
          }

          // Regular paragraphs
          return `<p class="mb-4 leading-relaxed">${line}</p>`
        })
        .join("") + (inList ? "</ul>" : "")
    )
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: `Check out this article: ${post.title}`,
          url: window.location.href,
        })
      } catch (err) {
        console.log("Error sharing:", err)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      // You could show a toast notification here
    }
  }

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/blog" className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Blog</span>
            </Link>
          </Button>

          <article className="prose prose-lg dark:prose-invert max-w-none">
            <header className="mb-12">
              <div className="flex items-center space-x-2 mb-4">
                <Badge variant="secondary">{post.category}</Badge>
                {post.tags.slice(0, 3).map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>

              <div className="flex items-center space-x-6 text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
                <Button variant="ghost" size="sm" onClick={handleShare}>
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </header>

            <div
              className="prose-headings:font-bold prose-p:mb-4 prose-p:leading-relaxed prose-pre:bg-muted prose-pre:p-4 prose-pre:rounded-lg prose-code:bg-muted prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-ul:mb-4 prose-li:mb-2"
              dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
            />
          </article>
        </div>
      </div>
    </div>
  )
}
