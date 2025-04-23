"use client";
import Banner from "@/components/Banner";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

const AboutSection = () => {
  return (
    <Banner
      className="bg-black/10 text-white px-6 py-16 md:px-20 mt-10"
      id="about"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10">
        {/* Text Banner */}
        <div className="md:w-2/3 mt-40 ml-30">
          <h1 className="text-4xl font-bold mb-4 text-white">
            LET ME <span className="text-purple-400">INTRODUCE</span> MYSELF
          </h1>
          <p className="text-lg leading-relaxed mb-4 text-white">
            Hey there! I'm Njoki Mwai, a dedicated{" "}
            <strong>Full-Stack Developer</strong> with a strong passion for
            building powerful and efficient backend systems that bring ideas to
            life.
            <br />
            <br />
            While I enjoy working across the stack—from creating responsive
            frontends with React and Next.js to crafting solid APIs—my true
            strength lies in backend development. I love diving into
            <strong> server-side logic, database management,</strong>
            and ensuring seamless performance behind the scenes. I'm confident
            with technologies like
            <span className="text-purple-400 font-semibold">
              Node.js, Express, MongoDB, MySQL, and RESTful APIs.
            </span>
            <br />
            <br />
            What drives me is <strong>solving real-world problems</strong> with
            clean, scalable code and ensuring everything runs smoothly under the
            hood. I thrive in
            <strong>
              collaborative environments, continuously learning and pushing
              myself to build better, faster, and smarter.
            </strong>
            <br />
            <br />
            When I'm not coding, you can find me exploring new tech trends,
            contributing to open-source projects, or enjoying a good book. I'm
            always eager to connect with fellow developers and share knowledge,
            so feel free to reach out!
          </p>
        </div>

        {/* Image Banner */}
        <div className="md:w-1/3 flex justify-center">
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
