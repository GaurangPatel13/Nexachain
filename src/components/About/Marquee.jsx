import { motion } from "framer-motion";
import sliderimg from "/assets/About/slider/sliderimg.png"
import faqimg from "/assets/About/faq/faqimg.png"

const words = [
  "STRATEGY",
  "MARKETING",
  "DIGITAL",
  "STRATEGY",
  "OPTIMIZATION",
  "SEO",
];

export default function Marquee() {
  return (
    <div className="relative z-100 w-full overflow-hidden font-urbanist bg-gradient-to-r from-[#8743FF] to-[#E80053] py-4">
      <motion.div
        className="flex space-x-10 whitespace-nowrap text-white text-3xl font-bold uppercase"
        initial={{ x: "100%" }}
        animate={{ x: ["-100%", "100%"] }}
        transition={{
          repeat: Infinity,
            repeatType: "reverse",
          duration: 20,
          ease: "linear",
        }}
      >
        {[
          ...words,
          ...words,
        ].map((word, index) => (
          <span key={index} className="flex items-center gap-4">
            {word}
            <img src={sliderimg} className="w-6" alt="" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
