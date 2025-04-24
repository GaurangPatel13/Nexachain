import React from 'react';
import LongCard from './LongCard';

const cardData = [
    {
      bgColor: 'bg-[#FF3647]',
      title: 'Web 3.0 Development Services',
      description: 'Developing highly interactive web 3.0 solutions by appropriately blending blockchain, AI, and IoT technologies',
      features: [
        'Web3 Smart Contract Development',
        'Decentralized Autonomous Organization (DAO)',
        'Decentralization & Augmented Security and Privacy',
      ],
    },
  ];
  
  
  

const DeFi = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl text-center text-[#3A8EE6] font-semibold mb-6">Web 3.0</h1>
      <div className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-6">
        {cardData.map((card, index) => (
            <div className='flex items-center justify-center'>
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

export default DeFi;
