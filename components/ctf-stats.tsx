import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Target, Users, Calendar } from "lucide-react"

const stats = [
  {
    icon: Trophy,
    label: "CTF Rank",
    value: "#127",
    description: "Global CTFtime ranking",
  },
  {
    icon: Target,
    label: "Challenges Solved",
    value: "234",
    description: "Across all categories",
  },
  {
    icon: Users,
    label: "Team",
    value: "CyberNinjas",
    description: "Active CTF team member",
  },
  {
    icon: Calendar,
    label: "Active Since",
    value: "2022",
    description: "Years of CTF experience",
  },
]

export function CTFStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
      {stats.map((stat, index) => (
        <Card key={index} className="text-center">
          <CardContent className="p-6">
            <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
            <div className="text-2xl font-bold mb-1">{stat.value}</div>
            <div className="text-sm font-medium mb-1">{stat.label}</div>
            <div className="text-xs text-muted-foreground">{stat.description}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
