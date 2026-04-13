"use client"

import { motion } from "framer-motion"
import { MapPin, GraduationCap, Briefcase, Code2 } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-4">
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
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-primary/30 via-accent/20 to-primary/10 p-1">
                <div className="w-full h-full rounded-2xl bg-card/90 backdrop-blur-sm flex items-center justify-center overflow-hidden border border-border">
                  {/* Profile placeholder - replace with actual image */}
                  <div className="text-8xl font-bold text-primary/30">AS</div>
                </div>
              </div>
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full blur-xl"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
              <p className="text-foreground/90 leading-relaxed text-lg mb-6">
                {`Hello! I'm Anmol Sahu, a passionate software developer with a love for creating 
                elegant solutions to complex problems. I specialize in full-stack development 
                with a focus on React, Node.js, and modern web technologies.`}
              </p>
              <p className="text-foreground/80 leading-relaxed mb-8">
                {`Currently pursuing my degree in Computer Science, I'm constantly exploring 
                new technologies and building projects that challenge me to grow. My goal is 
                to contribute to meaningful projects that make a positive impact.`}
              </p>

              {/* Quick Info Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border/30">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium text-foreground">36, Shubham Vihar, Mahesh Nagar, Jaipur, 302015</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border/30">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Status</p>
                    <p className="font-medium text-foreground">Student / Fresher</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border/30">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Open to</p>
                    <p className="font-medium text-foreground">Internships & Jobs</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border/30">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Code2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Focus</p>
                    <p className="font-medium text-foreground">Full Stack Dev</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
