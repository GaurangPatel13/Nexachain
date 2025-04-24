import React from "react";
import contractdev1 from "/assets/SmartContract/contractdev1.png";
import contractdev2 from "/assets/SmartContract/contractdev2.png";
import contractdev3 from "/assets/SmartContract/contractdev3.png";
import contractdev4 from "/assets/SmartContract/contractdev4.png";

const services = [
  {
    title: "Smart Contract Architecture",
    description:
      "Our smart contract application development team follows resilient smart contract architecture practices to ensure the quality of the code.",
    image: contractdev1,
    borderColor: "border-[var(--color-orange)]",
    shadowColor: "bg-[var(--color-orange)]",
  },
  {
    title: "Smart Contract Development",
    description:
      "We develop state-of-the-art self-executing custom smart contracts brimmed with a multitude of features for an array of industries.",
    image: contractdev2,
    borderColor: "border-[var(--color-pink)]",
    shadowColor: "bg-[var(--color-pink)]",
  },
  {
    title: "Smart Contract Audit",
    description:
      "We provide meticulous smart contract audit services to help businesses rectify the smart contract code and perform security audits from the ground up.",
    image: contractdev3,
    borderColor: "border-[var(--color-blue)]",
    shadowColor: "bg-[var(--color-blue)]",
  },
  {
    title: "Smart Contract Optimization",
    description:
      "Our certified smart contract developers use optimization techniques to optimize smart contracts that lower gas fees and reduce computational requirements.",
    image: contractdev4,
    borderColor: "border-[var(--color-purple)]",
    shadowColor: "bg-[var(--color-purple)]",
  },
];

const ContractDevelopment = () => {
  return (
    <section className="max-w-6xl mx-auto py-12 text-center w-full">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-[#161922]">
        Our <span className="text-[#00AE6C]">Smart Contract Development</span>{" "}
        Services
      </h2>
      <p className="text-black mt-2">
        Being a leading smart contract development company, we help enterprises
        achieve business automation with advanced services.
      </p>

      {/* Services Grid */}
      <div className="mt-10 grid md:grid-cols-2 gap-8 xl:px-0 sm:px-10">
        {services.map((service, index) => (
          <div key={index} className="relative">
            {/* Bottom Shadow Layer */}
            <div
              className={`absolute ${index === 0 ? "top-4 -right-2" : ""} ${
                index === 3 ? "top-4 -left-2" : ""
              } ${index === 1 ? "top-4 -left-2" : ""} ${
                index === 2 ? "top-4 -right-2" : ""
              } sm:w-2/3 h-full ${service.shadowColor}`}
            ></div>
            <div
              className={`absolute ${index === 0 ? "top-2 -right-1 rounded-bl-lg lg::w-md" : ""} ${
                index === 3 ? "top-2 -left-1 rounded-br-lg lg::w-md" : ""
              } ${index === 1 ? "top-2 -left-1 rounded-br-lg lg::w-md" : ""} ${
                index === 2 ? "top-2 -right-1 rounded-bl-lg lg::w-md" : ""
              } w-2/3 h-full ${service.shadowColor} border-1 border-white`}
            ></div>

            {/* Main Card */}
            <div
              className={`relative flex flex-col items-start gap-4 border-2 ${service.borderColor} bg-white p-6 rounded-lg shadow-lg lg:h-54 h-72`}
            >
              <img src={service.image} className="w-10" alt="" />
              <div className="text-left">
                <h3 className="text-2xl text-[#161922] font-semibold">
                  {service.title}
                </h3>
                <p className="text-black mt-2 text-sm">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContractDevelopment;
