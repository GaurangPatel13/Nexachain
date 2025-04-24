import React from 'react';

const stats = [
  { value: '200+', label: 'Countries Covered' },
  { value: '30 Million', label: 'Global Investors' },
  { value: '700+', label: 'Coins' },
  { value: '$1.36 Billion', label: '24h Trading Volume' },
];

const StatsSection = () => {
  return (
    <section className="w-full px-4 py-10 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-0 md:gap-x-8 text-center">
        {stats.map((item, index) => (
          <div key={index} className="flex flex-col space-y-2">
            <h3 className="text-xl md:text-2xl font-bold text-black">{item.value}</h3>
            <p className="text-sm md:text-base text-blue-600">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
