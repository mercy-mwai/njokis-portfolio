"use client";
import Banner from "@/components/Banner";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope ,FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <Banner classname="bg-black/10 text-white px-6 py-16 md:px-20 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
        <div className="w-full md:w-2/3 mt-20 md:mt-40 text-center md:text-left px-2 sm:px-6">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            <span className="text-purple-400">Get in Touch</span>
          </h1>
          <p className="text-white text-2xl">
            Feel free to reach out to me for collaboration, job opportunities,
            or just to say hello!
          </p>
          <div className="mt-10">
            <a
              href="mailto:mercyneemam@gmail.com"
              className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white hover:text-purple-400 transition duration-300"
            >
              <FaEnvelope size={22} />
              <span>mercyneemam@gmail.com</span>
            </a>
          </div>
          <div className="mt-5">
            <a
              href="https://github.com/mercy-mwai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white hover:text-purple-400 transition duration-300"
            >
              <FaGithub size={22} />
              <span>Njoki Mwai</span>
            </a>
          </div>
          <div className="mt-5">
            <a
              href="https://www.linkedin.com/in/mercy-mwai-aa7214279/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white hover:text-purple-400 transition duration-300"
            >
              <FaLinkedin size={22} />
              <span>Njoki Mwai</span>
            </a>
          </div>
          <div className="mt-5">
            <a
              href="https://x.com/NjokiiMwai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white hover:text-purple-400 transition duration-300"
            >
              <FaTwitter size={22} />
              <span>Njoki Mwai</span>
            </a>
          </div>
          <div className="mt-5">
            <a
              href=" malito:+254703574893"
             
              className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white hover:text-purple-400 transition duration-300"
            >
              <FaPhone size={22} />
              <span>+254703574893</span>
            </a>
          </div>
        </div>
      </div>
    </Banner>
  );
};

export default Contact;
