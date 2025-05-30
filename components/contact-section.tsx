"use client"

import type React from "react"

import { useState } from "react"
import { Github, Mail, Linkedin } from "lucide-react"

export function ContactSection() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple mailto fallback
    window.location.href = `mailto:haydar.abessi@example.com?subject=Contact from Portfolio&body=${encodeURIComponent(message)}`
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Contact</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-muted-foreground mb-8">
              Interested in collaboration or have questions about security research? Let's connect.
            </p>

            <div className="space-y-4">
              <a href="mailto:haydar.abessi@example.com" className="flex items-center space-x-3 hover:text-primary transition">
                <Mail size={20} />
                <span>haydar.abessi@example.com</span>
              </a>
              <a href="https://github.com/hyzr-sec" className="flex items-center space-x-3 hover:text-primary transition">
                <Github size={20} />
                <span>github.com/hyzr-sec</span>
              </a>
              <a href="https://linkedin.com/in/haydar-abessi" className="flex items-center space-x-3 hover:text-primary transition">
                <Linkedin size={20} />
                <span>linkedin.com/in/haydar-abessi</span>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-border rounded-lg bg-background"
            />
            <textarea
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={6}
              className="w-full px-4 py-3 border border-border rounded-lg bg-background resize-none"
            />
            <button
              type="submit"
              className="w-full px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
