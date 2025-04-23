"use client";
import { Typewriter } from "react-simple-typewriter";
import Footer from "@/components/Footer";
import Nav from "@/components/Navbar";
import Image from "next/image";

const Home = () => {
  return (
    <section className="bg-[url('/assets/images/banner.png')] bg-cover bg-center min-h-[200vh] w-full relative">
      {/* Nav */}
      <Nav />

      {/* Content */}
      <div className="relative z-20 text-white pt-60 px-16">
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

      {/* Image */}

      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12 pt-20 px-16">
        {/* Image Section */}
        <div>
          <Image
            src="/assets/images/Njoki.jpeg"
            alt="Njoki Mwai"
            width={250}
            height={250}
            className="rounded-full border-4 border-purple-600"
          />
        </div>

        {/* Text Section */}
        <div className="max-w-md text-white text-left md:pl-14">
          <h2 className="text-3xl font-bold mb-4">Who am I?</h2>
          <p className="text-lg leading-relaxed">
            I’m Njoki Mwai, a passionate Software Developer 👩🏽‍💻 who loves solving
            problems and learning continuously. I specialize in building dynamic
            and responsive web applications. Welcome to my digital world!
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </section>
  );
};

export default Home;
