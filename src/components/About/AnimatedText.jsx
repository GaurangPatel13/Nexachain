import { useEffect, useState } from "react";

const colors1 = ["#8B5CF6", "#FF5733", "#34D399", "#FACC15", "#EC4899"]; // Colors for front text
const colors2 = ["#FFFFFF", "#A0AEC0", "#4A5568", "#718096", "#CBD5E0"]; // Colors for back text

const AnimatedText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % colors1.length);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="relative lg:text-[12rem] sm:text-[10rem] text-7xl font-bold tracking-wide leading-none font-ubuntu">
        {/* Background Text */}
        <span
          className="absolute -top-1 sm:left-3"
          style={{ color: colors2[index], transform: "translate(5px, 5px)" }}
        >
          About
        </span>
        {/* Foreground Text */}
        <span style={{ color: colors1[index] }}>About</span>
      </div>
    </div>
  );
};

export default AnimatedText;
