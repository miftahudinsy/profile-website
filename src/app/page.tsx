import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="min-h-screen">
        <div className="mx-auto px-4 h-full flex items-center justify-center">
          <div className="grid md:grid-cols-2 gap-100 items-center">
            <div className="space-y-6">
              <div className="w-12 h-12 bg-[#E74C3C] rounded-full mb-8"></div>
              <h1 className="text-6xl font-bold">
                I'm Syarif
                <br />
                Miftahdin
              </h1>
              <p className="text-gray-600 text-lg max-w-lg">
                a student in Purwadhika
              </p>

              <button className="bg-black text-white px-8 py-3 rounded-none hover:bg-gray-800 transition">
                READ MORE
              </button>
            </div>

            <div className="relative h-[600px] w-full flex items-center justify-center">
              <Image
                src="/rex.png"
                alt="Rex Profile"
                fill
                style={{ objectFit: "contain" }}
                priority
                className="p-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
