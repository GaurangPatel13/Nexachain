import React from "react";
import serviceimg1 from "/assets/Crypto/service/serviceimg1.png";
import { motion } from "framer-motion";

const spring = {
  type: "spring",
  stiffness: 900,
  damping: 10,
};

const Service = () => {
  return (
    <div className="flex flex-col relative md:flex-row items-start justify-end bg-white p-6 gap-6">
      {/* Left Image Section */}
      <img
        src={serviceimg1}
        alt="Service Graphic"
        className="max-w-xs hidden lg:block md:max-w-sm absolute left-0 top-1/2 -translate-y-1/2"
      />

      {/* Right Scrollable Services Section */}
      <div className="bg-[#1F2024] text-white flex flex-col items-center gap-5 p-8 rounded-lg w-full lg:w-5/6 lg:pl-40 max-h-[600px] overflow-y-scroll no-scrollbar">
        <div className="relative md:text-8xl text-5xl font-semibold">
          <span className="text-black hidden md:block">Services</span>
          <motion.span
            initial={{ x: 12 }}
            whileHover={{ x: 4 }}
            transition={spring}
            className="text-[#FF980E] md:absolute top-0 left-0"
          >
            Services
          </motion.span>
        </div>

        <div className="flex gap-4 flex-col md:flex-row">
          <div className="space-y-6 text-sm leading-relaxed">
            <div>
              <h2 className="text-blue-400 font-semibold">
                Blockchain Consultation & Integration
              </h2>
              <p>
                From strategy development to implementation, our custom
                Blockchain software development experts will guide you through
                every stage of your blockchain application development journey.
                Aimers deep-dive into industry needs and provide risk-free and
                successful blockchain integration.
              </p>
            </div>

            <div>
              <h2 className="text-blue-400 font-semibold">
                Centralized/Decentralized Exchange Development
              </h2>
              <p>
                We create secure, scalable, and user-friendly trading platforms
                that facilitate seamless cryptocurrency transactions. With a
                host of DEX and CEX functionalities, our team offers customized
                exchange development solutions for both centralized and
                decentralized exchanges.
              </p>
            </div>

            <div>
              <h2 className="text-blue-400 font-semibold">
                Crypto Wallet Development
              </h2>
              <p>
                Aimers offers specialized crypto wallet development services
                designed to store and manage users' digital assets securely. We
                create multi-currency wallets with top-notch security protocols,
                easy UI/UX, transaction history, and comprehensive token
                support.
              </p>
            </div>

            <div>
              <h2 className="text-blue-400 font-semibold">
                Smart Contract Development & Audit
              </h2>
              <p>Description coming soon...</p>
            </div>
          </div>
          <div className="space-y-6 text-sm leading-relaxed">
            <div>
              <h2 className="text-blue-400 font-semibold">
                Layer 2 Development
              </h2>
              <p>
                We specialize in creating innovative Layer 2 solutions that
                address the pain points of base-layer blockchains. Our team
                ensures faster transactions, low gas fees, and high scalability
                through the integration of the latest emerging blockchain
                networks.
              </p>
            </div>

            <div>
              <h2 className="text-pink-400 font-semibold">
                NFT Marketplace Development
              </h2>
              <p>
                We focus on creating customizable NFT marketplaces with robust
                features like multi-chain support, smart contract automation,
                and secure user authentication. Prevent content duplication and
                ensure secure buying and selling of NFTs.
              </p>
            </div>

            <div>
              <h2 className="text-pink-400 font-semibold">
                Decentralized App (dApp) Development
              </h2>
              <p>
                Our custom Blockchain software development services include dApp
                development for diverse industries from ideation to deployment.
                We ensure highly secure, scalable, and efficient dApps tailored
                to each client’s unique operational needs.
              </p>
            </div>

            {/* Additional services below */}
            <div>
              <h2 className="text-blue-400 font-semibold">
                Blockchain Protocol Development
              </h2>
              <p>Description coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
