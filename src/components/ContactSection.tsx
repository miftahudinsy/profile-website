"use client";
import React from "react";
import { FaGithub, FaEnvelope } from "react-icons/fa"; // Import icons

export default function ContactSection() {
  // Basic form handler (replace with actual logic later)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // In a real application, you would handle form submission here
    // (e.g., send data to an API endpoint or use a service like EmailJS)
    alert("Form submitted (placeholder action)!");
    // Optionally clear the form
    // event.currentTarget.reset();
  };

  return (
    <div id="contact" className="bg-white py-12 px-6 lg:py-24 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-10 md:mb-16 text-gray-800">
          Contact Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info & Links */}
          <div className="space-y-6 mt-6 md:mt-0">
            <p className="text-gray-600 text-lg">
              Feel free to reach out via the form or directly through email or
              GitHub.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:miftahudin.syarif@gmail.com"
                className="flex items-center gap-3 text-gray-700 hover:text-yellow-600 transition-colors group"
              >
                <FaEnvelope className="w-5 h-5 text-gray-500 group-hover:text-yellow-500 transition-colors" />
                <span>miftahudin.syarif@gmail.com</span>
              </a>
              <a
                href="http://github.com/miftahudinsy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-700 hover:text-yellow-600 transition-colors group"
              >
                <FaGithub className="w-5 h-5 text-gray-500 group-hover:text-yellow-500 transition-colors" />
                <span>github.com/miftahudinsy</span>
              </a>
            </div>
            {/* You can add other links like LinkedIn here */}
          </div>
        </div>
      </div>
    </div>
  );
}
