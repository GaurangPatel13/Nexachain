import MaqCardList from "./MaqCard";
import maqimg1 from "/assets/About/mostasked/maqimg1.png";
import maqimg2 from "/assets/About/mostasked/maqimg2.png";
import maqimg3 from "/assets/About/mostasked/maqimg3.png";
import maqimg4 from "/assets/About/mostasked/maqimg4.png";
import maqimg5 from "/assets/About/mostasked/maqimg5.png";
import maqimg6 from "/assets/About/mostasked/maqimg6.png";

const MostAsked = () => {
  const awards = [maqimg1, maqimg2, maqimg3, maqimg4, maqimg5, maqimg6]; // Replace with actual image paths

  return (
    <div className="w-full mx-auto lg:p-8 text-center mb-10 mt-10">
      {/* Title */}
      <h2 className="text-4xl font-semibold font-jakarta">
        Most Asked Questions
      </h2>

      {/* Top Section: 3 FAQ Cards */}
      <div className="mt-6 flex justify-center p-4 md:p-2">
        <MaqCardList />
      </div>

      {/* Bottom Section: Awards */}
      <div className="mt-10 flex items-center justify-between gap-5 md:gap-0 flex-col md:flex-row p-7 bg-[#F3F3F3] rounded-xl">
        <div className="text-start">
          <h3 className="text-2xl min-[1500px]:text-4xl font-semibold font-inter">
            Rated by the finest.
          </h3>
          <p className="text-black text-xs min-[1500px]:text-lg mt-1 font-inter">
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
              className="w-16 h-auto min-[1500px]:w-32"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MostAsked;
