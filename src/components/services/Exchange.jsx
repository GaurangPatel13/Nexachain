import React from 'react';
import SmallCard from './SmallCard';

const cardData = [
  {
    bgColor: 'bg-[#3498db]',
    title: 'Custom Exchange',
    description: 'Develop your competitive enterprise-level custom exchange from scratch',
    features: [
      'Advanced Trading Modules',
      'Impenetrable Security Mechanisms',
      'Latest Technology Integrations',
    ],
  },
  {
    bgColor: 'bg-[#f39c12]',
    title: 'White Label Crypto',
    description: 'Gear up your revenue stream using a ready-made white label exchange',
    features: [
      'Cost Savings',
      'Faster Development',
      'Simpler Process',
    ],
  },
  {
    bgColor: 'bg-[#8e44ad]',
    title: 'Margin Exchange',
    description: 'Secure and feature-rich margin trading exchange to disrupt the digital market',
    features: [
      'High Leverage',
      'Multi-layer Security',
      'Powerful Trading Engine',
    ],
  },
  {
    bgColor: 'bg-[#e74c3c]',
    title: 'Margin Exchange',
    description: 'Secure and feature-rich margin trading exchange to disrupt the digital market',
    features: [
      'High Leverage',
      'Multi-layer Security',
      'Powerful Trading Engine',
    ],
  },
  {
    bgColor: 'bg-[#27ae60]',
    title: 'Decentralized Exchange',
    description: 'Reduce your time-to-market with a customized DEX exchange script solution',
    features: [
      'Improbable Smart Contracts',
      'Multi-crypto and Fiat Support',
      'Support Multiple Payment Gateways',
    ],
  },
  {
    bgColor: 'bg-[#2980b9]',
    title: 'Arbitrage Bots',
    description: 'Elevate your trading strategies with the powerful arbitrage bots',
    features: [
      'Automated Trading',
      'Arbitrage Trading',
      'Crypto Portfolio',
    ],
  },
  {
    bgColor: 'bg-[#2ecc71]',
    title: 'Derivatives Exchange',
    description: 'Assured platform liquidity & returns for a huge pool of crypto investors',
    features: [
      'Multi-Layer Security',
      'Advanced Order Types',
      'Stop Loss/Take Profit',
    ],
  },
  {
    bgColor: 'bg-[#2980b9]',
    title: 'Centralized Exchange',
    description: 'Facilitate digital asset trading in a secure and convenient environment',
    features: [
      'Robust Admin Panel',
      'Device Compatibility',
      'Crypto Wallet',
    ],
  },
  {
    bgColor: 'bg-[#8e44ad]',
    title: 'P2P Exchange',
    description: 'Use a smart contract-based escrow system to boost reliable transactions',
    features: [
      'Verified User Profiles',
      'Multi-currency Support',
      'Third-party KYC',
    ],
  },
  {
    bgColor: 'bg-[#e74c3c]',
    title: 'Market Making Services',
    description: 'Intensify liquidity provisioning with perfect market making strategies',
    features: [
      'Automated Order-Book Liquidity Management/Trading',
      '24/7 Agile Cryptocurrency Market Making',
      'Real-time PR Releases and Launch Strategies',
    ],
  },
];

const Exchange = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl text-center text-[#FF3647] font-semibold mb-6">Exchange</h1>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {cardData.map((card, index) => (
            <div className='flex items-center justify-center'>
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
    </div>
  );
};

export default Exchange;
