"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import React from "react";
import PortfolioDetailModal from "./PortfolioDetailModal";

interface PortfolioItem {
  id: number;
  title: string;
  imageSrc: string;
  shortDescription: string;
  detailContent: {
    situation: string;
    task: string;
    action: string;
    result: string;
    technologies: string[];
  };
}

const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    title: "KosanBapak.com",
    imageSrc: "/kos.png",
    shortDescription:
      "Digital Solution for Effortless Boarding House Management",
    detailContent: {
      situation:
        "Many traditional boarding house owners,especially older individuals, struggle with managing tenant data, monthly payments, and room availability manually. Kosanbapak.com was developed as a digital solution designed to be simple, efficient, and easy to use, even for users with minimal tech experience. The project aimed to deliver a straightforward interface with essential features tailored to everyday boarding house operations.",
      task: "I am responsible as a full-stack developer to build a web application that allows boarding house owners to: record and monitor resident data, track monthly payments, manage room availability, get automatic notifications for payment due dates. The challenge is to ensure that the application is intuitive and not confusing for users who are not familiar with digital technology.",
      action:
        "I designed a simple, user-friendly interface using Next.js and TailwindCSS. The backend was built with Supabase to ensure smooth data handling and scalability. Usability testing with older users helped refine the interface for maximum clarity and ease of use.",
      result:
        "The app gained over 30 active users within the first month of its launch.",
      technologies: ["Next.js", "Supabase", "TailwindCSS"],
    },
  },
  {
    id: 2,
    title: "Blog Card",
    imageSrc: "/port1.png",
    shortDescription: "A simple blog card page.",
    detailContent: {
      situation: "Needed a reusable card component for blog previews.",
      task: "Design and build a responsive blog card UI.",
      action: "Used HTML and CSS (Tailwind) for structure and styling.",
      result: "Created a clean, responsive card component.",
      technologies: ["HTML", "CSS", "TailwindCSS"],
    },
  },
  {
    id: 3,
    title: "Product Preview",
    imageSrc: "/port2.png",
    shortDescription: "A simple product preview page.",
    detailContent: {
      situation: "Required a product page layout for an e-commerce site.",
      task: "Develop a product preview component showing image, details, and price.",
      action: "Implemented using HTML and CSS, focusing on responsive design.",
      result: "Delivered a functional and visually appealing product preview.",
      technologies: ["HTML", "CSS"],
    },
  },
  {
    id: 4,
    title: "Testimonial Grid",
    imageSrc: "/port3.png",
    shortDescription: "A simple testimonial grid page.",
    detailContent: {
      situation:
        "Needed to display customer testimonials in an engaging grid layout.",
      task: "Build a responsive grid section for testimonials.",
      action:
        "Utilized CSS Grid (via Tailwind) to create the layout structure.",
      result:
        "Successfully implemented a dynamic and responsive testimonial grid.",
      technologies: ["HTML", "CSS", "TailwindCSS"],
    },
  },
];

export default function PortfolioSection() {
  // State to track the index of the item whose modal should be open
  const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);

  // Function to open the modal for a specific item
  const handleOpenModal = (index: number) => {
    setOpenModalIndex(index);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setOpenModalIndex(null);
  };

  return (
    <div className="bg-gray-800 text-white">
      <div className="flex flex-col items-center justify-center py-12 px-6 lg:py-24 lg:px-12">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-10 md:mb-16">
          Portfolio
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl">
          {portfolioData.map((item, index) => (
            <div
              key={item.id}
              className="aspect-square relative group rounded overflow-hidden"
            >
              <Image
                src={item.imageSrc}
                alt={item.title}
                width={500}
                height={500}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm mb-4">{item.shortDescription}</p>
                <button
                  onClick={() => handleOpenModal(index)}
                  className="bg-yellow-500 text-gray-900 px-4 py-2 rounded text-sm font-semibold flex items-center gap-2 hover:bg-yellow-400 transition-colors"
                >
                  See Details <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {openModalIndex !== null && (
        <PortfolioDetailModal
          isOpen={true}
          onClose={handleCloseModal}
          title={portfolioData[openModalIndex].title}
          details={portfolioData[openModalIndex].detailContent}
        />
      )}
    </div>
  );
}
