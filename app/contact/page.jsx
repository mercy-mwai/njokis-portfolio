"use client";
import Banner from "@/components/Banner";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Contact = () => {
  return (
    <Banner className="bg-black/10 text-white px-6 py-16 md:px-20 mt-10">
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 pt-20 text-white text-center ">
        <span className="text-purple-400">Get in Touch</span>
      </h1>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left: Contact Form */}
        <div className="w-full md:w-1/2 mt-10 md:mt-20 px-4">
          {/* Heading and Form grouped together */}
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold text-purple-400">
              Send me a message
            </h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <button
                type="submit"
                className="bg-purple-500 text-white px-6 py-2 rounded-md hover:bg-purple-600 transition duration-300"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Right: Contact Info */}
        <div className="w-full md:w-1/2 mt-10 md:mt-20 px-4">
          {/* Heading and paragraph grouped together */}
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold text-purple-400">
              Feel free to reach out!
            </h2>

            <p className="text-white text-2xl ">
              Collaboration, job opportunities, or just saying hello — I'm
              excited to connect with you!
            </p>

            {/* Contact Links */}
            <div className="space-y-5 mt-3 text-white">
              <a
                href="mailto:mercyneemam@gmail.com"
                className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-md px-4 py-2 hover:text-purple-400"
              >
                <FaEnvelope size={22} />
                <span>mercyneemam@gmail.com</span>
              </a>
              <a
                href="https://github.com/mercy-mwai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-md px-4 py-2 hover:text-purple-400"
              >
                <FaGithub size={22} />
                <span>Njoki Mwai</span>
              </a>
              <a
                href="https://www.linkedin.com/in/mercy-mwai-aa7214279/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-md px-4 py-2 hover:text-purple-400"
              >
                <FaLinkedin size={22} />
                <span>Njoki Mwai</span>
              </a>
              <a
                href="https://x.com/NjokiiMwai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-md px-4 py-2 hover:text-purple-400"
              >
                <FaTwitter size={22} />
                <span>Njoki Mwai</span>
              </a>
              <a
                href="tel:+254703574893"
                className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-md px-4 py-2 hover:text-purple-400"
              >
                <FaPhone size={22} />
                <span>+254703574893</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Banner>
  );
};

export default Contact;
