"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ArrowDown, Download, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Typewriter } from "@/components/typewriter"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      {/* Background overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90 pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-block px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-primary text-sm font-medium tracking-widest uppercase">
              Software Developer
            </p>
          </motion.div>
          
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="block text-balance">Anmol Sahu</span>
          </motion.h1>

          <motion.div
            className="text-2xl md:text-3xl font-semibold text-primary mb-6 h-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Typewriter 
              words={["Full Stack Developer", "React Enthusiast", "Problem Solver", "Tech Explorer"]} 
            />
          </motion.div>
          
          <motion.p
            className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Passionate about building scalable web applications and crafting 
            immersive digital experiences. Currently exploring the intersection 
            of creativity and technology.
          </motion.p>

          {/* Download CV Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Button
              asChild
              size="lg"
              className="group px-8 py-6 text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
            >
              <a href="/api/download/pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 w-5 h-5 group-hover:animate-bounce" />
                Download CV (PDF)
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="group px-8 py-6 text-base font-medium rounded-full border-primary/50 hover:bg-primary/10"
            >
              <a href="/api/download/docx" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 w-5 h-5" />
                Download CV (Word)
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a
              href="https://github.com/Anmolsahu-02"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-card/80 backdrop-blur-sm border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              <Github className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/anmol-sahu"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-card/80 backdrop-blur-sm border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:sahuanmol002@gmail.com"
              className="group p-3 rounded-full bg-card/80 backdrop-blur-sm border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              <Mail className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
              <span className="sr-only">Email</span>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { delay: 1, duration: 0.5 },
            y: { delay: 1, duration: 1.5, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <ArrowDown className="w-6 h-6 text-primary" />
        </motion.div>
      </div>
    </section>
  )
}
