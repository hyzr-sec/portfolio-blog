import fs from "fs/promises";
import path from "path";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  // Try both .mdx and .md for backward compatibility
  let filePath = path.join(process.cwd(), "writeups", "ctf", `${slug}.mdx`);
  try {
    let file = await fs.readFile(filePath, "utf8");
    const title = file.match(/^# (.+)$/m)?.[1] || slug;
    return { title };
  } catch {
    // fallback to .md
    filePath = path.join(process.cwd(), "writeups", "ctf", `${slug}.md`);
    try {
      let file = await fs.readFile(filePath, "utf8");
      const title = file.match(/^# (.+)$/m)?.[1] || slug;
      return { title };
    } catch {
      return { title: "Writeup Not Found" };
    }
  }
}

export default async function WriteupPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  // Try both .mdx and .md for backward compatibility
  let filePath = path.join(process.cwd(), "writeups", "ctf", `${slug}.mdx`);
  let source: string;
  try {
    source = await fs.readFile(filePath, "utf8");
  } catch {
    filePath = path.join(process.cwd(), "writeups", "ctf", `${slug}.md`);
    try {
      source = await fs.readFile(filePath, "utf8");
    } catch {
      notFound();
    }
  }

  return (
    <main className="flex flex-col items-center min-h-screen w-full bg-background">
      <article className="max-w-4xl w-full px-6 py-8 mt-20 mb-12 bg-card border border-border rounded-xl shadow-lg overflow-hidden">
        <div className="github-markdown break-words">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              code({ node, inline, className, children, ...props }: any) {
                const match = /language-(\w+)/.exec(className || '');
                const language = match ? match[1] : '';
                
                if (!inline && language) {
                  return (
                    <div className="my-4 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                      <SyntaxHighlighter
                        style={oneDark}
                        language={language}
                        PreTag="div"
                        className="syntax-highlighter"
                        customStyle={{
                          margin: 0,
                          padding: '1rem',
                          backgroundColor: 'transparent',
                          fontSize: '0.875rem',
                          lineHeight: '1.5',
                        }}
                        {...props}
                      >
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    </div>
                  );
                }
                
                return (
                  <code
                    className={`${className} bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono text-pink-600 dark:text-pink-400 break-all`}
                    {...props}
                  >
                    {children}
                  </code>
                );
              },
              h1: ({ children, ...props }) => (
                <h1 className="text-4xl font-bold mb-6 pb-3 border-b border-border text-foreground" {...props}>
                  {children}
                </h1>
              ),
              h2: ({ children, ...props }) => (
                <h2 className="text-3xl font-semibold mt-8 mb-4 pb-2 border-b border-border text-foreground" {...props}>
                  {children}
                </h2>
              ),
              h3: ({ children, ...props }) => (
                <h3 className="text-2xl font-semibold mt-6 mb-3 text-foreground" {...props}>
                  {children}
                </h3>
              ),
              h4: ({ children, ...props }) => (
                <h4 className="text-xl font-medium mt-4 mb-2 text-foreground" {...props}>
                  {children}
                </h4>
              ),
              p: ({ children, ...props }) => (
                <p className="mb-4 leading-7 text-foreground break-words overflow-wrap-anywhere" {...props}>
                  {children}
                </p>
              ),
              a: ({ children, href, ...props }) => (
                <a
                  href={href}
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium break-words"
                  target="_blank"
                  rel="noopener noreferrer"
                  {...props}
                >
                  {children}
                </a>
              ),
              ul: ({ children, ...props }) => (
                <ul className="mb-4 pl-6 space-y-1 list-disc" {...props}>
                  {children}
                </ul>
              ),
              ol: ({ children, ...props }) => (
                <ol className="mb-4 pl-6 space-y-1 list-decimal" {...props}>
                  {children}
                </ol>
              ),
              li: ({ children, ...props }) => (
                <li className="text-foreground leading-6" {...props}>
                  {children}
                </li>
              ),
              blockquote: ({ children, ...props }) => (
                <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 py-2 mb-4 bg-gray-50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 italic" {...props}>
                  {children}
                </blockquote>
              ),
              table: ({ children, ...props }) => (
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full border border-border rounded-lg" {...props}>
                    {children}
                  </table>
                </div>
              ),
              thead: ({ children, ...props }) => (
                <thead className="bg-gray-50 dark:bg-gray-800" {...props}>
                  {children}
                </thead>
              ),
              th: ({ children, ...props }) => (
                <th className="px-4 py-2 text-left font-semibold text-foreground border-b border-border break-words" {...props}>
                  {children}
                </th>
              ),
              td: ({ children, ...props }) => (
                <td className="px-4 py-2 text-foreground border-b border-border break-words" {...props}>
                  {children}
                </td>
              ),
              hr: ({ ...props }) => (
                <hr className="my-8 border-border" {...props} />
              ),
              img: ({ src, alt, ...props }) => (
                <img
                  src={src}
                  alt={alt}
                  className="max-w-full h-auto rounded-lg shadow-md mb-4"
                  {...props}
                />
              ),
            }}
          >
            {source}
          </ReactMarkdown>
        </div>
      </article>
    </main>
  );
}
