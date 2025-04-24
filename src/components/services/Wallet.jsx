import React from 'react';
import SmallCard from './SmallCard';

const cardData = [
    {
      bgColor: 'bg-[#2980b9]', // Blue
      title: 'Digital Wallet',
      description: 'Robust & secure wallet solutions for storing & transferring digital assets',
      features: [
        'Advanced Trading Modules',
        'Impenetrable Security Mechanisms',
        'Latest Technology Integrations',
      ],
    },
    {
      bgColor: 'bg-[#f39c12]', // Orange
      title: 'White Label Wallet',
      description: 'Ready-to-deploy white label wallet with high-grade security features',
      features: [
        'Cost Savings',
        'Faster Development',
        'Simpler Process',
      ],
    },
    {
      bgColor: 'bg-[#9b59b6]', // Purple
      title: 'Super App Development',
      description: 'Unlock the power of an immersive crypto app integrated with enticing revenue prospects',
      features: [
        'High Leverage',
        'Multi-layer Security',
        'Powerful Trading Engine',
      ],
    },
    {
      bgColor: 'bg-[#e74c3c]', // Red
      title: 'Web3 Wallet',
      description: 'Access dApps in real-time with trust-less Web3 blockchain ecosystems',
      features: [
        'High Leverage',
        'Multi-layer Security',
        'Powerful Trading Engine',
      ],
    },
    {
      bgColor: 'bg-[#27ae60]', // Green
      title: 'Multicurrency Wallet',
      description: 'Deploy wallets that are intuitive, user-friendly, inclusive & scalable',
      features: [
        'Impenetrable Smart Contracts',
        'Multi-Crypto and Fiat Support',
        'Support Multiple Payment Gateways',
      ],
    },
    {
      bgColor: 'bg-[#2980b9]', // Blue again
      title: 'MPC Crypto Wallet',
      description: 'Streamlines digital asset access & safeguards private keys from vulnerabilities',
      features: [
        'Automated Trading',
        'Arbitrage Trading',
        'Crypto Portfolio',
      ],
    },
    {
      bgColor: 'bg-[#2ecc71]', // Light Green
      title: 'Defi Wallet',
      description: 'A wallet that is fortified from hacks & immune to cross-border regulations',
      features: [
        'Multi-Layer Security',
        'Advanced Order Types',
        'Stop Loss/Take Profit',
      ],
    },
    {
      bgColor: 'bg-[#3498db]', // Light Blue
      title: 'TRON Wallet',
      description: 'Tron wallet holds private keys & TRX coins securely within the wallet',
      features: [
        'Robust Admin Panel',
        'Device Compatibility',
        'Crypto Wallet',
      ],
    },
  ];
  
  

const Wallet = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl text-center text-[#FBBC04] font-semibold mb-6">Wallet</h1>
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

export default Wallet;
