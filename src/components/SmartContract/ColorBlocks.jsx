import React from "react";

const colors = [
  "var(--color-rose)", // Red
  "var(--color-orange)", // Orange
  "var(--color-green)", // Green
  "var(--color-blue)", // Blue
  "var(--color-purple)", // Purple
  "var(--color-maroon)", // Dark Red
  "var(--color-cyan)", // Cyan
  "var(--color-yellow)", // Yellow
];

const ColorBlocks = ({width}) => {
  return (
    <div className="flex justify-center items-center">
      {colors.map((color, index) => (
        <div
          key={index}
          className={`${width} h-12 mx-1 rounded-full`}
          style={{ backgroundColor: color }}
        ></div>
      ))}
    </div>
  );
};

export default ColorBlocks;
