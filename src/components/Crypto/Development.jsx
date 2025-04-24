import React from "react";
import { motion } from "framer-motion";
import developmentimg1 from "/assets/Crypto/development/developmentimg1.png";
import heroimg1 from "/assets/Crypto/hero/heroimg1.png";
import heroimg2 from "/assets/Crypto/hero/heroimg2.png";

const spring = {
  type: "spring",
  stiffness: 900,
  damping: 10,
};

const Development = () => {
  return (
    <div className="w-full flex items-end lg:h-[31.5rem] 2xl:h-[38.5rem] pb-10">
      <div className="rotate-340 w-1/2 hidden lg:block absolute hovertext font-inter left-40 bottom-1/6 2xl:bottom-1/5 translate-y-1/3">
        <div className="relative text-3xl md:text-9xl font-semibold">
          <span className="text-black">Our</span>
          <motion.span
            initial={{ x: 12 }}
            whileHover={{ x: 0 }}
            transition={spring}
            className="text-pink-600 absolute top-0 left-0"
          >
            Our
          </motion.span>
        </div>

        <div className="relative text-3xl md:text-9xl font-semibold">
          <span className="text-black">Blockchain</span>
          <motion.span
            initial={{ x: 12 }}
            whileHover={{ x: 2 }}
            transition={spring}
            className="text-purple-600 absolute top-0 left-0"
          >
            Blockchain
          </motion.span>
        </div>

        <div className="relative text-3xl md:text-9xl font-semibold">
          <span className="text-black">Development</span>
          <motion.span
            initial={{ x: 12 }}
            whileHover={{ x: 2 }}
            transition={spring}
            className="text-green-600 absolute top-0 left-0"
          >
            Development
          </motion.span>
        </div>

        <div className="relative text-3xl md:text-9xl font-semibold">
          <span className="text-black">Services</span>
          <motion.span
            initial={{ x: 12 }}
            whileHover={{ x: 4 }}
            transition={spring}
            className="text-orange-600 absolute top-0 left-0"
          >
            Services
          </motion.span>
        </div>
      </div>
      <div className="flex w-full items-center flex-col md:flex-row justify-between lg:mt-60">
        <p className="text-[#626262] font-opensans w-2/3">
          Antier provides a full suite of blockchain development services to
          help businesses harness the full potential of the technology and stay
          ahead in today’s competitive web3 era.
        </p>
        <img
          src={developmentimg1}
          className="lg:w-[35rem] w-[30rem] developimg lg:absolute bottom-0 right-0 z-50"
          alt=""
        />
      </div>
      <img
        src={heroimg1}
        className="absolute hidden md:block bottom-1/5 right-20 w-20 z-50"
        alt=""
      />
      <img
        src={heroimg2}
        className="absolute hidden md:block bottom-1/5 left-20 w-10 z-50"
        alt=""
      />
    </div>
  );
};

export default Development;
