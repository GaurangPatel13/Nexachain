import { useState } from "react";
import faqimg from "/assets/SmartContract/faqimg.png"
import { CiCircleChevDown, CiCircleChevRight } from "react-icons/ci";

const faqs = [
  "Can I get more information about a product?",
  "Are your products covered by a warranty?",
  "Can I track my order?",
  "What are your shipping options?",
  "How long does shipping take?",
  "What payment methods do you accept?",
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="sm:p-8 grid grid-cols-1 font-poppins md:grid-cols-2 gap-8 items-center">
      {/* Left Section: Title, Description, and Image */}
      <div>
        <h2 className="text-4xl font-semibold font-jakarta">Our Frequently Asked Questions</h2>
        <p className="text-[#424242] mt-2">
          Have a question? Find answers to common queries about our products and services.
        </p>
        <img
          src={faqimg} // Replace with actual image path
          alt="FAQ Illustration"
          className="rounded-lg mt-4"
        />
      </div>

      {/* Right Section: FAQ Accordion */}
      <div className="space-y-4">
        {faqs.map((question, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 rounded-lg shadow-md cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <span className="font-semibold">{question}</span>
              <span className="text-lg">
                {openIndex === index ? <CiCircleChevDown /> : <CiCircleChevRight />}
              </span>
            </div>
            {openIndex === index && (
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
