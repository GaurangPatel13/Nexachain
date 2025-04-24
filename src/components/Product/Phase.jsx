import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PhaseContent from './PhaseContent';
import TopContent from './TopContent';
import BottomContent from './BottomContent';

const tabs = ['Phase One', 'Phase Two', 'Phase Three', 'Final Phase'];
const topOne = {
    title: 'Phase One ( Onboarding & Registration )',
    obj: 'Objective: ',
    p1: 'Guide Users Smoothly into the System and Ensure Successful Account Creation',
    p2: 'A well-designed onboarding process is crucial for ensuring that users can easily register, log in, and start using the platform without confusion or frustration. The goal is to make the experience as simple, intuitive, and frictionless as possible while collecting essential information for the MLM system.'
}

const PhaseContents = [
  {
    content: <PhaseContent topContent={<TopContent title={topOne.title} obj={topOne.obj} p1={topOne.p1} p2={topOne.p2}/>} bottomContent={<BottomContent />} />
  },
  {
    content: <PhaseContent topContent={<TopContent title={topOne.title} obj={topOne.obj} p1={topOne.p1} p2={topOne.p2} />} bottomContent={<BottomContent />} />
  },
  {
    content: <PhaseContent topContent={<TopContent title={topOne.title} obj={topOne.obj} p1={topOne.p1} p2={topOne.p2} bottomContent={<BottomContent />} />} />
  },
  {
    content: <PhaseContent topContent={<TopContent title={topOne.title} obj={topOne.obj} p1={topOne.p1} p2={topOne.p2} />} bottomContent={<BottomContent />} />
  },
];

const variants = {
  enter: (direction) => ({
    x: direction === 'right' ? 300 : -300,
    opacity: 0,
    position: 'absolute',
  }),
  center: {
    x: 0,
    opacity: 1,
    position: 'relative',
  },
  exit: (direction) => ({
    x: direction === 'right' ? -300 : 300,
    opacity: 0,
    position: 'absolute',
  }),
};

const Phase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState('right');

  const handleTabClick = (newIndex) => {
    if (newIndex === activeIndex) return;
    setDirection(newIndex > activeIndex ? 'right' : 'left');
    setActiveIndex(newIndex);
  };

  return (
    <div className="w-full mx-auto px-4 py-10">
      {/* Tabs */}
      <div className="flex flex-col md:flex-row justify-between md:px-16 flex-wrap gap-4 mb-8">
        {tabs.map((label, index) => {
          const isActive = index === activeIndex;
          return (
            <motion.button
              key={index}
              onClick={() => handleTabClick(index)}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 1 }}
              className={`px-20 py-6 rounded-lg font-semibold transition-all duration-1000
                ${
                  isActive
                    ? 'bg-red-500 text-white shadow-md'
                    : 'bg-white text-black hover:text-red-500'
                }`}
            >
              {label}
            </motion.button>
          );
        })}
      </div>

      {/* Content */}
      <div className="relative w-full min-h-screen overflow-hidden p-3">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeIndex}
            variants={variants}
            custom={direction}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1 }}
            className="w-full bg-[#F5F5F5] min-h-screen rounded-4xl"
          >
            <h2 className="">{PhaseContents[activeIndex].content}</h2>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Phase;
