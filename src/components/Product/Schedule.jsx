import scheduleimg from "/assets/Product/schedule/img1.jpg";

const Schedule = () => {
    return (
      <div className="relative w-full h-64 bg-cover bg-center mt-10" 
      style={{ backgroundImage: `url(${scheduleimg})` }}
> 
        {/* Background Image (Replace with actual path) */}
  
        <div className="flex items-center md:w-full h-full lg:px-24 justify-center lg:justify-start">
          <div className="bg-white p-6 md:p-6 w-72  rounded-lg shadow-lg max-w-xl sm:w-lg">
            <p className="text-[#2A2E33] text-lg font-semibold text-center">
              Discuss Your Project Requirements With A Leading Blockchain Development Company
            </p>
            <div className="mt-4 flex ">
              <button className="bg-[#E31587] text-[#F0F6FC] text-sm px-4 py-2 shadow-md">
                Schedule A Free Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Schedule;
  