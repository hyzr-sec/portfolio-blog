import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch for collaboration opportunities, security research discussions, or just to say hello.",
}

export default function ContactPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary font-mono">$</span> echo "Hello, World!"
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's connect! Whether you want to discuss security research, collaborate on projects, or just chat about
            the latest in cybersecurity and development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </div>
  )
}
