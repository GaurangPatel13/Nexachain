import React from "react";
import trustedlogo1 from '/assets/Crypto/trusted/trustedlogo1.png'
import trustedlogo2 from '/assets/Crypto/trusted/trustedlogo2.png'
import trustedlogo3 from '/assets/Crypto/trusted/trustedlogo3.png'
import trustedlogo4 from '/assets/Crypto/trusted/trustedlogo4.png'
import trustedlogo5 from '/assets/Crypto/trusted/trustedlogo5.png'
import trustedlogo6 from '/assets/Crypto/trusted/trustedlogo6.png'
import trustedlogo7 from '/assets/Crypto/trusted/trustedlogo7.png'
import trustedlogo8 from '/assets/Crypto/trusted/trustedlogo8.png'
import trustedimg1 from '/assets/Crypto/trusted/trustedimg1.png'

const partners = [
    trustedlogo1,
    trustedlogo2,
    trustedlogo3,
    trustedlogo4,
    trustedlogo5,
    trustedlogo6,
    trustedlogo7,
    trustedlogo8,
    trustedlogo3,
    trustedlogo4,
    trustedlogo5,
    trustedlogo6,
    trustedlogo7,
    trustedlogo8,
    trustedlogo1,
    trustedlogo2,
    trustedlogo3,
    trustedlogo4,
    trustedlogo5,
    trustedlogo6,
    trustedlogo7,
    trustedlogo8,
    trustedlogo1,
    trustedlogo2
];

const Trusted = () => {
  return (
    <div className="relative md:pt-8 lg:pb-30 bg-white w-full overflow-hidden">
      {/* Background Rocket Image */}
      <img
        src={trustedimg1}
        alt="rocket background"
        className="absolute left-1/9 top-1/2 transform -translate-y-2/5 w-1/4 pointer-events-none z-0"
      />

      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-red-500 lg:mb-24 mb-10">Trusted by</h2>

        <div className="bg-[#02050AB2] backdrop-blur-[10px] rounded-3xl p-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center justify-center">
          {partners.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Partner ${index + 1}`}
              className="max-h-10 sm:h-5 lg:h-10 object-contain mx-auto"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trusted;
