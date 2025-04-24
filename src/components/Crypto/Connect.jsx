import connectimg from "/assets/Crypto/connect/connectimg.jpeg";

const Connect = () => {
    return (
      <div className="relative w-full h-64 bg-cover bg-center my-10" 
      style={{ backgroundImage: `url(${connectimg})` }}
> 
        {/* Background Image (Replace with actual path) */}
  
        <div className="flex items-center justify-center lg:justify-end h-full lg:px-24">
          <div className="bg-white p-6 md:p-6 rounded-lg shadow-lg max-w-xl w-72 sm:w-lg text-center sm:text-start">
            <p className="text-[#2A2E33] text-lg font-semibold">
            Develop a Blockchain application on your favorite platform
            today
            </p>
            <div className="mt-4 flex gap-5 ">
              <button className="bg-[#FC268A] cursor-pointer border-[#FC268A] hover:text-[#FC268A] border-1 hover:border-[#FC268A] hover:bg-white text-[#F0F6FC] text-sm px-4 py-2 shadow-md">
              Connect On Whatsapp
              </button>
              <button className="bg-white text-[#FC268A] hover:bg-[#FC268A] hover:text-white cursor-pointer border-1 border-[#FC268A] text-sm px-4 py-2 shadow-md">
              Connect On Telegram
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Connect;
  