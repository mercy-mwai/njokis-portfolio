"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, ExternalLink, Menu, X } from "lucide-react"
import {FaLinkedin, FaGithub,FaTwitter } from "react-icons/fa";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  const skills = {
    backend: ["PHP", "Laravel", "MySQL", "PostgreSQL", "REST APIs", "LAMP Stack"],
    frontend: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "HTML/CSS"],
    tools: ["Git", "GitHub", "Vercel", "Netlify", "Render", "VS Code"],
  }

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "An online store built using React and Firebase.",
      image: "/assets/images/ecommerce.png",
      tags: ["Firebase", "React"],
      link: "https://e-commerce-1b015.web.app/",
       github: "https://github.com/mercy-mwai/e-commerce",
    },
    {
      title: "Portfolio Website",
      description:
        "Modern, responsive portfolio website built with Next.js and Tailwind CSS, showcasing projects and skills with smooth animations.",
      image: "/assets/images/NjokiiP.jpeg",
      tags: ["Next.js", "NeonDB", "Tailwind CSS"],
      link: "https://njokis-portfolio.vercel.app/",
      github: "https://github.com/mercy-mwai/njoki-portfolio",
    },
    {
      title: "Afya Prime Supplies",
      description:
        "E-commerce website for medical equipments built using Next Js & Tailwind Css",
      image: "/assets/images/afyaprime.png",
      tags: [ "Next.js", "PostgreSQL"],
      github: "https://github.com/mercy-mwai/AfyaPrime_Supplies",
      link: "#",
    },
    {
      title: "Proposal Builder",
      description:
        "Coming soon",
      image: "",
      tags: [ "Next.js", "PostgreSQL", "Laravel"],
      github: "https://github.com/mercy-mwai/proposal_builder",
      link: "#",
    },
    {
      title: "Private Journaling",
      description:
        "Private Journaling for study planner and journaling using Next Js & Laravel",
      image: "",
      tags: [ "Next.js", "PostgreSQL", "Laravel"],
      github: "https://github.com/mercy-mwai/PrivateJournaling",
      link: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
     
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-bold text-cyan-400">
              Njoki Mwai
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {["home", "about", "skills", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                    activeSection === section ? "text-cyan-400" : "text-slate-300"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-slate-300 hover:text-cyan-400">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-800">
              {["home", "about", "skills", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left py-2 text-sm font-medium transition-colors hover:text-cyan-400 ${
                    activeSection === section ? "text-cyan-400" : "text-slate-300"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-cyan-400 font-medium">Hi, my name is</p>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance">Njoki Mwai</h1>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-400 text-balance">
                  PHP Backend Developer
                </h2>
              </div>
              <p className="text-lg text-slate-400 leading-relaxed max-w-xl text-pretty">
                Specializing in Laravel and the LAMP stack. I build scalable, secure, and efficient web applications
                with modern frontend technologies.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => scrollToSection("projects")}
                  className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-medium"
                >
                  View My Work
                </Button>
                <Button
                  onClick={() => scrollToSection("contact")}
                  variant="outline"
                  className="border-cyan-500 text-cyan-400 hover:bg-cyan-600/100"
                >
                  Get In Touch
                </Button>
              </div>
              <div className="flex gap-4 pt-4">
                <Link
                  href="https://github.com/mercy-mwai"
                  target="_blank"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                 <FaGithub size={24}/>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/njoki-m-mwai-aa7214279/"
                  target="_blank"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                 <FaLinkedin size={24} />
                </Link>
                <Link
                  href="https://x.com/NjokiiMwai"
                  target="_blank"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                 <FaTwitter size={24} />
                </Link>
                <Link href="malito:mercyneemam@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  <Mail size={24} />
                </Link>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-cyan-500/20 rounded-lg transform rotate-6"></div>
                <div className="relative w-full h-full rounded-lg overflow-hidden border-2 border-cyan-500/50 hover:border-cyan-500 transition-colors group">
                  <Image
                    src="/assets/images/Njoki.jpeg"
                    alt="Njoki Mwai"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-balance">About Me</h2>
            <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
              <p className="text-pretty">
                Hey there! I'm Njoki Mwai, a passionate PHP Backend Developer with a growing focus on building scalable,
                secure, and efficient web applications.
              </p>
              <p className="text-pretty">
                I specialize in <span className="text-cyan-400 font-medium">Laravel and the LAMP stack</span> for
                backend development and enjoy designing well-structured databases with{" "}
                <span className="text-cyan-400 font-medium">MySQL and PostgreSQL</span>. On the frontend, I love
                crafting modern, responsive user interfaces with{" "}
                <span className="text-cyan-400 font-medium">React and Next.js</span>.
              </p>
              <p className="text-pretty">
                I'm also skilled in <span className="text-cyan-400 font-medium">Git & GitHub</span> for version control
                and use platforms like <span className="text-cyan-400 font-medium">Vercel, Netlify, and Render</span> to
                bring projects to life.
              </p>
              <p className="text-pretty">
                Beyond coding, I thrive on solving real-world problems and collaborating with teams to build solutions
                that are both impactful and user-friendly. I am more of a Backend (Laravel) developer now, but I also
                work on Next.js using JavaScript and TypeScript.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-balance">Skills & Technologies</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-slate-900 border-slate-800 hover:border-cyan-500/50 transition-colors">
                <CardHeader>
                  <CardTitle className="text-cyan-400">Backend</CardTitle>
                  <CardDescription>Server-side development</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-slate-800 text-slate-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-900 border-slate-800 hover:border-cyan-500/50 transition-colors">
                <CardHeader>
                  <CardTitle className="text-cyan-400">Frontend</CardTitle>
                  <CardDescription>Client-side development</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-slate-800 text-slate-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-900 border-slate-800 hover:border-cyan-500/50 transition-colors">
                <CardHeader>
                  <CardTitle className="text-cyan-400">Tools & Platforms</CardTitle>
                  <CardDescription>Development tools</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-slate-800 text-slate-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

     
      <section id="projects" className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-balance">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="bg-slate-900 border-slate-800 hover:border-cyan-500/50 transition-all hover:transform hover:scale-105 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-slate-400">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-slate-800 text-slate-300">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                     <div className="flex justify-between mt-4">
                        <Link
                      href={project.link}
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      View Project <ExternalLink size={16} />
                    </Link>
                    <Link href={project.github} className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                    Github
                    </Link>
                     </div>
                    
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">Get In Touch</h2>
            <p className="text-lg text-slate-400 mb-8 text-pretty">
              I'm currently open to new opportunities and collaborations. Whether you have a project in mind or just
              want to connect, feel free to reach out!
            </p>
            <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-medium">
              <Link href="mailto:mercyneemam@gmail.com">Say Hello</Link>
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">© 2025 Njoki Mwai.</p>
            <div className="flex gap-4">
              <Link
                href="https://github.com/mercy-mwai"
                target="_blank"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <FaGithub size={24} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/njoki-m-mwai-aa7214279/"
                target="_blank"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
               <FaLinkedin size={24} />
              </Link>
              <Link
                href="https://x.com/NjokiiMwai"
                target="_blank"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
               <FaTwitter size={24} />
              </Link>
              <Link href="malito:mercyneemam@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Mail size={20} />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
