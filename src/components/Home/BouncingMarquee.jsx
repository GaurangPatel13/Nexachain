import { motion } from "framer-motion";

const BlackMarque = ({ text, bgColor = "bg-black", textColor = "text-white", fosi }) => {
  return (
    <div className={`overflow-hidden w-full py-4 ${bgColor}`}>
      <motion.div
        className={`inline-block whitespace-nowrap uppercase ${textColor} ${fosi} tracking-widest`}
        animate={{ x: ['1%', '-100%'] }}
        transition={{
          repeat: Infinity,
          duration: 180, // adjust speed
          ease: "linear",
        }}
      >
        <span>{text.repeat(20)}</span>
      </motion.div>
    </div>
  );
};

export default BlackMarque;
