import { IoPlayCircleOutline } from "react-icons/io5";
import changingimg1 from "/assets/Home/changing/changingimg1.png";
import changingimg2 from "/assets/Home/changing/changingimg2.png";
import changingimg3 from "/assets/Home/changing/changingimg3.png";
import changingimg4 from "/assets/Home/changing/changingimg4.png";

const Changing = () => {
  return (
    <section className="bg-[#f8f8f8] px-6 py-16 pb-40 rounded-3xl max-[1540px]:max-w-7xl mx-auto sm:px-40 2xl:mx-40">
      <div>
        {/* Left Text Section */}
        <div className="flex flex-col sm:flex-row items-start gap-5 mb-10">
          <div>
            <h2 className="text-4xl md:text-7xl lg:text-6xl 2xl:text-7xl font-semibold mb-4 leading-tight">
              Adapting and Thriving <br /> in a Changing World
            </h2>
            <p className="text-gray-600 mb-6 max-w-md">
              Our comprehensive guide to strategies for entrepreneurs and leaders offers valuable insights, practical advice.
            </p>

            <div className="flex gap-4 mb-10">
              <button className="px-5 py-2 bg-black text-white rounded-full font-medium hover:bg-gray-900 transition">
                Get Started
              </button>
              <button className="px-5 py-2 border border-black rounded-full font-medium hover:bg-black hover:text-white transition">
                Learn More →
              </button>
            </div>
          </div>

          <div className="flex sm:flex-col flex-row justify-between w-full sm:w-1/4">
            <div>
              <h2 className="text-6xl font-semibold sm:mt-10">500+</h2>
              <div className="flex -space-x-3 sm:mt-10">
                <img
                  src={changingimg1}
                  className="w-8 h-8 rounded-full border-2 border-white"
                  alt="Team member 1"
                  loading="lazy"
                />
                <img
                  src={changingimg2}
                  className="w-8 h-8 rounded-full border-2 border-white"
                  alt="Team member 2"
                  loading="lazy"
                />
                <img
                  src={changingimg3}
                  className="w-8 h-8 rounded-full border-2 border-white"
                  alt="Team member 3"
                  loading="lazy"
                />
              </div>
              <p className="text-sm text-gray-500">Connect With Our Best Team</p>
            </div>
            <button className="sm:mt-14 mt-5 z-10 top-4 left-4 md:left-8 w-20 h-20 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition text-4xl">
              <IoPlayCircleOutline />
            </button>
          </div>
        </div>

        {/* Right Video Section */}
        <div className="relative">
          <img
            src={changingimg4}
            alt="Abstract visual"
            className="rounded-3xl shadow-xl w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Changing;
