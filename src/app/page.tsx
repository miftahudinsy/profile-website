import Image from "next/image";
import { SiJavascript, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react"; // Import useState
import React from "react";

// Portfolio Data (including simplified details)

import HeroSection from "@/components/HeroSection";
import AboutMeSection from "@/components/AboutMeSection";
import PortfolioSection from "@/components/PortfolioSection";
import ExperienceSection from "@/components/ExperienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection"; // Import Contact section

export default function Home() {
  return (
    <div className="bg-gray-100">
      {/* Render the components in order */}
      <HeroSection />
      <AboutMeSection />
      <PortfolioSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ContactSection /> {/* Add Contact section */}
    </div>
  );
}
