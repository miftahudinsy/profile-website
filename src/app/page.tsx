import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-100">
      {/* hero section */}
      <div className="min-h-screen flex items-center justify-center p-6 gap-50">
        <div>
          <h1 className="text-6xl font-bold leading-tight">
            I'm Syarif
            <br />
            Miftahudin
          </h1>
          <p className="text-gray-600 text-lg mb-10">a student at Purwadhika</p>

          <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 ">
            READ MORE
          </button>
        </div>

        <div className="rounded-full overflow-hidden shadow-lg">
          <Image
            src="/rex-zoom.png"
            alt="Rex Profile"
            width={250}
            height={250}
          />
        </div>
      </div>

      {/* profile section */}
      <div id="profile" className="bg-white ">
        <div className="min-h-screen flex flex-col items-center justify-center ">
          <h2 className="text-8xl font-bold">Hello!</h2>
          <p className="text-gray-600 text-lg max-w-2xl text-center">
            I am a student at Purwadhika.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-20 mt-20 px-50 ">
            <div className="flex justify-end">
              <Image
                src="/rex.png"
                alt="Rex Profile"
                width={300}
                height={300}
              />
            </div>
            <div className="space-y-5">
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
            <div className="space-y-5">
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
