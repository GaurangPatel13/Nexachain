import React from 'react';
import SmallCard from './SmallCard';

const cardData = [
    {
      bgColor: 'bg-[#2980b9]', // Blue
      title: 'DeFi Development',
      description: 'Drive resiliency and facilitate trust with exceptional DeFi development',
      features: [
        'Advanced Trading Modules',
        'Impenetrable Security Mechanisms',
        'Latest Technology Integrations',
      ],
    },
    {
      bgColor: 'bg-[#f39c12]', // Orange
      title: 'DeFi Lottery',
      description: 'Decentralized lottery ecosystem reinforced with greater security and traceability',
      features: [
        '2X Cost Savings',
        '2X Faster Development',
        '2X Simpler Process',
      ],
    },
    {
      bgColor: 'bg-[#9b59b6]', // Purple
      title: 'DAO Blockchain',
      description: '100% transparent transactions, mandatory voting & hassle-free decisions standardized way',
      features: [
        'High Leverage',
        'Multi-layer Security',
        'Powerful Trading Engine',
      ],
    },
    {
      bgColor: 'bg-[#e74c3c]', // Red
      title: 'Olympus DAO Development',
      description: 'Unique economic and game-theoretic dynamics through staking & bonding',
      features: [
        'High Leverage',
        'Multi-layer Security',
        'Powerful Trading Engine',
      ],
    },
    {
      bgColor: 'bg-[#27ae60]', // Green
      title: 'DeFi Yield Farming',
      description: 'Deliver business-oriented DeFi yield farming features that accomplish business goals',
      features: [
        'Impenetrable Smart Contracts',
        'Multi-Crypto and Fiat Support',
        'Support Multiple Payment Gateways',
      ],
    },
    {
      bgColor: 'bg-[#2980b9]', // Blue again
      title: 'DeFi Staking',
      description: 'Staking software with market-leading features and institution-grade security',
      features: [
        'Automated Trading',
        'Arbitrage Trading',
        'Crypto Portfolio',
      ],
    },
    {
      bgColor: 'bg-[#2ecc71]', // Light Green
      title: 'DeFi Lending and Borrowing',
      description: 'Borrowing and lending platforms that fill the gap lacking in traditional banking',
      features: [
        'Multi-Layer Security',
        'Advanced Order Types',
        'Stop Loss/Take Profit',
      ],
    },
    {
      bgColor: 'bg-[#3498db]', // Light Blue
      title: 'Dapp Development Company',
      description: 'Business growth with unique, innovative, secure and emerging applications',
      features: [
        'Robust Admin Panel',
        'Device Compatibility',
        'Crypto Wallet',
      ],
    },
  ];
  
  
  

const DeFi = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl text-center text-[#34A853] font-semibold mb-6">DeFi</h1>
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

export default DeFi;
