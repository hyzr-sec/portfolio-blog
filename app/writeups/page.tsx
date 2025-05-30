import type { Metadata } from "next"
import { WriteupTabs } from "@/components/writeup-tabs"

export const metadata: Metadata = {
  title: "CTF Writeups & Blog",
  description: "CTF writeups, security research, and technical blog posts.",
}

export default function WriteupsPage() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Writeups & Blog</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here you find some writeups of the challenges i play or author
          </p>
        </div>
        <WriteupTabs />
      </div>
    </div>
  )
}
