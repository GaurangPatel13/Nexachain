import React from 'react';

const PriceCard = ({ title, price, description, image }) => {
  return (
    <div className="bg-white rounded-3xl shadow-md overflow-hidden flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02]">
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
        <p className="text-3xl font-bold text-gray-800">
          ${price}
          <span className="text-sm font-medium text-gray-500 ml-1">/month</span>
        </p>
        <p className="text-sm text-gray-600">{description}</p>
        <button
          className="mt-4 border border-black text-black w-full py-2 rounded-full font-semibold hover:bg-black hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-black"
        >
          Get Started
        </button>
      </div>
      <img
        src={image}
        alt={`${title} plan illustration`}
        loading="lazy"
        className="w-full h-48 object-cover"
      />
    </div>
  );
};

export default PriceCard;
