"use client";
import Banner from "@/components/Banner";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

const AboutSection = () => {
  return (
    <Banner
      className="bg-black/10 text-white px-6 py-16 md:px-20 mt-60"
      id="about"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
        {/* Text Banner */}
        <div className="w-full md:w-2/3 mt-20 md:mt-40 text-center md:text-left px-2 sm:px-6">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            LET ME <span className="text-purple-400">INTRODUCE</span> MYSELF
          </h1>
          <p className="text-base sm:text-lg leading-relaxed mb-4 text-white">
            Hey there! I'm Njoki Mwai, a dedicated{" "}
            <strong>Full-Stack Developer</strong> who enjoys building strong and
            efficient backend systems that turn ideas into real products.
            <br />
            <br />I enjoy working across the stack—from responsive UIs with{" "}
            <strong>React and Next.js</strong> to robust backends with
            <span className="text-purple-400 font-semibold">
              {" "}
              Node.js, Express, MongoDB, and MySQL
            </span>
            .
            <br />
            <br />
            I'm skilled in <strong>Git & GitHub</strong> for collaboration and
            use tools like
            <strong> Vercel, Netlify, and Render</strong> for deployment.
            <br />
            <br />I love <strong>solving real-world problems</strong> with
            clean, scalable code and enjoy working in teams that push me to grow
            and build better.
          </p>
        </div>

        {/* Image Banner */}
        <div className="md:w-1/3 flex justify-center md:justify-end md:mt-50">
          <Tilt>
            <Image
              src="/assets/images/Njoki.jpeg"
              width={250}
              height={250}
              alt="Njoki"
              className="rounded-full border-4 border-purple-500 shadow-lg"
            />
          </Tilt>
        </div>
      </div>
   
    </Banner>
  );
};

export default AboutSection;