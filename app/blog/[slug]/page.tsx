import type { Metadata } from "next"
import BlogPostClient from "./BlogPostClient"

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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: post.title,
    description: `${post.title} - ${post.readTime}`,
    openGraph: {
      title: post.title,
      description: `${post.title} - ${post.readTime}`,
      type: "article",
      publishedTime: post.date,
      authors: ["Haydar Abessi (aka hyzr)"],
      tags: post.tags,
    },
  }
}

export default function BlogPost({ params }: Props) {
  return <BlogPostClient params={params} />
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}
