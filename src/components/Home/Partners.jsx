import partnerimg1 from "/assets/Home/partners/partnerimg1.png";
import partnerimg2 from "/assets/Home/partners/partnerimg2.png";
import partnerimg3 from "/assets/Home/partners/partnerimg3.png";
import partnerimg4 from "/assets/Home/partners/partnerimg4.png";
import partnerimg5 from "/assets/Home/partners/partnerimg5.png";
import partnerimg6 from "/assets/Home/partners/partnerimg6.png";
import partnerimg7 from "/assets/Home/partners/partnerimg7.png";
import partnerimg8 from "/assets/Home/partners/partnerimg8.png";

const Partners = () => {
  const logos = [
    { src: partnerimg1, name: "Partner 1" },
    { src: partnerimg2, name: "Partner 2" },
    { src: partnerimg3, name: "Partner 3" },
    { src: partnerimg4, name: "Partner 4" },
    { src: partnerimg5, name: "Partner 5" },
    { src: partnerimg6, name: "Partner 6" },
    { src: partnerimg7, name: "Partner 7" },
    { src: partnerimg8, name: "Partner 8" },
  ];

  return (
    <section className="py-14 px-4 md:px-12 lg:px-20 bg-white text-center font-jakarta">
      <h2 className="text-3xl md:text-4xl font-semibold mb-2">
        Trusted by{" "}
        <span className="text-black font-bold">thousands of Businesses</span>
      </h2>
      <p className="text-sm text-gray-500 mb-10">
        Over 15,000 companies and partners trust and choose Thisesco
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="sm:w-40 w-full h-28 border border-gray-200 shadow-sm rounded-lg flex items-center justify-center bg-white hover:shadow-md transition-all"
          >
            <img
              src={logo.src}
              alt={`${logo.name} logo`}
              className="w-28 object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
