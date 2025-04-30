"use client";
import Banner from "@/components/Banner";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { useState } from "react";
import { motion } from "motion/react"
import Footer from "@/components/Footer";


const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    content: ''
  });
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000); 

      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          content,
        }),
      });
  
      if (response.ok) {
        console.log('Message sent!');
        // Optionally reset the form or show success feedback
      } else {
        console.error('Failed to send message');
      }
    
  };

  return (
    <Banner className="bg-black/10 text-white px-6 py-16 md:px-20 mt-10">
      <motion.h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center pt-20"
      initial={{scale:0}}
      whileInView={{scale:1}}
      transition={{duration:0.8}}
      >
        <span className="text-purple-400 ">Get in Touch</span>
      </motion.h1>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Left: Contact Info */}
        <div className="w-full md:w-1/2 space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-purple-400 mb-4">
              Feel free to reach out!
            </h2>
            <p className="text-lg text-white">
              Collaboration, job opportunities, or just saying hello — I'm
              excited to connect with you!
            </p>
          </div>

          {/* Contact Links */}
          <div className="space-y-4 text-gray-200">
            <ContactLink
              href="mailto:mercyneemam@gmail.com"
              icon={<FaEnvelope />}
              label="mercyneemam@gmail.com"
            />
            <ContactLink
              href="https://github.com/mercy-mwai"
              icon={<FaGithub />}
              label="Njoki Mwai"
              newTab
            />
            <ContactLink
              href="https://www.linkedin.com/in/mercy-mwai-aa7214279/"
              icon={<FaLinkedin />}
              label="Njoki Mwai"
              newTab
            />
            <ContactLink
              href="https://x.com/NjokiiMwai"
              icon={<FaTwitter />}
              label="Njoki Mwai"
              newTab
            />
            <ContactLink
              href="tel:+254703574893"
              icon={<FaPhone />}
              label="+254703574893"
            />
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="w-full md:w-1/2 space-y-8">
          <h2 className="text-3xl font-bold text-purple-400 mb-4">
            Send me a message
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
            />
            <textarea
              placeholder="Your Message"
              value={formData.content}
              onChange={(e) =>
                setFormData({ ...formData, content: e.target.value })
              }
              rows={4}
              className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
            />
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full bg-purple-500 hover:bg-purple-600 transform hover:scale-105 transition duration-300 text-white font-semibold py-2 rounded-md"
            >
              Send Message
            </button>
          </form>
           {/* Success Popup */}
           {showPopup && (
            <div className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md text-center animate-bounce">
              ✅ Message sent successfully!
            </div>
          )}

        </div>
      </div>
     <Footer />
    </Banner>
  );
};

export default Contact;

const ContactLink = ({ href, icon, label, newTab }) => (
  <a
    href={href}
    target={newTab ? "_blank" : "_self"}
    rel={newTab ? "noopener noreferrer" : undefined}
    className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-md px-4 py-2 hover:bg-purple-400 hover:text-black transition duration-300"
  >
    {icon}
    <span className="text-lg">{label}</span>
  </a>
);
