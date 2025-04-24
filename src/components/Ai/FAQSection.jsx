import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import faqimg1 from "/assets/Ai/faqimg1.png";

const faqs = [
  {
    question: "What is Artificial Intelligence?",
    answer:
      "Machine Learning is a subset of AI that focuses on developing algorithms and models that allow computers to learn from data and improve their performance over time. It plays a crucial role in enabling AI systems to recognize patterns, make predictions, and adapt to new information.",
  },
  {
    question: "How does Machine Learning relate to Artificial Intelligence?",
    answer:
      "Machine Learning is a subset of AI that allows computers to learn from data without being explicitly programmed. It enables AI systems to improve performance over time through experience.",
  },
  {
    question: "Is Artificial Intelligence replacing human jobs?",
    answer:
      "AI is automating repetitive tasks, but it also creates new opportunities and jobs by enhancing productivity and efficiency.",
  },
  {
    question: "What are the different types of Artificial Intelligence?",
    answer:
      "AI is classified into Narrow AI (focused on specific tasks), General AI (human-like intelligence), and Super AI (hypothetical future intelligence surpassing humans).",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative container xl:ml-24 font-manrope flex flex-col items-start rounded-lg xl:pl-96 gap-8 py-12 px-6 max-w-[74.5rem] bg-[var(--color-gray-light)]">
      <img className="absolute top-2 -left-24 w-107 xl:block hidden" src={faqimg1} alt="" />
          {/* Header */}
      <p className="text-gray-500 italic">/ faq /</p>
      <h2 className="text-4xl font-bold leading-tight font-sora">
        Everything you need to know about
      </h2>

      {/* FAQ List */}
      <div className="w-full">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              className="w-full flex justify-between items-center py-4 text-left text-lg font-medium focus:outline-none font-sora"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {activeIndex === index ? (
                <FiChevronUp className="text-xl" />
              ) : (
                <FiChevronDown className="text-xl" />
              )}
            </button>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-600 text-sm pb-4"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Explore More Button */}
      <button className="mt-6 px-4 py-2 border border-black rounded-full text-sm flex items-center gap-2 hover:bg-gray-200 transition">
        ➝ Explore more
      </button>
    </section>
  );
};

export default FAQSection;
