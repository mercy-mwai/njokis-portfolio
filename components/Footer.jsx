"use client";

import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="absolute bottom-0 left-0 w-full text-white p-3 bg-white/3  backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        
        {/* Left content */}
        <p className="text-center md:text-left text-sm">
          © 2025 Njoki. All rights reserved.
        </p>

        {/* Center social icons */}
        <div className="flex space-x-4">
          <a href="https://github.com/mercy-mwai" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition duration-300">
            <FaGithub size={22} />
          </a>
          <a href="https://www.linkedin.com/in/mercy-mwai-aa7214279/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition duration-300">
            <FaLinkedin size={22} />
          </a>
          <a href="https://x.com/NjokiiMwai" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition duration-300">
            <FaTwitter size={22} />
          </a>
          <a href="/" className="hover:text-purple-400 transition duration-300">
            <FaEnvelope size={22} />
          </a>
          <a href="/" className="hover:text-purple-400 transition duration-300">
            <FaArrowUp size={22} />
          </a>
        </div>

        {/* Right content */}
        <p className="text-center md:text-right text-sm">
          Privacy & Copyright Policies
        </p>
        
      </div>
      
    </footer>
  );
};

export default Footer;

