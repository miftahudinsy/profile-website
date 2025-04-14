import React from "react";
import Image from "next/image"; // Import Image if using client photos

const testimonials = [
  {
    id: 1,
    quote: `"Working with Syarif was a fantastic experience. They delivered a high-quality product on time and were incredibly responsive throughout the process."`,
    name: "Jane Doe",
    title: "CEO, Startup Co.",
    // photoSrc: '/path/to/jane-doe.jpg', // Uncomment and replace if you have a photo
  },
  {
    id: 2,
    quote: `"The web application developed exceeded our expectations. It's fast, intuitive, and has significantly improved our workflow."`,
    name: "John Smith",
    title: "Project Manager, Biz Corp.",
    // photoSrc: '/path/to/john-smith.jpg', // Uncomment and replace if you have a photo
  },
  {
    id: 3,
    quote: `"Professional, skilled, and great communication. Highly recommended for any web development needs."`,
    name: "Alice Green",
    title: "Marketing Head, Creative Agency",
    // photoSrc: '/path/to/alice-green.jpg', // Uncomment and replace if you have a photo
  },
  // Add more testimonials if needed
];

export default function TestimonialsSection() {
  return (
    <div id="testimonials" className=" py-12 px-6 lg:py-24 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-10 md:mb-16 text-gray-800">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col"
            >
              <p className="text-gray-600 italic text-md mb-4 flex-grow">
                {testimonial.quote}
              </p>
              <div className="flex items-center mt-auto">
                {/* Uncomment below if using photos */}
                {/* {testimonial.photoSrc && (
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
                    <Image src={testimonial.photoSrc} alt={testimonial.name} width={48} height={48} className="object-cover" />
                  </div>
                )} */}
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
