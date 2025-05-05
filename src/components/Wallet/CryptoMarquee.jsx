// CryptoMarquee.jsx
import { motion } from "framer-motion";

const CryptoMarquee = ({
    speed = 40,
  zIndex = 1,
  offsetY = 0,
  scale = 1,
  blur = false,
  delay = 0,
    background = "#FFFFFF",
  textColor = "#000000",
}) => {
  const phrase = "crypto wallet";
  const repeatCount = 20;
  const items = new Array(repeatCount).fill(phrase);

  return (
    <div
      className="overflow-hidden w-full left-0 py-3 2xl:py-5"
      style={{
        top: `${offsetY}px`,
        zIndex,
        transform: `scale(${scale})`,
        filter: blur ? "blur(1px)" : "none",
          pointerEvents: "none",
        
          backgroundColor: background,
          color: textColor
      }}
    >
      <motion.div
              className={`flex whitespace-nowrap`}
        initial={{ x: '100%' }}
        animate={{ x: ['0%', '-100%'] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
          delay,
        }}
      >
        {items.concat(items).map((word, idx) => (
          <span
          key={idx}
          className="mx-6 text-2xl 2xl:text-3xl font-inter px-7 font-bold uppercase tracking-widest whitespace-nowrap"
        >
          {word}
        </span>        
        ))}
      </motion.div>
    </div>
  );
};

export default CryptoMarquee;
