"use client";

import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
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
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiNestjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiGraphql,
  SiJenkins,
  SiGithub,
  SiFigma,
} from "react-icons/si";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";
import { useRouter } from "next/navigation";

// Icon mapping for server-side compatibility
const iconMap = {
  FaCode,
  FaReact,
  FaServer,
  FaDatabase,
  FaCogs,
  FaCloud,
  FaMobile,
  FaPalette,
  FaShieldAlt,
  FaRocket,
  FaUsers,
  FaGlobe,
  SiNextdotjs,
  SiNestjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiGraphql,
  SiJenkins,
  SiGithub,
  SiFigma,
};

// Comprehensive services based on actual skills and experience
const serviceData = [
  {
    icon: "FaCode",
    title: "Full-Stack Development",
    description:
      "Complete web applications from frontend to backend using React, Next.js, Node.js, and NestJS. End-to-end solutions with modern technologies.",
    features: [
      "React & Next.js",
      "Node.js & NestJS",
      "TypeScript",
      "REST APIs & GraphQL",
    ],
    color: "from-blue-500 to-cyan-500",
    category: "development",
  },
  {
    icon: "FaReact",
    title: "Frontend Development",
    description:
      "Responsive and interactive user interfaces built with modern frameworks and design systems for optimal user experience.",
    features: ["React & Next.js", "TypeScript", "Tailwind CSS", "Material UI"],
    color: "from-purple-500 to-pink-500",
    category: "frontend",
  },
  {
    icon: "FaServer",
    title: "Backend Development",
    description:
      "Robust server-side applications, APIs, and microservices with scalable architecture and database integration.",
    features: ["Node.js & NestJS", "Express.js", "GraphQL", "Database Design"],
    color: "from-green-500 to-emerald-500",
    category: "backend",
  },
  {
    icon: "FaDatabase",
    title: "Database Solutions",
    description:
      "Database design, optimization, and management across multiple platforms with data modeling and migration expertise.",
    features: [
      "MySQL & PostgreSQL",
      "MongoDB",
      "Database Design",
      "Data Migration",
    ],
    color: "from-orange-500 to-red-500",
    category: "database",
  },
  {
    icon: "FaCogs",
    title: "DevOps & CI/CD",
    description:
      "Automated deployment pipelines, containerization, and infrastructure management for scalable applications.",
    features: ["Docker & Kubernetes", "GitHub Actions", "Jenkins", "AWS"],
    color: "from-indigo-500 to-purple-500",
    category: "devops",
  },
  {
    icon: "FaCloud",
    title: "Cloud Services",
    description:
      "Cloud infrastructure setup, deployment, and management using AWS, Firebase, and other cloud platforms.",
    features: ["AWS Services", "Firebase", "Cloud Deployment", "Serverless"],
    color: "from-yellow-500 to-orange-500",
    category: "cloud",
  },
  {
    icon: "FaMobile",
    title: "Mobile Development",
    description:
      "Cross-platform mobile applications using React Native and hybrid development approaches.",
    features: [
      "React Native",
      "WebView Apps",
      "Mobile UI/UX",
      "App Deployment",
    ],
    color: "from-teal-500 to-blue-500",
    category: "mobile",
  },
  {
    icon: "FaPalette",
    title: "UI/UX Design",
    description:
      "User interface design and user experience optimization using modern design tools and best practices.",
    features: [
      "Figma Design",
      "Responsive Design",
      "User Research",
      "Prototyping",
    ],
    color: "from-pink-500 to-rose-500",
    category: "design",
  },
  {
    icon: "FaShieldAlt",
    title: "Security & Authentication",
    description:
      "Secure authentication systems, OAuth integration, and application security best practices implementation.",
    features: [
      "OAuth Integration",
      "JWT Tokens",
      "Security Best Practices",
      "Data Protection",
    ],
    color: "from-red-500 to-pink-500",
    category: "security",
  },
  {
    icon: "FaRocket",
    title: "Performance Optimization",
    description:
      "Application performance optimization, SEO improvements, and speed enhancement for better user experience.",
    features: [
      "SEO Optimization",
      "Performance Tuning",
      "Caching",
      "CDN Setup",
    ],
    color: "from-emerald-500 to-green-500",
    category: "optimization",
  },
  {
    icon: "FaUsers",
    title: "Team Collaboration",
    description:
      "Agile development practices, code reviews, and collaborative development workflows for team projects.",
    features: [
      "Agile Methodologies",
      "Code Reviews",
      "Git Workflows",
      "Team Leadership",
    ],
    color: "from-violet-500 to-purple-500",
    category: "collaboration",
  },
  {
    icon: "FaGlobe",
    title: "International Projects",
    description:
      "Experience working with international teams and clients, providing global development solutions.",
    features: [
      "Remote Collaboration",
      "International Teams",
      "Cross-cultural Communication",
      "Global Deployment",
    ],
    color: "from-cyan-500 to-blue-500",
    category: "international",
  },
];

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredService, setHoveredService] = useState(null);
  const router = useRouter();

  const categories = [
    { id: "all", name: "All Services" },
    { id: "development", name: "Development" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "devops", name: "DevOps" },
    { id: "cloud", name: "Cloud" },
    { id: "mobile", name: "Mobile" },
    { id: "design", name: "Design" },
  ];

  const filteredServices =
    selectedCategory === "all"
      ? serviceData
      : serviceData.filter((service) => service.category === selectedCategory);

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
            Professional <span className="text-accent">Services</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[600px] mx-auto text-lg text-white/80 leading-relaxed"
          >
            Comprehensive software development services tailored to your needs.
            From concept to deployment, I deliver scalable solutions using
            modern technologies and best practices for businesses and
            individuals worldwide.
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

        {/* Services Grid */}
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              onHoverStart={() => setHoveredService(index)}
              onHoverEnd={() => setHoveredService(null)}
              className="group relative"
            >
              {/* Card Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-xl blur-sm group-hover:blur-md transition-all duration-300 opacity-20`}
              />

              {/* Main Card */}
              <div className="relative bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full hover:border-accent/50 transition-all duration-300">
                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {React.createElement(iconMap[service.icon], {
                    className: "text-2xl text-white",
                  })}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1 + featureIndex * 0.05,
                      }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                      <span className="text-white/60 text-xs">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Hover Arrow */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <FaRocket className="text-white text-sm" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={fadeIn("up", 1.0)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-accent/10 to-blue-500/10 rounded-xl p-8 border border-accent/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-white/80 mb-6 max-w-[500px] mx-auto">
              Let's discuss your requirements and create something amazing
              together. I'm available for freelance projects, long-term
              collaborations, and consulting work.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push("/contact")}
              className="bg-accent hover:bg-accent/80 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-accent/25"
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
