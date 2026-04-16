"use client"

import { motion } from "framer-motion"
import { Award, ExternalLink, Trophy, Medal, X } from "lucide-react"
import { useState } from "react"

const certifications = [
  {
    title: "Programming using Python",
    issuer: "University of Michigan",
    date: "2023",
    credential: "/certificates/python crtificate.pdf",
    skills: ["Python", "Programming"],
  },
  {
    title: "Big Data Fundamentals",
    issuer: "Cognitive Class",
    date: "2025",
    credential: "/certificates/BigDataUniversity BD0211EN Certificate _ Cognitive Class.pdf",
    skills: ["Big Data", "Data Analysis"],
  },
  {
    title: "Programming in C",
    issuer: "Infosys",
    date: "2023",
    credential: "/certificates/Programming in C certificate.pdf",
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
  const [selectedCert, setSelectedCert] = useState<string | null>(null)

  return (
    <>
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
                  <button
                    onClick={() => setSelectedCert(cert.credential)}
                    className="flex items-center gap-1 text-sm text-primary hover:underline cursor-pointer"
                  >
                    Verify
                    <ExternalLink className="w-3 h-3" />
                  </button>
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

    {/* Certificate Modal */}
    {selectedCert && (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-card rounded-3xl overflow-hidden border border-border"
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedCert(null)}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
          >
            <X className="w-6 h-6 text-foreground" />
          </button>

          {/* PDF Viewer */}
          <iframe
            src={selectedCert}
            className="w-full h-[90vh]"
            title="Certificate"
          />
        </motion.div>
      </div>
    )}
    </>
  )
}
