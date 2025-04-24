import partnerimg1 from "/assets/SmartContract/partnerimg1.png"
import partnerimg2 from "/assets/SmartContract/partnerimg2.png"
import partnerimg3 from "/assets/SmartContract/partnerimg3.png"
import partnerimg4 from "/assets/SmartContract/partnerimg4.png"
import partnerimg5 from "/assets/SmartContract/partnerimg5.png"
import partnerimg6 from "/assets/SmartContract/partnerimg6.png"
import partnerimg7 from "/assets/SmartContract/partnerimg7.png"
import partnerimg8 from "/assets/SmartContract/partnerimg8.png"
import partnerimg9 from "/assets/SmartContract/partnerimg9.png"
import partnerimg10 from "/assets/SmartContract/partnerimg10.png"
import partnerimg11 from "/assets/SmartContract/partnerimg11.png"
import partnerimg12 from "/assets/SmartContract/partnerimg12.png"

const Partners = () => {

    const logos = [
      partnerimg1,
      partnerimg2,
      partnerimg3,
      partnerimg4,
      partnerimg5,
      partnerimg6,
      partnerimg7,
      partnerimg8,
      partnerimg9,
      partnerimg10,
      partnerimg11,
      partnerimg12
    ];
  
    return (
      <div className="bg-white py-8 text-center">
        <h2 className="text-2xl tracking-wider font-semibold mb-6">Our Partners</h2>
        
        {/* Grid Layout */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 md:px-0 px-5 items-center justify-center max-w-5xl mx-auto">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="Partner Logo"
              className="w-24 h-auto mx-auto"
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default Partners;
  