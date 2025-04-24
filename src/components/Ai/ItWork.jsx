import React, { useState } from "react";
import CommentSlider from "./CommentSlider";

const slides = [
  {
    title: "Neurons and Layers",
    description:
      "A neural network consists of interconnected nodes called neurons. Neurons are organized into layers.",
  },
  {
    title: "Activation Function",
    description:
      "Each neuron applies an activation function to the weighted sum of its inputs and produces an output.",
  },
  {
    title: "Feedforward Process",
    description:
      "The inputs are multiplied by their respective weights, summed up, and passed through the activation function.",
  },
  {
    title: "Neurons and Layers",
    description:
      "A neural network consists of interconnected nodes called neurons. Neurons are organized into layers.",
  },
  {
    title: "Activation Function",
    description:
      "Each neuron applies an activation function to the weighted sum of its inputs and produces an output.",
  },
  {
    title: "Feedforward Process",
    description:
      "The inputs are multiplied by their respective weights, summed up, and passed through the activation function.",
  },
  {
    title: "Neurons and Layers",
    description:
      "A neural network consists of interconnected nodes called neurons. Neurons are organized into layers.",
  },
  {
    title: "Activation Function",
    description:
      "Each neuron applies an activation function to the weighted sum of its inputs and produces an output.",
  },
  {
    title: "Feedforward Process",
    description:
      "The inputs are multiplied by their respective weights, summed up, and passed through the activation function.",
  },
  {
    title: "Neurons and Layers",
    description:
      "A neural network consists of interconnected nodes called neurons. Neurons are organized into layers.",
  },
  {
    title: "Activation Function",
    description:
      "Each neuron applies an activation function to the weighted sum of its inputs and produces an output.",
  },
  {
    title: "Feedforward Process",
    description:
      "The inputs are multiplied by their respective weights, summed up, and passed through the activation function.",
  },
  {
    title: "Neurons and Layers",
    description:
      "A neural network consists of interconnected nodes called neurons. Neurons are organized into layers.",
  },
  {
    title: "Activation Function",
    description:
      "Each neuron applies an activation function to the weighted sum of its inputs and produces an output.",
  },
  {
    title: "Feedforward Process",
    description:
      "The inputs are multiplied by their respective weights, summed up, and passed through the activation function.",
  },
];

const ItWork = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="container flex font-manrope flex-col mx-auto items-center xl:py-12 smpy-6 px-6">
      {/* Left Section */}
      <div className="w-full lg:w-2/3">
        <p className="text-gray-500 mt-2">it works</p>
      </div>

      {/* Middle Section */}
      <div className="w-full lg:w-2/3">
        <h2 className="text-4xl relative lg:text-5xl font-semibold leading-tight">
          <h3 className="absolute -left-29 top-15 text-5xl flex items-center gap-2">
            <span className="rotate-[-90deg] inline-block text-[var(--color-orange)]">
              / <span className="text-black">how</span> /
            </span>
          </h3>
          <span className="text-red-500 font-bold font-sora">Neural networks</span> are a
          fundamental component of{" "}
          <span className="text-red-500 font-bold font-sora">
            Artificial Intelligence (AI) systems
          </span>
        </h2>
      </div>

      {/* Right Section (Slider) */}
      <CommentSlider />
    </section>
  );
};

export default ItWork;
