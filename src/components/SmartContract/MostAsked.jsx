import MaqCardList from "./MaqCard"
import maqbigimg1 from "/assets/SmartContract/maqbigimg1.png"
import maqbigimg2 from "/assets/SmartContract/maqbigimg2.png"
import maqbigimg3 from "/assets/SmartContract/maqbigimg3.png"
import maqimg1 from "/assets/SmartContract/maqimg1.png"
import maqimg2 from "/assets/SmartContract/maqimg2.png"
import maqimg3 from "/assets/SmartContract/maqimg3.png"
import maqimg4 from "/assets/SmartContract/maqimg4.png"
import maqimg5 from "/assets/SmartContract/maqimg5.png"
import maqimg6 from "/assets/SmartContract/maqimg6.png"

const MostAsked = () => {
    const faqs = [
      {
        question: "What are projects?",
        answer:
          "Project management involves guiding teams through various challenges to achieve goals while optimizing the process for optimal results.",
        image: maqbigimg1, // Replace with actual image path
      },
      {
        question: "Why do businesses need project management platforms?",
        answer:
          "Project management involves guiding teams through various challenges to achieve goals while optimizing the process for optimal results.",
        image: maqbigimg2,
      },
      {
        question: "How does project management platform work?",
        answer:
          "Project management involves guiding teams through various challenges to achieve goals while optimizing the process for optimal results.",
        image: maqbigimg3,
      },
    ];
  
    const awards = [
        maqimg1,
        maqimg2,
        maqimg3,
        maqimg4,
        maqimg5,
        maqimg6,
    ]; // Replace with actual image paths
  
    return (
      <div className="lg:p-8 text-center mb-10 mt-10">
        {/* Title */}
        <h2 className="text-4xl font-semibold font-jakarta">Most Asked Questions</h2>
  
        {/* Top Section: 3 FAQ Cards */}
        <div className="mt-6 flex justify-between 2xl:justify-center">
          <MaqCardList />
        </div>
  
        {/* Bottom Section: Awards */}
        <div className="mt-10 flex items-center justify-between p-7 bg-[#F3F3F3] rounded-xl">
                <div className="text-start">
                <h3 className="text-2xl font-semibold font-inter">Rated by the finest.</h3>
          <p className="text-black text-xs mt-1 font-inter">
            Leading project management solution among customers and critics.
          </p>
          </div>
  
          {/* Awards/Recognition Logos */}
          <div className="flex flex-wrap justify-center gap-6">
            {awards.map((award, index) => (
              <img
                key={index}
                src={award}
                alt="Award"
                className="w-16 h-auto"
              />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default MostAsked;
  