import React from 'react';
import SmallCard from './SmallCard';

const cardData = [
    {
      bgColor: 'bg-[#3498db]', // Blue
      title: 'Digital Banking',
      description: 'Digital bank with industry-leading features and state-of-the-art infrastructure',
      features: [
        'Security-Centric Approach',
        'Blockchain Presence',
        'Security-Centric Approach',
      ],
    },
    {
      bgColor: 'bg-[#f39c12]', // Orange
      title: 'White Label Banking',
      description: 'Speed up your bank launch with state-of-the-art white label solutions',
      features: [
        'Cross-border Transactions',
        'KYC/AML Compliance',
        'KYC/AML Compliance',
      ],
    },
    {
      bgColor: 'bg-[#9b59b6]', // Purple
      title: 'White Label Neo Bank',
      description: 'Future finance with comprehensive White Label Neo Bank development platforms',
      features: [
        'Rapid Launch and Time-to-Market',
        'Instant Payment Settlements',
        'Cloud-Agnostic Flexibility',
      ],
    },
    {
      bgColor: 'bg-[#e74c3c]', // Red
      title: 'Payment Gateway',
      description: 'Get customized Payment Gateway Solutions for secured transactions',
      features: [
        'Real-Time Transaction Confirmations',
        'DeFi Protocol Integration',
        'Auto-Settlement Alternative',
      ],
    },
    {
      bgColor: 'bg-[#8e44ad]', // Purple
      title: 'P2P Lending',
      description: 'Tap into the billion-dollar lending market with a P2P lending platform',
      features: [
        'Escrow System',
        'Auto-Renewal of Loans',
        'Admin Panel - e Bank in itself',
      ],
    },
  ];
  
  

const DigitalBanking = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl text-center text-[#FFA800] font-semibold mb-6">Digital Banking</h1>
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

export default DigitalBanking;
