"use client"

import { motion } from "framer-motion"
import { Award, ExternalLink, Trophy, Medal } from "lucide-react"

const certifications = [
  {
    title: "Programming using Python",
    issuer: "University of Michigan",
    date: "2023",
    credential: "#",
    skills: ["Python", "Programming"],
  },
  {
    title: "Neural Networks and Deep Learning",
    issuer: "Coursera",
    date: "2023",
    credential: "#",
    skills: ["Neural Networks", "Deep Learning", "AI"],
  },
  {
    title: "Programming in C",
    issuer: "Infosys",
    date: "2023",
    credential: "#",
    skills: ["C", "Programming"],
  },
]

const achievements = [
  {
    title: "Organized College Hackathon",
    description: "Successfully organized a college hackathon with over 600 participants, fostering innovation and collaboration among students.",
    icon: Trophy,
    year: "2026",
  },
  {
    title: "College Coding Hour Top Performer",
    description: "Achieved top performer status in the College Coding Hour challenge with consistent high scores and problem-solving skills.",
    icon: Medal,
    year: "2023",
  },
  {
    title: "100 Days of Code Challenge",
    description: "Successfully completed the 100 Days of Code challenge, building projects daily.",
    icon: Award,
    year: "2023",
  },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="relative py-32 px-4">
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
            Credentials
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Certifications & Achievements
          </h2>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/30">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <a
                  href={cert.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-primary hover:underline"
                >
                  Verify
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {cert.issuer} &bull; {cert.date}
              </p>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs font-medium rounded-md bg-secondary/50 text-foreground/70"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Awards & Achievements
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gradient-to-br from-primary/10 via-card/80 to-accent/10 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 text-center"
            >
              <div className="inline-flex p-4 rounded-2xl bg-primary/10 border border-primary/30 mb-4">
                <achievement.icon className="w-8 h-8 text-primary" />
              </div>
              <span className="block text-sm text-primary font-medium mb-2">{achievement.year}</span>
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {achievement.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
