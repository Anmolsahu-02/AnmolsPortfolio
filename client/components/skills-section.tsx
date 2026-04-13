"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"
import { Sparkles } from "lucide-react"

const skillCategories = [
  {
    name: "Frontend",
    gradient: "from-amber-400 via-orange-500 to-amber-600",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "HTML/CSS", level: 95 },
    ]
  },
  {
    name: "Backend",
    gradient: "from-orange-400 via-amber-500 to-yellow-500",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "PostgreSQL", level: 70 },
      { name: "REST APIs", level: 85 },
      { name: "GraphQL", level: 60 },
    ]
  },
  {
    name: "Tools & Others",
    gradient: "from-yellow-400 via-amber-400 to-orange-400",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Docker", level: 65 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 70 },
      { name: "Linux", level: 75 },
      { name: "Vercel", level: 85 },
    ]
  }
]

const softSkills = [
  { name: "Problem Solving", value: 92 },
  { name: "Communication", value: 88 },
  { name: "Team Collaboration", value: 90 },
  { name: "Quick Learner", value: 95 },
]

function GlassCard({ children, className = "", delay = 0 }: { 
  children: React.ReactNode
  className?: string
  delay?: number 
}) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    x.set(mouseX / rect.width - 0.5)
    y.set(mouseY / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative overflow-hidden rounded-3xl bg-card/70 backdrop-blur-xl border border-border/40 shadow-xl ${className}`}
    >
      {children}
    </motion.div>
  )
}

function SkillCard({ skill, index, gradient }: { 
  skill: { name: string; level?: number; value?: number }
  index: number
  gradient: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className={`p-4 rounded-xl bg-gradient-to-br ${gradient} text-white font-medium text-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer`}
    >
      {skill.name}
    </motion.div>
  )
}

function FloatingOrb({ delay, size, gradient, position }: {
  delay: number
  size: string
  gradient: string
  position: { top?: string; bottom?: string; left?: string; right?: string }
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0.3, 0.5, 0.3],
        scale: [1, 1.1, 1],
        y: [0, -20, 0]
      }}
      transition={{
        duration: 6,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={`absolute ${size} rounded-full bg-gradient-to-br ${gradient} blur-2xl pointer-events-none`}
      style={position}
    />
  )
}

function SoftSkillCard({ skill, index }: { skill: { name: string; value: number }; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-primary/20 text-foreground font-medium text-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
    >
      {skill.name}
    </motion.div>
  )
}

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-32 px-4 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/95 to-background/80 pointer-events-none" />
      
      {/* Floating ambient orbs */}
      <FloatingOrb delay={0} size="w-64 h-64" gradient="from-primary/20 to-accent/20" position={{ top: "10%", left: "-5%" }} />
      <FloatingOrb delay={2} size="w-48 h-48" gradient="from-accent/20 to-primary/20" position={{ top: "40%", right: "-5%" }} />
      <FloatingOrb delay={4} size="w-56 h-56" gradient="from-primary/15 to-accent/15" position={{ bottom: "10%", left: "30%" }} />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">My Expertise</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-5">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg leading-relaxed">
            Crafting digital experiences with a blend of creativity and technical precision
          </p>
        </motion.div>

        {/* Main Skills Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, catIndex) => (
            <GlassCard key={category.name} delay={catIndex * 0.15} className="p-8">
              {/* Card glow effect */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${category.gradient} opacity-20 blur-3xl`} />
              
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 + catIndex * 0.15 }}
                viewport={{ once: true }}
                className={`text-xl font-bold mb-8 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}
              >
                {category.name}
              </motion.h3>
              
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard 
                    key={skill.name} 
                    skill={skill} 
                    index={skillIndex}
                    gradient={category.gradient}
                  />
                ))}
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Soft Skills Section */}
        <GlassCard delay={0.5} className="p-10">
          <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl" />
          
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="text-xl font-bold text-center mb-10 text-foreground"
          >
            Soft Skills
          </motion.h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {softSkills.map((skill, index) => (
              <SoftSkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  )
}
