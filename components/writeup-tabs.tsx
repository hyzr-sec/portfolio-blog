"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CTFPlayedGrid } from "@/components/ctf-played-grid"
import { CTFAuthoredGrid } from "@/components/ctf-authored-grid"
import { Trophy, Edit } from "lucide-react"

export function WriteupTabs() {
  return (
    <Tabs defaultValue="played" className="w-full">
      <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
        <TabsTrigger value="played" className="flex items-center space-x-2">
          <Trophy size={16} />
          <span>CTFs Played</span>
        </TabsTrigger>
        <TabsTrigger value="authored" className="flex items-center space-x-2">
          <Edit size={16} />
          <span>CTFs Authored</span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="played">
        <CTFPlayedGrid />
      </TabsContent>

      <TabsContent value="authored">
        <CTFAuthoredGrid />
      </TabsContent>
    </Tabs>
  )
}
