// Database configuration and Prisma setup
// This file would contain your Prisma client and database utilities

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  published: boolean
  publishedAt: Date | null
  createdAt: Date
  updatedAt: Date
  category: string
  tags: string[]
  readTime: string
  featured: boolean
  image?: string
}

export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  image: string
  tags: string[]
  category: string
  githubUrl?: string
  demoUrl?: string
  featured: boolean
  createdAt: Date
  updatedAt: Date
}

export interface ContactSubmission {
  id: string
  name: string
  email: string
  subject: string
  message: string
  status: "new" | "read" | "replied"
  createdAt: Date
}

// Mock data functions - replace with actual Prisma queries
export async function getBlogPosts(): Promise<BlogPost[]> {
  // This would be: return await prisma.blogPost.findMany({ where: { published: true } })
  return []
}

export async function getProjects(): Promise<Project[]> {
  // This would be: return await prisma.project.findMany({ orderBy: { createdAt: 'desc' } })
  return []
}

export async function createContactSubmission(
  data: Omit<ContactSubmission, "id" | "status" | "createdAt">,
): Promise<ContactSubmission> {
  // This would be: return await prisma.contactSubmission.create({ data: { ...data, status: 'new' } })
  return {
    id: "mock-id",
    ...data,
    status: "new",
    createdAt: new Date(),
  }
}
