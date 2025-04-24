import DeliveringCard from "./DeliveringCard";
import delcardimg1 from "/assets/Home/delivering/delcardimg1.png";
import delcardimg2 from "/assets/Home/delivering/delcardimg2.png";
import delcardimg3 from "/assets/Home/delivering/delcardimg3.png";
import delcardimg4 from "/assets/Home/delivering/delcardimg4.png";

const Delivering = () => {
  const data = [
    {
      title: "BLOCKCHAIN",
      description: "A new decentralized internet infrastructure powered by blockchain.",
      image: delcardimg1,
      bgColor: "rgba(255, 255, 255, 0.80)", // light with blur
      textColor: "text-black",
      btnColor: "#000000",
      btnTxt: "text-white",
      altText: "Blockchain concept image",
    },
    {
      title: "Artificial Intelligence",
      description: "Smarter systems with self-learning and automation through AI.",
      image: delcardimg2,
      bgColor: "rgba(0, 0, 0, 0.91)", // dark glass style
      textColor: "text-white",
      btnColor: "#fff",
      btnTxt: "text-black",
      altText: "AI concept image",
    },
    {
      title: "Metaverse",
      description: "An immersive 3D world to connect, socialize, and work virtually.",
      image: delcardimg3,
      bgColor: "rgba(255, 255, 255, 0.80)", // light glass
      textColor: "text-black",
      btnColor: "#000000",
      btnTxt: "text-white",
      altText: "Metaverse concept image",
    },
    {
      title: "Finance Solutions",
      description: "The digital revolution of financial services using Web3 tech.",
      image: delcardimg4,
      bgColor: "rgba(0, 0, 0, 0.91)", // dark glass
      textColor: "text-white",
      btnColor: "#fff",
      btnTxt: "text-black",
      altText: "Finance solutions concept image",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-12 bg-white">
      <h2 className="text-2xl md:text-4xl font-semibold text-center mb-12 font-jakarta">
        Delivering Web<span className="text-pink-600 font-bold">3</span> Strategic Objectives
      </h2>

      <div className="flex flex-wrap justify-between gap-y-8">
        {data.map((card, index) => (
          <DeliveringCard
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            bgColor={card.bgColor}
            textColor={card.textColor}
            btnColor={card.btnColor}
            btnTxt={card.btnTxt}
            altText={card.altText} // Passing alt text
          />
        ))}
      </div>
    </section>
  );
};

export default Delivering;
