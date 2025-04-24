import React from "react";
import industriesimg1 from '/assets/Crypto/industries/industriesimg1.png'
import industriesimg2 from '/assets/Crypto/industries/industriesimg2.png'
import industriesimg3 from '/assets/Crypto/industries/industriesimg3.png'
import industriesimg4 from '/assets/Crypto/industries/industriesimg4.png'
import industriesimg5 from '/assets/Crypto/industries/industriesimg5.png'
import industriesimg6 from '/assets/Crypto/industries/industriesimg6.png'
import industriesimg7 from '/assets/Crypto/industries/industriesimg7.png'
import industriesimg8 from '/assets/Crypto/industries/industriesimg8.png'
import industriesimg9 from '/assets/Crypto/industries/industriesimg9.png'
import industriesimg10 from '/assets/Crypto/industries/industriesimg10.png'

const industries = [
  { name: "Healthcare", icon: industriesimg1 },
  { name: "Real Estate", icon: industriesimg2 },
  { name: "BFSI", icon: industriesimg3 },
  { name: "Agriculture", icon: industriesimg4  },
  { name: "Logistics", icon: industriesimg5  },
  { name: "Retail", icon: industriesimg6  },
  { name: "Entertainment", icon: industriesimg7  },
  { name: "Travel And Tourism", icon: industriesimg8  },
  { name: "Education", icon: industriesimg9  },
  { name: "Energy", icon: industriesimg10  },
];

const Indus = () => {
  return (
    <div className="py-16 bg-white w-full text-center font-opensans">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
        Industries We Serve
      </h2>
      <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-sm">
        Antler’s commitment to excellence ensures robust, future-ready solutions that meet industry-specific demands.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 px-4 sm:px-8 md:px-16">
        {industries.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center text-sm text-gray-700">
            <img src={item.icon} alt={item.name} className="w-12 h-12 mb-3 object-contain" />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Indus;