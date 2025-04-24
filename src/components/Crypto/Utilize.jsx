import React from "react";
import UtilizeCard from "./UtilizeCard";
import utilizeimg1 from "/assets/Crypto/utilize/utilizeimg1.png";
import utilizeimg2 from "/assets/Crypto/utilize/utilizeimg2.png";
import utilizeimg3 from "/assets/Crypto/utilize/utilizeimg3.png";
import utilizeimg4 from "/assets/Crypto/utilize/utilizeimg4.png";
import utilizeimg5 from "/assets/Crypto/utilize/utilizeimg5.png";
import supportimg6 from "/assets/Crypto/support/supportimg6.png";
import supportimg9 from "/assets/Crypto/support/supportimg9.png";

const Utilize = () => {
  const utilizeCards = [
    {
      bgColor: "#8300EB",
      accentColor: "#E6C36E",
      title: "Polygon zkEVM",
      description:
        "First zero-knowledge scaling solution compatible with Ethereum Virtual Machine for smart contracts.",
      icon: utilizeimg1,
    },
    {
      bgColor: "#A033FF",
      accentColor: "#8300EB",
      title: "zkSync Hyperchains",
      description:
        "Advanced blockchain architecture with parallel zkEVM instances achieving consensus on Ethereum's Layer 1.",
      icon: utilizeimg4,
    },
    {
      bgColor: "#E80053",
      accentColor: "#FF6666",
      title: "Avalanche Subnets",
      description:
        "Custom blockchains enabling infinite scalability with sovereign networks defining their own rules.",
      icon: supportimg6,
    },
    {
      bgColor: "#E80053",
      accentColor: "#FF6666",
      title: "Cosmos SDK",
      description:
        "Open-source toolkit for building multi-asset public PoS and permissioned PoA blockchains.",
      icon: utilizeimg2,
    },
    {
      bgColor: "#8300EB",
      accentColor: "#E6C36E",
      title: "Polkadot Parachains",
      description:
        "Permissionless platform for launching custom chains, supporting both Layer 2 and Layer 3.",
      icon: utilizeimg3,
    },
    {
      bgColor: "#A033FF",
      accentColor: "#8300EB",
      title: "zkSync Hyperchains",
      description:
        "Advanced blockchain architecture with parallel zkEVM instances achieving consensus on Ethereum's Layer 1.",
      icon: utilizeimg4,
    },
    {
      bgColor: "#8300EB",
      accentColor: "#E6C36E",
      title: "Polkadot Parachains",
      description:
        "Permissionless platform for launching custom chains, supporting both Layer 2 and Layer 3.",
      icon: utilizeimg5,
    },
    {
      bgColor: "#A033FF",
      accentColor: "#8300EB",
      title: "zkSync Hyperchains",
      description:
        "Advanced blockchain architecture with parallel zkEVM instances achieving consensus on Ethereum's Layer 1.",
      icon: supportimg9,
    },
  ];

  return (
    <div className="text-center md:px-20 px-4 space-y-8">
      <h1 className="text-[#2A2E33] text-4xl font-bold">
        Blockchain Frameworks We Utilize for{" "}
        <span className="text-[#FF3647]">L2/L3 development</span>
      </h1>
      <p className="text-[#626262] text-sm">
        Antier's team of experienced blockchain developers has a deep
        understanding of L2 and L3 blockchains and their underlying frameworks.
        Our expertise lies in leveraging the robust capabilities of these
        frameworks that enable businesses to seamlessly launch L2 and L3 chains,
        particularly on Ethereum. We specialize in implementing advanced rollup
        technologies to enhance scalability and ensure your blockchain
        infrastructure can handle increased transaction volumes without
        compromising performance.
      </p>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 text-start">
        {utilizeCards.map((card, index) => (
          <div key={index} className="flex justify-center items-center">
          <UtilizeCard
            bgColor={card.bgColor}
            accentColor={card.accentColor}
            title={card.title}
            description={card.description}
            icon={card.icon}
          />
        </div>
        ))}
      </div>
    </div>
  );
};

export default Utilize;
