import React, { useState } from "react";
import { FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (!form.name || !form.email || !form.message) {
      setError("All fields are required.");
      return;
    }

    // Save to localStorage
    localStorage.setItem("contactForm", JSON.stringify(form));
    alert("Message sent! Data saved in localStorage.");
    setForm({ name: "", email: "", message: "" });
    setError("");
  };

  return (
    <div className="bg-white font-['Inter'] relative z-10 pt-16 pb-28 px-4 sm:px-8">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-black mb-8 relative">
        Contact
        <div className="w-10 h-1 bg-yellow-400 mx-auto mt-2 rounded"></div>
      </h1>

      {/* Form */}
      <form
        className="max-w-md mx-auto mb-12 space-y-6"
        onSubmit={handleSubmit}
        noValidate
      >
        {error && <p className="text-red-500 text-center">{error}</p>}

        <div>
          <label htmlFor="name" className="block text-sm text-black mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white"
            placeholder="Your name"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm text-black mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white"
            placeholder="Your email"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm text-black mb-1">
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white"
            placeholder="Write your message here..."
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="ml-auto block bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded shadow-sm font-semibold"
        >
          Send
        </button>
      </form>

      {/* Social Icons */}
      <div className="flex justify-center gap-6">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-yellow-500 text-xl"
        >
          <FaInstagram />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-yellow-500 text-xl"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="mailto:your@email.com"
          className="text-black hover:text-yellow-500 text-xl"
        >
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
}
