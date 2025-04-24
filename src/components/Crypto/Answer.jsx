import React, { useState } from "react";
import answerimg1 from '/assets/Crypto/answer/answerimg1.png';
import sliderimg3 from '/assets/Crypto/slider/sliderimg3.png';

const Answer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Bitcoin?",
      answer: "Bitcoin is a decentralized digital currency that can be transferred on the peer-to-peer bitcoin network without the need for intermediaries.",
    },
    {
      question: "Can I start Without KYC with just $1?",
      answer: "Yes! Nexachain lets you get started with as little as $1 and minimal verification depending on local regulations.",
    },
    {
      question: "Is Nexachain.ai safe ?",
      answer: "Yes, Nexachain uses industry-standard encryption and security practices to keep your data and assets secure.",
    },
    {
      question: "Is there an exchange limit between fiat and crypto?",
      answer: "Yes, exchange limits vary based on user verification level and country-specific regulations.",
    },
  ];

  return (
    <div className="px-4 py-10 lg:pb-24 relative">
      <div className="bg-[#02050A] px-6 md:px-20 py-12 rounded-t-3xl flex flex-col lg:flex-row justify-center md:items-center gap-10 items-start relative overflow-hidden">
        {/* Left Info Panel */}
        <div className="bg-[#09131D] text-white p-6 rounded-xl w-full lg:w-1/3 space-y-4">
          <h3 className="text-sm uppercase text-gray-400">FAQ</h3>
          <h2 className="text-2xl font-bold">
            Your questions <span className="text-[#34A853]">answered.</span>
          </h2>
          <p className="text-sm text-gray-300">
            Let’s do our best to answer your most frequently asked questions.
          </p>

          <div className="bg-[#0F1E2E] p-4 rounded-lg flex items-center gap-4">
            <div className="p-4 border border-white rounded-2xl">
              <div className="w-7 h-7 bg-[#34A853] rounded-full"></div>
            </div>
            <p className="text-sm">
              Can’t find the answer you’re looking for? Please chat with our friendly team.
            </p>
          </div>

          <div className="w-full flex justify-center">
            <button className="bg-[#34A853] text-black px-4 py-2 rounded-md font-semibold hover:bg-green-500 transition">
              Get in Touch
            </button>
          </div>
        </div>

        {/* Right FAQ Panel */}
        <div className="bg-[#09131D40] backdrop-blur-[5px] p-6 rounded-3xl w-full lg:w-2/3 relative z-50 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-[#1E2329] p-4 rounded-lg cursor-pointer transition duration-300 ${
                openIndex === index ? "bg-[#0F1E2E]" : "hover:bg-[#0F1E2E40]"
              }`}
              onClick={() => toggle(index)}
              aria-expanded={openIndex === index}
              role="button"
            >
              <div className="flex justify-between items-center gap-4">
                <h3
                  className={`text-base font-medium ${
                    faq.question.includes("Nexachain")
                      ? "text-pink-500"
                      : "text-white"
                  }`}
                >
                  {faq.question}
                </h3>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    openIndex === index ? "bg-[#34A853]" : "bg-[#0F1E2E]"
                  }`}
                ></div>
              </div>
              {openIndex === index && (
                <p className="text-sm text-gray-300 mt-2 transition-opacity duration-300">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Decorative Graphics */}
      </div>
        <img src={sliderimg3} className="absolute bottom-5 left-0 rotate-180 w-40 z-10" alt="Decorative Slide Graphic" />
        <img src={answerimg1} className="absolute bottom-0 right-0 w-40 md:w-1/4 z-10" alt="Decorative FAQ Graphic" />
    </div>
  );
};

export default Answer;
