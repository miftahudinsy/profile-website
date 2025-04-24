"use client";

import Image from "next/image";

export default function HeroSection() {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center p-6 gap-8 md:gap-20 lg:gap-50 ">
      <div className="text-center md:text-left mb-8 md:mb-0 order-2 md:order-1">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
          I'm Syarif
          <br />
          Miftahudin
        </h1>
        <p className="text-gray-600 text-lg my-6">
          Full Stack Web Development Student
          <br className="md:hidden" /> in Purwadhika
        </p>
        <p className="text-gray-600 text-lg mb-15 font-semibold">
          I craft functional and user-centric web applications to bring your
          ideas to life
        </p>
        <button
          onClick={handleScrollToContact}
          className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 font-bold transition-colors"
        >
          Contact Me
        </button>
      </div>
      <div className="rounded-full overflow-hidden shadow-lg order-1 md:order-2 w-48 h-48 md:w-64 md:h-64 lg:w-[250px] lg:h-[250px]">
        <Image
          src="/rex-zoom.png"
          alt="Rex Profile"
          width={250}
          height={250}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
