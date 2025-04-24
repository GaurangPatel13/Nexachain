import processimg from "/assets/SmartContract/processimg.png";
import New from "./New";
import New2 from "./New2";
import VerticalColorBlock from "./VerticalColorBlock";

const SmartContractProcess = () => {
  return (
    <div className="relative w-full">
      <img
        src={processimg} // Replace with actual image path
        alt="3D Illustration"
        className="absolute sm:top-120 sm:right-0 transform sm:-translate-y-1/2 lg:block hidden top-140 w-xl z-5"
      />
      <div className="absolute z-100 top-0 -left-6 ">
        <VerticalColorBlock height="h-[5.5rem]" />
      </div>
      <div className="relative bg-[#1A1A1A] text-white sm:p-10 p-8 my-10 rounded-2xl max-w-7xl mx-auto overflow-hidden">
        {/* Background 3D Image */}

        {/* Content Section */}
        <div className="relative z-10">
          <div className="w-full flex items-center sm:justify-between sm:flex-row flex-col sm:text-start text-center gap-4 sm:gap-0">
            <div>
              <h2 className="text-3xl font-semibold">
                Our Smart Contract Development Process
              </h2>
              <p className="text-white text-sm mt-2">
                We devise a coherent roadmap to navigate your smart contract
                development journey.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4">
              <button className="px-4 py-2 bg-[var(--color-yellow)] text-white text-sm rounded-md shadow-md">
                CONNECT ON WHATSAPP
              </button>
              <button className="px-4 py-2 bg-[var(--color-pink)] text-white text-sm rounded-md shadow-md">
                CONNECT ON TELEGRAM
              </button>
            </div>
          </div>

          <div className="sm:block hidden">
            <New />
          </div>
          <div className="sm:hidden">
            <New2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartContractProcess;
