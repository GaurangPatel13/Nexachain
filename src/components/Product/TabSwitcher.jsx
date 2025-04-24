import React, { useState } from 'react';

const tabs = ['Phase One', 'Phase Two', 'Phase Three', 'Final Phase'];

const TabSwitcher = ({ activeIndex, onTabChange }) => {
  const [internalIndex, setInternalIndex] = useState(activeIndex);

  const handleTabClick = (index) => {
    if (index === internalIndex) return;

    const direction = index > internalIndex ? 'right' : 'left';
    setInternalIndex(index);
    onTabChange(index, direction);
  };

  return (
    <div className="w-full flex justify-center gap-6 py-4 flex-wrap">
      {tabs.map((label, index) => {
        const isActive = index === activeIndex;

        return (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`transition-all duration-1000 px-6 py-2 rounded-full font-semibold
              ${isActive ? 'bg-red-500 text-white shadow-lg' : 'bg-transparent text-black hover:text-red-500'}
              border ${isActive ? 'border-red-500' : 'border-gray-300'}
            `}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default TabSwitcher;
