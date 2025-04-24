import React from "react";

const MovingText = () => {
  return (
    <div className="relative w-full flex flex-col text-inter py-10 bg-black overflow-hidden">
      {/* Text with Scrolling Background */}
      <h1
        className="text-4xl lg:text-[5.5rem] md:text-5xl 2xl:text-[10rem] xl:text-[8rem] tracking-wider font-bold text-transparent bg-clip-text z-10 text-center animate-scroll-bg bg-[url('/assets/Home/homehero/textimg1.jpeg')] bg-repeat-y bg-cover"
        style={{
          WebkitBackgroundClip: "text",
          backgroundPosition: "0 0",
        }}
      >
        DECENTRALISED METAVERSE
      </h1>

      {/* Static Text with Fixed Image */}
      <h1
        className="text-8xl md:text-[10rem] xl:text-[20rem] lg:text-[15rem] 2xl:text-[23rem] tracking-wider font-bold text-transparent bg-clip-text z-10 text-center bg-[url('/assets/Home/homehero/textimg2.jpeg')] bg-cover bg-center"
        style={{
          WebkitBackgroundClip: "text",
        }}
      >
        GAMIC
      </h1>
    </div>
  );
};

export default MovingText;
