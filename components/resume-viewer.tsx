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
  const [lang, setLang] = useState<'en' | 'fr'>('en')

  // Resume content in both languages
  const resumeContent = {
    en: {
      summary: "Computer science student at the Higher Institute of Computer Science, focused on developing my skills in software development and all related fields. Actively engaged in clubs, notably as GR and technical member of Securinets ISI (2023–2024), and contributor & CTF challenge author at Securinets Tekup. Passionate about cybersecurity, especially vulnerability research and reverse engineering. Also a full-stack developer and occasional open-source contributor. Rigorous, proactive, and a strong team player — looking for a dynamic internship to grow and contribute.",
      skills: {
        programming: ["C/C++", "Python", "Assembly", "Java", "C#", "JavaScript", "PHP"],
        security: ["IDA Pro", "Ghidra", "GDB", "Wireshark", "Burp Suite", "Binary Ninja", "Nmap"],
        frameworks: ["React", "Next.js", "Node.js", "PostgreSQL", "OracleDB", "MySQL/MariaDB", "Docker", "Git", "Linux", "Flask", ".NET"],
        specializations: ["Binary Analysis", "Exploit Development", "Malware Research", "Cryptography"]
      },
      education: {
        cs: ["Algorithms and Complexity", "Data Structures", "Operating Systems", "Computer Networks", "Software Testing", "Database Administration", "ERP"],
        math: ["Mathematics", "Physics", "Computer Science"]
      },
      experiences: [
        {
          title: "CTF Author — Securinets Tekup",
          bullets: [
            "Binary exploitation author at CTF Kareem",
            "Binary exploitation author at the prestigious CyberTek2.0 CTF"
          ]
        },
        {
          title: "Freelance CTF Author — CTFBazaar",
          bullets: [
            "Designed and developed custom Capture The Flag challenges focused on reverse engineering, binary exploitation, and cryptography",
            "Collaborated with platform maintainers to ensure smooth deployment and challenge validation"
          ]
        }
      ],
      achievements: [
        "Qualified for multiple CTF finals, including Hackfest'8",
        "2nd place at SparkCTF 2025",
        "2nd place at Hack To The Future CTF"
      ],
      interests: ["Reading", "Anime", "Art", "CTFs", "Open source"]
    },
    fr: {
      summary: "Étudiant en informatique à l'Institut Supérieur d'Informatique, axé sur le développement de mes compétences en développement logiciel et domaines connexes. Actif dans les clubs, notamment en tant que GR et membre technique de Securinets ISI (2023–2024), et contributeur & auteur de challenges CTF chez Securinets Tekup. Passionné par la cybersécurité, en particulier la recherche de vulnérabilités et le reverse engineering. Également développeur full-stack et contributeur open source occasionnel. Rigoureux, proactif et bon esprit d'équipe — à la recherche d'un stage dynamique pour évoluer et contribuer.",
      skills: {
        programming: ["C/C++", "Python", "Assembleur", "Java", "C#", "JavaScript", "PHP"],
        security: ["IDA Pro", "Ghidra", "GDB", "Wireshark", "Burp Suite", "Binary Ninja", "Nmap"],
        frameworks: ["React", "Next.js", "Node.js", "PostgreSQL", "OracleDB", "MySQL/MariaDB", "Docker", "Git", "Linux", "Flask", ".NET"],
        specializations: ["Analyse binaire", "Développement d'exploits", "Recherche de malwares", "Cryptographie"]
      },
      education: {
        cs: ["Algorithmes et complexité", "Structures de données", "Systèmes d'exploitation", "Réseaux informatiques", "Tests logiciels", "Administration de bases de données", "ERP"],
        math: ["Mathématiques", "Physique", "Informatique"]
      },
      experiences: [
        {
          title: "Auteur CTF — Securinets Tekup",
          bullets: [
            "Auteur d'exploitation binaire à CTF Kareem",
            "Auteur d'exploitation binaire au prestigieux CyberTek2.0 CTF"
          ]
        },
        {
          title: "Auteur CTF Freelance — CTFBazaar",
          bullets: [
            "Conception et développement de challenges Capture The Flag axés sur le reverse engineering, l'exploitation binaire et la cryptographie",
            "Collaboration avec les responsables de la plateforme pour assurer le déploiement et la validation des challenges"
          ]
        }
      ],
      achievements: [
        "Qualifié pour plusieurs finales CTF, dont Hackfest'8",
        "2ème place à SparkCTF 2025",
        "2ème place à Hack To The Future CTF"
      ],
      interests: ["Lecture", "Anime", "Art", "CTF", "Open source"]
    }
  }

  const generateResumePDF = async () => {
    try {
      const jsPDF = await loadJsPDF()
      const doc = new jsPDF()
      // Removed Logo
      // Header
      doc.setFont("helvetica", "bold")
      doc.setFontSize(20)
      doc.text("Haydar Abessi", 15, 22)

      doc.setFont("helvetica", "normal")
      doc.setFontSize(14)
      doc.text(
        lang === 'en'
          ? "Vulnerability Researcher & Software Developer"
          : "Chercheur en Vulnérabilités & Développeur Logiciel",
        15,
        30
      )

      doc.setFontSize(11)
      doc.text(
        "hayderabbassi5@gmail.com | +216 90 521 709 | Ariana, Tunisia",
        15,
        38
      )
      doc.text(
        "www.hyzr.tech | linkedin.com/in/haydar-abessi",
        15,
        44
      )

      let yPos = 54

      // Professional Summary
      doc.setFont("helvetica", "bold")
      doc.setFontSize(11)
      doc.text(
        lang === 'en' ? "PROFESSIONAL SUMMARY" : "RÉSUMÉ PROFESSIONNEL",
        15,
        yPos
      )
      yPos += 7

      doc.setFont("helvetica", "normal")
      doc.setFontSize(9)
      const summaryLines = doc.splitTextToSize(resumeContent[lang].summary, 175)
      doc.text(summaryLines, 15, yPos)
      yPos += summaryLines.length * 4 + 4

      // Technical Skills
      doc.setFont("helvetica", "bold")
      doc.setFontSize(11)
      doc.text(
        lang === 'en' ? "TECHNICAL SKILLS" : "COMPÉTENCES TECHNIQUES",
        15,
        yPos
      )
      yPos += 8

      doc.setFont("helvetica", "bold")
      doc.setFontSize(9)
      doc.text(
        lang === 'en' ? "Programming Languages:" : "Langages de Programmation :",
        15,
        yPos
      )
      doc.setFont("helvetica", "normal")
      doc.text(resumeContent[lang].skills.programming.join(", "), 60, yPos)
      yPos += 6

      doc.setFont("helvetica", "bold")
      doc.text(
        lang === 'en' ? "Security Tools:" : "Outils de Sécurité :",
        15,
        yPos
      )
      doc.setFont("helvetica", "normal")
      doc.text(resumeContent[lang].skills.security.join(", "), 50, yPos)
      yPos += 6

      doc.setFont("helvetica", "bold")
      doc.text(
        lang === 'en' ? "Frameworks:" : "Frameworks :",
        15,
        yPos
      )
      doc.setFont("helvetica", "normal")
      doc.text(resumeContent[lang].skills.frameworks.join(", "), 50, yPos)
      yPos += 9

      // Education (with courses)
      doc.setFont("helvetica", "bold")
      doc.setFontSize(11)
      doc.text(lang === 'en' ? "EDUCATION" : "ÉDUCATION", 15, yPos)
      yPos += 7

      doc.setFont("helvetica", "bold")
      doc.setFontSize(9)
      doc.text(
        lang === 'en'
          ? "Bachelor of Science in Computer Science"
          : "Licence en Informatique",
        15,
        yPos
      )
      doc.setFont("helvetica", "normal")
      doc.text("2023 - 2026", 180, yPos)
      yPos += 5
      doc.setFont("helvetica", "italic")
      doc.setFontSize(11)
      doc.text(
        lang === 'en'
          ? "Higher Institute of Computer Science, Tunisia"
          : "Institut Supérieur d'Informatique, Tunisie",
        15,
        yPos
      )
      doc.setFontSize(9)
      yPos += 5
      resumeContent[lang].education.cs.forEach((course) => {
        doc.setFont("helvetica", "normal")
        doc.text(`• ${course}`, 20, yPos)
        yPos += 4
      })
      yPos += 3

      doc.setFont("helvetica", "bold")
      doc.setFontSize(9)
      doc.text(
        lang === 'en'
          ? "Baccalaureate in Mathematics"
          : "Baccalauréat en Mathématiques",
        15,
        yPos
      )
      doc.setFont("helvetica", "normal")
      doc.text("2019 - 2023", 180, yPos)
      yPos += 5
      doc.setFont("helvetica", "italic")
      doc.setFontSize(11)
      doc.text(
        lang === 'en'
          ? "Grambalia Technical High School"
          : "Lycée Technique de Grambalia",
        15,
        yPos
      )
      doc.setFontSize(9)
      yPos += 5
      resumeContent[lang].education.math.forEach((course) => {
        doc.setFont("helvetica", "normal")
        doc.text(`• ${course}`, 20, yPos)
        yPos += 4
      })
      doc.setFont("helvetica", "italic")
      doc.text(
        lang === 'en'
          ? "- Graduated with “Très Bien” (Very Good) distinction"
          : "- Diplômé avec mention “Très Bien”",
        15,
        yPos
      )
      yPos += 10

      // Experiences section
      doc.setFont("helvetica", "bold")
      doc.setFontSize(11)
      doc.text(lang === 'en' ? "EXPERIENCES" : "EXPÉRIENCES", 15, yPos)
      yPos += 7
      resumeContent[lang].experiences.forEach((exp) => {
        doc.setFont("helvetica", "bold")
        doc.setFontSize(10)
        doc.text(exp.title, 15, yPos)
        yPos += 5
        doc.setFont("helvetica", "normal")
        doc.setFontSize(9)
        exp.bullets.forEach((bullet) => {
          const bulletLines = doc.splitTextToSize(`• ${bullet}`, 170)
          doc.text(bulletLines, 20, yPos)
          yPos += bulletLines.length * 4
        })
        yPos += 4
      })

      // Notable Achievements
      doc.setFont("helvetica", "bold")
      doc.setFontSize(11)
      doc.text(lang === 'en' ? "NOTABLE ACHIEVEMENTS" : "RÉALISATIONS NOTABLES", 15, yPos)
      yPos += 7
      doc.setFont("helvetica", "normal")
      doc.setFontSize(9)
      resumeContent[lang].achievements.forEach((achievement) => {
        const achLines = doc.splitTextToSize(`• ${achievement}`, 170)
        doc.text(achLines, 15, yPos)
        yPos += achLines.length * 4
      })
      yPos += 4

      // Interests section
      doc.setFont("helvetica", "bold")
      doc.setFontSize(11)
      doc.text(lang === 'en' ? "INTERESTS" : "CENTRES D’INTÉRÊT", 15, yPos)
      yPos += 7
      doc.setFont("helvetica", "normal")
      doc.setFontSize(9)
      resumeContent[lang].interests.forEach((interest) => {
        doc.text(`• ${interest}`, 20, yPos)
        yPos += 4
      })

      // Save the PDF
      doc.save(
        lang === 'en' ? "Haydar_Abessi_Resume.pdf" : "Haydar_Abessi_CV.pdf"
      )
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
        <div className="flex space-x-4 items-center">
          <Button
            variant={lang === 'en' ? 'default' : 'outline'}
            onClick={() => setLang('en')}
            className="px-3"
          >
            EN
          </Button>
          <Button
            variant={lang === 'fr' ? 'default' : 'outline'}
            onClick={() => setLang('fr')}
            className="px-3"
          >
            FR
          </Button>
          <Button onClick={handlePrint} variant="outline">
            <ExternalLink className="h-4 w-4 mr-2" />
            {lang === 'en' ? 'Print' : 'Imprimer'}
          </Button>
          <Button onClick={handleDownload} disabled={isDownloading}>
            <Download className="h-4 w-4 mr-2" />
            {isDownloading ? (lang === 'en' ? 'Generating PDF...' : 'Génération du PDF...') : (lang === 'en' ? 'Download PDF' : 'Télécharger PDF')}
          </Button>
        </div>
      </div>

      {/* Resume Content */}
      <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-8 print:shadow-none print:p-0">
        {/* Header */}
        <div className="text-center mb-8 border-b pb-6">
          <h1 className="text-4xl font-bold mb-2">Haydar Abessi</h1>
          <p className="text-xl text-muted-foreground mb-4">Vulnerability Researcher & Software Developer</p>
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
            <div className="flex items-center">
              <ExternalLink className="h-4 w-4 mr-1" />
              <a href="https://linkedin.com/in/haydar-abessi" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/haydar-abessi
              </a>
            </div>
          </div>
        </div>

        {/* Summary */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-primary">{lang === 'en' ? 'Professional Summary' : 'Résumé Professionnel'}</h2>
          <p className="text-muted-foreground leading-relaxed">
            {resumeContent[lang].summary}
          </p>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-primary">{lang === 'en' ? 'Technical Skills' : 'Compétences Techniques'}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">{lang === 'en' ? 'Programming Languages' : 'Langages de Programmation'}</h3>
              <div className="flex flex-wrap gap-2">
                {resumeContent[lang].skills.programming.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">{lang === 'en' ? 'Security Tools' : 'Outils de Sécurité'}</h3>
              <div className="flex flex-wrap gap-2">
                {resumeContent[lang].skills.security.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">{lang === 'en' ? 'Frameworks & Technologies' : 'Frameworks & Technologies'}</h3>
              <div className="flex flex-wrap gap-2">
                {resumeContent[lang].skills.frameworks.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">{lang === 'en' ? 'Specializations' : 'Spécialisations'}</h3>
              <div className="flex flex-wrap gap-2">
                {resumeContent[lang].skills.specializations.map((skill) => (
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
          <h2 className="text-2xl font-bold mb-4 text-primary">{lang === 'en' ? 'Education' : 'Éducation'}</h2>
          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-semibold">{lang === 'en' ? 'Bachelor of Science in Computer Science' : 'Licence en Informatique'}</h3>
                <p className="text-muted-foreground">{lang === 'en' ? 'Higher Institute of Computer Science, Tunisia' : "Institut Supérieur d'Informatique, Tunisie"}</p>
                <ul className="list-disc list-inside text-muted-foreground text-sm ml-4">
                  {resumeContent[lang].education.cs.map((course) => (
                    <li key={course}>{course}</li>
                  ))}
                </ul>
              </div>
              <span className="text-sm text-muted-foreground">2023 - 2026</span>
            </div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-semibold">{lang === 'en' ? 'Baccalaureate in Mathematics' : 'Baccalauréat en Mathématiques'}</h3>
                <p className="text-muted-foreground">{lang === 'en' ? 'Grambalia Technical High School' : 'Lycée Technique de Grambalia'}<br/>{lang === 'en' ? '- Graduated with “Très Bien” (Very Good) distinction' : '- Diplômé avec mention “Très Bien”'}</p>
                <ul className="list-disc list-inside text-muted-foreground text-sm ml-4">
                  {resumeContent[lang].education.math.map((course) => (
                    <li key={course}>{course}</li>
                  ))}
                </ul>
              </div>
              <span className="text-sm text-muted-foreground">2019 - 2023</span>
            </div>
          </div>
        </section>

        {/* Experiences (move before Achievements, updated content) */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-primary">{lang === 'en' ? 'Experiences' : 'Expériences'}</h2>
          {resumeContent[lang].experiences.map((exp) => (
            <div key={exp.title} className="mt-4 first:mt-0">
              <h3 className="font-semibold">{exp.title}</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-6 mt-1">
                {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </section>

        {/* Achievements */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-primary">{lang === 'en' ? 'Notable Achievements' : 'Réalisations Notables'}</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            {resumeContent[lang].achievements.map((a, i) => <li key={i}>{a}</li>)}
          </ul>
        </section>

        {/* Interests */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-primary">{lang === 'en' ? 'Interests' : 'Centres d’intérêt'}</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            {resumeContent[lang].interests.map((interest, i) => <li key={i}>{interest}</li>)}
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
