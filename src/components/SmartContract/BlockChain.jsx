import blockchainimg1 from "/assets/SmartContract/blockchainimg1.png"
import blockchainimg2 from "/assets/SmartContract/blockchainimg2.png"
import blockchainimg3 from "/assets/SmartContract/blockchainimg3.png"
import blockchainimg4 from "/assets/SmartContract/blockchainimg4.png"
import blockchainimg5 from "/assets/SmartContract/blockchainimg5.png"
import blockchainimg6 from "/assets/SmartContract/blockchainimg6.png"

const BlockChain = () => {
    const platforms = [
      {
        title: "Ethereum Smart Contract Development",
        description:
          "We create a harmonious trifecta of technical prowess, intelligent strategies and design-thinking-driven process to deliver Ethereum smart contract development solutions.",
        image: blockchainimg1, // Replace with actual image path
      },
      {
        title: "TRON Smart Contract Development",
        description:
          "We provide TRON smart contract development services to help our clients create efficient & scalable decentralized solutions.",
        image: blockchainimg2,
      },
      {
        title: "Hyperledger Smart Contract Development",
        description:
          "Our experienced developers work dedicatedly to provide enterprises with secure Hyperledger smart contract development services as per their requirements.",
        image: blockchainimg3,
      },
      {
        title: "Binance Smart Contract Development",
        description:
          "We deliver BSC smart contracts with a primary degree of precision and highly automated asset management for optimal use.",
        image: blockchainimg4,
      },
      {
        title: "EOS Smart Contract Development",
        description:
          "We create smart contracts on EOS to support new-age dApps development that can perform the intended function as per the users' requirements.",
        image: blockchainimg5,
      },
      {
        title: "Polkadot Smart Contract Development",
        description:
          "We design powerful smart contracts on Polkadot Blockchain by leveraging the interoperability capabilities of the platform.",
        image: blockchainimg6,
      },
    ];
  
    return (
      <div className="bg-white text-center md:p-8 max-w-6xl mx-auto">
        {/* Title & Subtitle */}
        <h2 className="text-2xl text-[#161922] font-semibold">
          Smart Contract Development on Various Blockchain Platforms
        </h2>
        <p className="text-black text-sm mt-6 max-w-3xl mx-auto">
          Whether it’s TRON or Hyperledger, our multidisciplinary team is capable of developing and deploying smart contracts on renowned Blockchain networks.
        </p>
  
        {/* Grid Layout for Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {platforms.map((item, index) => (
            <div key={index} className="flex flex-col gap-3">
              <img src={item.image} alt={item.title} className="w-12 h-12 object-contain" />
              <div className="text-left">
                <h3 className="font-semibold text-lg text-[#161922]">{item.title}</h3>
                <p className="text-[#00070F] text-sm mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
  
        {/* CTA Section */}
        <h3 className="text-lg font-semibold mt-10 text-[#001A34]">
          Develop smart contracts on your favourite Blockchain platform today
        </h3>
        <button className="mt-4 px-6 py-2 bg-[var(--color-blue)] text-white font-semibold text-sm rounded-lg shadow-md">
          CONTACT OUR EXPERTS
        </button>
      </div>
    );
  };
  
  export default BlockChain;
  