import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import myImage from "../assets/professionalimg.jpg";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      className="flex flex-col-reverse md:flex-row items-center justify-between 
                 px-6 md:px-16 min-h-screen bg-[#f9f9fb] font-['Inter'] relative overflow-hidden"
    >
      {/* Text Section */}
      <motion.div
        className="md:w-1/2 z-10 text-center md:text-left"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-sm text-[#F7C948] font-semibold uppercase tracking-wider">
          React JS Developer
        </p>

        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight text-[#111827] mt-3 mb-4">
          Hello, my name is<br className="hidden sm:block" />
          <span className="text-[#F7C948]">Chetturu Khaleel</span>
        </h1>

        <p className="text-lg sm:text-xl text-[#4B5563] leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
          A passionate developer building{" "}
          <span className="font-semibold text-[#111827]">responsive</span>,{" "}
          <span className="font-semibold text-[#111827]">scalable</span>, and{" "}
          <span className="font-semibold text-[#111827]">delightful</span> web
          experiences.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#F7C948] hover:bg-[#FACA15] text-black px-6 py-3 rounded font-medium shadow transition duration-200"
            onClick={() => navigate("/projects")}
          >
            View Projects
          </motion.button>

          <motion.a
            href="https://www.linkedin.com/in/chetturu-khaleel-25a96b266/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-[#F7C948] text-[#22223B] hover:bg-[#FEF3C7] px-6 py-3 rounded font-medium transition duration-200"
          >
            LinkedIn
          </motion.a>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="md:w-1/2 flex justify-center relative mt-12 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Floating Yellow Shape */}
        <motion.div
          className="absolute top-4 left-1/2 -translate-x-1/2 w-80 h-96 bg-[#F7C948] rounded-t-full z-0 opacity-40 blur-sm"
          animate={{
            x: ["-60%", "0%", "60%", "0%"],
            rotate: [0, 5, -5, 0],
            opacity: [0.2, 0.5, 0.2, 0.5],
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />

        {/* Profile Image */}
        <motion.div
          className="relative z-10 w-72 h-96 bg-gray-200 rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
          animate={{
            scale: [1, 1.01, 1],
            y: [0, -4, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src={myImage}
            alt="Chetturu Khaleel portrait"
            className="w-full h-full object-cover object-top"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
