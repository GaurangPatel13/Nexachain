import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  return (
    <div className="relative w-full 2xl:h-34 md:h-24 h-18 overflow-hidden font-chillax flex items-center">
      {/* Static Background */}
      <div className="absolute w-full h-full flex">
        <div className="bg-orange-500 w-1/5 h-full" />
        <div className="bg-blue-600 w-1/2 h-full" />
        <div className="bg-red-500 w-1/3 h-full" />
      </div>

      {/* Scrolling Content */}
      <motion.div
        className="flex whitespace-nowrap text-white font-bold 2xl:text-8xl md:text-6xl text-4xl tracking-wide"
        style={{ willChange: "transform" }}
        animate={{ x: ["-1%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 17,
          repeat: Infinity,
        }}
      >
        <span className="px-6">Collect your eco NTSs ✦ Collect your eco NTSs ✦ </span>
        <span className="px-6">Collect your eco NTSs ✦ Collect your eco NTSs ✦ </span>
        <span className="px-6">Collect your eco NTSs ✦ Collect your eco NTSs ✦ </span>
        <span className="px-6">Collect your eco NTSs ✦ Collect your eco NTSs ✦ </span>
      </motion.div>
    </div>
  );
};

export default Marquee;
