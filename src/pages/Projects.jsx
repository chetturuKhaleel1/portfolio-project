import React from "react";
import { motion } from "framer-motion";
import proj1 from "../assets/cal.png";
import proj2 from "../assets/gym.jpeg";
import proj3 from "../assets/chat.png";

const projects = [
  {
    title: "Calculator Project",
    desc: "A fully functional calculator web app built to practice JavaScript, React, and UI design. Supports basic arithmetic operations with a clean and responsive interface.",
    img: proj1,
    link: "https://calculator-six-phi-88.vercel.app/",
  },
  {
    title: "Gym Management System",
    desc: "A MERN stack application designed to manage gym operations including member registration, subscription tracking, and workout schedules. Integrated with Tailwind CSS for modern UI and TanStack Query for efficient data handling.",
    img: proj2,
    link: "https://gym-ivory-kappa.vercel.app/",
  },
  {
    title: "Chat UI",
    desc: "A modern, real-time chat interface built using React and Socket.IO. Features a 3-pane layout (Sidebar, Chat Window, Directory), styled message bubbles, typing indicators, and default user list for demonstration purposes.",
    img: proj3,
    link: "https://chat-app-zeta-rust-47.vercel.app/",
  },
];

export default function Projects() {
  return (
    <div className="bg-[#f9f9fb] px-6 py-20">
      {/* Section Heading */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-[#111]">Projects</h2>

        {/* Animated Yellow Line */}
        <motion.div
          className="mt-2 h-1 bg-yellow-400 mx-auto rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: "64px" }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />
      </motion.div>

      {/* Project Cards */}
      <div className="max-w-6xl mx-auto space-y-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {index % 2 === 0 ? (
              <>
                <motion.img
                  src={project.img}
                  alt={project.title}
                  className="w-full md:w-1/2 h-64 md:h-auto object-cover"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 100 }}
                />
                <motion.div
                  className="p-6 md:w-1/2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.desc}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-black rounded hover:bg-gray-100"
                  >
                    View Project
                  </a>
                </motion.div>
              </>
            ) : (
              <>
                <motion.div
                  className="p-6 md:w-1/2 order-2 md:order-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.desc}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-black rounded hover:bg-gray-100"
                  >
                    View Project
                  </a>
                </motion.div>
                <motion.img
                  src={project.img}
                  alt={project.title}
                  className="w-full md:w-1/2 h-64 md:h-auto object-cover order-1 md:order-2"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 100 }}
                />
              </>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
