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

const VerticalColorBlock = ({ height }) => {
  return (
    <div className="flex flex-col justify-center items-center space-y-2">
      {colors.map((color, index) => (
        <div
          key={index}
          className={`w-12 ${height} rounded-full`}
          style={{ backgroundColor: color }}
        ></div>
      ))}
    </div>
  );
};

export default VerticalColorBlock;
