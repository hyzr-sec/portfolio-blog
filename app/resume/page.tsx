import type { Metadata } from "next"
import { ResumeViewer } from "@/components/resume-viewer"

export const metadata: Metadata = {
  title: "Resume - Haydar Abessi (aka hyzr)",
  description: "Software Developer & Ctf Player Resume",
}

export default function ResumePage() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <ResumeViewer />
    </div>
  )
}
