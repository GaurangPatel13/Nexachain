import UseCaseCard from "./UseCaseCard";
import usecaseimg1 from "/assets/SmartContract/usecaseimg1.png";
import usecaseimg2 from "/assets/SmartContract/usecaseimg2.png";
import usecaseimg3 from "/assets/SmartContract/usecaseimg3.png";
import usecaseimg4 from "/assets/SmartContract/usecaseimg4.png";
import usecaseimg5 from "/assets/SmartContract/usecaseimg5.png";

const UseCases = () => {
  const useCases = [
    {
      title: "Real Estate",
      description:
        "We deliver robust smart contract development solutions in the real estate to help them streamline the agreements, reduce fraud risks, and enable transparency in the sales processes.",
      image: usecaseimg1, // Replace with actual image path
      bgColor: "bg-[var(--color-purple)]",
    },
    {
      title: "Transport & Logistics",
      description:
        "In the transport & logistics industry, smart contracts allow businesses to track products from a granular fashion. Automated execution aids in payments and real-time visibility across.",
      image: usecaseimg2,
      bgColor: "bg-[var(--color-green)]",
    },
    {
      title: "Healthcare",
      description:
        "The application of smart contracts in the healthcare sector helps businesses to automate data-sharing between hospitals, insurance carriers, and medical researchers.",
      image: usecaseimg3,
      bgColor: "bg-[var(--color-orange)]",
    },
    {
      title: "Insurance",
      description:
        "It takes a long time for any insurance claim to be processed and paid in the insurance industry. Smart contracts help automate this process by reducing fraud risks.",
      image: usecaseimg4,
      bgColor: "bg-[var(--color-blue)]",
    },
    {
      title: "Media & Entertainment",
      description:
        "Smart contracts improve the media and entertainment industry by providing smart content subscription payments that ensure the creator directly gets compensated.",
      image: usecaseimg5,
      bgColor: "bg-[var(--color-pink)]",
    },
  ];

  return (
    <div className="bg-[#012043] text-white p-8 rounded-lg max-w-7xl mx-auto">
      <h2 className="text-center text-3xl font-bold">Use Cases of Smart Contracts</h2>
      <p className="text-center text-sm mt-2 sm:px-24">
      The self-executing nature of smart contracts makes them a powerful tool for diverse applications across multiple industries. Antier Solutions, as a trusted
      smart contract development company, has served worldwide clientele from diverse industry verticals for the past few years.
      </p>
      <div className="mt-10 flex flex-wrap gap-6 justify-center">
        {useCases.map((item, index) => (
          <UseCaseCard key={index} {...item} />
        ))}
      </div>
      <div className="mt-6 flex justify-center gap-4">
        <button className="px-4 py-2 bg-[#FFA01D] text-white  shadow">
          CONNECT ON WHATSAPP
        </button>
        <button className="px-4 py-2 bg-[#FFA01D] text-white  shadow">
          CONNECT ON TELEGRAM
        </button>
      </div>
    </div>
  );
};

export default UseCases;
