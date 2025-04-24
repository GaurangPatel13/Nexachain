import React from 'react';
import PriceCard from './PriceCard';
import plansimg1 from '/assets/Home/plans/plansimg1.png';
import plansimg2 from '/assets/Home/plans/plansimg2.png';
import plansimg3 from '/assets/Home/plans/plansimg3.png';

const Price = () => {
  const plans = [
    {
      title: "Starter",
      price: 19,
      description: "Get started with essential tools to create and maintain a professional website.",
      image: plansimg1,
    },
    {
      title: "Professional",
      price: 79,
      description: "Enhance your website with more advanced tools and customization options.",
      image: plansimg2,
    },
    {
      title: "Enterprise",
      price: 199,
      description: "Fully customize and scale your website to match your business needs.",
      image: plansimg3,
    },
  ];

  return (
    <section className="py-16 px-4 md:px-20 bg-gray-50 font-poppins">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">Choose Your Plan</h2>
        <p className="text-gray-500 mt-2 text-sm md:text-base">Flexible pricing to suit your needs</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <PriceCard key={index} {...plan} />
        ))}
      </div>
    </section>
  );
};

export default Price;
