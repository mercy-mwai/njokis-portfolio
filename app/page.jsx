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
          <span role="img" aria-label="waving hand">👋🏽</span>
        </h1>
        <h1 className="text-[2.5em] pl-14">
          I'M{" "}
          <strong className="text-purple-300">NJOKI MWAI</strong>
        </h1>
        <p className="mt-4 text-[2.0em] text-left pl-14 text-purple-300">
          <Typewriter
            words={[
              "Software Developer 👩🏽‍💻",
              "Lifelong Learner 🚀",
              "Welcome to my portfolio ✨",
              "Let's build something amazing 🚀"
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
      <div className="absolute top-0 right-0 w-full h-full flex items-center justify-center">
        <Image
          src="/assets/images/Njoki.jpeg"
          alt="Njoki Mwai"
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>

      {/* Footer */}
      <Footer />
    </section>
  
  );
};

export default Home;
