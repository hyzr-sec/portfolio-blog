import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Clock, Coffee, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="font-mono text-primary">Get In Touch</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium">Email</p>
              <p className="text-sm text-muted-foreground">alex@example.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <MapPin className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium">Location</p>
              <p className="text-sm text-muted-foreground">San Francisco, CA</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Clock className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium">Response Time</p>
              <p className="text-sm text-muted-foreground">Usually within 24 hours</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Coffee className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium">Coffee Chat</p>
              <p className="text-sm text-muted-foreground">Always up for a good conversation</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="font-mono text-primary">Connect Online</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button variant="outline" className="w-full justify-start" asChild>
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              GitHub - @alexchen
            </Link>
          </Button>

          <Button variant="outline" className="w-full justify-start" asChild>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4 mr-2" />
              LinkedIn - Haydar Abessi (aka hyzr)
            </Link>
          </Button>

          <Button variant="outline" className="w-full justify-start" asChild>
            <Link href="mailto:alex@example.com">
              <Mail className="h-4 w-4 mr-2" />
              Direct Email
            </Link>
          </Button>
        </CardContent>
      </Card>

      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="font-mono text-primary">Availability</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Security Consulting</span>
              <span className="text-green-500">Available</span>
            </div>
            <div className="flex justify-between">
              <span>Speaking Engagements</span>
              <span className="text-green-500">Available</span>
            </div>
            <div className="flex justify-between">
              <span>Full-time Opportunities</span>
              <span className="text-yellow-500">Selective</span>
            </div>
            <div className="flex justify-between">
              <span>Open Source Collaboration</span>
              <span className="text-green-500">Always</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
