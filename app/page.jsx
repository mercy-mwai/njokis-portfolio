"use client";

import { Typewriter } from "react-simple-typewriter";
import { motion, useAnimation } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaArrowUp,
} from "react-icons/fa";

const Home = () => {
  // Navigation state
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  // Contact form state
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    content: "",
  });

  // Animation controls
  const controls = useAnimation();
  const sequence = useRef([
    ["rotate", 15, { duration: 0.2, ease: "easeInOut" }],
    ["rotate", -15, { duration: 0.2, ease: "easeInOut" }],
    ["rotate", 10, { duration: 0.2, ease: "easeInOut" }],
    ["rotate", -10, { duration: 0.2, ease: "easeInOut" }],
    ["rotate", 5, { duration: 0.2, ease: "easeInOut" }],
    ["rotate", -5, { duration: 0.2, ease: "easeInOut" }],
    ["rotate", 0, { duration: 0.2, ease: "easeInOut" }],
  ]).current;

  // Skills data
  const skills = [
    {
      category: "Programming Languages",
      items: [
        { src: "/assets/icons/javascript.svg", alt: "JavaScript" },
        { src: "/assets/icons/php.svg", alt: "PHP" },
      ],
    },
    {
      category: "Frontend Development",
      items: [
        { src: "/assets/icons/tailwind.svg", alt: "Tailwind CSS" },
        { src: "/assets/icons/react.svg", alt: "React" },
        { src: "/assets/icons/nextjs.svg", alt: "Next.js" },
      ],
    },
    {
      category: "Backend Development",
      items: [
        { src: "/assets/icons/node-js.svg", alt: "Node.js" },
        { src: "/assets/icons/Laravel.png", alt: "Laravel" },
        { src: "/assets/icons/restapi.svg", alt: "REST API" },
      ],
    },
    {
      category: "Databases",
      items: [
        { src: "/assets/icons/mongodb.svg", alt: "MongoDB" },
        { src: "/assets/icons/mysql.svg", alt: "MySQL" },
        { src: "/assets/icons/firebase.svg", alt: "Firebase" },
        { src: "/assets/icons/postgresql.svg", alt: "PostgreSQL" },
      ],
    },
    {
      category: "Tools",
      items: [
        { src: "/assets/icons/git.svg", alt: "Git" },
        { src: "/assets/icons/github.svg", alt: "GitHub" },
      ],
    },
  ];

  // Projects data
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio built with Next.js,Tailwind CSS and PostgreSQL.",
      image: "/assets/images/NjokiP.png",
      github: "https://github.com/mercy-mwai/njoki-portfolio",
      demo: "https://njoki-portfolio.vercel.app/",
    },
    {
      title: "Promptopia",
      description: "A promptopia built with Next.js,MongoDB,Tailwind CSS.",
      image: "/assets/images/promptopia.png",
      github: "https://github.com/mercy-mwai/promptopia-2",
      demo: "https://promptopia-2-seven.vercel.app/",
    },
    {
      title: "E-commerce App",
      description: "An online store built using React and Firebase.",
      image: "/assets/images/ecommerce.png",
      github: "https://github.com/mercy-mwai/e-commerce",
      demo: "https://e-commerce-1b015.web.app/",
    },
    {
      title: "World Clock",
      description: "A world clock built using Html,CSS and JavaScript.",
      image: "/assets/images/clock.png",
      github: "https://github.com/mercy-mwai/World-clock",
      demo: "https://world-clock-mocha.vercel.app/",
    },
    {
      title: "Weather App",
      description: "A Weather App built using Html,CSS and JavaScript.",
      image: "/assets/images/weather.png",
      github: "https://github.com/mercy-mwai/Weather-App-2",
      demo: "https://weather-app-2-tau-pearl.vercel.app/",
    },
  ];

  // Animation effect
  useEffect(() => {
    const doAnimation = async () => {
      for (const [key, value, options] of sequence) {
        await controls.start({ [key]: value, ...options });
      }
    };
    doAnimation();
  }, [controls, sequence]);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      if (homeSection) {
        const homeSectionBottom =
          homeSection.offsetTop + homeSection.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight;

        // Show navbar when scrolled past the home section
        setShowNavbar(scrollPosition > homeSectionBottom);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper functions
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);

    const response = await fetch("/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        content: formData.content,
      }),
    });

    if (response.ok) {
      console.log("Message sent!");
      setFormData({ name: "", email: "", content: "" });
    } else {
      console.error("Failed to send message");
    }
  };

  // Contact Link Component
  const ContactLink = ({ href, icon, label, newTab }) => (
    <a
      href={href}
      target={newTab ? "_blank" : "_self"}
      rel={newTab ? "noopener noreferrer" : undefined}
      className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-md px-3 py-2 hover:bg-purple-400 hover:text-black transition duration-300"
    >
      {icon}
      <span className="text-lg">{label}</span>
    </a>
  );

  // Nav Link Component
  const NavLink = ({ onClick, label }) => (
    <button
      onClick={onClick}
      className="text-white hover:bg-purple-900 hover:text-white rounded-lg px-3 py-2 text-lg transition duration-300"
    >
      {label}
    </button>
  );

  return (
    <div className="bg-[url('/assets/images/CI.png')] bg-cover bg-center bg-no-repeat bg-fixed min-h-screen w-full relative">
      {showNavbar && (
        <motion.nav
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 w-full p-0 z-50 bg-black/80 backdrop-blur-md border-t border-white/20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
            <button
              onClick={() => scrollToSection("home")}
              className="text-white text-2xl font-bold hover:text-purple-300 transition duration-300"
            >
              NM.
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex space-x-6">
              <NavLink onClick={() => scrollToSection("home")} label="Home" />
              <NavLink onClick={() => scrollToSection("about")} label="About" />
              <NavLink
                onClick={() => scrollToSection("skills")}
                label="Skills"
              />
              <NavLink
                onClick={() => scrollToSection("projects")}
                label="Projects"
              />
              <NavLink
                onClick={() => scrollToSection("contact")}
                label="Contact"
              />
            </div>

            {/* Mobile button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none focus:ring-2 focus:ring-white p-2 rounded"
              >
                {isOpen ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden bg-black/90 backdrop-blur-sm border-t border-white/10">
              <div className="px-4 py-4 flex flex-col space-y-4">
                <NavLink onClick={() => scrollToSection("home")} label="Home" />
                <NavLink
                  onClick={() => scrollToSection("about")}
                  label="About"
                />
                <NavLink
                  onClick={() => scrollToSection("skills")}
                  label="Skills"
                />
                <NavLink
                  onClick={() => scrollToSection("projects")}
                  label="Projects"
                />
                <NavLink
                  onClick={() => scrollToSection("contact")}
                  label="Contact"
                />
              </div>
            </div>
          )}
        </motion.nav>
      )}

      {showNavbar && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-20 right-6 z-50 bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-xl group-hover:animate-bounce" />
        </motion.button>
      )}

      {/* Home */}
      <section
        id="home"
        className="relative z-20 text-white pt-20 sm:pt-24 md:pt-32 lg:pt-60 px-6 sm:px-10 md:px-20 min-h-screen flex flex-col justify-center"
      >
        <h1 className="text-[2.4em] font-bold mb-6 text-left pl-14">
          Hi there{" "}
          <motion.span
            role="img"
            className="inline-block"
            aria-label="waving hand"
            animate={controls}
          >
            👋🏽
          </motion.span>
        </h1>
        <motion.h1
          className="text-[2.5em] pl-14"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          I'M <strong className="text-purple-300">NJOKI MWAI</strong>
        </motion.h1>
        <p className="mt-4 text-[2.0em] text-left pl-14 text-purple-300">
          <Typewriter
            words={[
              "Software Developer 👩🏽‍💻",
              "Lifelong Learner 🚀",
              "Welcome to my portfolio ✨",
              "Let's build something amazing 🚀",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>
        <div className="mx-auto flex flex-col md:flex-row items-start gap-10 ml-10 mt-7">
          <button
            onClick={() => scrollToSection("contact")}
            className="relative overflow-hidden group text-white font-medium px-3 py-3 mt-4 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full" />
            <span className="relative z-10">Contact Me</span>
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="relative overflow-hidden group text-white font-medium px-3 py-3 mt-4 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full" />
            <span className="relative z-10">View My Work</span>
          </button>
          <a
            href="/Njoki.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-500 text-white px-3 py-3 mt-4 rounded-md hover:bg-purple-600 transition duration-300"
          >
            View Resume
          </a>
        </div>
      </section>

      {/* About*/}
      <section
        id="about"
        className="bg-black/10 text-white px-6 py-16 md:px-20"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          <div className="w-full md:w-2/3 mt-20 md:mt-40 text-center md:text-left px-2 sm:px-6">
            <motion.h1
              className="text-3xl sm:text-4xl font-bold mb-4 text-white text-center"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              About <span className="text-purple-400">Me</span>
            </motion.h1>
            {/* <p className="text-base sm:text-lg leading-relaxed mb-4 text-white">
              Hey there! I'm Njoki Mwai, a dedicated{" "}
              <strong>Software Developer</strong> focused on building efficient,
              scalable backend systems and intuitive full-stack applications.
              <br />
              <br />I enjoy working across the stack from responsive UIs with{" "}
              <strong>React and Next.js</strong> to robust backends with
              <span className="text-purple-400 font-semibold">
                {" "}
                Node.js, Express, MongoDB, PostgreSQL and MySQL.
              </span>{" "}
              I'm currently expanding my backend skills with{" "}
              <span className="text-purple-400 font-semibold">
                PHP and LAMP stack
              </span>
              <br />
              <br />
              I'm skilled in <strong>Git & GitHub</strong> for collaboration and
              use tools like
              <strong> Vercel, Netlify, and Render</strong> for deployment.
              <br />
              <br />I love <strong>solving real-world problems</strong> with
              clean, scalable code and enjoy working in teams that push me to
              grow and build better.
            </p> */}
            <p className="text-base sm:text-lg leading-relaxed mb-4 text-white">
              Hey there! I'm <span className="font-semibold">Njoki Mwai</span>,
              a passionate <strong>PHP Backend Developer</strong> with a growing
              focus on building scalable, secure, and efficient web
              applications.
              <br />
              <br />I specialize in <strong>
                Laravel and the LAMP stack
              </strong>{" "}
              for backend development and enjoy designing well-structured
              databases with{" "}
              <span className="text-purple-400 font-semibold">
                MySQL and PostgreSQL
              </span>
              . On the frontend, I love crafting modern, responsive user
              interfaces with{" "}
              <span className="text-purple-400 font-semibold">
                React and Next.js
              </span>
              .
              <br />
              <br />
              I’m also skilled in <strong>Git & GitHub</strong> for version
              control and use platforms like{" "}
              <strong>Vercel, Netlify, and Render</strong> to bring projects to
              life.
              <br />
              <br />
              Beyond coding, I thrive on{" "}
              <strong>solving real-world problems</strong> and collaborating
              with teams to build solutions that are both impactful and
              user-friendly.
            </p>
          </div>

          {/* Image Banner */}
          <div className="md:w-1/3 flex justify-center md:justify-end md:mt-50">
            <Tilt>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/assets/images/Njoki.jpeg"
                  width={250}
                  height={250}
                  alt="Njoki"
                  className="rounded-full border-4 border-purple-500 shadow-lg"
                />
              </motion.div>
            </Tilt>
          </div>
        </div>
      </section>

      {/* Skills*/}
      <section
        id="skills"
        className="bg-black/10 text-white px-6 py-20 md:px-20"
      >
        <div>
          <h1 className="text-center text-white pt-20 text-3xl font-bold">
            PROFESSIONAL SKILLSET
          </h1>

          <div className="text-center mt-10">
            {skills.map((section, index) => (
              <div key={index} className="mb-9">
                <h2 className="text-3xl font-semibold text-purple-400 mb-6">
                  {section.category}
                </h2>
                <div className="flex justify-center flex-wrap gap-8">
                  {section.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="transform hover:scale-110 transition-transform duration-300"
                    >
                      <Image
                        src={item.src || "/placeholder.svg"}
                        alt={item.alt}
                        width={60}
                        height={60}
                        className="rounded-md"
                      />
                      <p className="text-sm mt-2 text-white">{item.alt}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects*/}
      <section id="projects" className="py-20">
        <motion.h1
          className="font-bold text-4xl pt-20 text-gray-300 text-center hover:text-amber-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          A SMALL SECTION OF {""}
          <span className="text-purple-400 text-4xl">MY RECENT PROJECTS</span>
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mt-10 px-6 md:px-20">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-2 rounded-lg shadow-lg">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-60 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-200">
                {project.title}
              </h2>
              <p className="text-gray-400">{project.description}</p>
              <div className="flex justify-between mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="bg-black/10 text-white px-6 py-16 md:px-20 mt-10 relative"
      >
        <motion.h1
          className="text-3xl sm:text-4xl font-bold mb-8 text-center pt-20"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-purple-400 ">Get in Touch</span>
        </motion.h1>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Left: Contact Info */}
          <div className="w-full md:w-1/2 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-purple-400 mb-4">
                Feel free to reach out!
              </h2>
              <p className="text-lg text-white">
                Collaboration, job opportunities, or just saying hello — I'm
                excited to connect with you!
              </p>
            </div>
            {/* Contact Links */}
            <div className="space-y-4 text-gray-200">
              <ContactLink
                href="mailto:mercyneemam@gmail.com"
                icon={<FaEnvelope />}
                label="mercyneemam@gmail.com"
              />
              <ContactLink
                href="https://github.com/mercy-mwai"
                icon={<FaGithub />}
                label="Njoki Mwai"
                newTab
              />
              <ContactLink
                href="https://www.linkedin.com/in/njoki-m-mwai-aa7214279/"
                icon={<FaLinkedin />}
                label="Njoki Mwai"
                newTab
              />
              <ContactLink
                href="https://x.com/NjokiiMwai"
                icon={<FaTwitter />}
                label="Njoki Mwai"
                newTab
              />
              <ContactLink
                href="tel:+254703574893"
                icon={<FaPhone />}
                label="+254703574893"
              />
            </div>
          </div>
          {/* Right*/}
          <div className="w-full md:w-1/2 space-y-8">
            <h2 className="text-3xl font-bold text-purple-400 mb-4">
              Send me a message
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
              />
              <textarea
                placeholder="Your Message"
                value={formData.content}
                onChange={(e) =>
                  setFormData({ ...formData, content: e.target.value })
                }
                rows={4}
                className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
              />
              <button
                type="submit"
                className="w-full bg-purple-500 hover:bg-purple-600 transform hover:scale-105 transition duration-300 text-white font-semibold py-2 rounded-md"
              >
                Send Message
              </button>
            </form>

            {/* Success Popup */}
            {showPopup && (
              <div className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md text-center animate-bounce">
                ✅ Message sent successfully!
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
