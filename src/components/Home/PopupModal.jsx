import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import popimg from '/assets/Home/popup/popimg.png';
import { RxCross2 } from 'react-icons/rx';

const popupVariants = {
  hidden: {
    opacity: 0,
    y: -100,
    transition: { duration: 0.4, ease: 'easeInOut' },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    y: -100,
    transition: { duration: 0.4, ease: 'easeIn' },
  },
};

const PopupModal = ({ onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 font-poppins  z-[999] flex items-center justify-center" style={{ backgroundColor: "rgba(0, 0, 0, 0.45)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          variants={popupVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="bg-white rounded-2xl overflow-hidden sm:h-130 lg:h-150 h-120 2xl:h-[90%] w-[90%] md:w-[90%] max-w-8xl flex relative"
        >
          {/* Left Image */}
          <div className="hidden md:block w-1/3">
            <img src={popimg} alt="Subscribe" className="h-full w-full object-cover" />
          </div>

          {/* Right Form */}
          <div className="w-full md:w-2/3 p-6 flex flex-col justify-center space-y-4">
            <h3 className="text-sm text-[#1A1A1A]">Unlock Exclusive Benefits</h3>
            <h2 className="text-2xl font-semibold leading-snug text-[#1A1A1A]">
              Subscribe Now for Premium Content, Updates, and Special Offers!
            </h2>

            <input type="text" placeholder="Enter your Name" className="w-full p-3 rounded-full border text-sm" />
            <input type="email" placeholder="Enter your Email" className="w-full p-3 rounded-full border text-sm" />

            <div className="flex items-center space-x-2">
              <input type="checkbox" id="terms" />
              <label htmlFor="terms" className="text-xs">I agree to terms of services</label>
            </div>

            <button className="w-full bg-[#1A1A1A] cursor-pointer text-white py-3 rounded-full hover:bg-gray-800 transition">Send</button>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-0 right-0 text-white cursor-pointer bg-red-500 hover:bg-red-600 w-14 h-14 rounded-bl-full flex items-center justify-center font-bold"
          >
            <RxCross2 className="text-2xl font-extrabold" />
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PopupModal;
