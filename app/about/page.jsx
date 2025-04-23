"use client";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

const AboutSection = () => {
  return (
    <Banner
      className="bg-black/10 text-white px-6 py-16 md:px-20 mt-10"
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

      <div className="mt-5">
        <p className="text-center text-white mt-50 text-3xl">
          PROFESSIONAL SKILLSET
        </p>
        <div className="flex justify-center flex-wrap gap-8 mt-6">
          <Image
            src="/assets/icons/html.svg"
            alt="HTML"
            width={50}
            height={50}
          />
          <Image
            src="/assets/icons/css.svg"
            alt="CSS"
            width={50}
            height={50}
          />
          <Image
            src="/assets/icons/tailwind.svg"
            alt="Tailwind CSS"
            width={50}
            height={50}
          />
          <Image
            src="/assets/icons/javascript.svg"
            alt="JavaScript"
            width={50}
            height={50}
          />
          <Image
            src="/assets/icons/react.svg"
            alt="React"
            width={50}
            height={50}
          />
          <Image
            src="/assets/icons/nextjs.svg"
            alt="Next.js"
            width={50}
            height={50}
          />
          <Image
            src="/assets/icons/node-js.svg"
            alt="Node.js"
            width={50}
            height={50}
          />
          <Image
            src="/assets/icons/Express JS.svg"
            alt="Express.js"
            width={50}
            height={50}
          />
          <Image
            src="/assets/icons/mongodb.svg"
            alt="MongoDB"
            width={50}
            height={50}
          />
          <Image
            src="/assets/icons/mysql.svg"
            alt="MySQL"
            width={50}
            height={50}
            />
          <Image
            src="/assets/icons/restapi.png"
            alt="Rest API"
            width={50}
            height={50}
            />
          <Image
            src="/assets/icons/python.svg"
            alt="Python"
            width={50}
            height={50}
            />
          <Image
            src="/assets/icons/firebase.svg"
            alt="Python"
            width={50}
            height={50}
            />
          <Image
            src="/assets/icons/git.svg"
            alt="Python"
            width={50}
            height={50}
            />
          <Image
            src="/assets/icons/github.svg"
            alt="Python"
            width={50}
            height={50}
            />
        </div>
      </div>
      <Footer />
    </Banner>
  );
};

export default AboutSection;
