import { NextResponse } from "next/server"

// Sample resume data - In production, you'd serve an actual DOCX file
const resumeContent = `
ANMOL SAHU
Software Developer

CONTACT
Email: anmol@example.com
Phone: +91 XXX XXX XXXX
Location: India
LinkedIn: linkedin.com/in/anmolsahu
GitHub: github.com/anmolsahu

SUMMARY
Passionate software developer with expertise in full-stack web development.
Skilled in React, Node.js, and modern web technologies. Currently pursuing
a degree in Computer Science while actively building projects and contributing
to open-source communities.

EDUCATION
Bachelor of Technology in Computer Science
XYZ University | 2021 - 2025
CGPA: 8.5/10

Higher Secondary Education (XII)
ABC Senior Secondary School | 2019 - 2021
Percentage: 92%

SKILLS
Frontend: React.js, Next.js, TypeScript, Tailwind CSS, HTML/CSS, JavaScript
Backend: Node.js, Express.js, MongoDB, PostgreSQL, REST APIs
Tools: Git/GitHub, Docker, VS Code, Figma, Linux, Vercel/Netlify

EXPERIENCE
Web Development Intern | Tech Startup Inc. | June 2024 - August 2024
- Developed responsive web applications using React and Node.js
- Collaborated with senior developers on production-level code

Open Source Contributor | Various Projects | 2023 - Present
- Active contributor to open-source projects
- Fixed bugs, added features, and improved documentation

PROJECTS
1. E-Commerce Platform - Full-stack e-commerce solution with React, Node.js, MongoDB
2. Task Management App - Collaborative task management with Next.js and PostgreSQL
3. Weather Dashboard - Responsive weather app using React and OpenWeather API

CERTIFICATIONS
- Meta Front-End Developer Professional Certificate (Coursera)
- Full Stack Web Development (Udemy)
- Programming in Python (NPTEL)
- JavaScript Algorithms and Data Structures (freeCodeCamp)

ACHIEVEMENTS
- Smart India Hackathon Finalist 2024
- College Code Sprint Winner 2023
- Completed 100 Days of Code Challenge
`

export async function GET() {
  // Create a simple text-based document simulation
  // In production, you would use a library like docx or 
  // serve an actual DOCX file from your public folder
  
  const encoder = new TextEncoder()
  const data = encoder.encode(resumeContent)

  return new NextResponse(data, {
    headers: {
      "Content-Type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "Content-Disposition": "attachment; filename=Anmol_Sahu_Resume.docx",
    },
  })
}
