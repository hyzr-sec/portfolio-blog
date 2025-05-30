import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ExternalLink } from "lucide-react"
import Link from "next/link"

const ctfWriteups = [
  {
    title: "PicoCTF 2024 - Binary Exploitation",
    description: "Buffer overflow exploitation with modern mitigations bypass using ROP chains.",
    category: "Binary Exploitation",
    difficulty: "Hard",
    points: 500,
    date: "2024-01-20",
    readTime: "8 min read",
    slug: "picoctf-2024-binary-exploitation",
    ctfName: "PicoCTF 2024",
    tags: ["ROP", "Buffer Overflow", "x64"],
  },
  {
    title: "HTB Cyber Apocalypse - Reverse Engineering",
    description: "Analyzing obfuscated malware with custom packing and anti-debugging techniques.",
    category: "Reverse Engineering",
    difficulty: "Medium",
    points: 350,
    date: "2024-01-15",
    readTime: "12 min read",
    slug: "htb-cyber-apocalypse-reverse",
    ctfName: "HTB Cyber Apocalypse",
    tags: ["Malware", "Unpacking", "IDA Pro"],
  },
  {
    title: "DEFCON CTF Quals - Cryptography",
    description: "Breaking custom RSA implementation with weak key generation and timing attacks.",
    category: "Cryptography",
    difficulty: "Hard",
    points: 450,
    date: "2024-01-10",
    readTime: "15 min read",
    slug: "defcon-ctf-crypto",
    ctfName: "DEFCON CTF Quals",
    tags: ["RSA", "Timing Attack", "Python"],
  },
  {
    title: "Google CTF - Web Security",
    description: "SQL injection in GraphQL endpoint with custom authentication bypass.",
    category: "Web Security",
    difficulty: "Medium",
    points: 300,
    date: "2024-01-05",
    readTime: "6 min read",
    slug: "google-ctf-web",
    ctfName: "Google CTF",
    tags: ["SQL Injection", "GraphQL", "Authentication"],
  },
  {
    title: "PlaidCTF - Forensics",
    description: "Memory dump analysis revealing hidden malware persistence mechanisms.",
    category: "Forensics",
    difficulty: "Medium",
    points: 275,
    date: "2023-12-28",
    readTime: "10 min read",
    slug: "plaidctf-forensics",
    ctfName: "PlaidCTF",
    tags: ["Memory Analysis", "Volatility", "Persistence"],
  },
  {
    title: "CSAW CTF - Pwn",
    description: "Heap exploitation using tcache poisoning and arbitrary write primitives.",
    category: "Binary Exploitation",
    difficulty: "Hard",
    points: 400,
    date: "2023-12-20",
    readTime: "14 min read",
    slug: "csaw-ctf-pwn",
    ctfName: "CSAW CTF",
    tags: ["Heap", "Tcache", "Exploitation"],
  },
]

const difficultyColors = {
  Easy: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  Medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  Hard: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
}

export function CTFGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {ctfWriteups.map((writeup, index) => (
        <Card key={index} className="group hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <div className="flex items-center justify-between mb-2">
              <Badge variant="secondary" className="text-xs">
                {writeup.category}
              </Badge>
              <div className="flex items-center space-x-2">
                <Badge
                  className={`text-xs ${difficultyColors[writeup.difficulty as keyof typeof difficultyColors]}`}
                  variant="outline"
                >
                  {writeup.difficulty}
                </Badge>
                <span className="text-xs text-muted-foreground font-mono">{writeup.points}pts</span>
              </div>
            </div>
            <CardTitle className="group-hover:text-primary transition-colors">
              <Link href={`/ctf/${writeup.slug}`}>{writeup.title}</Link>
            </CardTitle>
            <CardDescription className="text-sm leading-relaxed">{writeup.description}</CardDescription>
          </CardHeader>

          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {new Date(writeup.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {writeup.readTime}
                  </div>
                </div>
                <Link href={`/ctf/${writeup.slug}`} className="flex items-center hover:text-primary transition-colors">
                  Read
                  <ExternalLink className="h-3 w-3 ml-1" />
                </Link>
              </div>

              <div className="flex flex-wrap gap-2">
                {writeup.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="text-xs text-muted-foreground border-t pt-2">
                <strong>{writeup.ctfName}</strong>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
