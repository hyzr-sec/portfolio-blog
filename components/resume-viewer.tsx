"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, ExternalLink, Mail, Phone, MapPin, Globe } from "lucide-react"

// Utility function to load jsPDF dynamically
const loadJsPDF = async () => {
  const { jsPDF } = await import("jspdf")
  return jsPDF
}

export function ResumeViewer() {
  const [isDownloading, setIsDownloading] = useState(false)

  const generateResumePDF = async () => {
    try {
      const jsPDF = await loadJsPDF()
      const doc = new jsPDF()
      // Logo
      doc.addImage("/resume-picture.png", "PNG", 85, 5, 40, 40)
      // Header
      doc.setFont("helvetica", "bold")
      doc.setFontSize(20)
      doc.text("Haydar Abessi (aka hyzr)", 105, 55, { align: "center" })

      doc.setFont("helvetica", "normal")
      doc.setFontSize(14)
      doc.text("Software Developer & Ctf Player", 105, 65, { align: "center" })

      // Contact Info
      doc.setFontSize(10)
      doc.text("hayderabbassi5@gmail.com | +216 90 521 709 | Ariana, Tunisia | www.hyzr.tech", 105, 75, { align: "center" })

      let yPos = 90

      // Professional Summary
      doc.setFont("helvetica", "bold")
      doc.setFontSize(12)
      doc.text("PROFESSIONAL SUMMARY", 15, yPos)
      yPos += 8

      doc.setFont("helvetica", "normal")
      doc.setFontSize(10)
      const summary =
        "Computer science student at the Higher Institute of Computer Science, focused on developing my skills in software development and all related fields. Actively engaged in clubs, notably as GR and technical member of Securinets ISI (2023–2024), and contributor & CTF challenge author at Securinets Tekup. Passionate about cybersecurity, especially vulnerability research and reverse engineering. Also a full-stack developer and occasional open-source contributor. Rigorous, proactive, and a strong team player — looking for a dynamic internship to grow and contribute."
      const summaryLines = doc.splitTextToSize(summary, 180)
      doc.text(summaryLines, 15, yPos)
      yPos += summaryLines.length * 5 + 10 - 8

      // Professional Experience
      // doc.setFont("helvetica", "bold")
      // doc.setFontSize(12)
      // doc.text("PROFESSIONAL EXPERIENCE", 15, yPos)
      // yPos += 10

      // // Senior Security Engineer
      // doc.setFont("helvetica", "bold")
      // doc.setFontSize(11)
      // doc.text("Senior Security Engineer", 15, yPos)
      // doc.setFont("helvetica", "normal")
      // doc.text("2022 - Present", 180, yPos)
      // yPos += 6
      // doc.setFont("helvetica", "italic")
      // doc.text("CyberSec Corp", 15, yPos)
      // yPos += 8

      // doc.setFont("helvetica", "normal")
      // doc.setFontSize(9)
      // const experiences = [
      //   "• Led development of automated binary analysis platform, reducing analysis time by 60%",
      //   "• Discovered and responsibly disclosed 15+ CVEs in popular software packages",
      //   "• Built custom exploitation frameworks used by red team for penetration testing",
      //   "• Mentored junior security researchers and conducted security training sessions",
      // ]

      // experiences.forEach((exp) => {
      //   const expLines = doc.splitTextToSize(exp, 175)
      //   doc.text(expLines, 15, yPos)
      //   yPos += expLines.length * 4
      // })
      // yPos += 8

      // // Software Engineer
      // doc.setFont("helvetica", "bold")
      // doc.setFontSize(11)
      // doc.text("Software Engineer", 15, yPos)
      // doc.setFont("helvetica", "normal")
      // doc.text("2020 - 2022", 180, yPos)
      // yPos += 6
      // doc.setFont("helvetica", "italic")
      // doc.text("TechStart Inc", 15, yPos)
      // yPos += 8

      // doc.setFont("helvetica", "normal")
      // doc.setFontSize(9)
      // const experiences2 = [
      //   "• Developed high-performance backend services handling 1M+ requests per day",
      //   "• Implemented security-first architecture reducing vulnerabilities by 80%",
      //   "• Collaborated with cross-functional teams to deliver scalable web applications",
      // ]

      // experiences2.forEach((exp) => {
      //   const expLines = doc.splitTextToSize(exp, 175)
      //   doc.text(expLines, 15, yPos)
      //   yPos += expLines.length * 4
      // })
      // yPos += 10

      // Technical Skills
      doc.setFont("helvetica", "bold")
      doc.setFontSize(12)
      doc.text("TECHNICAL SKILLS", 15, yPos)
      yPos += 8

      doc.setFont("helvetica", "bold")
      doc.setFontSize(10)
      doc.text("Programming Languages:", 15, yPos)
      doc.setFont("helvetica", "normal")
      doc.text("C/C++, Python, Assembly, Java, C#, JavaScript, PHP", 70, yPos)
      yPos += 6

      doc.setFont("helvetica", "bold")
      doc.text("Security Tools:", 15, yPos)
      doc.setFont("helvetica", "normal")
      doc.text("IDA Pro, Ghidra, GDB, Wireshark, Burp Suite, Nmap", 55, yPos)
      yPos += 6

      doc.setFont("helvetica", "bold")
      doc.text("Frameworks:", 15, yPos)
      doc.setFont("helvetica", "normal")
      doc.text("React, Next.js, Node.js, PostgreSQL, OracleDB, MySQL/MariaDB, Docker, Git, Linux, Flask, .NET", 50, yPos)
      yPos += 14

      // Education
      doc.setFont("helvetica", "bold")
      doc.setFontSize(12)
      doc.text("EDUCATION", 15, yPos)
      yPos += 8

      doc.setFont("helvetica", "bold")
      doc.setFontSize(10)
      doc.text("Bachelor of Science in Computer Science", 15, yPos)
      doc.setFont("helvetica", "normal")
      doc.text("2023 - 2026", 180, yPos)
      yPos += 6
      doc.setFont("helvetica", "italic")
      doc.text("Higher Institute of Computer Science, Tunisia", 15, yPos)
      yPos += 8
      doc.setFont("helvetica", "bold")
      doc.setFontSize(10)
      doc.text("Baccalaureate in Mathematics", 15, yPos)
      doc.setFont("helvetica", "normal")
      doc.text("2022 - 2023", 180, yPos)
      yPos += 6
      doc.setFont("helvetica", "italic")
      doc.text("Grambalia Technical High School", 15, yPos)
      yPos += 6
      doc.setFont("helvetica", "italic")
      doc.text("- Graduated with “Très Bien” (Very Good) distinction", 15, yPos)
      yPos += 14

      // Certifications
      // doc.setFont("helvetica", "bold")
      // doc.setFontSize(12)
      // doc.text("CERTIFICATIONS", 15, yPos)
      // yPos += 8

      // doc.setFont("helvetica", "normal")
      // doc.setFontSize(9)
      // const certs = [
      //   "• Certified Ethical Hacker (CEH) - EC-Council (2023)",
      //   "• OSCP (Offensive Security Certified Professional) - Offensive Security (2022)",
      //   "• AWS Certified Solutions Architect - Amazon Web Services (2021)",
      //   "• CISSP - ISC² (2021)",
      // ]

      // certs.forEach((cert) => {
      //   doc.text(cert, 15, yPos)
      //   yPos += 5
      // })
      // yPos += 5

      // Notable Achievements
      doc.setFont("helvetica", "bold")
      doc.setFontSize(12)
      doc.text("NOTABLE ACHIEVEMENTS", 15, yPos)
      yPos += 8

      doc.setFont("helvetica", "normal")
      doc.setFontSize(11)
      const achievements = [
        "• Qualified for multiple CTF finals, including Hackfest'8",
        "• 2nd place at SparkCTF 2025",
        "• 2nd place at Hack To The Future CTF",
        "• Binary exploitation author at CTF Kareem by Securinets Tekup",
        "• Binary exploitation author at the prestigious CyberTek2.0 CTF"
      ]

      achievements.forEach((achievement) => {
        const achLines = doc.splitTextToSize(achievement, 175)
        doc.text(achLines, 15, yPos)
        yPos += achLines.length * 4
      })

      // Save the PDF
      doc.save("Haydar_Abessi_Resume.pdf")
      return true
    } catch (error) {
      console.error("Resume PDF generation failed:", error)
      return false
    }
  }

  const handleDownload = async () => {
    setIsDownloading(true)

    try {
      const success = await generateResumePDF()
      if (!success) {
        throw new Error("Resume PDF generation failed")
      }
    } catch (error) {
      console.error("Download failed:", error)
      alert("PDF generation failed. Please try again or use the print function.")
    }

    setIsDownloading(false)
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="max-w-4xl mx-auto px-6">
      {/* Header Actions */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Resume</h1>
        <div className="flex space-x-4">
          <Button onClick={handlePrint} variant="outline">
            <ExternalLink className="h-4 w-4 mr-2" />
            Print
          </Button>
          <Button onClick={handleDownload} disabled={isDownloading}>
            <Download className="h-4 w-4 mr-2" />
            {isDownloading ? "Generating PDF..." : "Download PDF"}
          </Button>
        </div>
      </div>

      {/* Resume Content */}
      <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-8 print:shadow-none print:p-0">
        {/* Header */}
        <div className="text-center mb-8 border-b pb-6">
          <h1 className="text-4xl font-bold mb-2">Haydar Abessi (aka hyzr)</h1>
          <p className="text-xl text-muted-foreground mb-4">Software Developer & Ctf Player</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-1" />
              hayderabbassi5@gmail.com
            </div>
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-1" />
              +216 90 521 709
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              Ariana, Tunisia
            </div>
            <div className="flex items-center">
              <Globe className="h-4 w-4 mr-1" />
              www.hyzr.tech
            </div>
          </div>
        </div>

        {/* Summary */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-primary">Professional Summary</h2>
          <p className="text-muted-foreground leading-relaxed">
            Computer science student at the Higher Institute of Computer Science, focused on developing my skills in software development and all related fields. Actively engaged in clubs, notably as GR and technical member of Securinets ISI (2023–2024), and contributor & CTF challenge author at Securinets Tekup. Passionate about cybersecurity, especially vulnerability research and reverse engineering. Also a full-stack developer and occasional open-source contributor. Rigorous, proactive, and a strong team player — looking for a dynamic internship to grow and contribute.
          </p>
        </section>

        {/* Experience */}
        <section className="hidden mb-8">
          <h2 className="text-2xl font-bold mb-4 text-primary">Professional Experience</h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold">Senior Security Engineer</h3>
                  <p className="text-muted-foreground">CyberSec Corp</p>
                </div>
                <span className="text-sm text-muted-foreground">2022 - Present</span>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Led development of automated binary analysis platform, reducing analysis time by 60%</li>
                <li>Discovered and responsibly disclosed 15+ CVEs in popular software packages</li>
                <li>Built custom exploitation frameworks used by red team for penetration testing</li>
                <li>Mentored junior security researchers and conducted security training sessions</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold">Software Engineer</h3>
                  <p className="text-muted-foreground">TechStart Inc</p>
                </div>
                <span className="text-sm text-muted-foreground">2020 - 2022</span>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Developed high-performance backend services handling 1M+ requests per day</li>
                <li>Implemented security-first architecture reducing vulnerabilities by 80%</li>
                <li>Collaborated with cross-functional teams to deliver scalable web applications</li>
                <li>Optimized database queries and system performance, improving response times by 40%</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold">Junior Developer</h3>
                  <p className="text-muted-foreground">DevSolutions LLC</p>
                </div>
                <span className="text-sm text-muted-foreground">2019 - 2020</span>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Built responsive web applications using React and Node.js</li>
                <li>Participated in code reviews and agile development processes</li>
                <li>Contributed to open-source security tools and libraries</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-primary">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {["C/C++", "Python", "Assembly", "Java", "C#", "JavaScript", "PHP"].map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Security Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["IDA Pro", "Ghidra", "GDB", "Wireshark", "Burp Suite", "Binary Ninja", "Nmap"].map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Frameworks & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "Node.js", "PostgreSQL", "OracleDB", "MySQL/MariaDB", "Docker", "Git", "Linux", "Flask", ".NET"].map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Specializations</h3>
              <div className="flex flex-wrap gap-2">
                {["Binary Analysis", "Exploit Development", "Malware Research", "Cryptography"].map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-primary">Education</h2>
          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-semibold">Bachelor of Science in Computer Science</h3>
                <p className="text-muted-foreground">Higher Institute of Computer Science, Tunisia</p>
              </div>
              <span className="text-sm text-muted-foreground">2023 - 2026</span>
            </div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-semibold">Baccalaureate in Mathematics</h3>
                <p className="text-muted-foreground">Grambalia Technical High School<br/> - Graduated with “Très Bien” (Very Good) distinction</p>
              </div>
              <span className="text-sm text-muted-foreground">2022 - 2023</span>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="hidden mb-8">
          <h2 className="text-2xl font-bold mb-4 text-primary">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold">Certified Ethical Hacker (CEH)</h3>
              <p className="text-sm text-muted-foreground">EC-Council • 2023</p>
            </div>
            <div>
              <h3 className="font-semibold">OSCP (Offensive Security Certified Professional)</h3>
              <p className="text-sm text-muted-foreground">Offensive Security • 2022</p>
            </div>
            <div>
              <h3 className="font-semibold">AWS Certified Solutions Architect</h3>
              <p className="text-sm text-muted-foreground">Amazon Web Services • 2021</p>
            </div>
            <div>
              <h3 className="font-semibold">CISSP (Certified Information Systems Security Professional)</h3>
              <p className="text-sm text-muted-foreground">ISC² • 2021</p>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-primary">Notable Achievements</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Qualified for multiple CTF finals, including Hackfest'8</li>
            <li>2nd place at SparkCTF 2025</li>
            <li>2nd place at Hack To The Future CTF</li>
            <li>Binary exploitation author at CTF Kareem by Securinets Tekup</li>
            <li>Binary exploitation author at the prestigious CyberTek2.0 CTF</li>
          </ul>
        </section>

        {/* Publications */}
        <section className="hidden">
          <h2 className="text-2xl font-bold mb-4 text-primary">Publications & Research</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold">"Advanced ROP Techniques in Modern Binary Exploitation" (2023)</h3>
              <p className="text-sm text-muted-foreground">
                IEEE Security & Privacy Conference • Co-authored research on modern exploitation techniques
              </p>
            </div>
            <div>
              <h3 className="font-semibold">"Automated Malware Analysis Using Machine Learning" (2022)</h3>
              <p className="text-sm text-muted-foreground">
                ACM CCS Conference • Research on ML-based malware classification systems
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
