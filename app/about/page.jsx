"use client";
import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import CountUp from "react-countup";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaWordpress,
  FaNodeJs,
  FaAngular,
  FaSearchengin,
  FaDocker,
  FaAws,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaServer,
  FaDatabase,
  FaMobile,
  FaCloud,
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
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiFramer,
  SiNextdotjs,
  SiNuxtdotjs,
  SiTailwindcss,
  SiFlutter,
  SiAstro,
  SiNestjs,
  SiFastapi,
  SiFlask,
  SiGraphql,
  SiRestapi,
  SiElasticsearch,
  SiAlgolia,
  SiTypescript,
  SiSpringboot,
  SiMysql,
  SiMongodb,
  SiVite,
  SiBootstrap,
  SiMaven,
  SiExpress,
  SiC,
} from "react-icons/si";

import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          "FaHtml5",
          "FaCss3",
          "FaJs",
          "FaReact",
          "SiNextdotjs",
          "SiFramer",
          "FaWordpress",
        ],
      },
      {
        title: "UI/UX Design",
        icons: ["FaFigma", "SiAdobexd", "SiAdobephotoshop"],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Webby Awards - Honoree",
        stage: "2011 - 2012",
      },
      {
        title: "Adobe Design Achievement Awards - Finalist",
        stage: "2009 - 2010",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Software Engineer",
        company: "MEDIIO Ltd.",
        location: "Seoul, South Korea",
        stage: "Jul 2024 - Present",
        highlights: [
          "Developed responsive user interfaces using Next.js",
          "Built robust APIs with NestJS for backend services",
          "Migrated video service from Twilio to Agora",
          "Built secure Google OAuth authentication with NextAuth",
          "Improved SEO performance in Next.js app",
          "Created cross-platform mobile app with React Native WebView",
        ],
        technologies: [
          "Next.js",
          "NestJS",
          "TypeScript",
          "GraphQL",
          "Tailwind CSS",
          "Firebase",
        ],
      },
      {
        title: "Associate Software Engineer",
        company: "Hasthiya IT (Pvt) Ltd",
        location: "Sri Lanka",
        stage: "Jul 2023 - Apr 2024",
        highlights: [
          "Developed seamless and responsive frontends",
          "Built robust and efficient backends",
          "Researched and implemented DevOps practices",
          "Integrated CI/CD pipelines for deployment efficiency",
        ],
        technologies: ["React", "Node.js", "MySQL", "AWS", "GitHub Actions"],
      },
      {
        title: "Trainee Software Engineer",
        company: "Hasthiya IT (Pvt) Ltd",
        location: "Sri Lanka",
        stage: "Dec 2022 - Jun 2023",
        highlights: [
          "Followed best practices for Frontend and Backend Development",
          "Integrated REST APIs for seamless data communication",
          "Applied Agile methodologies to enhance project efficiency",
          "Tested & Fixed bugs to ensure application stability",
        ],
        technologies: [
          "React",
          "Node.js",
          "ExpressJS",
          "MySQL",
          "Firebase",
          "Android",
        ],
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "B.Sc. (Hons) in Information Technology",
        stage: "2024",
        institution:
          "Faculty of Information Technology, University of Moratuwa",
        details: "Bachelor's degree with honors in Information Technology",
      },
      {
        title: "G.C.E Advanced Level - Physical Science Stream",
        stage: "2018",
        institution: "Peradeniya Central College",
        details:
          "1 'A', 2 'B's - ('A' for Combined Mathematics) | Z-Score: 1.5544",
      },
    ],
  },
];

const dynamicSkills = [
  "Full-Stack Development",
  "React & Next.js",
  "Node.js & NestJS",
  "DevOps & CI/CD",
  "Cloud & Database",
];

// Icon mapping for server-side compatibility
const iconMap = {
  FaJava,
  FaJs,
  FaPython,
  SiC,
  FaCode,
  FaReact,
  SiNextdotjs,
  SiTypescript,
  FaHtml5,
  FaCss3,
  SiBootstrap,
  SiTailwindcss,
  SiNestjs,
  FaNodeJs,
  SiExpress,
  SiSpringboot,
  SiGraphql,
  FaGithub,
  FaDocker,
  FaServer,
  FaShieldAlt,
  FaAws,
  FaCloud,
  SiMysql,
  FaDatabase,
  SiMongodb,
  FaUsers,
  FaFigma,
  SiFramer,
  FaWordpress,
  SiAdobexd,
  SiAdobephotoshop,
  FaBriefcase,
  FaGraduationCap,
};

// Skills data structure for new section
const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", icon: "FaJava", level: 4 },
      { name: "JavaScript", icon: "FaJs", level: 5 },
      { name: "Python", icon: "FaPython", level: 4 },
      { name: "C", icon: "SiC", level: 3 },
      { name: "C#", icon: "FaCode", level: 3 },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React", icon: "FaReact", level: 5 },
      { name: "Next.js", icon: "SiNextdotjs", level: 5 },
      { name: "TypeScript", icon: "SiTypescript", level: 4 },
      { name: "HTML", icon: "FaHtml5", level: 5 },
      { name: "CSS", icon: "FaCss3", level: 5 },
      { name: "Bootstrap", icon: "SiBootstrap", level: 4 },
      { name: "Material UI", icon: "FaReact", level: 4 },
      { name: "Tailwind CSS", icon: "SiTailwindcss", level: 5 },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Nest.js", icon: "SiNestjs", level: 4 },
      { name: "Node.js", icon: "FaNodeJs", level: 5 },
      { name: "ExpressJS", icon: "SiExpress", level: 4 },
      { name: "Spring Boot", icon: "SiSpringboot", level: 3 },
      { name: "GraphQL", icon: "SiGraphql", level: 3 },
    ],
  },
  {
    title: "DevOps & CI/CD",
    skills: [
      { name: "Git/GitHub", icon: "FaGithub", level: 5 },
      { name: "GitHub Actions", icon: "FaGithub", level: 4 },
      { name: "Docker", icon: "FaDocker", level: 4 },
      { name: "Jenkins", icon: "FaServer", level: 3 },
      { name: "SonarQube", icon: "FaShieldAlt", level: 3 },
    ],
  },
  {
    title: "Testing & Tools",
    skills: [
      { name: "Postman", icon: "FaCode", level: 4 },
      { name: "JUnit", icon: "FaCode", level: 3 },
    ],
  },
  {
    title: "Cloud Platforms",
    skills: [
      { name: "AWS", icon: "FaAws", level: 4 },
      { name: "Firebase", icon: "FaCloud", level: 4 },
    ],
  },
  {
    title: "Operating Systems",
    skills: [
      { name: "Windows", icon: "FaServer", level: 5 },
      { name: "Linux", icon: "FaServer", level: 4 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: "SiMysql", level: 4 },
      { name: "MSSQL", icon: "FaDatabase", level: 3 },
      { name: "MongoDB", icon: "SiMongodb", level: 4 },
      { name: "PostgreSQL", icon: "FaDatabase", level: 3 },
    ],
  },
  {
    title: "Other Tools",
    skills: [
      { name: "Figma", icon: "FaFigma", level: 4 },
      { name: "Jira", icon: "FaUsers", level: 4 },
      { name: "Clickup", icon: "FaUsers", level: 3 },
    ],
  },
];

// Helper for animated skill bar
const SkillBar = ({ level }) => (
  <div className="flex gap-1 ml-2">
    {[...Array(5)].map((_, i) => (
      <div
        key={i}
        className={`h-2 w-5 rounded-sm ${
          i < level ? "bg-blue-500" : "bg-gray-700"
        }`}
      />
    ))}
  </div>
);

const About = () => {
  const [index, setIndex] = useState(0);
  const [skillIndex, setSkillIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSkillIndex((prev) => (prev + 1) % dynamicSkills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Only show these three tabs
  const aboutTabs = [aboutData[0], aboutData[2], aboutData[3]];

  return (
    <div className="min-h-screen flex flex-col items-center max-w-screen-xl mx-auto px-4 py-12 gap-8 xl:gap-4 pb-24">
      {/* About Me Section */}
      <div className="w-full flex flex-col items-center text-center mb-8 mt-20">
        <motion.h2
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 text-center"
        >
          Transforming <span className="text-accent">ideas</span> into
          exceptional digital experiences.
        </motion.h2>
        <motion.p
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          animate="show"
          className="max-w-[600px] mb-6 xl:mb-8 px-4 xl:px-0 text-center"
        >
          A passionate Software Engineer with expertise in full-stack
          development, specializing in React, Next.js and backend technologies
          such as Node.js, DotNet and Nest.js. Skilled in building scalable
          APIs, managing databases, and implementing cloud-based solutions. With
          growing expertise in DevOps practices, containerization, and CI/CD
          pipelines, From Sri Lanka to South Korea, I've built scalable
          applications and collaborated with international teams to deliver
          innovative solutions that drive business growth and user satisfaction.
        </motion.p>
      </div>

      {/* Specialized In Section */}
      <div className="w-full flex flex-col items-center text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
          I'm Specialized in
        </h2>
        <div className="flex items-center text-xl md:text-2xl font-mono">
          <span className="text-gray-400 mr-2">&gt;</span>
          <span className="text-green-400 font-bold transition-all duration-500">
            {dynamicSkills[skillIndex]}
          </span>
          <span className="animate-pulse text-green-400 ml-1">_</span>
        </div>
      </div>

      {/* Skills, Experience, Education Tabs Section */}
      <div className="w-full flex flex-col items-center justify-center mt-4">
        <div className="flex gap-x-12 xl:gap-x-20 2xl:gap-x-24 justify-center mb-8 w-full max-w-4xl">
          {aboutTabs.map((item, itemI) => (
            <div
              key={itemI}
              className={`${
                index === itemI &&
                "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
              } cursor-pointer capitalize text-lg xl:text-xl 2xl:text-2xl font-semibold relative after:w-12 after:h-[3px] after:bg-white after:absolute after:-bottom-2 after:left-0 hover:text-accent/80 transition-all duration-300`}
              onClick={() => setIndex(itemI)}
            >
              {item.title === "credentials" ? "Education" : item.title}
            </div>
          ))}
        </div>
        {/* Enhanced Skills Section for Skills Tab */}
        {index === 0 ? (
          <div className="w-full max-w-7xl bg-white/5 rounded-lg p-8 flex flex-col gap-12">
            {skillCategories.map((cat, catIdx) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className="w-full"
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className="border-l-4 border-l-accent h-8 mr-4" />
                  <h4 className="text-xl font-bold text-white">{cat.title}</h4>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                  {cat.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.4, delay: skillIdx * 0.05 }}
                      whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.2 },
                      }}
                      className="group relative"
                    >
                      {/* Card Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-blue-500/5 rounded-lg blur-sm group-hover:blur-md transition-all duration-300" />

                      {/* Main Card */}
                      <div className="relative bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:border-accent/30 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-accent/20 to-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            {React.createElement(iconMap[skill.icon], {
                              className: "text-xl text-gray-200",
                            })}
                          </div>
                          <span className="font-semibold text-white text-sm truncate">
                            {skill.name}
                          </span>
                        </div>

                        {/* Skill Level */}
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-400">
                            Proficiency
                          </span>
                          <span className="text-xs text-accent font-medium">
                            {skill.level}/5
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="mt-2 w-full bg-gray-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{
                              width: `${(skill.level / 5) * 100}%`,
                            }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: skillIdx * 0.1 }}
                            className="bg-gradient-to-r from-accent to-blue-500 h-2 rounded-full"
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Skills Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 p-6 bg-gradient-to-r from-accent/10 to-blue-500/10 rounded-lg border border-accent/20"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">⚡</span>
                </div>
                <h4 className="text-white font-semibold text-lg">
                  Technical Expertise
                </h4>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Comprehensive full-stack development skills with expertise in
                modern web technologies, cloud platforms, and DevOps practices.
                Experienced in building scalable applications and collaborating
                with international teams across diverse technology stacks.
              </p>
            </motion.div>
          </div>
        ) : index === 1 ? (
          // Enhanced Experience Section
          <div className="w-full max-w-6xl bg-white/5 rounded-lg p-8 flex flex-col gap-8">
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold text-accent mb-6 flex items-center gap-3"
            >
              <FaBriefcase className="text-accent text-3xl" />
              Professional Journey
            </motion.h3>

            <div className="space-y-8">
              {aboutTabs[index].info.map((item, itemI) => (
                <motion.div
                  key={itemI}
                  initial={{ opacity: 0, x: -50, y: 30 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.8, delay: itemI * 0.2 }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                  className="relative group"
                >
                  {/* Card Background with Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-xl blur-sm group-hover:blur-md transition-all duration-300" />

                  {/* Main Card */}
                  <div className="relative bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-accent/50 transition-all duration-300">
                    {/* Header Section */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 gap-4">
                      <div className="flex items-start gap-4">
                        {/* Role Badge */}
                        <div className="w-14 h-14 bg-gradient-to-br from-accent to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <FaBriefcase className="text-white text-xl" />
                        </div>

                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-white group-hover:text-accent transition-colors duration-300 mb-1">
                            {item.title}
                          </h4>
                          <div className="flex items-center gap-2 text-blue-300 font-medium">
                            <span>{item.company}</span>
                            <span className="text-gray-400">•</span>
                            <span className="text-gray-400">
                              {item.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Duration Badge */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: itemI * 0.3 + 0.5 }}
                        className="bg-accent/20 border border-accent/30 rounded-full px-4 py-2 flex-shrink-0"
                      >
                        <span className="text-accent font-bold text-sm">
                          {item.stage}
                        </span>
                      </motion.div>
                    </div>

                    {/* Highlights Section */}
                    <div className="mb-6">
                      <h5 className="text-blue-300 font-semibold mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        Key Achievements
                      </h5>
                      <div className="grid md:grid-cols-2 gap-3">
                        {item.highlights.map((highlight, highlightIdx) => (
                          <motion.div
                            key={highlightIdx}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.4,
                              delay: itemI * 0.2 + highlightIdx * 0.1,
                            }}
                            className="flex items-start gap-2"
                          >
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-white/80 text-sm leading-relaxed">
                              {highlight}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies Section */}
                    <div className="mb-4">
                      <h5 className="text-blue-300 font-semibold mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        Technologies Used
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, techIdx) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.3,
                              delay: itemI * 0.2 + techIdx * 0.05,
                            }}
                            className="bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs text-white/90 hover:bg-accent/20 hover:border-accent/30 transition-all duration-200"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Progress Indicator */}
                    <div className="mt-4">
                      <div className="flex justify-between text-xs text-gray-400 mb-1">
                        <span>Experience Level</span>
                        <span>
                          {itemI === 0
                            ? "Senior"
                            : itemI === 1
                            ? "Mid-Level"
                            : "Junior"}
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${(itemI + 1) * 33.33}%` }}
                          transition={{ duration: 1, delay: itemI * 0.4 + 0.8 }}
                          className="bg-gradient-to-r from-accent to-green-500 h-2 rounded-full"
                        />
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-3 right-3 opacity-20">
                      <div className="w-6 h-6 border border-accent/30 rounded-full" />
                    </div>
                    <div className="absolute bottom-3 left-3 opacity-20">
                      <div className="w-3 h-3 bg-accent/20 rounded-full" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Experience Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-6 p-4 bg-gradient-to-r from-accent/10 to-green-500/10 rounded-lg border border-accent/20"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">⚡</span>
                </div>
                <h4 className="text-white font-semibold">Career Growth</h4>
              </div>
              <p className="text-white/80 text-sm">
                Rapid progression from Trainee to Software Engineer, gaining
                expertise in full-stack development, DevOps practices, and
                international experience. Specialized in modern web technologies
                and mobile development.
              </p>
            </motion.div>
          </div>
        ) : (
          // Enhanced Education Section
          <div className="w-full max-w-4xl bg-white/5 rounded-lg p-8 flex flex-col gap-8">
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold text-accent mb-4 flex items-center gap-3"
            >
              <FaGraduationCap className="text-accent text-3xl" />
              Education Journey
            </motion.h3>

            <div className="grid md:grid-cols-2 gap-8">
              {aboutTabs[index].info.map((item, itemI) => (
                <motion.div
                  key={itemI}
                  initial={{ opacity: 0, x: itemI % 2 === 0 ? -50 : 50, y: 30 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.8, delay: itemI * 0.2 }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                  className="relative group"
                >
                  {/* Card Background with Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl blur-sm group-hover:blur-md transition-all duration-300" />

                  {/* Main Card */}
                  <div className="relative bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-accent/50 transition-all duration-300">
                    {/* Degree Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-accent to-blue-500 rounded-full flex items-center justify-center">
                          <FaGraduationCap className="text-white text-xl" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white group-hover:text-accent transition-colors duration-300">
                            {item.title}
                          </h4>
                          <p className="text-sm text-gray-400">{item.stage}</p>
                        </div>
                      </div>

                      {/* Year Badge */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: itemI * 0.3 + 0.5 }}
                        className="bg-accent/20 border border-accent/30 rounded-full px-3 py-1"
                      >
                        <span className="text-accent font-bold text-sm">
                          {item.stage}
                        </span>
                      </motion.div>
                    </div>

                    {/* Institution */}
                    <div className="mb-3">
                      <p className="text-blue-300 font-medium text-sm mb-1">
                        Institution
                      </p>
                      <p className="text-white/90 text-base">
                        {item.institution}
                      </p>
                    </div>

                    {/* Details */}
                    {item.details && (
                      <div className="mb-4">
                        <p className="text-blue-300 font-medium text-sm mb-1">
                          Details
                        </p>
                        <p className="text-white/80 text-sm leading-relaxed">
                          {item.details}
                        </p>
                      </div>
                    )}

                    {/* Progress Bar for Degree Completion */}
                    <div className="mt-4">
                      <div className="flex justify-between text-xs text-gray-400 mb-1">
                        <span>Progress</span>
                        <span>
                          {item.stage === "2024" ? "Completed" : "Completed"}
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 1, delay: itemI * 0.4 + 0.8 }}
                          className="bg-gradient-to-r from-accent to-blue-500 h-2 rounded-full"
                        />
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-2 right-2 opacity-20">
                      <div className="w-8 h-8 border border-accent/30 rounded-full" />
                    </div>
                    <div className="absolute bottom-2 left-2 opacity-20">
                      <div className="w-4 h-4 bg-accent/20 rounded-full" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Education Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-6 p-4 bg-gradient-to-r from-accent/10 to-blue-500/10 rounded-lg border border-accent/20"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <h4 className="text-white font-semibold">
                  Academic Excellence
                </h4>
              </div>
              <p className="text-white/80 text-sm">
                Strong foundation in Information Technology with honors degree
                and excellent performance in Advanced Level examinations,
                demonstrating consistent academic achievement and technical
                proficiency.
              </p>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
