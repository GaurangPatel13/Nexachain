import { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { shuffle } from "lodash";
import card from '/assets/Product/hero/card.png';
import cardimg4 from '/assets/Product/hero/cardimg4.png';
import cardimg5 from '/assets/Product/hero/cardimg5.png';
import bgimg from '/assets/Product/hero/textbgimg.png';

const cardData = [
  { id: 1, content: card },
  { id: 2, content: cardimg4 },
  { id: 3, content: cardimg5 },
  { id: 4, content: card },
  { id: 5, content: cardimg4 },
  { id: 6, content: cardimg5 },
];

const rotationDuration = 4; // seconds
const pauseDuration = 2.5; // seconds

const Hero2 = () => {
  const [cards, setCards] = useState(cardData);
  const [cycle, setCycle] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);
  const controls = useAnimation();
  const rotationRef = useRef(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Dynamically determine radius
  const radius = windowWidth > 1536 ? 600 : 400;

  // Position the cards in a circular layout
  const getCardPosition = (index, total) => {
    const angle = (360 / total) * index + rotationRef.current;
    const rad = (angle * Math.PI) / 180;
    const x = Math.cos(rad) * radius;
    const y = Math.sin(rad) * radius;
    return { x, y };
  };

  useEffect(() => {
    const interval = setInterval(async () => {
      rotationRef.current += 60;

      await controls.start((i) => {
        const pos = getCardPosition(i, cards.length);
        return {
          x: pos.x,
          y: pos.y,
          transition: { duration: rotationDuration, ease: "easeInOut" },
        };
      });

      setTimeout(() => {
        setCycle((prev) => {
          const newCycle = prev + 1;
          if (newCycle % 4 === 0) {
            setCards((prevCards) => shuffle(prevCards));
          }
          return newCycle;
        });
      }, pauseDuration * 1000);
    }, (rotationDuration + pauseDuration) * 1000);

    return () => clearInterval(interval);
  }, [cards.length, controls, radius]);

  return (
    <section className="relative w-full min-h-screen md:pb-20 overflow-hidden">
      <section className="relative w-full md:h-[600px] flex items-start z-1 justify-center overflow-hidden">
        {/* Center Content */}
        <div className="z-10 text-center xl:pt-28 md:pt-5">
          <h1 className="text-4xl md:text-6xl 2xl:text-8xl font-bold text-gray-900 font-podkova">
            See the big picture
            <br />
            with <span className="text-[#E42527]">Gantt charts</span>
          </h1>
          <p className="mt-4 max-w-md mx-auto 2xl:text-xl text-gray-500 font-mavenpro">
            As an ambitious community-led project, we've placed a strong
            emphasis on setting the standard for unique secure calendar
            experiences.
          </p>
          <button className="mt-6 bg-blue-600 text-white font-abeezee px-6 py-3 rounded cursor-pointer font-semibold hover:bg-blue-700 transition">
            Learn More
          </button>
          <img src={bgimg} className="absolute xl:top-28 top-0 left-1/2 w-lg -translate-x-1/2" alt="" />
        </div>
      </section>

      {/* Desktop Circular Rotating Cards */}
      <div className="absolute inset-0 hidden -top-1/2 md:flex items-center z-2 justify-center">
        {cards.map((card, i) => {
          const { x, y } = getCardPosition(i, cards.length);
          return (
            <motion.div
              key={card.id}
              custom={i}
              animate={controls}
              initial={{ x, y }}
              className="absolute w-56 h-72 2xl:w-80 2xl:h-88 flex items-center justify-center text-center font-semibold text-gray-700"
              style={{ transform: "rotate(0deg)" }}
            >
              <img src={card.content} className="object-cover" alt="" />
            </motion.div>
          );
        })}
      </div>

      {/* Mobile Infinite Slider */}
      <div className="md:hidden w-full overflow-hidden mt-10">
        <motion.div
          className="flex gap-4 w-max px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
        >
          {[...cards, ...cards].map((card, index) => (
            <div
              key={`${card.id}-${index}`}
              className="min-w-[220px] h-96 flex-shrink-0 flex items-center justify-center"
            >
              <img src={card.content} className="w-full h-full object-cover rounded-lg" alt="" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero2;
