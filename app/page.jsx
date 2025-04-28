"use client";
import { Typewriter } from "react-simple-typewriter";
import Footer from "@/components/Footer";
import Nav from "@/components/Navbar";
import AboutSection from "./about/page";
import Contact from "./contact/page";
import Projects from "./projects/page";
import Banner from "@/components/Banner";
import SkillSection from "./skills/page";

const Home = () => {
  return (
    <Banner>
      {/* Nav */}
      <Nav />
      {/* Content */}
      <div className="relative z-20 text-white pt-20 sm:pt-24 md:pt-32 lg:pt-60 px-6 sm:px-10 md:px-20">
        <h1 className="text-[2.4em] font-bold mb-6 text-left pl-14">
          Hi there{" "}
          <span role="img" aria-label="waving hand">
            👋🏽
          </span>
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
      </div>
      <AboutSection />
    </Banner>
  );
};

export default Home;
