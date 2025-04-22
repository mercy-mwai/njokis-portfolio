"use client";
import { Typewriter } from "react-simple-typewriter";
import Footer from "@/components/Footer";
import Nav from "@/components/Navbar";
import Image from "next/image";

const Home = () => {
  return (
    <section className="bg-[url('/assets/images/banner.png')] bg-cover bg-center min-h-[250vh] w-full relative">
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
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 pt-20 px-8 m-6">
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

        {/* Bio Text Section */}
        <div className="text-white max-w-xl text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">Hi, I'm Njoki Mwai 👋🏽</h1>
          <p className="text-lg mb-4">
            I’m a passionate{" "}
            <span className="text-purple-400">Software Developer 👩🏽‍💻</span> and a
            lifelong learner 🚀. Welcome to my portfolio — let’s build something
            amazing together!
          </p>
          <button className="mt-4 bg-purple-600 hover:bg-purple-800 text-white px-6 py-2 rounded-lg transition">
            View My Projects
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </section>
  );
};

export default Home;
