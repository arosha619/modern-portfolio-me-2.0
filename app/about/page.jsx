"use client";
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
          FaHtml5,
          FaCss3,
          FaJs,
          FaReact,
          SiNextdotjs,
          SiFramer,
          FaWordpress,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [FaFigma, SiAdobexd, SiAdobephotoshop],
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
        title: "UX/UI Designer - XYZ Company",
        stage: "2012 - 2023",
      },
      {
        title: "Web Developer - ABC Agency",
        stage: "2010 - 2012",
      },
      {
        title: "Intern - DEF Corporation",
        stage: "2008 - 2010",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development - ABC University, LA, CA",
        stage: "2011",
      },
      {
        title: "Computer Science Diploma - AV Technical Institute",
        stage: "2009",
      },
      {
        title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
        stage: "2006",
      },
    ],
  },
];

const dynamicSkills = [
  "Python & AI",
  "React & Next.js",
  "Node.js & Express",
  "Data Science",
  "UI/UX Design"
];

// Skills data structure for new section
const skillCategories = [
  {
    title: "Front-End Development",
    skills: [
      { name: "NuxtJS", icon: SiNuxtdotjs, level: 4 },
      { name: "React.js", icon: FaReact, level: 5 },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 5 },
      { name: "Flutter", icon: SiFlutter, level: 3 },
      { name: "Astro.js", icon: SiAstro, level: 2 },
      { name: "HTML5", icon: FaHtml5, level: 5 },
      { name: "Next.js", icon: SiNextdotjs, level: 5 },
      { name: "Angular", icon: FaAngular, level: 4 },
      { name: "CSS3", icon: FaCss3, level: 5 },
    ],
  },
  {
    title: "Back-End Development",
    skills: [
      { name: "FastAPI", icon: FaNodeJs, level: 3 },
      { name: "Flask", icon: FaNodeJs, level: 3 },
      { name: "NestJS", icon: SiNestjs, level: 4 },
      { name: "REST API", icon: FaSearchengin, level: 4 },
      { name: "Node.js", icon: FaNodeJs, level: 5 },
      { name: "GraphQL", icon: SiGraphql, level: 3 },
    ],
  },
  {
    title: "Search",
    skills: [
      { name: "Elasticsearch", icon: SiElasticsearch, level: 4 },
      { name: "Algolia", icon: SiAlgolia, level: 4 },
      { name: "Typesense", icon: SiTypescript, level: 3 },
    ],
  },
  // Dummy category for demo
  {
    title: "DevOps & Cloud",
    skills: [
      { name: "Docker", icon: FaDocker, level: 4 },
      { name: "Kubernetes", icon: FaReact, level: 2 },
      { name: "AWS", icon: FaAws, level: 3 },
      { name: "Azure", icon: FaReact, level: 2 },
    ],
  },
];

// Helper for animated skill bar
const SkillBar = ({ level }) => (
  <div className="flex gap-1 ml-2">
    {[...Array(5)].map((_, i) => (
      <div
        key={i}
        className={`h-2 w-5 rounded-sm ${i < level ? 'bg-blue-500' : 'bg-gray-700'}`}
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
      {/* Specialized In Section */}
      <div className="w-full flex flex-col items-start xl:items-start mb-8 mt-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
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

      {/* About Me Section */}
      <div className="w-full flex flex-col items-start xl:items-start mb-8">
        <motion.h2
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2"
        >
          Captivating <span className="text-accent">stories</span> birth magnificent designs.
        </motion.h2>
        <motion.p
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          animate="show"
          className="max-w-[500px] mb-6 xl:mb-8 px-2 xl:px-0"
        >
          10 years ago, I begin freelancing as a developer. Since then, I've done remote work for agencies, consulted for startups, and collabrated on digital products for business and consumer use.
        </motion.p>
      </div>

      {/* Skills, Experience, Education Tabs Section */}
      <div className="w-full flex flex-col items-center justify-center mt-4">
        <div className="flex gap-x-4 xl:gap-x-8 justify-center mb-4 w-full max-w-2xl">
          {aboutTabs.map((item, itemI) => (
            <div
              key={itemI}
              className={`${
                index === itemI &&
                "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
              } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
              onClick={() => setIndex(itemI)}
            >
              {item.title === 'credentials' ? 'Education' : item.title}
            </div>
          ))}
        </div>
        {/* Custom Skills Section for Skills Tab */}
        {index === 0 ? (
          <div className="w-full max-w-5xl bg-white/5 rounded-lg p-6 flex flex-col gap-10">
            {skillCategories.map((cat, catIdx) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className="w-full"
              >
                <div className="flex items-center mb-4">
                  <div className="border-l-4 border-l-lime-400 h-6 mr-3" />
                  <h4 className="text-lg font-bold text-white">{cat.title}</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {cat.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.4, delay: skillIdx * 0.05 }}
                      className="flex items-center gap-3 bg-black/20 rounded-md px-3 py-2"
                    >
                      <skill.icon className="text-2xl text-gray-200" />
                      <span className="font-semibold text-white whitespace-nowrap">{skill.name}</span>
                      <SkillBar level={skill.level} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        ) : index === 1 ? (
          // Experience Section
          <div className="w-full max-w-2xl bg-white/5 rounded-lg p-6 flex flex-col gap-6">
            <h3 className="text-xl font-bold text-accent mb-2 flex items-center gap-2"><FaBriefcase className="text-accent" /> Experience</h3>
            <div className="relative pl-6">
              {/* Vertical timeline line */}
              <div className="absolute left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent/60 to-transparent rounded-full" />
              {aboutTabs[index].info.map((item, itemI) => (
                <div key={itemI} className="mb-8 last:mb-0 flex items-start gap-4 relative">
                  {/* Dot */}
                  <div className="w-4 h-4 rounded-full bg-accent mt-1.5 border-2 border-white flex-shrink-0" />
                  <div className="flex-1">
                    <div className="font-semibold text-white text-lg">{item.title}</div>
                    <div className="text-xs text-white/50 mt-1">{item.stage}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          // Education Section
          <div className="w-full max-w-2xl bg-white/5 rounded-lg p-6 flex flex-col gap-6">
            <h3 className="text-xl font-bold text-accent mb-2 flex items-center gap-2"><FaGraduationCap className="text-accent" /> Education</h3>
            <div className="relative pl-6">
              {/* Vertical timeline line */}
              <div className="absolute left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent/60 to-transparent rounded-full" />
              {aboutTabs[index].info.map((item, itemI) => (
                <div key={itemI} className="mb-8 last:mb-0 flex items-start gap-4 relative">
                  {/* Dot */}
                  <div className="w-4 h-4 rounded-full bg-accent mt-1.5 border-2 border-white flex-shrink-0" />
                  <div className="flex-1">
                    <div className="font-semibold text-white text-lg">{item.title}</div>
                    <div className="text-xs text-white/50 mt-1">{item.stage}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About; 