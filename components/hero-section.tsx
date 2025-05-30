"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { FileText } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        {/* Profile Image with Electricity Animation */}
        <div className="mb-8">
          <div className="relative w-40 h-40 mx-auto mb-6">
            {/* Electricity effect */}
            <div className="absolute inset-0 rounded-full">
              <div className="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping opacity-20"></div>
              <div
                className="absolute inset-2 rounded-full border-2 border-cyan-400 animate-ping opacity-30"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="absolute inset-4 rounded-full border-2 border-blue-300 animate-ping opacity-40"
                style={{ animationDelay: "0.4s" }}
              ></div>
              <div
                className="absolute inset-6 rounded-full border-2 border-cyan-300 animate-ping opacity-50"
                style={{ animationDelay: "0.6s" }}
              ></div>
            </div>
            <Image
              src="/obito-hyzr-c.png?height=160&width=160"
              alt="Haydar Abessi (aka hyzr)"
              width={160}
              height={160}
              className="relative rounded-full border-4 border-white shadow-xl z-10"
              priority
            />
          </div>
        </div>

        {/* Name and Title - No Animation */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-5xl font-bold mb-4">Haydar Abessi (aka hyzr)</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">Software Developer & Ctf Player</p>
        </div>

        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          🚀 Testing automatic GitHub to Vercel deployment!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => scrollTo("projects")}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition"
          >
            View Projects
          </button>
          <a
            href="/writeups"
            className="px-8 py-3 border border-border rounded-lg hover:bg-muted transition text-center"
          >
            CTF Writeups
          </a>
          <a
            href="/resume"
            className="px-8 py-3 border border-border rounded-lg hover:bg-muted transition text-center flex items-center justify-center space-x-2"
          >
            <FileText size={16} />
            <span>Resume</span>
          </a>
        </div>

        <div className="flex justify-center space-x-6">
          <a href="https://github.com/hyzr-sec" target="_blank" rel="noopener noreferrer" className="hover:opacity-70">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/hayder-abbassi-3b5710217/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70">
            <Linkedin size={24} />
          </a>
          <a href="https://x.com/HayzerThe" target="_blank" rel="noopener noreferrer" className="hover:opacity-70">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://ctftime.org/user/180764"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70"
          >
            <img src="/ctf-time.svg" alt="ctftime icon" className="w-10 h-7" />
          </a>
          <a href="mailto:hayderabbassi5@gmail.com" className="hover:opacity-70">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}
