import Banner from "@/components/Banner";
import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with Next.js and Tailwind CSS.",
      image: "/assets/images/project1.png",
      github: "",
      demo: "https://yourliveproject.com",
    },
    {
      title: "E-commerce App",
      description: "An online store built using React and Node.js.",
      image: "/assets/images/project2.png",
      github: "https://github.com/yourrepo",
      demo: "https://yourliveproject.com",
    },
    // Add more...
  ];


  return (
    <Banner className="py-20">
      <h1 className="font-bold text-3xl pt-30 text-gray-300 text-center">
        A small section of {""}
        <span className="text-purple-400 text-4xl">My Recent Projects</span>
      </h1>
    </Banner>
  );
};

export default Projects;
