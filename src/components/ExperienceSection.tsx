import React from "react";

const experiences = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "Tech Solutions Inc.",
    timeline: "2022 - Present",
    responsibilities: [
      "Developed and maintained web applications using React, Node.js, and PostgreSQL.",
      "Collaborated with designers and product managers to create new features.",
      "Implemented responsive designs ensuring cross-browser compatibility.",
      "Optimized application performance and scalability.",
    ],
  },
  {
    id: 2,
    title: "Freelance Web Developer",
    company: "Self-employed",
    timeline: "2020 - 2022",
    responsibilities: [
      "Built custom websites and applications for various clients.",
      "Managed project timelines and client communication.",
      "Utilized technologies like HTML, CSS, JavaScript, and various CMS platforms.",
    ],
  },
  // Add more experiences if needed
];

export default function ExperienceSection() {
  return (
    <div id="experience" className="bg-white py-12 px-6 lg:py-24 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-10 md:mb-16 text-gray-800">
          Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="border-l-4 border-yellow-500 pl-6 md:pl-8 pb-8 relative"
            >
              {/* Dot on the timeline */}
              <div className="absolute -left-[9px] top-1 w-4 h-4 bg-yellow-500 rounded-full border-4 border-white"></div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                {exp.title}
              </h3>
              <p className="text-lg text-gray-700 font-medium mb-1">
                {exp.company}
              </p>
              <p className="text-sm text-gray-500 mb-3">{exp.timeline}</p>
              <ul className="list-disc list-outside pl-5 space-y-1 text-gray-600 text-md">
                {exp.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
