import React, { useRef } from "react";
import testimonialimg1 from "/assets/Home/testimonial/testimonialimg1.png";
import testimonialimg2 from "/assets/Home/testimonial/testimonialimg2.png";
import testimonialimg3 from "/assets/Home/testimonial/testimonialimg3.png";
import { FaQuoteLeft } from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

const testimonials = [
  {
    image: testimonialimg1,
    name: "CreepyArtist",
    role: "Marketing Specialist",
    feedback:
      "Website is not only visually appealing but also highly responsive. The informative content, from case studies to client testimonials.",
  },
  {
    image: testimonialimg2,
    name: "CreepyArtist",
    role: "Marketing Specialist",
    feedback:
      "Website is not only visually appealing but also highly responsive. The informative content, from case studies to client testimonials.",
  },
  {
    image: testimonialimg3,
    name: "CreepyArtist",
    role: "Marketing Specialist",
    feedback:
      "Website is not only visually appealing but also highly responsive. The informative content, from case studies to client testimonials.",
  },
  {
    image: testimonialimg1,
    name: "CreepyArtist",
    role: "Marketing Specialist",
    feedback:
      "Website is not only visually appealing but also highly responsive. The informative content, from case studies to client testimonials.",
  },
];

const TestimonialSlider = () => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    const { current } = sliderRef;
    if (current) {
      const scrollAmount = current.offsetWidth / 1.2;
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className="w-full px-4 py-14 md:px-10 lg:px-20 bg-white font-jakarta"
      aria-labelledby="testimonial-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-8 mb-10">
          <div>
            <p className="text-sm text-orange-600 font-semibold">Testimonial</p>
            <h2
              id="testimonial-heading"
              className="text-3xl md:text-4xl font-bold mt-2 font-inter"
            >
              Don’t believe us
            </h2>
            <p className="mt-2 text-gray-600 max-w-md">
              At the heart of our approach lies collaboration. We closely
              collaborate with our clients to comprehend their vision.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full bg-orange-600 text-white text-xl flex items-center justify-center hover:bg-orange-700 transition"
              aria-label="Scroll Left"
            >
              <FaArrowLeftLong />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full bg-orange-600 text-white text-xl flex items-center justify-center hover:bg-orange-700 transition"
              aria-label="Scroll Right"
            >
              <FaArrowRightLong />
            </button>
          </div>
        </div>

        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-2"
          role="list"
        >
          {testimonials.map((t, idx) => (
            <motion.article
              key={idx}
              className="flex-shrink-0 w-64 bg-[#F9F9FB] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
              whileHover={{ scale: 1.02 }}
              role="listitem"
              aria-label={`Testimonial from ${t.name}`}
            >
              <img
                src={t.image}
                alt={`${t.name} testimonial`}
                className="object-cover w-full h-40"
                loading="lazy"
              />
              <div className="p-5 relative">
                <div className="absolute -top-6 left-5 bg-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg">
                  <FaQuoteLeft />
                </div>
                <p className="text-sm text-gray-700 mt-6 mb-4">{t.feedback}</p>
                <h3 className="font-semibold text-base">{t.name}</h3>
                <p className="text-xs text-gray-500">{t.role}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
