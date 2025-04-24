import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import team1 from "/assets/Ai/team1.png";
import team2 from "/assets/Ai/team2.png";
import team3 from "/assets/Ai/team3.png";
import team4 from "/assets/Ai/team4.png";
import team5 from "/assets/Ai/team5.png";
import TeamCard from "./TeamCard";
import plus from "/assets/Ai/plus.png"

const TeamSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="container max-w-5xl mx-auto xl:mt-20 flex flex-col lg:flex-row lg:justify-around items-center gap-10 py-12 font-sora">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 text-center sm:text-left">
        <p className="text-purple-500 text-4xl mb-7">
          / <span className="text-black font-manrope">team</span> /
        </p>
        <div className="flex flex-col sm:flex-row justify-center sm:items-end gap-2">
          <div className="mb-2 sm:mb-0">
            <h2 className="sm:text-6xl text-4xl font-semibold leading-tight mt-2">
              The Neural Network experts: Uniting talent for intelligent
              solutions
            </h2>
            <p className="relative text-7xl font-bold mt-6 flex items-center justify-center sm:justify-start gap-5">
              <span className="text-[#226DB4]">250</span>
              <img className="w-24 mt-7" src={plus} alt="" />
            </p>
            <p className="text-gray-500 text-sm font-manrope">Awesome team members</p>
            <button className="mt-6 px-4 py-2 border cursor-pointer border-black rounded-full text-sm flex items-center gap-2 hover:bg-gray-200 transition font-manrope">
              ➝ More about
            </button>
          </div>
          <div className="sm:pb-13 flex flex-col items-center gap-6">
            <TeamCard
              image={team3}
              name="Rahul Sharma"
              role="/Manager/"
              title="Future"
              hoverText="Future"
              hoverColor="#FF980E"
            />

            <TeamCard
              image={team3}
              name="ABC"
              role="/ABC/"
              title="Future"
              hoverText="Future"
              hoverColor="#FF980E"
            />
          </div>
        </div>
      </div>

      {/* Right Section - Team Cards */}
      <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <div className="flex flex-col items-center gap-5">
          <TeamCard
            image={team1}
            name="Asif Ansari"
            role="/CEO Nexachain Ai/"
            title="AI Tech"
            hoverText="AI Tech"
            hoverColor="#d5313d"
          />
          <TeamCard
            image={team4}
            name="Tousif Ansari"
            role="/HR Nexachain.ai/"
            title="Digital"
            hoverText="Digital"
            hoverColor="#8741FF"
          />
        </div>
        <div className="flex flex-col items-center gap-5 sm:pt-20">
          <TeamCard
            image={team2}
            name="Sateesh Singh"
            role="/AI Programmer Nexachain.ai/"
            title="Solution"
            hoverText="Solution"
            hoverColor="#226DB4"
          />
          <TeamCard
            image={team5}
            name="Rajat Pradhan"
            role="/Full Stack Designer Nexachain.ai/"
            title="Learning"
            hoverText="Learning"
            hoverColor="#d5313d"
          />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
