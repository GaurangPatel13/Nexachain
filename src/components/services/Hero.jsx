import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Navbar from "./Navbar";
import heroimg1 from "/assets/Services/hero/heroimg1.png";
import { LuMoveLeft, LuMoveRight } from "react-icons/lu";

const COLORS = [
  "#FF0000",
  "#FF69B4",
  "#32CD32",
  "#FFD700",
  "#00BFFF",
  "#FF7F50",
  "#9370DB",
  "#FF1493",
  "#7FFF00",
  "#FFA07A",
  "#20B2AA",
  "#FF4500",
];

const MESSAGES = [
  "Pre Built Templates",
  "Gaurang",
  "Rakesh",
  "Priya",
  "Neha",
  "Kunal",
  "Development Kit",
  "Marketing Stack",
  "Sales Booster",
  "Finance Tracker",
  "AI Automation",
  "Design System",
];

const Hero = () => {
  const [index, setIndex] = useState(0); // 0 to 11
  const [rotation, setRotation] = useState(0);
  const controls = useAnimation();
  const [autoRotate, setAutoRotate] = useState(true);

  const rotateStep = 45;

  const animateStep = async (i) => {
    await controls.start({
      rotate: i * rotateStep,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    });
    await new Promise((res) => setTimeout(res, 1000));
  };

  useEffect(() => {
    let interval;
    if (autoRotate) {
      interval = setInterval(() => {
        setRotation((prev) => {
          const nextRotation = prev + rotateStep;
          controls.start({
            rotate: nextRotation,
            transition: {
              duration: 1,
              type: "spring",
              stiffness: 150,
              damping: 12,
            },
          });
          return nextRotation;
        });
        setIndex((prevIndex) => (prevIndex + 1) % MESSAGES.length);
      }, 2500);
    }
    return () => clearInterval(interval);
  }, [autoRotate]);
  
  

  const manualRotate = (direction) => {
    setRotation((prev) => {
      const nextRotation = prev + direction * rotateStep;
      controls.start({
        rotate: nextRotation,
        transition: {
          duration: 1,
          type: "spring",
          stiffness: 150,
          damping: 12,
        },
      });
      return nextRotation;
    });
  
    setIndex((prevIndex) => {
      const nextIndex = (prevIndex + direction + MESSAGES.length) % MESSAGES.length;
      return nextIndex;
    });
  };
  

  return (
    <div className="bg-[#141414] min-h-screen w-full pb-10 relative overflow-hidden">
      <Navbar color={COLORS[index]} />
      <div className="lg:w-1/2 px-4 text-center xl:space-y-10 lg:space-y-8 space-y-6 xl:2/3 xl:mt-24 mt-5 z-10 relative">
        <h1 className="text-center text-6xl 2xl:text-8xl font-satoshi">
          <span
            className="text-[#FF30FF]"
            style={{ textShadow: "rgba(255, 255, 255, 1) -5px -1px 0px" }}
          >
            when{" "}
          </span>
          <span
            className="text-[#FFA800]"
            style={{ textShadow: "rgba(255, 255, 255, 1) -5px -1px 0px" }}
          >
            solution
          </span>
          <br />
          <span
            className="text-[#2BBD81]"
            style={{ textShadow: "rgba(255, 255, 255, 1) -5px -1px 0px" }}
          >
            & design
          </span>
        </h1>

        {/* SVG Section */}
        <div className="relative p-3 text-center">
          <h1 className="font-satoshi 2xl:text-7xl md:text-5xl sm:text-5xl text-4xl text-shadow1 leading-none">
            collaborate
          </h1>
          <div
            className="absolute top-0 left-1/2 lg:w-2/3 md:w-1/3 sm:w-1/2 w-2/3 2xl:w-1/2 -translate-x-1/2 text-white"
            style={{ color: COLORS[index] }}
          >
            <svg
              viewBox="0 0 598 134"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M349.259 28.0984C418.076 29.1475 595.669 46.9806 580.13 87.8761C555.304 153.212 0.732044 141.378 2.95196 72.1402C5.17187 2.90255 418.076 -19.1091 595.669 28.0984"
                stroke="currentColor"
                strokeWidth="4.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Rotating Text Box */}
        <div className="md:text-4xl 2xl:text-5xl text-2xl font-semibold font-satoshi text-white bg-[#1F2024] xl:p-6 2xl:py-14 lg:p-4 lg:py-8 p-6 shadow-[4px_7px_9px_0px_rgba(0,0,0,0.32)] rounded-tl-4xl rounded-br-4xl relative overflow-y-hidden">
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex justify-center items-center"
            style={{ color: COLORS[index] }}
          >
            {MESSAGES[index]}
          </motion.div>
        </div>

        {/* Description */}
        <div className="font-urbanist font-thin text-white text-sm 2xl:text-lg text-justify xl:space-y-5 space-y-2 lg:space-y-3">
          <p>
            <span
              className="uppercase text-lg 2xl:text-2xl tracking-wider font-semibold font-showcard"
              style={{ color: COLORS[index] }}
            >
              Nexachain.ai{" "}
            </span>
            offers a range of pre-built templates to help users get started
            quickly with project management. These templates are categorized
            based on industries to streamline workflows efficiently.
          </p>
          <p>
            For the Software/IT sector, Nexachain.ai provides templates for
            Software Development, Website Development, IT Support Projects, and
            Security Testing, allowing teams to manage projects, track tasks,
            and ensure secure software deployment. In the Construction industry,
            a dedicated Construction template helps standardize building
            processes for smoother execution.
          </p>
          <p>
            The Manufacturing category includes templates for Manufacturing and
            Manufacturing New Product, ensuring efficient product development
            from concept to market. For Marketing & Sales, templates such as
            Digital Marketing, Product Launch, Sales Planning, Event Planning,
            SEO, and Request for Proposal assist businesses in planning
            marketing strategies, launching products, and improving sales
            processes.
          </p>
          <p>
            In the HR domain, the Employee Onboarding template helps
            organizations streamline the hiring and onboarding process.
            Additionally, Nexachain.ai offers various Other templates, including
            Risk Tracker for project risk management, Wedding Planner for
            organizing weddings, Travel for planning trips, Vehicle Inspection
            for ensuring vehicle safety, UX Research for conducting structured
            research, Accounting for tracking finances, Apartment Maintenance
            for managing home maintenance, and Retail Store for business
            planning and revenue tracking.
          </p>
          <p>
            These ready-to-use templates help businesses and individuals
            optimize project execution while saving time and effort. Let me know
            if you need any modifications! 🚀
          </p>
        </div>
      </div>

      {/* Rotating Image */}
      <motion.img
        src={heroimg1}
        className="absolute xl:-right-55 xl:top-0 lg:top-5 lg:-right-40 xl:w-2/3 lg:w-2/3 2xl:w-3/5 hidden lg:block cursor-pointer"
        alt=""
        animate={controls}
        style={{ transformOrigin: "center" }}
      />

      {/* Controls */}
      <div className="absolute bottom-10 right-10 lg:flex flex-col gap-4 z-20 hidden">
        <button
          onClick={() => manualRotate(-1)}
          className="text-white font-bold px-4 py-4 2xl:p-6 2xl:text-3xl cursor-pointer rounded-full shadow"
          style={{ backgroundColor: COLORS[index] }}
        >
          <LuMoveLeft />
        </button>
        <button
          onClick={() => manualRotate(1)}
          className="text-white font-bold px-4 py-4 2xl:p-6 2xl:text-3xl cursor-pointer rounded-full shadow"
          style={{ backgroundColor: COLORS[index] }}
        >
          <LuMoveRight />
        </button>
      </div>
    </div>
  );
};

export default Hero;
