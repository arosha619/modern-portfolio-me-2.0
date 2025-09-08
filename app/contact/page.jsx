"use client";

import React from "react";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { FiMail, FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaMedium, FaCalendarAlt } from "react-icons/fa";
import { fadeIn } from "../../variants";
import { useState } from "react";

// Icon mapping for server-side compatibility
const iconMap = {
  FiMail,
  FaCalendarAlt,
  FiMapPin,
  FaGithub,
  FaLinkedin,
  FaMedium,
};

const CONTACTS = [
  {
    icon: "FiMail",
    label: "Email",
    value: [
      {
        text: "aroshsandaruwan619@gmail.com",
        link: "mailto:aroshsandaruwan619@gmail.com",
      },
    ],
  },
  {
    icon: "FaCalendarAlt",
    label: "Phone",
    value: [{ text: "(+94) 76 23 56 027", link: "tel:+94762356027" }],
  },
  {
    icon: "FiMapPin",
    label: "Location",
    value: [{ text: "Kandy, Sri Lanka" }],
  },
];

const SOCIALS = [
  { icon: "FaGithub", link: "https://github.com/" },
  { icon: "FaLinkedin", link: "https://linkedin.com/" },
  { icon: "FaMedium", link: "https://medium.com/" },
];

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => alert("Thank you. I will get back to you ASAP."))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-dark-space py-36 px-2">
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Left: Contact Info Card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="md:w-2/5 w-full rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl p-8 flex flex-col justify-between gap-10 group hover:border-accent/40 hover:shadow-accent/20 transition-all duration-300"
        >
          <div>
            <h3 className="text-lg font-bold text-accent mb-2 tracking-widest uppercase">
              Contact
            </h3>
            <p className="text-white/70 mb-6 text-sm">
              Feel free to reach out for collaborations or just a friendly hello
              👋
            </p>
            <div className="flex flex-col gap-7">
              {CONTACTS.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: -8 }}
                    className="bg-accent/10 rounded-xl p-3 flex items-center justify-center min-w-[48px] min-h-[48px] text-accent shadow-md transition-transform duration-200"
                  >
                    {React.createElement(iconMap[item.icon], {
                      className: "text-2xl text-accent",
                    })}
                  </motion.div>
                  <div>
                    <div className="text-xs text-gray-400 font-semibold uppercase mb-1 tracking-wide letter-spacing-wider">
                      {item.label}
                    </div>
                    {item.value.map((v, i) =>
                      v.link ? (
                        <a
                          key={i}
                          href={v.link}
                          className="block text-white hover:text-accent hover:underline text-sm mb-1 transition-colors duration-200"
                        >
                          {v.text}
                        </a>
                      ) : (
                        <div key={i} className="text-white text-sm mb-1">
                          {v.text}
                        </div>
                      )
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <div className="text-xs text-accent font-semibold uppercase mb-2 tracking-wide">
              Connect with me
            </div>
            <div className="flex gap-4">
              {SOCIALS.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.18,
                    backgroundColor: "#F13024",
                    color: "#fff",
                  }}
                  className="bg-white/10 hover:bg-accent/20 transition rounded-full w-12 h-12 flex items-center justify-center shadow-md border border-white/10 text-accent hover:text-white"
                  style={{ transition: "all 0.2s" }}
                >
                  {React.createElement(iconMap[s.icon], {
                    className: "text-2xl",
                  })}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
        {/* Right: Contact Form Card */}
        <div className="md:w-3/5 w-full rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl p-8 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-3xl md:text-4xl font-bold mb-8 text-white"
          >
            Let's <span className="text-accent">chat.</span>
          </motion.h2>
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col gap-6 w-full"
            onSubmit={handleSubmit}
            autoComplete="off"
            autoCapitalize="off"
            data-netlify="true"
          >
            <input
              type="text"
              name="name"
              placeholder="Name*"
              className="input bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-gray-300 focus:border-accent focus:ring-accent/30 focus:ring-2 transition"
              disabled={isLoading}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              className="input bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-gray-300 focus:border-accent focus:ring-accent/30 focus:ring-2 transition"
              disabled={isLoading}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject*"
              className="input bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-gray-300 focus:border-accent focus:ring-accent/30 focus:ring-2 transition"
              disabled={isLoading}
              required
            />
            <textarea
              name="message"
              placeholder="Message*"
              className="textarea bg-white/10 border border-white/20 rounded-xl text-white min-h-[120px] placeholder:text-gray-300 focus:border-accent focus:ring-accent/30 focus:ring-2 transition"
              disabled={isLoading}
              required
            />
            <button
              type="submit"
              className="btn rounded-full border border-accent/60 max-w-[200px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:bg-accent hover:text-white group bg-accent/90 text-white font-semibold shadow-lg"
              disabled={isLoading}
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                {isLoading ? "Sending..." : "Send Message"}
              </span>
              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                aria-hidden
              />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
