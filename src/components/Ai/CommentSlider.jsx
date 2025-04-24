import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const comments = [
  { id: 1, text: "Neural networks are inspired by the human brain.", heading: "Neurons and Layers" },
  { id: 2, text: "Deep learning models improve with more data.", heading: "Activation Function" },
  { id: 3, text: "AI systems rely on large datasets for training.", heading: "Feedforward Process" },
  { id: 4, text: "Neurons process information and pass it forward.", heading: "Neurons and Layers" },
  { id: 5, text: "Backpropagation helps optimize neural networks.", heading: "Activation Function" },
  { id: 6, text: "Activation functions introduce non-linearity.", heading: "Feedforward Process" },
];

const CommentSlider = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerSlide = window.innerWidth < 768 ? 1 : 3;

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % comments.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + comments.length) % comments.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden py-8">
      {/* Navigation Buttons */}
      <div className="absolute top-0 right-0 flex gap-2 p-2 rounded-full border border-black">
        <button onClick={prevSlide} className="">
          <FiChevronLeft size={20} />
        </button>
        <button onClick={nextSlide} className="">
          <FiChevronRight size={20} />
        </button>
      </div>

      {/* Comments Slider */}
      <div className="flex transition-transform duration-500 mt-10" style={{ transform: `translateX(-${startIndex * (100 / itemsPerSlide)}%)` }}>
        {comments.concat(comments).map((comment, index) => (
          <div
            key={index}
            className="min-w-[calc(100%/3)] p-4"
            >
            <h3 className="text-lg font-semibold">{comment.heading}</h3>
            <p className="text-gray-700">{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSlider;
