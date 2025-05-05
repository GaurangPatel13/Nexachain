import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const PrimaryCard = ({
  title,
  description,
  icon,
  linkLabel = 'Learn more',
  linkHref = '#'
}) => {
  return (
    <div className="bg-[#1A1B23] font-inter rounded-xl text-white px-6 py-8 w-full max-w-xs 2xl:max-w-md shadow-md hover:shadow-xl transition-all duration-300">

      <div className="flex justify-center mb-4">
        <div className="p-3 rounded-full">
          <img src={icon} alt={title} className="w-16 2xl:w-22" />
        </div>
      </div>
      <h3 className="text-3xl 2xl:text-4xl font-semibold text-center mb-2 2xl:mb-6">{title}</h3>
      <p className="text-sm text-center 2xl:text-lg text-[#971EFF] mb-6">{description}</p>
      <div className="text-center text-[#B982FF]">
        <Link
          to={linkHref}
          className="text-sm 2xl:text-lg font-medium inline-flex items-center gap-1 hover:underline"
        >
          {linkLabel} <FaArrowRightLong size={14} />
        </Link>
      </div>
    </div>
  );
};

export default PrimaryCard;
