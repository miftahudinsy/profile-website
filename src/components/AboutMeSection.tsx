import Image from "next/image";
import { SiJavascript, SiTailwindcss, SiNextdotjs } from "react-icons/si";

export default function AboutMeSection() {
  return (
    <div id="profile" className="bg-white ">
      <div className=" flex flex-col items-center justify-center p-6 lg:p-12">
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center mb-4 mt-5 md:mt-0">
          Hello!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-20 mt-10 md:mt-16 lg:mt-20 w-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-50">
          <div className="flex justify-center md:justify-end items-center">
            <div className="w-48 h-48 sm:w-60 sm:h-60 md:w-full md:max-w-[300px] md:h-auto">
              <Image
                src="/rex.png"
                alt="Rex Profile"
                width={300}
                height={300}
                className="object-contain w-full h-full"
              />
            </div>
          </div>
          <div className="space-y-5 ">
            <div className="text-gray-600 text-2xl">About Me</div>
            <p className="text-gray-600 text-md leading-8 ">
              I'm a web developer who's passionate about building user-friendly
              and reliable web applications. With experience across the full
              stack, I focus on creating clean, responsive designs, and scalable
              backends. I value simplicity, clarity, and always aim to deliver
              seamless digital experiences.
            </p>
          </div>
          <div className="space-y-5 mb-5 md:mb-0">
            <div className="text-gray-600 text-2xl">Core Skills</div>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <SiJavascript className="text-yellow-500 text-2xl" />
                <span className="text-gray-600 text-md">Javascript</span>
              </li>
              <li className="flex items-center gap-3">
                <SiTailwindcss className="text-cyan-500 text-2xl" />
                <span className="text-gray-600 text-md">Tailwind CSS</span>
              </li>
              <li className="flex items-center gap-3">
                <SiNextdotjs className="text-black text-2xl" />
                <span className="text-gray-600 text-md">Next.js</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
