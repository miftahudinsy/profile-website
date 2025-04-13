import Image from "next/image";
import { SiJavascript, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react"; // Import useState
import React from "react";

// Portfolio Data (including simplified details)

import HeroSection from "@/components/HeroSection";
import AboutMeSection from "@/components/AboutMeSection";
import PortfolioSection from "@/components/PortfolioSection";

export default function Home() {
  return (
    <div className="bg-gray-100">
      {/* Render the components */}
      <HeroSection />
      <AboutMeSection />
      <PortfolioSection />
    </div>
  );
}
