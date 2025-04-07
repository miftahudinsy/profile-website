import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-100">
      {/* hero section */}
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-center p-6 gap-8 md:gap-20 lg:gap-50">
        <div className="text-center md:text-left mb-8 md:mb-0 order-2 md:order-1">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            I'm Syarif
            <br />
            Miftahudin
          </h1>
          <p className="text-gray-600 text-lg my-6 md:mb-10">
            a student at Purwadhika
          </p>

          <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 ">
            READ MORE
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
        <div className="min-h-screen flex flex-col items-center justify-center p-6 lg:p-12">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center mb-4">
            Hello!
          </h2>
          <p className="text-gray-600 text-lg max-w-md md:max-w-lg lg:max-w-2xl text-center px-4 sm:px-0">
            I am a student at Purwadhika.
          </p>

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
            <div className="space-y-5 text-center md:text-left">
              <div className="text-gray-600 text-2xl">About Me</div>
              <p className="text-gray-600 text-md leading-8">
                I am a student at Purwadhika, a coding bootcamp in Indonesia. I
                am passionate about learning new technologies and improving my
                skills. Currently, I am learning about React and Next.js.
              </p>
              <p className="text-gray-600 text-md leading-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ab
                hic commodi ad asperiores officia corporis reiciendis facere
                assumenda odit laborum iusto, incidunt illum magni? Repudiandae
                fugit quia nobis aliquam?
              </p>
            </div>
            <div className="space-y-5 text-center md:text-left">
              <div className="text-gray-600 text-2xl">Details</div>
              <div>
                <p className="text-gray-600 text-md font-bold leading-8">
                  Name:
                </p>
                <p className="text-gray-600 text-md leading-8">
                  Syarif Miftahudin
                </p>
                <p className="text-gray-600 text-md font-bold leading-8">
                  Location:
                </p>
                <p className="text-gray-600 text-md leading-8">Pekalongan</p>
                <p className="text-gray-600 text-md font-bold leading-8">
                  Email:
                </p>
                <p className="text-gray-600 text-md leading-8">
                  miftahudin.syarif@gmail.com
                </p>
                <p className="text-gray-600 text-md font-bold leading-8">
                  Phone:
                </p>
                <p className="text-gray-600 text-md leading-8">081234567890</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
