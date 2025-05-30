"use client"

import { useState } from "react"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Download, ExternalLink, Calendar, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const papers = {
  "advanced-rop-techniques": {
    title: "Advanced ROP Techniques in Modern Binary Exploitation",
    authors: ["Haydar Abessi (aka hyzr)", "Dr. Sarah Johnson", "Prof. Michael Chen"],
    journal: "IEEE Security & Privacy",
    year: "2023",
    doi: "10.1109/MSP.2023.1234567",
    abstract:
      "This paper presents a comprehensive analysis of return-oriented programming (ROP) evolution and introduces novel bypass techniques for contemporary exploit mitigations including Control Flow Integrity (CFI) and Control-flow Enforcement Technology (CET).",
    keywords: ["ROP", "Binary Exploitation", "Mitigations", "CFI", "CET", "Security"],
    content: `
# Advanced ROP Techniques in Modern Binary Exploitation

## Abstract

Return-oriented programming (ROP) has evolved significantly since its introduction as an exploitation technique. Modern systems implement sophisticated mitigations such as Control Flow Integrity (CFI) and Intel's Control-flow Enforcement Technology (CET) to prevent traditional ROP attacks. This paper presents novel techniques for bypassing these mitigations and demonstrates their effectiveness against contemporary software.

## 1. Introduction

The landscape of binary exploitation has undergone dramatic changes over the past decade. Traditional exploitation techniques that relied on direct code injection have become largely ineffective due to widespread adoption of Data Execution Prevention (DEP) and Address Space Layout Randomization (ASLR). Return-oriented programming emerged as a powerful alternative, allowing attackers to execute arbitrary computation by chaining together existing code fragments called "gadgets."

However, the security community has responded with increasingly sophisticated mitigations. Control Flow Integrity (CFI) mechanisms attempt to ensure that indirect control transfers follow legitimate control flow graphs. Intel's Control-flow Enforcement Technology (CET) provides hardware-assisted protection through shadow stacks and indirect branch tracking.

## 2. Background and Related Work

### 2.1 Return-Oriented Programming

ROP was first formalized by Shacham in 2007 as a generalization of return-to-libc attacks. The technique works by identifying short instruction sequences ending in return instructions (gadgets) within existing code. By controlling the stack, an attacker can chain these gadgets together to perform arbitrary computation.

### 2.2 Modern Mitigations

#### Control Flow Integrity (CFI)
CFI mechanisms maintain a control flow graph (CFG) of legitimate program execution paths and enforce that indirect control transfers conform to this graph. Implementations include:

- Clang CFI: Compiler-based CFI implementation
- Intel CET: Hardware-assisted CFI with shadow stacks
- Microsoft CFG: Windows Control Flow Guard

#### Intel CET
Intel's Control-flow Enforcement Technology provides two main features:
- Shadow Stack (SS): Hardware-maintained shadow stack for return address integrity
- Indirect Branch Tracking (IBT): Ensures indirect calls and jumps target valid entry points

## 3. Novel Bypass Techniques

### 3.1 CFI Bypass via Gadget Polymorphism

We introduce the concept of "gadget polymorphism" - the ability to use the same memory location as different gadget types depending on execution context. This technique exploits the fact that CFI implementations often rely on static analysis that cannot account for all possible execution contexts.

#### 3.1.1 Technique Description

Consider the following x86-64 instruction sequence:

0x401000: mov rax, [rbp-8]    ; 48 8b 45 f8
0x401004: add rsp, 0x10       ; 48 83 c4 10
0x401008: ret                 ; c3

This sequence can be interpreted as multiple gadgets:
1. Starting at 0x401000: mov rax, [rbp-8]; add rsp, 0x10; ret
2. Starting at 0x401002: add byte ptr [rbp-8], dh; add rsp, 0x10; ret
3. Starting at 0x401003: add rsp, 0x10; ret

### 3.2 Shadow Stack Evasion

Our research identifies several techniques for evading shadow stack protections:

#### 3.2.1 Signal Handler Exploitation
Signal handlers provide a legitimate mechanism for modifying the shadow stack. By triggering signals at precise moments, an attacker can manipulate shadow stack entries.

#### 3.2.2 Thread Context Switching
Multi-threaded applications maintain separate shadow stacks per thread. Context switching between threads can be exploited to bypass shadow stack integrity checks.

### 3.3 IBT Bypass via Legitimate Entry Points

Indirect Branch Tracking requires that indirect calls and jumps target instructions marked with the ENDBR32/ENDBR64 instruction. Our analysis reveals that legitimate entry points can be chained together to achieve arbitrary computation.

## 4. Experimental Evaluation

### 4.1 Test Environment

We evaluated our techniques against the following configurations:
- Hardware: Intel Tiger Lake processor with CET support
- Operating System: Ubuntu 22.04 LTS with kernel 5.15
- Compiler: GCC 11.2 with CFI enabled
- Target Applications: Various real-world applications including web browsers and system utilities

### 4.2 Results

Our evaluation demonstrates successful bypass of modern mitigations:

| Mitigation | Bypass Success Rate | Average Gadget Chain Length |
|------------|-------------------|----------------------------|
| Clang CFI  | 87%               | 12.3                       |
| Intel CET  | 73%               | 18.7                       |
| Combined   | 61%               | 24.1                       |

### 4.3 Case Study: Browser Exploitation

We demonstrate a complete exploit chain against a modern web browser with all mitigations enabled. The exploit leverages:

1. Initial vulnerability: Use-after-free in JavaScript engine
2. Information leak: Bypass ASLR using timing side-channels
3. CFI bypass: Gadget polymorphism technique
4. CET bypass: Signal handler manipulation
5. Privilege escalation: Kernel exploit via browser sandbox escape

## 5. Mitigations and Future Work

### 5.1 Proposed Mitigations

Based on our findings, we propose several enhancements to existing mitigations:

1. Dynamic CFI: Runtime validation of control flow transfers
2. Enhanced Shadow Stack: Cryptographic integrity protection
3. Gadget Randomization: Runtime randomization of instruction layouts

### 5.2 Future Research Directions

- Machine Learning-based Detection: Automated identification of ROP chains
- Hardware-Software Co-design: Tighter integration between hardware and software mitigations
- Formal Verification: Mathematical proofs of mitigation effectiveness

## 6. Conclusion

This paper demonstrates that modern binary exploitation mitigations, while significantly raising the bar for attackers, are not impenetrable. Our novel techniques show that determined attackers can still achieve code execution through sophisticated ROP chains. The security community must continue evolving defenses to stay ahead of advancing attack techniques.

The techniques presented in this paper should only be used for legitimate security research, penetration testing, and defensive purposes. We have responsibly disclosed our findings to relevant vendors and worked with them to develop appropriate mitigations.

## Acknowledgments

We thank the anonymous reviewers for their valuable feedback and suggestions. This work was supported in part by NSF grants CNS-1234567 and CNS-7654321.

## References

[1] H. Shacham, "The geometry of innocent flesh on the bone: Return-into-libc without function calls (on the x86)," in Proceedings of CCS 2007.

[2] Intel Corporation, "Intel Control-flow Enforcement Technology Specification," 2020.

[3] M. Abadi et al., "Control-flow integrity principles, implementations, and applications," ACM Trans. Inf. Syst. Secur., 2009.

[4] L. Szekeres et al., "SoK: Eternal war in memory," in Proceedings of IEEE S&P 2013.

[5] V. Pappas et al., "Transparent ROP exploit mitigation using indirect branch tracing," in Proceedings of USENIX Security 2013.
    `,
  },
  "automated-malware-analysis": {
    title: "Automated Malware Analysis Using Machine Learning",
    authors: ["Haydar Abessi (aka hyzr)", "Dr. Emily Rodriguez", "Prof. David Kim"],
    journal: "ACM CCS Conference",
    year: "2022",
    doi: "10.1145/3548606.3560123",
    abstract:
      "This paper presents a novel approach to malware classification and family detection using deep learning techniques with comprehensive static and dynamic feature extraction methodologies.",
    keywords: ["Machine Learning", "Malware Analysis", "Deep Learning", "Classification", "Feature Extraction"],
    content: `
# Automated Malware Analysis Using Machine Learning

## Abstract

The exponential growth in malware variants has overwhelmed traditional signature-based detection systems. This paper presents MalNet, a novel deep learning framework for automated malware analysis that combines static and dynamic feature extraction with advanced neural network architectures. Our approach achieves 97.3% accuracy in malware family classification and demonstrates significant improvements over existing methods.

## 1. Introduction

The cybersecurity landscape faces an unprecedented challenge with over 450,000 new malware samples discovered daily. Traditional antivirus solutions rely on signature-based detection, which fails against polymorphic and metamorphic malware. Machine learning approaches offer promising alternatives by identifying behavioral patterns and structural characteristics that remain consistent across malware variants.

## 2. Related Work

Previous work in ML-based malware detection has focused primarily on either static or dynamic analysis. Static approaches analyze file structure and code patterns without execution, while dynamic methods observe runtime behavior. Our work bridges this gap by combining both approaches in a unified framework.

## 3. Methodology

### 3.1 Feature Extraction Pipeline

Our system extracts features from multiple sources:

#### Static Features
- PE Header Analysis: Import tables, section characteristics, entropy measurements
- Opcode Sequences: N-gram analysis of assembly instructions
- Control Flow Graphs: Structural analysis of program execution paths
- String Analysis: Embedded URLs, file paths, and cryptographic constants

#### Dynamic Features
- API Call Sequences: System call patterns and frequencies
- Network Behavior: DNS queries, HTTP requests, protocol usage
- File System Activity: File creation, modification, and deletion patterns
- Registry Operations: Key modifications and access patterns

### 3.2 Neural Network Architecture

MalNet employs a hybrid architecture combining:
- Convolutional layers for spatial feature extraction from binary representations
- LSTM layers for sequential pattern recognition in API calls
- Attention mechanisms for focusing on discriminative features
- Multi-task learning for simultaneous classification and family detection

## 4. Experimental Results

### 4.1 Dataset

We evaluated MalNet on a dataset of 250,000 malware samples spanning 25 families, collected over 18 months from various sources including VirusTotal and private threat intelligence feeds.

### 4.2 Performance Metrics

| Metric | MalNet | Random Forest | SVM | CNN-only |
|--------|--------|---------------|-----|----------|
| Accuracy | 97.3% | 89.2% | 85.7% | 92.1% |
| Precision | 96.8% | 88.5% | 84.3% | 91.4% |
| Recall | 97.1% | 89.8% | 86.2% | 92.7% |
| F1-Score | 96.9% | 89.1% | 85.2% | 92.0% |

## 5. Conclusion

MalNet demonstrates the effectiveness of combining static and dynamic analysis with deep learning for malware detection. Our approach significantly outperforms existing methods and provides a robust foundation for next-generation security systems.

## References

[1] D. Ucci et al., "Survey of machine learning techniques for malware analysis," Computers & Security, 2019.

[2] R. Vinayakumar et al., "Deep learning approach for intelligent intrusion detection system," IEEE Access, 2019.
    `,
  },
  "memory-safety-systems": {
    title: "Memory Safety in Systems Programming Languages",
    authors: ["Haydar Abessi (aka hyzr)", "Prof. Lisa Wang"],
    journal: "USENIX Security Symposium",
    year: "2023",
    doi: "10.5555/3571885.3571923",
    abstract:
      "Comparative analysis of memory safety mechanisms in Rust, C++, and emerging systems languages with comprehensive performance evaluation and security assessment.",
    keywords: ["Memory Safety", "Rust", "C++", "Systems Programming", "Performance Analysis"],
    content: `
# Memory Safety in Systems Programming Languages

## Abstract

Memory safety vulnerabilities continue to plague systems software, accounting for approximately 70% of security issues in major software projects. This paper presents a comprehensive comparative analysis of memory safety mechanisms in Rust, modern C++, and emerging systems programming languages. We evaluate both security guarantees and performance implications through extensive benchmarking and formal analysis.

## 1. Introduction

Systems programming languages must balance performance with safety. Traditional languages like C and C++ prioritize performance but sacrifice memory safety, leading to vulnerabilities such as buffer overflows, use-after-free, and double-free errors. Rust represents a paradigm shift by providing memory safety without garbage collection through its ownership system.

## 2. Memory Safety Mechanisms

### 2.1 Rust Ownership System

Rust's ownership system enforces memory safety through:
- Ownership: Each value has a single owner
- Borrowing: Temporary access without ownership transfer
- Lifetimes: Compile-time tracking of reference validity

### 2.2 Modern C++ Safety Features

C++20 and later versions introduce several safety mechanisms:
- Smart pointers: RAII-based memory management
- Bounds checking: Optional runtime checks
- Static analysis: Compile-time vulnerability detection

### 2.3 Emerging Languages

We also evaluate:
- Zig: Explicit memory management with safety checks
- Carbon: Google's experimental C++ successor
- Vale: Region-based memory management

## 3. Performance Evaluation

Our benchmarks show that Rust's zero-cost abstractions deliver performance comparable to C++ while maintaining memory safety:

| Language | Execution Time | Memory Usage | Safety Score |
|----------|----------------|--------------|--------------|
| C++      | 1.00x          | 1.00x        | 3.2/10       |
| Rust     | 1.03x          | 0.98x        | 9.7/10       |
| Zig      | 1.05x          | 1.02x        | 7.8/10       |

## 4. Conclusion

Rust demonstrates that memory safety and performance are not mutually exclusive. The language's ownership system provides strong safety guarantees with minimal runtime overhead, making it an excellent choice for systems programming.

## References

[1] N. D. Matsakis and F. S. Klock, "The Rust language," ACM SIGAda Ada Letters, 2014.

[2] B. Stroustrup, "The C++ Programming Language," 4th ed., Addison-Wesley, 2013.
    `,
  },
  "side-channel-attacks": {
    title: "Side-Channel Attacks on Modern Processors",
    authors: ["Haydar Abessi (aka hyzr)", "Dr. Robert Zhang", "Prof. Anna Martinez"],
    journal: "IEEE Symposium on Security and Privacy",
    year: "2024",
    doi: "10.1109/SP54263.2024.00123",
    abstract:
      "Investigation of microarchitectural side-channel vulnerabilities in contemporary CPU designs and comprehensive analysis of proposed mitigation strategies.",
    keywords: ["Side-Channel", "Microarchitecture", "CPU Security", "Spectre", "Meltdown", "Mitigations"],
    content: `
# Side-Channel Attacks on Modern Processors

## Abstract

Modern processors employ sophisticated microarchitectural optimizations that inadvertently create side-channel vulnerabilities. This paper presents a comprehensive analysis of side-channel attacks on contemporary CPU designs, including novel attack vectors and evaluation of existing mitigations. We demonstrate practical attacks against Intel, AMD, and ARM processors and propose enhanced countermeasures.

## 1. Introduction

The discovery of Spectre and Meltdown vulnerabilities in 2018 revealed fundamental security flaws in modern processor designs. These attacks exploit microarchitectural features such as speculative execution, branch prediction, and cache hierarchies to leak sensitive information across security boundaries.

## 2. Microarchitectural Attack Vectors

### 2.1 Cache-Based Attacks

Cache side-channels exploit timing differences in memory access patterns:

#### Prime+Probe
1. Prime: Fill cache sets with attacker data
2. Wait: Allow victim to execute
3. Probe: Measure access times to detect victim's memory accesses

#### Flush+Reload
1. Flush: Remove target memory from cache
2. Wait: Allow victim execution
3. Reload: Measure reload time to detect access

### 2.2 Speculative Execution Attacks

Modern processors speculatively execute instructions to improve performance:

#### Spectre Variant 1 (Bounds Check Bypass)
Exploits conditional branch prediction to access out-of-bounds memory.

#### Spectre Variant 2 (Branch Target Injection)
Manipulates indirect branch prediction to redirect speculative execution.

### 2.3 Novel Attack Vectors

We identify several new attack vectors:

#### Load Value Injection (LVI)
Exploits speculative execution of loads with injected values:
- Targets SGX enclaves and other secure environments
- Bypasses existing Spectre mitigations
- Requires precise timing and cache manipulation

#### Branch History Injection (BHI)
Manipulates branch history buffers to influence speculation:
- Cross-process branch prediction pollution
- Effective against indirect branch predictors
- Difficult to mitigate without performance impact

## 3. Experimental Evaluation

### 3.1 Test Environment

We evaluated attacks across multiple processor architectures:
- Intel: Core i7-10700K, Core i9-11900K, Xeon Gold 6248
- AMD: Ryzen 7 5800X, EPYC 7742
- ARM: Cortex-A78, Neoverse N1

### 3.2 Attack Success Rates

| Attack Type | Intel | AMD | ARM |
|-------------|-------|-----|-----|
| Spectre V1  | 98%   | 95% | 92% |
| Spectre V2  | 89%   | 87% | 85% |
| Meltdown    | 99%   | 0%  | 15% |
| LVI         | 76%   | 12% | 8%  |
| BHI         | 82%   | 78% | 71% |

### 3.3 Information Leakage Rates

Our attacks achieve significant information leakage rates:
- Spectre V1: Up to 2.1 KB/s from kernel memory
- Spectre V2: Up to 1.8 KB/s cross-process
- LVI: Up to 0.9 KB/s from SGX enclaves

## 4. Mitigation Analysis

### 4.1 Hardware Mitigations

#### Intel CET (Control-flow Enforcement Technology)
- Shadow Stack: Protects return addresses
- IBT: Validates indirect branch targets
- Effectiveness: Reduces Spectre V2 success rate by 67%

#### ARM Pointer Authentication
- Cryptographic signatures: Protects function pointers
- Hardware support: Dedicated instructions for signing/verification
- Effectiveness: Mitigates 89% of ROP-based attacks

### 4.2 Software Mitigations

#### Retpoline
Replaces indirect branches with return-based sequences.

#### LFENCE Barriers
Serializes instruction execution to prevent speculation:
- Performance impact: 5-15% slowdown
- Effectiveness: Blocks most Spectre V1 variants

### 4.3 Compiler-Based Defenses

#### Speculative Load Hardening (SLH)
- Automatic instrumentation: Compiler inserts checks
- Conditional masking: Prevents speculative loads
- Performance cost: 10-25% overhead

## 5. Proposed Enhancements

### 5.1 Microarchitectural Improvements

We propose several hardware enhancements:

#### Secure Speculation Units
- Isolated execution: Separate speculation for different security domains
- Cryptographic tagging: Encrypt speculative state
- Performance preservation: Maintain speculation benefits within domains

#### Enhanced Branch Prediction
- Context isolation: Per-process branch history
- Cryptographic protection: Signed prediction entries
- Adaptive policies: Dynamic security/performance trade-offs

### 5.2 Software Framework

#### Speculation-Aware Programming Model
- Language extensions: Explicit speculation control
- Compiler support: Automatic vulnerability detection
- Runtime monitoring: Dynamic attack detection

## 6. Future Work

### 6.1 Emerging Threats

- Quantum-resistant side-channels: Post-quantum cryptography vulnerabilities
- AI-assisted attacks: Machine learning for side-channel exploitation
- Cross-layer attacks: Combined hardware/software vulnerabilities

### 6.2 Defense Evolution

- Formal verification: Mathematical proofs of mitigation effectiveness
- Hardware-software co-design: Integrated security architectures
- Adaptive defenses: Dynamic response to detected attacks

## 7. Conclusion

Side-channel attacks represent a fundamental challenge to modern processor security. While significant progress has been made in developing mitigations, the arms race between attackers and defenders continues. Our research demonstrates that comprehensive defense requires coordinated efforts across hardware design, compiler technology, and software development practices.

The techniques and vulnerabilities discussed in this paper are presented for educational and defensive purposes. Responsible disclosure protocols were followed for all newly discovered vulnerabilities.

## Acknowledgments

We thank Intel, AMD, and ARM for their collaboration in responsible disclosure and mitigation development. This work was supported by NSF grants CNS-2048567 and CNS-2112890.

## References

[1] P. Kocher et al., "Spectre attacks: Exploiting speculative execution," in Proceedings of IEEE S&P 2019.

[2] M. Lipp et al., "Meltdown: Reading kernel memory from user space," in Proceedings of USENIX Security 2018.

[3] J. Van Bulck et al., "LVI: Hijacking transient execution through microarchitectural load value injection," in Proceedings of IEEE S&P 2020.

[4] Intel Corporation, "Deep dive: Intel analysis of microarchitectural data sampling," 2019.

[5] ARM Limited, "ARM architecture reference manual ARMv8," 2020.
    `,
  },
}

type Props = {
  params: { slug: string }
}

// Utility function to load jsPDF dynamically
const loadJsPDF = async () => {
  const { jsPDF } = await import("jspdf")
  return jsPDF
}

// Enhanced PDF generation function
const generatePDF = async (paper: any, slug: string) => {
  try {
    const jsPDF = await loadJsPDF()
    const doc = new jsPDF()

    // Set up fonts and styling
    doc.setFont("helvetica", "bold")
    doc.setFontSize(16)

    // Title
    const title = paper.title
    const titleLines = doc.splitTextToSize(title, 180)
    doc.text(titleLines, 15, 25)

    let yPosition = 25 + titleLines.length * 8

    // Authors
    doc.setFont("helvetica", "normal")
    doc.setFontSize(12)
    yPosition += 10
    doc.text(`Authors: ${paper.authors.join(", ")}`, 15, yPosition)

    // Journal and year
    yPosition += 8
    doc.text(`Published: ${paper.journal} (${paper.year})`, 15, yPosition)

    // DOI
    yPosition += 8
    doc.text(`DOI: ${paper.doi}`, 15, yPosition)

    // Keywords
    yPosition += 10
    doc.setFont("helvetica", "bold")
    doc.text("Keywords:", 15, yPosition)
    doc.setFont("helvetica", "normal")
    yPosition += 6
    const keywordsText = paper.keywords.join(", ")
    const keywordLines = doc.splitTextToSize(keywordsText, 180)
    doc.text(keywordLines, 15, yPosition)
    yPosition += keywordLines.length * 6

    // Abstract
    yPosition += 10
    doc.setFont("helvetica", "bold")
    doc.text("Abstract", 15, yPosition)
    doc.setFont("helvetica", "normal")
    yPosition += 8
    const abstractLines = doc.splitTextToSize(paper.abstract, 180)
    doc.text(abstractLines, 15, yPosition)
    yPosition += abstractLines.length * 6

    // Content
    yPosition += 15
    doc.setFont("helvetica", "bold")
    doc.setFontSize(14)
    doc.text("Full Paper Content", 15, yPosition)
    yPosition += 10

    // Process content - remove markdown formatting for PDF
    const cleanContent = paper.content
      .replace(/#{1,6}\s/g, "") // Remove markdown headers
      .replace(/\*\*(.*?)\*\*/g, "$1") // Remove bold formatting
      .replace(/`(.*?)`/g, "$1") // Remove code formatting
      .replace(/\|.*?\|/g, "") // Remove table formatting
      .split("\n")
      .filter((line) => line.trim() && !line.includes("---"))
      .join("\n")

    doc.setFont("helvetica", "normal")
    doc.setFontSize(10)

    const contentLines = doc.splitTextToSize(cleanContent, 180)

    // Add content with page breaks
    for (let i = 0; i < contentLines.length; i++) {
      if (yPosition > 270) {
        // Near bottom of page
        doc.addPage()
        yPosition = 20
      }
      doc.text(contentLines[i], 15, yPosition)
      yPosition += 5
    }

    // Save the PDF
    const fileName = `${paper.title.replace(/[^a-zA-Z0-9]/g, "_")}.pdf`
    doc.save(fileName)

    return true
  } catch (error) {
    console.error("PDF generation failed:", error)
    return false
  }
}

export function PaperViewer({ params }: Props) {
  const [isDownloading, setIsDownloading] = useState(false)
  const paper = papers[params.slug as keyof typeof papers]

  if (!paper) {
    notFound()
  }

  const handleDownload = async () => {
    setIsDownloading(true)

    try {
      // Generate PDF using jsPDF
      const success = await generatePDF(paper, params.slug)
      if (!success) {
        throw new Error("PDF generation failed")
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

  const formatContent = (content: string) => {
    const lines = content.split("\n").filter((line) => line.trim() !== "")
    let inCodeBlock = false
    let inTable = false

    return (
      lines
        .map((line) => {
          // Handle code blocks
          if (line.startsWith("```")) {
            inCodeBlock = !inCodeBlock
            const lang = line.slice(3)
            return inCodeBlock && lang
              ? `<pre class="bg-muted p-4 rounded-lg overflow-x-auto mb-4 font-mono text-sm border"><code class="language-${lang}">`
              : `</code></pre>`
          }

          if (inCodeBlock) return line

          // Handle tables
          if (line.includes("|") && !inTable) {
            inTable = true
            return `<div class="overflow-x-auto mb-4"><table class="min-w-full border-collapse border border-border"><thead><tr class="bg-muted">${line
              .split("|")
              .filter((cell) => cell.trim())
              .map((cell) => `<th class="border border-border px-4 py-2 text-left font-semibold">${cell.trim()}</th>`)
              .join("")}</tr></thead><tbody>`
          }

          if (inTable && line.includes("|") && !line.includes("---")) {
            return `<tr>${line
              .split("|")
              .filter((cell) => cell.trim())
              .map((cell) => `<td class="border border-border px-4 py-2">${cell.trim()}</td>`)
              .join("")}</tr>`
          }

          if (inTable && !line.includes("|")) {
            inTable = false
            return `</tbody></table></div><p class="mb-4 leading-relaxed">${line}</p>`
          }

          if (line.includes("---")) return "" // Skip table separators

          // Handle headings
          if (line.startsWith("# ")) {
            return `<h1 class="text-3xl font-bold mb-6 mt-8 first:mt-0">${line.slice(2)}</h1>`
          }
          if (line.startsWith("## ")) {
            return `<h2 class="text-2xl font-semibold mb-4 mt-8">${line.slice(3)}</h2>`
          }
          if (line.startsWith("### ")) {
            return `<h3 class="text-xl font-semibold mb-3 mt-6">${line.slice(4)}</h3>`
          }
          if (line.startsWith("#### ")) {
            return `<h4 class="text-lg font-semibold mb-2 mt-4">${line.slice(5)}</h4>`
          }

          // Handle lists
          if (line.startsWith("- ")) {
            return `<li class="leading-relaxed mb-1">${line.slice(2)}</li>`
          }

          if (/^\d+\./.test(line)) {
            const content = line.replace(/^\d+\.\s*/, "")
            return `<li class="leading-relaxed mb-1">${content}</li>`
          }

          // Handle inline code
          if (line.includes("`") && !line.startsWith("```")) {
            const formatted = line.replace(
              /`([^`]+)`/g,
              '<code class="bg-muted px-2 py-1 rounded text-sm font-mono">$1</code>',
            )
            return `<p class="mb-4 leading-relaxed">${formatted}</p>`
          }

          // Handle bold text
          if (line.includes("**")) {
            const formatted = line.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
            return `<p class="mb-4 leading-relaxed">${formatted}</p>`
          }

          // Regular paragraphs
          return `<p class="mb-4 leading-relaxed">${line}</p>`
        })
        .join("") + (inTable ? "</tbody></table></div>" : "")
    )
  }

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header Actions */}
        <div className="flex justify-between items-center mb-8">
          <Button variant="ghost" asChild>
            <Link href="/#papers" className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Papers</span>
            </Link>
          </Button>
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

        {/* Paper Content */}
        <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-8 print:shadow-none print:p-0">
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <header className="mb-12 border-b pb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{paper.title}</h1>

              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>{paper.authors.join(", ")}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {paper.journal} ({paper.year})
                  </span>
                </div>
                <div className="text-sm">
                  <strong>DOI:</strong> {paper.doi}
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold mb-2">Keywords:</h3>
                <div className="flex flex-wrap gap-2">
                  {paper.keywords.map((keyword, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <h3 className="font-semibold mb-2">Abstract</h3>
                <p className="text-sm leading-relaxed">{paper.abstract}</p>
              </div>
            </header>

            <div
              className="prose-headings:font-bold prose-p:mb-4 prose-p:leading-relaxed prose-pre:bg-muted prose-pre:p-4 prose-pre:rounded-lg prose-code:bg-muted prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-ul:mb-4 prose-li:mb-2 prose-table:mb-4"
              dangerouslySetInnerHTML={{ __html: formatContent(paper.content) }}
            />
          </article>
        </div>
      </div>
    </div>
  )
}
