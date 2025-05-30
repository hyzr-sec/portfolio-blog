"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, Search, Users } from "lucide-react"
import Link from "next/link"

const ctfWriteups = [
  {
    title: "PWN1",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "Binary Exploitation",
    difficulty: "Hard",
    points: 500,
    date: "2025-05-10",
    slug: "pwn1",
    ctfName: "CyberTek CTF 2025",
    solves: 1,
  },
  {
    title: "PWN2",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "Binary Exploitation",
    difficulty: "Medium",
    points: 500,
    date: "2025-05-10",
    slug: "pwn2",
    ctfName: "CyberTek CTF 2025",
    solves: 2,
  },
  {
    title: "PWN3",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "Binary Exploitation",
    difficulty: "Easy",
    points: 500,
    date: "2025-05-10",
    slug: "pwn3",
    ctfName: "CyberTek CTF 2025",
    solves: 9,
  },
]

const difficultyColors = {
	Easy: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
	Medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
	Hard: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
}

export function CTFPlayedGrid() {
	const [searchTerm, setSearchTerm] = useState("")

	const filteredWriteups = ctfWriteups.filter((writeup) => {
		const matchesSearch =
			writeup.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			writeup.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
			writeup.ctfName.toLowerCase().includes(searchTerm.toLowerCase())

		return matchesSearch
	})

	return (
		<div className="space-y-8">
			{/* Search */}
			<div className="space-y-4">
				<div className="relative max-w-md mx-auto">
					<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
					<Input
						placeholder="Search CTF writeups..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="pl-10"
					/>
				</div>
			</div>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{filteredWriteups.map((writeup, index) => (
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
								<Link href={`/writeups/${writeup.slug}`}>{writeup.title}</Link>
							</CardTitle>
							<CardDescription className="text-sm leading-relaxed">{writeup.description}</CardDescription>
						</CardHeader>

						<CardContent> 
							<div className="space-y-4">
								<div className="flex items-center text-xs text-muted-foreground">
									<Calendar className="h-3 w-3 mr-1" />
									{new Date(writeup.date).toLocaleDateString()}
								</div>

								<div className="flex items-center justify-between text-xs border-t pt-2">
									<div>
										<strong>{writeup.ctfName}</strong>
									</div>
									<div className="flex items-center space-x-1">
										<Users className="h-3 w-3" />
										<span className="text-muted-foreground">
											{writeup.solves} solves
										</span>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				))}
			</div>

			{filteredWriteups.length === 0 && (
				<div className="text-center py-12">
					<p className="text-muted-foreground">No writeups found matching your criteria.</p>
				</div>
			)}
		</div>
	)
}
