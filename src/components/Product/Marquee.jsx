import { motion } from 'framer-motion';

const Marquee = ({ text, color, direction }) => {
  // Define the variants for the animation based on the direction prop
  const animationVariants = {
    leftToRight: {
      initial: { x: '-100%' },
      animate: { x: '1%' },
      exit: { x: '-100%' }
    },
    rightToLeft: {
      initial: { x: '1%' },
      animate: { x: '-100%' },
      exit: { x: '100%' }
    }
  };

  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className={`whitespace-nowrap xl:text-9xl 2xl:text-[10rem] lg:text-8xl md:text-7xl text-5xl font-bold font-opensans uppercase`}
        initial="initial"
        animate="animate"
        // exit="exit"
        variants={animationVariants[direction]} // Dynamically set direction
        transition={{
          duration: 15, // Adjust the speed of the animation
          repeat: Infinity, // Make the animation loop infinitely
          repeatType: 'reverse', // Reverse the animation after completion
        }}
        style={{ color }}
      >
        {text}
      </motion.div>
    </div>
  );
};

export default Marquee;
