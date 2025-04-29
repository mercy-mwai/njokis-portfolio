"use client";
import Banner from "@/components/Banner";
import React from "react";
import Contact from '../contact/page';
import { motion } from 'framer-motion';


const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with Next.js and Tailwind CSS.",
      image: "/assets/images/NjokiP.png",
      github: "https://github.com/mercy-mwai/njoki-portfolio",
      demo: "https://njoki-portfolio.vercel.app/",
    },
    {
      title: "Promptopia",
      description: "A promptopia built with Next.js,MongoDB,Tailwind CSS.",
      image: "/assets/images/promptopia.png",
      github: "https://github.com/mercy-mwai/promptopia-2",
      demo: "https://promptopia-2-seven.vercel.app/",
    },
    {
      title: "E-commerce App",
      description: "An online store built using React and Firebase.",
      image: "/assets/images/ecommerce.png",
      github: "https://github.com/mercy-mwai/e-commerce",
      demo: "https://e-commerce-1b015.web.app/",
    },
    {
      title: "World Clock",
      description: "A world clock built using Html,CSS and JavaScript.",
      image: "/assets/images/clock.png",
      github: "https://github.com/mercy-mwai/World-clock",
      demo: "https://world-clock-mocha.vercel.app/",
    },
    {
      title: "Weather App",
      description: "A Weather App built using Html,CSS and JavaScript.",
      image: "/assets/images/weather.png",
      github: "https://github.com/mercy-mwai/Weather-App-2",
      demo: "https://weather-app-2-tau-pearl.vercel.app/",
    },
  ];

  return (
    <Banner className="py-20">
      <motion.h1 
      className="font-bold text-4xl pt-20 text-gray-300 text-center hover:text-amber-400"
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }}   
      transition={{ duration: 0.5, ease: "easeInOut" }} 
      >
        A SMALL SECTION OF {""}
        <span className="text-purple-400 text-4xl">MY RECENT PROJECTS</span>
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mt-10">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-2 rounded-lg shadow-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-200">
              {project.title}
            </h2>
            <p className="text-gray-400">{project.description}</p>
            <div className="flex justify-between mt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:underline"
              >
                GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:underline"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
     <Contact />
      
    </Banner>
  );
};

export default Projects;
