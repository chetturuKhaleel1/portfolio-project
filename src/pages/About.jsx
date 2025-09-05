import React from "react";
import profileImg from "../assets/profile.jpg";
import { FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-[#f9f9fb] min-h-screen px-4 sm:px-6 lg:px-12 py-12 text-[#111]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Left Section */}
        <motion.div
          className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-black">About Me</h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            I'm Chetturu Khaleel, a full-stack developer with a love for clean code,
            modern UI, and bringing ideas to life using React, Node.js, and design tools.
          </p>

          {/* Education */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-yellow-500">🎓 Education</h3>
            <ul className="text-gray-700 mt-2 list-disc ml-6 space-y-1 text-sm sm:text-base">
              <li>B.Tech in Computer Science - RGM University (2023–2026)</li>
              <li>Certified in MERN Stack Development</li>
            </ul>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-yellow-500">💼 Experience</h3>
            <ul className="text-gray-700 mt-2 list-disc ml-6 space-y-1 text-sm sm:text-base">
              <li>Intern @ unifed mentor  - Built dashboards with React & Tailwind</li>
              <li>Freelancer - Designed portfolios, blogs, and web apps</li>
            </ul>
          </div>

          {/* Hobbies */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-yellow-500">🏓 Hobbies</h3>
            <ul className="text-gray-700 mt-2 list-disc ml-6 space-y-1 text-sm sm:text-base">
              <li>Editing cinematic videos and short-form content</li>
              <li>Exploring open-source tools and productivity hacks</li>
              <li>Watching Telugu shorts, memes, and tech reels</li>
            </ul>
          </div>

          {/* Resume */}
          <a
            href="/resume.pdf"
            download
            className="inline-block mt-6 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-sm px-6 py-2 rounded-full shadow-md transition duration-300"
          >
            📄 Download Resume
          </a>
        </motion.div>

        {/* Right Section - Image */}
        <motion.div
          className="w-full lg:w-1/2 relative flex justify-center items-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Glowing Yellow Circle */}
          <motion.div
            className="absolute w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] lg:w-[300px] lg:h-[300px] bg-yellow-400 rounded-full blur-3xl opacity-70 animate-pulse z-0"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
          />

          {/* Profile Image */}
          <motion.img
            src={profileImg}
            alt="Profile"
            className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] lg:w-[260px] lg:h-[260px] object-cover rounded-full z-10 shadow-2xl border-4 border-white"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 120 }}
          />
        </motion.div>
      </div>

      {/* Footer - Social Icons */}
      <motion.div
        className="mt-16 text-center space-y-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-center gap-6 text-2xl sm:text-3xl text-gray-700">
          <a
            href="https://instagram.com/ckhaleel1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="hover:text-yellow-500 transition duration-300" />
          </a>
          <a
            href="https://linkedin.com/in/chetturu-khaleel-25a96b266"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="hover:text-yellow-500 transition duration-300" />
          </a>
          <a href="mailto:chetturukhaleel@gmail.com" aria-label="Email">
            <FaEnvelope className="hover:text-yellow-500 transition duration-300" />
          </a>
        </div>
        <p className="text-sm text-gray-500">© 2025 Chetturu Khaleel. All rights reserved.</p>
      </motion.div>
    </div>
  );
}
