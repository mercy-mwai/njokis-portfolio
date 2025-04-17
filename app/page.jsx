"use client";
import { Typewriter } from "react-simple-typewriter";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="h-screen overflow-y-scroll">
      <section className="bg-[url('/assets/images/image.png')] bg-cover bg-center min-h-[250vh] relative w-full">
        {/* Content */}

        <div className="relative z-20 text-white pt-60 px-16">
          <h1 className="text-[2.4em] font-bold mb-6 text-left pl-14">Hi there
            <span role="img" aria-label="waving hand">👋🏽</span>
          </h1>
          <h1 className="text-[2.5em] pl-14">I'M <strong className="main-name text-purple-300">NJOKI MWAI</strong></h1>
          <p className="mt-4 text-[2.0em] text-left pl-14  text-purple-300">
          <Typewriter
          words={["Software Developer 👩🏽‍💻", "| Lifelong Learner 🚀","Welcome to my portfolio ✨", "Let's build something amazing 🚀" ]}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
           </p>
        </div>
        <Footer />
      </section>
    </div>
  );
};

export default Home;
