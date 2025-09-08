"use client";

import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaMobile,
  FaCloud,
  FaCode,
  FaServer,
  FaCogs,
  FaRocket,
  FaPalette,
  FaShieldAlt,
  FaChartLine,
  FaUsers,
  FaGlobe,
  FaGithub,
  FaExternalLinkAlt,
  FaPython,
  FaJava,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiMysql,
  SiMongodb,
  SiVite,
  SiBootstrap,
  SiMaven,
  SiExpress,
  SiC,
} from "react-icons/si";

import Image from "next/image";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";
import { useRouter } from "next/navigation";

// Icon mapping for server-side compatibility
const iconMap = {
  FaChartLine,
  FaUsers,
  FaCogs,
  FaRocket,
  FaGlobe,
  FaShieldAlt,
  FaMobile,
  FaCode,
};

// Comprehensive projects based on actual experience
const projectData = [
  {
    id: 1,
    title: "Digital Product Recommendation System for Banks",
    subtitle: "Final Year Research Project",
    description:
      "An advanced AI-powered system that analyzes industry trends and provides strategic insights for banks. The system offers corporate loan recommendations and enhances digital banking offerings through machine learning algorithms.",
    detailedDescription:
      "This research project focuses on developing an intelligent recommendation system that helps banks analyze market trends, customer behavior, and industry patterns. The system provides strategic features like corporate loan options, risk assessment, and personalized financial product recommendations to enhance digital banking services.",
    technologies: [
      "Python",
      "Machine Learning",
      "RNN",
      "Data Analysis",
      "AI/ML",
    ],
    category: "research",
    status: "completed",
    role: "Lead Researcher & Developer",
    githubLink: "#", // Placeholder for GitHub link
    liveLink: "#", // Placeholder for live demo
    icon: "FaChartLine",
    color: "from-blue-500 to-cyan-500",
    features: [
      "Industry Trend Analysis",
      "Strategic Insights",
      "Corporate Loan Recommendations",
      "Risk Assessment",
      "AI-Powered Predictions",
    ],
    image: "/thumb1.jpg", // Placeholder image path
  },
  {
    id: 2,
    title: "Employee Management System",
    subtitle: "Full-Stack Web Application",
    description:
      "A comprehensive employee management system with seamless frontend-backend communication, user-friendly interface, and robust data integrity features.",
    detailedDescription:
      "A complete employee management solution that streamlines HR operations. Features include employee registration, attendance tracking, performance management, and reporting. Built with modern web technologies ensuring scalability and security.",
    technologies: [
      "Spring Boot",
      "MySQL",
      "React",
      "Vite.js",
      "Bootstrap",
      "Maven",
      "Spring Data JPA",
    ],
    category: "web",
    status: "completed",
    role: "Full-Stack Developer",
    githubLink: "#", // Placeholder for GitHub link
    liveLink: "#", // Placeholder for live demo
    icon: "FaUsers",
    color: "from-green-500 to-emerald-500",
    features: [
      "Employee Registration",
      "Attendance Tracking",
      "Performance Management",
      "Reporting System",
      "Data Security",
    ],
    image: "/thumb2.jpg", // Placeholder image path
  },
  {
    id: 3,
    title: "EventPluse",
    subtitle: "Task Management System",
    description:
      "A collaborative task management platform designed to improve team productivity through efficient task assignment, tracking, and review processes.",
    detailedDescription:
      "EventPluse is a microservices-based task management system that enables seamless collaboration between team members. Admins can create and assign tasks while users can complete and submit them for review, with real-time updates and notifications.",
    technologies: [
      "Spring Boot (Microservice)",
      "React.js",
      "MySQL",
      "Microservices Architecture",
    ],
    category: "web",
    status: "ongoing",
    role: "Full-Stack Developer",
    githubLink: "#", // Placeholder for GitHub link
    liveLink: "#", // Placeholder for live demo
    icon: "FaCogs",
    color: "from-purple-500 to-pink-500",
    features: [
      "Task Creation & Assignment",
      "Real-time Collaboration",
      "Progress Tracking",
      "Review System",
      "Microservices Architecture",
    ],
    image: "/thumb3.jpg", // Placeholder image path
  },
  {
    id: 4,
    title: "Individual Workout Tracking System",
    subtitle: "Full-Stack Fitness Application",
    description:
      "A comprehensive workout tracking application with CI/CD pipeline for efficient deployment and continuous integration.",
    detailedDescription:
      "A modern fitness application that helps users track their workouts, set goals, and monitor progress. Features include workout planning, progress analytics, and social sharing. Implemented with automated deployment pipeline for seamless updates.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AWS",
      "CI/CD",
    ],
    category: "web",
    status: "completed",
    role: "Full-Stack Developer",
    githubLink: "#", // Placeholder for GitHub link
    liveLink: "#", // Placeholder for live demo
    icon: "FaRocket",
    color: "from-orange-500 to-red-500",
    features: [
      "Workout Planning",
      "Progress Analytics",
      "Goal Setting",
      "Social Sharing",
      "CI/CD Pipeline",
    ],
    image: "/thumb4.jpg", // Placeholder image path
  },
  {
    id: 5,
    title: "Queue Management Department for Registration of Persons, Sri Lanka",
    subtitle: "Government System Enhancement",
    description:
      "A streamlined system for managing NIC (National Identity Card) submission and dispatching processes to enhance efficiency and user experience.",
    detailedDescription:
      "Developed a React-based frontend system for the Sri Lankan government's registration department. The system streamlines the queue management process for NIC submissions, reducing wait times and improving overall service efficiency.",
    technologies: [
      "React.js",
      "Government Systems",
      "Queue Management",
      "User Experience",
    ],
    category: "government",
    status: "completed",
    role: "Front-end Developer",
    githubLink: "#", // Placeholder for GitHub link
    liveLink: "#", // Placeholder for live demo
    icon: "FaGlobe",
    color: "from-indigo-500 to-purple-500",
    features: [
      "Queue Management",
      "NIC Processing",
      "User Interface",
      "Government Integration",
      "Efficiency Optimization",
    ],
    image: "/thumb1.jpg", // Placeholder image path
  },
  {
    id: 6,
    title: "FootPrintID",
    subtitle: "Healthcare Data Management Platform",
    description:
      "A secure platform for managing and sharing personal health data, reports, and imaging with authorized access control.",
    detailedDescription:
      "An internship project focused on healthcare data management. The platform enables secure storage, sharing, and access to personal health records, medical reports, and imaging data. Implements strict security protocols for HIPAA compliance.",
    technologies: [
      "React",
      "Node.js",
      "Healthcare Systems",
      "Data Security",
      "HIPAA Compliance",
    ],
    category: "healthcare",
    status: "completed",
    role: "Full Stack Developer",
    githubLink: "#", // Placeholder for GitHub link
    liveLink: "#", // Placeholder for live demo
    icon: "FaShieldAlt",
    color: "from-teal-500 to-blue-500",
    features: [
      "Health Data Management",
      "Secure Sharing",
      "Access Control",
      "HIPAA Compliance",
      "Medical Imaging",
    ],
    image: "/thumb2.jpg", // Placeholder image path
  },
  {
    id: 7,
    title: "Bulk SMS Sending System",
    subtitle: "Communication Platform",
    description:
      "A responsive web and mobile application for sending SMS to large audiences with advanced features like scheduling and reporting.",
    detailedDescription:
      "A comprehensive SMS marketing platform designed for businesses with large customer bases. Features include time scheduling, audience segmentation, categorization, and detailed analytics reporting. Supports both web and mobile interfaces.",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "SMS APIs"],
    category: "communication",
    status: "completed",
    role: "Full-Stack Developer",
    githubLink: "#", // Placeholder for GitHub link
    liveLink: "#", // Placeholder for live demo
    icon: "FaMobile",
    color: "from-yellow-500 to-orange-500",
    features: [
      "Bulk SMS Sending",
      "Time Scheduling",
      "Audience Segmentation",
      "Analytics Reporting",
      "Mobile Responsive",
    ],
    image: "/thumb3.jpg", // Placeholder image path
  },
  {
    id: 8,
    title: "Smart Hand Glove for Dumb and Deaf People",
    subtitle: "Assistive Technology",
    description:
      "An innovative project that translates sign language into normal language displayed on a screen to improve communication for deaf/mute individuals.",
    detailedDescription:
      "A hardware-software solution that uses sensors and C programming to detect hand gestures and translate them into text. The system helps bridge communication gaps between deaf/mute individuals and others, promoting inclusivity and accessibility.",
    technologies: [
      "C",
      "Hardware Integration",
      "Sensor Technology",
      "Signal Processing",
    ],
    category: "hardware",
    status: "completed",
    role: "Hardware & Software Developer",
    githubLink: "#", // Placeholder for GitHub link
    liveLink: "#", // Placeholder for live demo
    icon: "FaCode",
    color: "from-pink-500 to-rose-500",
    features: [
      "Sign Language Translation",
      "Sensor Integration",
      "Real-time Processing",
      "Accessibility",
      "Hardware-Software Integration",
    ],
    image: "/thumb4.jpg", // Placeholder image path
  },
];

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const router = useRouter();

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "research", name: "Research" },
    { id: "web", name: "Web Development" },
    { id: "government", name: "Government" },
    { id: "healthcare", name: "Healthcare" },
    { id: "communication", name: "Communication" },
    { id: "hardware", name: "Hardware" },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projectData
      : projectData.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-primary/30 py-36 flex items-center relative overflow-hidden">
      <Circles />
      <Bulb />

      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 mb-6"
          >
            Featured <span className="text-accent">Projects</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[600px] mx-auto text-lg text-white/80 leading-relaxed"
          >
            A showcase of my diverse project portfolio spanning research, web
            development, government systems, healthcare, and assistive
            technology. Each project demonstrates my expertise in different
            technologies and domains.
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-accent text-white shadow-lg shadow-accent/25"
                  : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="group relative"
            >
              {/* Card Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-xl blur-sm group-hover:blur-md transition-all duration-300 opacity-20`}
              />

              {/* Main Card */}
              <div className="relative bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden h-full hover:border-accent/50 transition-all duration-300">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === "completed"
                          ? "bg-green-500/20 text-green-400 border border-green-500/30"
                          : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                      }`}
                    >
                      {project.status === "completed" ? "Completed" : "Ongoing"}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${project.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                    >
                      {React.createElement(iconMap[project.icon], {
                        className: "text-xl text-white",
                      })}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-accent text-sm font-medium mb-4">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-white/80 text-sm font-semibold mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.1 + techIndex * 0.05,
                          }}
                          className="bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs text-white/90"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Role */}
                  <div className="mb-6">
                    <p className="text-white/60 text-xs">
                      <span className="text-accent font-medium">Role:</span>{" "}
                      {project.role}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-accent/20 hover:bg-accent/30 text-accent px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 border border-accent/30"
                      onClick={() => setSelectedProject(project)}
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      View Details
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      <FaGithub className="text-xs" />
                      GitHub
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Statistics */}
        <motion.div
          variants={fadeIn("up", 1.0)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mt-16"
        ></motion.div>

        {/* Call to Action */}
        <motion.div
          variants={fadeIn("up", 1.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-accent/10 to-blue-500/10 rounded-xl p-8 border border-accent/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in Collaborating?
            </h3>
            <p className="text-white/80 mb-6 max-w-[500px] mx-auto">
              Let's work together on your next project. I'm available for
              freelance work, full-time positions, and exciting collaborations.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push("/contact")}
              className="bg-accent hover:bg-accent/80 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-accent/25"
            >
              Start a Project
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-black/90 border border-white/20 rounded-xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">
                {selectedProject.title}
              </h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-white/60 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-accent font-semibold mb-2">
                  Detailed Description
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {selectedProject.detailedDescription}
                </p>
              </div>

              <div>
                <h3 className="text-accent font-semibold mb-2">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedProject.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-white/70 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex items-center gap-2 bg-accent hover:bg-accent/80 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300">
                  <FaGithub />
                  View on GitHub
                </button>
                <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300">
                  <FaExternalLinkAlt />
                  Live Demo
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Work;
