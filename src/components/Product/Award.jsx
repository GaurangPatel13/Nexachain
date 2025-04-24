import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import awardimg1 from "/assets/Product/award/awardimg1.png";
import awardimg2 from "/assets/Product/award/awardimg2.png";

const awardsData = [
  {
    title: "Design Mastery",
    year: "2024",
    category: "Graphic Design",
    image: awardimg1,
    textColor: "text-yellow-300",
  },
  {
    title: "Artistic Brilliance",
    year: "2023",
    category: "Photography",
    image: awardimg1,
    textColor: "text-sky-300",
  },
  {
    title: "Capture Legend",
    year: "2022",
    category: "Creative Work",
    image: awardimg1,
    textColor: "text-pink-300",
  },
  {
    title: "Studio Leaders",
    year: "2020",
    category: "Info Graphic",
    image: awardimg1,
    textColor: "text-yellow-600",
  },
  {
    title: "Visual Honors",
    year: "2018",
    category: "Website Design",
    image: awardimg1,
    textColor: "text-gray-500",
  },
];

export default function Award() {
  const [hoveredIndex, setHoveredIndex] = useState(null); // Show first image by default on mobile
  const [prevIndex, setPrevIndex] = useState(null); // Keep track for animation
  const carouselRef = useRef(null);
  const slideTween = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      slideTween.current = gsap.to(".carousel-inner", {
        yPercent: -70,
        repeat: -1,
        yoyo: true,
        duration: 10,
        ease: "power1.inOut",
      });
    }, carouselRef);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    gsap.to(".carousel-wrapper", {
      xPercent: 100,
      ease: "power3.inOut",
      duration: 1,
    });
    slideTween.current?.pause();
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    gsap.to(".carousel-wrapper", {
      xPercent: 0,
      ease: "power3.inOut",
      duration: 1,
    });
    slideTween.current?.resume();
  };

  const handleMobileClick = (index) => {
    if (window.innerWidth < 1024) {
      setPrevIndex(hoveredIndex); // store previous
      setHoveredIndex(index); // update new
    }
  };

  return (
    <div className="w-full bg-black text-white lg:max-h-screen overflow-hidden flex flex-col lg:flex-row">
      {/* Left Text Section */}
      <div className="lg:w-1/2 w-full lg:p-8 p-6 space-y-6 flex flex-col justify-center lg:items-start items-center">
        <div className="flex items-center gap-2">
          <h2
            className={`md:text-7xl text-5xl 2xl:text-9xl font-extrabold transition-colors duration-300 ${
              hoveredIndex !== null
                ? awardsData[hoveredIndex].textColor
                : "text-white"
            }`}
          >
            AWARDS
          </h2>
          <span className="text-white font-semibold leading-none text-xs md:text-lg 2xl:text-3xl">
            OUR
            <br />
            SUCCESS
          </span>
        </div>

        <ul className="space-y-4">
          {awardsData.map((award, index) => (
            <li
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleMobileClick(index)}
              className={`cursor-pointer group flex items-end gap-3 ${
                hoveredIndex === index
                  ? "lg:translate-x-20 translate-x-4 transform transition-all duration-700"
                  : ""
              }`}
            >
              <p className="text-lg md:text-xl 2xl:text-4xl font-semibold text-gray-400 group-hover:text-white">
                {award.title}
              </p>
              <p className="text-xs md:text-sm 2xl:text-xl text-gray-400 group-hover:text-white">
                / {award.year}, {award.category}
              </p>
              <img
                src={award.image}
                className="rounded-full w-14 2xl:w-28 group-hover:opacity-0 transition-opacity duration-700 shadow-md shadow-white"
                alt=""
              />
            </li>
          ))}
        </ul>

        {/* Mobile Image with Slide Animation */}
        <div className="lg:hidden mt-6 w-full flex justify-center items-center min-h-[300px] relative overflow-hidden">
          <AnimatePresence mode="wait">
            {hoveredIndex !== null && (
              <motion.img
                key={hoveredIndex}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.4 }}
                src={awardsData[hoveredIndex].image}
                alt="Mobile View"
                className="absolute w-2/3 max-w-sm max-h-[400px] object-contain"
              />
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Right Section for Desktop */}
      <div
        className="lg:w-1/2 relative overflow-hidden hidden lg:block"
        ref={carouselRef}
      >
        <div className="carousel-wrapper w-full h-full">
          <div className="carousel-inner w-full flex flex-col items-center">
            {awardsData.map((award, index) => (
              <div
                key={index}
                className="w-full flex justify-center items-center"
              >
                <img
                  src={award.image}
                  alt={award.title}
                  className="h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Hovered image overlay for desktop */}
        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              key="hoveredImage"
              initial={{ opacity: 0, x: 650 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 650 }}
              transition={{ duration: 0.5 }}
              className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10"
            >
              <img
                src={awardsData[hoveredIndex].image}
                alt="Hovered"
                className="object-contain"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
