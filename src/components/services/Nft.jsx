import React from 'react';
import SmallCard from './SmallCard';

const cardData = [
    {
      bgColor: 'bg-[#2980b9]', // Blue
      title: 'NFT Development',
      description: 'Build decentralized non-fungible tokens aligned with different business needs',
      features: [
        'Advanced Trading Modules',
        'Impenetrable Security Mechanisms',
        'Latest Technology Integrations',
      ],
    },
    {
      bgColor: 'bg-[#f39c12]', // Orange
      title: 'White Label Marketplace',
      description: 'Get a customized white label NFT marketplace with multi-platform support',
      features: [
        'Cost Savings',
        'Faster Development',
        'Simpler Process',
      ],
    },
    {
      bgColor: 'bg-[#9b59b6]', // Purple
      title: 'NFT Music',
      description: 'Customer-centric marketplace for selling, trading and auctioning music NFTs',
      features: [
        'High Leverage',
        'Multi-layer Security',
        'Powerful Trading Engine',
      ],
    },
    {
      bgColor: 'bg-[#e74c3c]', // Red
      title: 'NFT Marketplace',
      description: 'Top-performing marketplaces for users to mint, sell, buy, and trade NFTs',
      features: [
        'High Leverage',
        'Multi-layer Security',
        'Powerful Trading Engine',
      ],
    },
    {
      bgColor: 'bg-[#27ae60]', // Green
      title: 'NFT Loan',
      description: 'Facilitate your participation in revolutionized borrowing & lending models',
      features: [
        'Impenetrable Smart Contracts',
        'Multi-Crypto and Fiat Support',
        'Support Multiple Payment Gateways',
      ],
    },
    {
      bgColor: 'bg-[#2980b9]', // Blue again
      title: 'Semi Fungible Token',
      description: 'Easy token trade transfers that support both NFTs and fungible tokens',
      features: [
        'Automated Trading',
        'Arbitrage Trading',
        'Crypto Portfolio',
      ],
    },
    {
      bgColor: 'bg-[#2ecc71]', // Light Green
      title: 'NFT Generative Art',
      description: 'Future-ready NFT generative art marketplace that supports pictures, videos and GIFs',
      features: [
        'Multi-Layer Security',
        'Advanced Order Types',
        'Stop Loss/Take Profit',
      ],
    },
    {
      bgColor: 'bg-[#8e44ad]', // Dark Purple
      title: 'NFT Art',
      description: 'Tokenize digital and physical assets into a one-of-a-kind, untransferable NFT',
      features: [
        'Robust Admin Panel',
        'Device Compatibility',
        'Crypto Wallet',
      ],
    },
  ];
  

const Nft = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl text-center text-[#226DB4] font-semibold mb-6">NFT</h1>
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

export default Nft;
