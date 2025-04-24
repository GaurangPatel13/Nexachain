import React from 'react';
import { motion } from 'framer-motion';

const marqueeText = "HIGH QUALITY COTTON * GET WORK TOGETHER * 24/7 SUPPORT * HIGH QUALITY COTTON * GET WORK TOGETHER * 24/7 SUPPORT * HIGH QUALITY COTTON * GET WORK TOGETHER * 24/7 SUPPORT";

const BlackMarque = () => {
  return (
    <div className="overflow-hidden bg-[#1A1A1A] absolute bottom-10 text-white whitespace-nowrap w-full h-12 flex items-center">
      <motion.div
        className="inline-block"
        animate={{ x: ['1%', '-100%'] }}
        transition={{
          repeat: Infinity,
          duration: 165,
          ease: 'linear',
        }}
      >
        <span className="text-xl tracking-widest border-b-1 border-t-1 border-white">{marqueeText.repeat(20)}</span>
      </motion.div>
    </div>
  );
};

export default BlackMarque;
