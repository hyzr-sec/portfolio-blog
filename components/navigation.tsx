"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X, FileText, Search } from "lucide-react"
// import { GlobalSearch } from "@/components/global-search"
import Image from "next/image"

const navigation = [
  { name: "About", href: "#about", type: "scroll" },
  { name: "Projects", href: "#projects", type: "scroll" },
  // { name: "Papers", href: "#papers", type: "scroll" },
  { name: "Writeups", href: "/writeups", type: "route" },
  { name: "Resume", href: "/resume", type: "route" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  // const [showSearch, setShowSearch] = useState(false) // Commented out for later use
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (item: (typeof navigation)[0]) => {
    if (item.type === "scroll") {
      if (pathname !== "/") {
        window.location.href = `/${item.href}`
        return
      }
      document.getElementById(item.href.slice(1))?.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all ${scrolled ? "bg-background/80 backdrop-blur border-b" : ""}`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative">
              <Image
                src="/obito-hyzr-c.png?height=32&width=32"
                alt="Haydar Abessi (aka hyzr) Logo"
                width={32}
                height={32}
                className="rounded-full"
              />
            </div>
            <span className="font-semibold text-lg font-mono">Haydar Abessi (aka hyzr)</span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) =>
              item.type === "route" ? (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`hover:opacity-70 transition-colors flex items-center space-x-1 font-mono ${
                    pathname === item.href ? "text-primary" : ""
                  }`}
                >
                  {item.name === "Resume" && <FileText size={16} />}
                  <span>{item.name}</span>
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className="hover:opacity-70 transition-colors font-mono"
                >
                  {item.name}
                </button>
              ),
            )}
            {/* Search functionality - commented out for later use */}
            {/* <button onClick={() => setShowSearch(!showSearch)} className="hover:opacity-70 transition-colors p-2">
              <Search size={16} />
            </button> */}
            <ThemeToggle />
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Search functionality - commented out for later use */}
            {/* <button onClick={() => setShowSearch(!showSearch)} className="hover:opacity-70 transition-colors p-2">
              <Search size={16} />
            </button> */}
            <ThemeToggle />
            <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={20} /> : <Menu size={20} />}</button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-background border-b">
            <div className="px-6 py-4 space-y-4">
              {navigation.map((item) =>
                item.type === "route" ? (
                  <Link key={item.name} href={item.href} className="block font-mono" onClick={() => setIsOpen(false)}>
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item)}
                    className="block w-full text-left font-mono"
                  >
                    {item.name}
                  </button>
                ),
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Global Search - commented out for later use */}
      {/* <GlobalSearch isOpen={showSearch} onClose={() => setShowSearch(false)} /> */}
    </>
  )
}
