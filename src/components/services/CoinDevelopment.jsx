import SmallCard from "./SmallCard";
import LongCard from "./LongCard";

const cardData = [
  {
    bgColor: "bg-[#3498db]", // Blue
    title: "Launchpad Development",
    description:
      "Build a launchpad to capitalize on the revenue generation opportunity",
    features: [
      "Advanced Trading Modules",
      "Impenetrable Security Mechanisms",
      "Latest Technology Integrations",
    ],
  },
  {
    bgColor: "bg-[#f39c12]", // Orange
    title: "ICO Development",
    description:
      "Maximize fundraising opportunities and drive innovation with ICO development",
    features: [
      "2X Cost Savings",
      "2X Faster Development",
      "2X Simpler Process",
    ],
  },
  {
    bgColor: "bg-[#9b59b6]", // Purple
    title: "Coin/Token Development",
    description:
      "Best services for crypto coin/token development to match your business goals",
    features: [
      "High Leverage",
      "Multi-layer Security",
      "Powerful Trading Engine",
    ],
  },
  {
    bgColor: "bg-[#e74c3c]", // Red
    title: "IDO Development",
    description:
      "Create a coherent roadmap to navigate your IDO development journey",
    features: [
      "High Leverage",
      "Multi-layer Security",
      "Powerful Trading Engine",
    ],
  },
];

const longCard = [
  {
    bgColor: "bg-[#e74c3c]", // Red
    title: "Stablecoin Development",
    description:
      "Deploy gold-backed stablecoins to navigate your coin development journey",
    features: [
      "Web3 Smart Contract Development",
      "Decentralized Autonomous Organization (DAO)",
      "Decentralization & Augmented Security and Privacy",
    ],
  },
  {
    bgColor: "bg-[#e74c3c]", // Red
    title: "Meme Coin Development",
    description:
      "Craft your own meme coin today and ride the wave with the trend",
    features: [
      "Web3 Smart Contract Development",
      "Decentralized Autonomous Organization (DAO)",
      "Decentralization & Augmented Security and Privacy",
    ],
  },
];

const CoinDevelopment = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl text-center text-[#FF2000] font-semibold mb-6">
        Coin Development
      </h1>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {cardData.map((card, index) => (
          <div className="flex items-center justify-center">
            <SmallCard
              key={index}
              bgColor={card.bgColor}
              title={card.title}
              description={card.description}
              features={card.features}
            />
          </div>
        ))}
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-7">
        {longCard.map((card, index) => (
          <div className="flex items-center justify-center">
            <LongCard
              key={index}
              bgColor={card.bgColor}
              title={card.title}
              description={card.description}
              features={card.features}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoinDevelopment;