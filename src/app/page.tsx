import Image from "next/image";
import { SiJavascript, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-gray-100">
      {/* hero section */}
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-center p-6 gap-8 md:gap-20 lg:gap-50">
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

          <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 font-bold">
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

      {/* profile section */}
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
                I'm a web developer who's passionate about building
                user-friendly and reliable web applications. With experience
                across the full stack, I focus on creating clean, responsive
                designs, and scalable backends. I value simplicity, clarity, and
                always aim to deliver seamless digital experiences.
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

      {/* Portofolio section - Updated styles and content */}
      <div id="portofolio" className="bg-gray-800 text-white">
        <div className="flex flex-col items-center justify-center py-12 px-6 lg:py-24 lg:px-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-10 md:mb-16">
            Portfolio
          </h2>
          {/* Responsive Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl">
            {/* Portfolio Item 1 */}
            <div className="aspect-square relative group bg-gray-700 rounded overflow-hidden">
              <Image
                src="/port1.png"
                alt="Portfolio Item 1"
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold mb-2">Blog Card</h3>
                <p className="text-sm mb-4">A simple blog card page</p>
                <button className="bg-yellow-500 text-gray-900 px-4 py-2 rounded text-sm font-semibold flex items-center gap-2 hover:bg-yellow-400 transition-colors">
                  See Details <FaArrowRight />
                </button>
              </div>
            </div>

            {/* Portfolio Item 2 */}
            <div className="aspect-square relative group bg-gray-700 rounded overflow-hidden">
              <Image
                src="/port2.png"
                alt="Portfolio Item 2"
                width={500}
                height={500}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold mb-2">Product Preview</h3>
                <p className="text-sm mb-4">A simple product preview page</p>
                <button className="bg-yellow-500 text-gray-900 px-4 py-2 rounded text-sm font-semibold flex items-center gap-2 hover:bg-yellow-400 transition-colors">
                  See Details <FaArrowRight />
                </button>
              </div>
            </div>

            {/* Portfolio Item 3 */}
            <div className="aspect-square relative group bg-gray-700 rounded overflow-hidden">
              <Image
                src="/port3.png"
                alt="Portfolio Item 3"
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />

              <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold mb-2">Testimonial Grid</h3>
                <p className="text-sm mb-4">A simple testimonial grid page</p>
                <button className="bg-yellow-500 text-gray-900 px-4 py-2 rounded text-sm font-semibold flex items-center gap-2 hover:bg-yellow-400 transition-colors">
                  See Details <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
