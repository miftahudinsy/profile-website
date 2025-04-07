import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6 gap-30">
      <div>
        <h1 className="text-6xl font-bold leading-tight">
          I'm Syarif
          <br />
          Miftahudin
        </h1>
        <p className="text-gray-600 text-lg mb-10">a student in Purwadhika</p>

        <button className="bg-black text-white px-8 py-3 rounded-none hover:bg-gray-800 ">
          READ MORE
        </button>
      </div>

      <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden shadow-lg">
        <Image
          src="/rex.png"
          alt="Rex Profile"
          width={300}
          height={300}
          className="p-4"
        />
      </div>
    </div>
  );
}
