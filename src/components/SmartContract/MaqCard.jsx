import React from "react";
import { Link } from "react-router-dom";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const MaqCard = ({ image, title, text }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg max-w-md font-manrope mx-auto relative flex flex-col h-full">
      <div className="p-6 flex-grow">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-10">
          <h2 className=" text-left font-jakarta">{title}</h2>
          <Link
            to="/learn-more"
            className="border px-3 py-1 text-xs rounded-lg hover:bg-gray-100 transition"
          >
            Learn More →
          </Link>
        </div>

        {/* Profile Section */}
        <div className="mt-6 text-[0.5rem] flex items-center justify-end">
          <div>
            <p className="tracking-widest text-xs font-bold">Rajat Pradhan</p>
            <p className=" text-gray-500">Lead Solutions Designer</p>
          </div>
        </div>
              
        {/* Quote Box */}
        <div className="relative mt-4 border-l-4 border-gray-300 pl-4">
          <FaQuoteLeft className="text-blue-500 absolute -top-3 left-[-10px] text-xl" />
          <p className="text-gray-600 text-sm">{text}</p>
          <FaQuoteRight className="text-blue-500 absolute -bottom-3 right-0 text-xl" />
        </div>
      </div>

      {/* Image */}
      <div className="mt-6">
        <img
          src={image}
          alt="Profile"
          className="rounded-2xl w-full h-100 object-cover"
        />
      </div>
    </div>
  );
};

const MaqCardList = () => {
  const cards = [
    {
      title: "What are projects?",
      image: "assets/SmartContract/maqbigimg1.png",
      text: "Project management involves guiding teams through execution within deadlines. Online project management tools streamline this process for optimal results.",
    },
    {
      title: "Why do businesses need project management platforms?",
      image: "/assets/SmartContract/maqbigimg2.png",
      text: "Project management involves guiding teams through execution within deadlines. Online project management tools streamline this process for optimal results.",
    },
    {
      title: "How does project management platform work?",
      image: "/assets/SmartContract/maqbigimg3.png",
      text: "Project management involves guiding teams through execution within deadlines. Online project management tools streamline this process for optimal results.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {cards.map((card, index) => (
        <MaqCard
          key={index}
          title={card.title}
          image={card.image}
          text={card.text}
        />
      ))}
    </div>
  );
};

export default MaqCardList;
