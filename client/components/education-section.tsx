"use client"

import { motion } from "framer-motion"
import { GraduationCap, Briefcase, Calendar } from "lucide-react"

const education = [
  {
    type: "education",
    title: "Bachelor of Technology in Computer Science",
    institution: "XYZ University",
    period: "2021 - 2025",
    description: "Pursuing B.Tech in Computer Science with focus on software development, data structures, and algorithms.",
    grade: "CGPA: 8.5/10",
  },
  {
    type: "education",
    title: "Higher Secondary Education (XII)",
    institution: "ABC Senior Secondary School",
    period: "2019 - 2021",
    description: "Completed 12th grade with Science stream (Physics, Chemistry, Mathematics).",
    grade: "Percentage: 92%",
  },
  {
    type: "education",
    title: "Secondary Education (X)",
    institution: "ABC Secondary School",
    period: "2019",
    description: "Completed 10th grade with distinction in Mathematics and Science.",
    grade: "Percentage: 95%",
  },
]

const experience = [
  {
    type: "experience",
    title: "Web Development Intern",
    institution: "Tech Startup Inc.",
    period: "June 2024 - August 2024",
    description: "Developed responsive web applications using React and Node.js. Collaborated with senior developers on production-level code.",
  },
  {
    type: "experience",
    title: "Open Source Contributor",
    institution: "Various Projects",
    period: "2023 - Present",
    description: "Active contributor to open-source projects. Fixed bugs, added features, and improved documentation for community projects.",
  },
  {
    type: "experience",
    title: "Freelance Developer",
    institution: "Self-Employed",
    period: "2022 - Present",
    description: "Built custom websites and web applications for local businesses and startups. Managed projects from conception to deployment.",
  },
]

function TimelineItem({ item, index, isLeft }: { item: typeof education[0], index: number, isLeft: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`relative flex items-center ${isLeft ? 'md:flex-row-reverse' : ''} md:w-1/2 ${isLeft ? 'md:pr-12 md:ml-auto' : 'md:pl-12'}`}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-auto md:-translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg z-10" />
      
      {/* Content card */}
      <div className="ml-8 md:ml-0 w-full group">
        <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300">
          <div className="flex items-center gap-2 text-primary text-sm font-medium mb-2">
            <Calendar className="w-4 h-4" />
            {item.period}
          </div>
          <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
            {item.title}
          </h3>
          <p className="text-primary/80 font-medium text-sm mb-3">{item.institution}</p>
          <p className="text-muted-foreground text-sm leading-relaxed mb-2">
            {item.description}
          </p>
          {"grade" in item && (
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
              {item.grade}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export function EducationSection() {
  return (
    <section id="education" className="relative py-32 px-4">
      {/* Background for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/95 to-background/80 pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
            My Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Education & Experience
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-3 rounded-xl bg-primary/10 border border-primary/30">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Education</h3>
            </motion.div>
            
            <div className="relative space-y-8">
              {/* Timeline line */}
              <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-border" />
              
              {education.map((item, index) => (
                <TimelineItem key={item.title} item={item} index={index} isLeft={false} />
              ))}
            </div>
          </div>

          {/* Experience Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-3 rounded-xl bg-accent/10 border border-accent/30">
                <Briefcase className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Experience</h3>
            </motion.div>
            
            <div className="relative space-y-8">
              {/* Timeline line */}
              <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-border" />
              
              {experience.map((item, index) => (
                <TimelineItem key={item.title} item={item} index={index} isLeft={false} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
