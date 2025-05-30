export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center font-mono">About</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              👋 Hey, I'm Haydar Abbassi aka hyzr
I'm a 21-year-old Tunisian software developer and a software engineering student at the Higher Institute of Computer Science in Tunisia. 
My main focus is cybersecurity — especially vulnerability research and reverse engineering.
I'm also a CTF player, mostly into pwn and rev, but I explore other categories too.
I also do full-stack web development — and honestly, I’m just into building whatever’s buildable. If it runs code, I’ll probably mess with it.
This site is both my portfolio and my blog, where I post writeups of CTF challenges I’ve played or authored.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-semibold mb-4 font-mono">Focus Areas</h3>
              <ul className="space-y-2 text-muted-foreground font-mono">
                <li>• Software development</li>
                <li>• vulnerability research</li>
                <li>• Low-level programming</li>
                <li>• System administration</li>
                <li>• DevOps</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 font-mono">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {["C/C++", "Python", "Java", "Assembly", "IDA Pro", "Ghidra", "Linux", "git", "postgreSQL", "oracleDB", "Next.js", "React", "PHP"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-muted rounded-full text-sm font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
