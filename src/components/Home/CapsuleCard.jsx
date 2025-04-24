import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useMemo } from "react";

const CapsuleCard = ({ title, label, description, image, isOpen, onClick, color }) => {
  // Memoizing the processed title for performance optimization
  const formattedTitle = useMemo(
    () => title.toLowerCase().replace(/\s+/g, '-'),
    [title]
  );

  return (
    <>
      <div className="w-full h-0.5 bg-gray-200 mt-5" />
      <div className="w-full">
        <div className="flex flex-col md:flex-row items-start justify-between cursor-pointer px-4 py-6 gap-4">
          {/* Text Section */}
          <div className="flex-1">
            <div>
              {/* Updated dynamic color handling */}
              <p className="text-xs font-semibold" style={{ color }}>
                {label}
              </p>
              <div className="flex items-end gap-5 sm:text-5xl text-xl">
                <Link to={`/${formattedTitle}`}>
                  <h2 className="sm:text-5xl mt-2">{title}</h2>
                </Link>
                <FiArrowUpRight />
              </div>
              <p className="text-sm text-gray-500 mt-1">{description}</p>
            </div>
          </div>

          {/* Capsule Image Section */}
          <AnimatePresence>
            <motion.div
              onClick={onClick}
              className={`md:w-2/3 w-full transition-all duration-[2000ms] ease-in-out shadow-2xl ${
                isOpen
                  ? "h-auto max-h-[250px] md:max-h-[500px] overflow-y-scroll rounded-lg"
                  : "sm:h-54 h-20 overflow-hidden rounded-full"
              } no-scrollbar`}
              animate={{
                borderRadius: isOpen ? "1rem" : "9999px",
              }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover object-top"
                loading="lazy" // Lazy loading added here
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default CapsuleCard;
