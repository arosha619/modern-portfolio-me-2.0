"use client";

import Image from "next/image";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [skillIndex, setSkillIndex] = useState(0);
  const images = ["/me2.jpeg"];

  const dynamicSkills = [
    "Full-Stack Development",
    "React & Next.js",
    "Node.js & NestJS",
    "DevOps & CI/CD",
    "Cloud & Database",
  ];

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    const skillInterval = setInterval(() => {
      setSkillIndex((prev) => (prev + 1) % dynamicSkills.length);
    }, 2000); // Change skill every 2 seconds

    return () => {
      clearInterval(imageInterval);
      clearInterval(skillInterval);
    };
  }, [images.length, dynamicSkills.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center max-w-screen-xl mx-auto px-4 py-12 gap-8 lg:gap-4 pb-24">
      {/* Left: Content */}
      <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left order-2 lg:order-1 lg:mt-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
          Hello,
          <br />I am{" "}
          <span className="text-blue-600 dark:text-blue-400">
            Arosha Sandaruwan
          </span>
        </h1>
        {/* I'm Specialized In Section */}
        <div className="mb-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-white">
            I'm Specialized in
          </h2>
          <div className="flex items-center justify-center text-base sm:text-lg md:text-xl font-mono">
            <span className="text-gray-400 mr-2">&gt;</span>
            <span
              key={skillIndex}
              className="text-green-400 font-bold transition-all duration-500 min-h-[1.5em] flex items-center"
            >
              {dynamicSkills[skillIndex]}
            </span>
            <span className="animate-pulse text-green-400 ml-1">_</span>
          </div>
        </div>
        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mb-8">
          I'm Passionate about{" "}
          <span className="font-bold text-gray-900 dark:text-white">
            new technologies
          </span>
          , inspiring people and motivating teams as a leader to achieve goals.
          I believe that, if we can{" "}
          <span className="font-bold text-blue-600 dark:text-blue-400">
            change the way we see the world
          </span>
          , we can{" "}
          <span className="font-bold text-blue-600 dark:text-blue-400">
            change the world we see
          </span>
          .
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-8 w-full lg:w-auto justify-center lg:justify-start">
          <a
            href="/resume.pdf"
            download
            className="relative inline-block px-8 py-3 font-mono text-lg font-semibold bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow z-10"
          >
            <span className="relative z-10">Download Resume</span>
            <span className="absolute left-2 top-2 w-full h-full bg-gradient-to-r from-green-400 to-blue-500 rounded -z-10" />
          </a>
          <div className="flex flex-col items-center justify-center bg-purple-600 text-white rounded-xl px-8 py-4 shadow-lg min-w-[120px]">
            <span className="text-3xl font-bold">2.5+</span>
            <span className="text-xs font-semibold mt-1">
              YEARS OF
              <br />
              EXPERIENCE
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-2 justify-center lg:justify-start">
          <span className="text-gray-600 dark:text-gray-300 text-base">
            Follow Me on
          </span>
          <a
            href="#"
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition"
          >
            <FaInstagram className="text-xl text-blue-600" />
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition"
          >
            <FaFacebook className="text-xl text-blue-600" />
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition"
          >
            <FaLinkedin className="text-xl text-blue-600" />
          </a>
        </div>
      </div>
      {/* Right: Profile Image Carousel with Gradient Back Layer */}
      <div className="flex-1 flex justify-center items-center order-1 lg:order-2 mb-8 mt-28 lg:mb-0 lg:mt-0">
        <div className="relative group">
          <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-green-400 to-blue-500 blur-lg z-0 w-full h-full" />

          {/* Image Container */}
          <div className="relative z-10 overflow-hidden rounded-2xl w-[90vw] max-w-[350px] h-[220px] sm:w-[350px] sm:h-[300px] lg:w-[400px] lg:h-[500px] shadow-xl border-4 border-white">
            <Image
              src={images[currentImageIndex]}
              alt={`Profile Photo ${currentImageIndex + 1}`}
              width={400}
              height={500}
              className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
            />

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <FaChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <FaChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? "bg-white scale-125"
                    : "bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
