"use client";
import { Typewriter } from "react-simple-typewriter";
import Nav from "@/components/Navbar";
import AboutSection from "./about/page";
import Banner from "@/components/Banner";
import { useRouter } from "next/navigation";
import { motion } from "motion/react"

const Home = () => {
  const handAnimation = {
    shake: {
      rotate: [ -10, 10, -10, 10, -5, 5, 0 ],
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        repeat: 3, // How many times to repeat
      },
    },
  };

  const router = useRouter();
  const handleClick = () => {
    router.push("/contact");
  };
  return (
    <Banner>
      {/* Nav */}
      <Nav />
      {/* Content */}
      <div className="relative z-20 text-white pt-20 sm:pt-24 md:pt-32 lg:pt-60 px-6 sm:px-10 md:px-20">
        <h1 
        className="text-[2.4em] font-bold mb-6 text-left pl-14"
        >
          Hi there{" "}
          <motion.span 
          role="img" 
          aria-label="waving hand"  
          variants={handAnimation}
          whileHover="shake">
            👋🏽
          </motion.span>
        </h1>
        <h1 className="text-[2.5em] pl-14">
          I'M <strong className="text-purple-300">NJOKI MWAI</strong>
        </h1>
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
        <div className=" mx-auto flex flex-col md:flex-row  items-start gap-10 ml-10 mt-7">
          <button
            onClick={handleClick}
            className="
      relative overflow-hidden group
       text-white font-medium
        px-3 py-3 mt-4
         rounded-full
        bg-gradient-to-r from-purple-500 to-indigo-600
        shadow-lg
        transition-transform duration-300
        hover:scale-105
  "
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full" />
            <span className="relative z-10">Contact Me</span>
          </button>

          <button
            onClick={() => router.push("/projects")}
            className="
      relative overflow-hidden group
       text-white font-medium
        px-3 py-3 mt-4
         rounded-full
        bg-gradient-to-r from-purple-500 to-indigo-600
        shadow-lg
        transition-transform duration-300
        hover:scale-105
  "
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
      </div>
      <AboutSection />
    </Banner>
  );
};

export default Home;
