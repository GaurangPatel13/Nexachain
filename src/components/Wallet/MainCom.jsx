import React from "react";
import MainCard from "./MainCard";
import ball from "/assets/Wallet/main/ball.png";
import star from "/assets/Wallet/main/star.png";

const cardData = [
  {
    text: "Manage all of your digital assets in a single, safe location.",
  },
  {
    text: "In charge of your private keys",
  },
  {
    text: "Anywhere in the world can send and receive cryptocurrency.",
  },
  {
    text: "Instead of using lengthy, hexadecimal ‘public key’ addresses, use usernames.",
  },
  {
    text: "Look through the available applications (decentralized finance apps)",
  },
  {
    text: "Shop at establishments that take cryptocurrencies",
  },
];

const MainCom = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center md:px-7 py-10">
      <div className="bg-[#0E0F1A] text-white md:py-12 py-4 md:px-6 px-4 rounded-xl font-grotesk">
        <div className="text-center mb-10">
          <h2 className="text-3xl 2xl:text-5xl font-bold font-grotesk">Main</h2>
          <p className="mt-2 text-gray-300 font-dmsans max-w-xl 2xl:max-w-3xl mx-auto 2xl:text-xl">
            Connect our AI to your exchange account and invest crypto
            automatically. Toka app work while you just live.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
          {cardData.map((item, index) => (
            <MainCard
              key={index}
              index={index + 1}
              image={ball}
              text={item.text}
            />
          ))}
        </div>
      </div>
      <p className="font-inter text-justify md:text-start 2xl:text-lg">
        Setting up a cryptocurrency wallet You can safely store your
        cryptocurrency in a crypto wallet. There are many cryptocurrency
        wallets, but hosted wallets, non-custodial wallets, and hardware wallets
        are the most widely used ones. Which one is best for you will depend on
        what you plan to do with your cryptocurrency and the level of security
        you require.
      </p>
    </div>
  );
};

export default MainCom;
