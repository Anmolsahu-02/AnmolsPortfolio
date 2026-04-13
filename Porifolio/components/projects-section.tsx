"use client"

import { motion } from "framer-motion"
import { ExternalLink, ArrowUpRight } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

interface Project {
  _id: string
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
  imageUrl: string
}

interface MappedProject {
  _id: string
  title: string
  description: string
  tags: string[]
  image: string
  live: string
  category: string
  featured: boolean
}

const staticProjects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with user authentication, shopping cart, payment integration, and admin dashboard. Built with React, Node.js, and MongoDB.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    image: "/threadformEcommerce.png",
    live: "https://threadform.vercel.app/",
    category: "fullstack",
    featured: true,
  },
  {
    title: "EdTech Platform",
    description: "An educational technology platform with interactive learning modules, course management, and student progress tracking. Built with modern web technologies for enhanced learning experiences.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io", "Education"],
    image: "/Edtechplatform.png",
    live: "https://the-edtech.vercel.app/",
    category: "fullstack",
    featured: true,
  },
  {
    title: "Blockchain Minor Project",
    description: "A blockchain-based escrow service for secure transactions and smart contract management. Features decentralized trust and automated settlement mechanisms.",
    tags: ["React", "Tailwind CSS", "Blockchain", "Smart Contracts", "Web3"],
    image: "/escrow.png",
    live: "https://sea-escrow.vercel.app/",
    category: "frontend",
    featured: false,
  },
]

const categories = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full Stack" },
  { id: "frontend", label: "Frontend" },
]

function ProjectCard({ project, index }: { project: MappedProject, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-2xl bg-card/80 backdrop-blur-md border border-border/50 hover:border-primary/50 transition-all duration-500">
        <div className="relative aspect-[4/3] overflow-hidden bg-secondary/20">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
          
          {/* Hover overlay with links */}
          <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
            >
              <ExternalLink className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <div className="flex gap-2">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/20 transition-colors"
                aria-label="View live demo"
              >
                <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-primary" />
              </a>
            </div>
          </div>
          
          <p className="text-foreground/70 mb-6 leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <motion.div
          className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
          whileHover={{ scale: 1.1 }}
        >
          <ArrowUpRight className="w-6 h-6 text-primary" />
        </motion.div>
      </div>
    </motion.div>
  )
}

export function ProjectsSection() {
  const [projects, setProjects] = useState<MappedProject[]>([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState("all")

  useEffect(() => {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000'
    fetch(`${backendUrl}/api/projects`)
      .then(res => res.json())
      .then(data => {
        const fetchedMapped: MappedProject[] = data.map((p: Project) => ({
          ...p,
          tags: p.technologies,
          image: p.imageUrl,
          live: p.liveUrl,
          category: "fullstack",
          featured: true
        }))
        const staticMapped: MappedProject[] = staticProjects.map((p, index) => ({
          ...p,
          _id: `static-${index}`
        }))
        setProjects(staticMapped.concat(fetchedMapped))
        setLoading(false)
      })
      .catch(err => {
        console.error('Error fetching projects:', err)
        // If fetch fails, show only static
        const staticMapped: MappedProject[] = staticProjects.map((p, index) => ({
          ...p,
          _id: `static-${index}`
        }))
        setProjects(staticMapped)
        setLoading(false)
      })
  }, [])

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="relative py-32 px-4">
      {/* Background for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/95 to-background/80 pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
            My Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            A showcase of my recent projects demonstrating various technologies and problem-solving approaches
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category.id)}
                className="rounded-full"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-6"
          layout
        >
          {loading ? (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">Loading projects...</p>
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">No projects found.</p>
            </div>
          ) : (
            filteredProjects.map((project, index) => (
              <ProjectCard key={project._id} project={project} index={index} />
            ))
          )}
        </motion.div>
      </div>
    </section>
  )
}
