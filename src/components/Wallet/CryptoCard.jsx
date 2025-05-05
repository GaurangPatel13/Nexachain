import React from 'react';
import { LuArrowUpRight } from 'react-icons/lu';

const CryptoCard = ({
  name,
  symbol,
  icon,
  price,
  change,
  changePositive = false
}) => {
  return (
    <div className="bg-[#1C1C1C] text-white rounded-xl cursor-pointer px-6 py-4 flex flex-col justify-between shadow-md hover:scale-[1.02] transition-all duration-300">
      {/* Top section */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={icon} alt={name} className="w-8 h-8 rounded-full" />
          <div>
            <h2 className="font-semibold">{name}</h2>
            <p className="text-sm text-gray-400">{symbol}</p>
          </div>
        </div>
        <LuArrowUpRight size={20} className="text-white" />
      </div>

      {/* Bottom section */}
      <div className="mt-6 flex justify-between items-center">
        <h3 className="text-xl font-bold">{price}</h3>
        <p className={`text-sm flex items-center gap-1 ${changePositive ? 'text-green-400' : 'text-red-500'}`}>
          <span className={`text-lg`}>{changePositive ? '+' : '-'}</span> {change}
        </p>
      </div>
    </div>
  );
};

export default CryptoCard;
