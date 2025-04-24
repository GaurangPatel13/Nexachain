import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  "Frontend",
  "Backend",
  "Mobile",
  "Database",
  "Framework",
  "Cloud",
  "DevOps",
  "ECommerce",
  "CMS",
  "Platforms",
];

const cards = [
  { id: "Frontend", name: "React", image: "/react-logo.png" },
  { id: "Backend", name: "JavaScript", image: "/js-logo.png" },
  { id: "Mobile", name: "Android", image: "/android-logo.png" },
  { id: "Database", name: "SQL Server", image: "/sqlserver-logo.png" },
];

const Platforms = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <div className="flex justify-between flex-col lg:flex-row w-full p-8 gap-8">
      {/* Left Buttons */}
      <div className="lg:w-1/2 space-y-5">
        <h1 className="md:text-6xl text-3xl font-bold font-orbitron text-[#333333]">
          Technologies and Platforms We Use
        </h1>
        <p className="font-poppins text-[#333333] text-sm">
          With Smart E-com, you’ll get all essential panels, websites, and
          mobile apps to operate your eCommerce business smoothly.
        </p>
        <div className="grid md:grid-cols-4 grid-cols-2 grid-rows-4 gap-4 h-54">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`rounded-full border cursor-pointer text-white bg-[#333333] transition-all duration-300 ${
                hoveredCategory === cat
                  ? "border-purple-500 border-2"
                  : "border-gray-600"
              }`}
              onMouseEnter={() => setHoveredCategory(cat)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Right Cards */}
      <div className="relative lg:w-1/2 h-[400px] flex justify-end items-center">
        {cards.map((card, index) => {
          const isHovered = hoveredCategory === card.id;
          const isAnyHovered = hoveredCategory !== null;

          return (
            <motion.div
              key={card.id}
              className="absolute w-48 h-64 rounded-2xl bg-white shadow-xl flex flex-col items-center justify-center p-4"
              initial={false}
              animate={{
                x: isHovered ? -200 : 0,
                zIndex: isHovered ? 10 : index,
                scale: isHovered ? 1.05 : 1,
                opacity: isAnyHovered && !isHovered ? 0.4 : 1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ right: `${index * 60}px` }}
            >
              <img
                src={card.image}
                alt={card.name}
                className="w-16 h-16 mb-4"
              />
              <p className="text-lg font-semibold">{card.name}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Platforms;
