import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const planetsConfig = [
  { orbit: 2, size: 8, color: "#f87171", duration: 12 }, 
  { orbit: 3, size: 10, color: "#60a5fa", duration: 16 }, 
  { orbit: 7, size: 6, color: "#34d399", duration: 22 }, 
  { orbit: 9, size: 12, color: "#facc15", duration: 28, filter: "backdrop-filter: blur(2.6666667461395264px)" }, // yellow
  { orbit: 10, size: 15, color: "#61A0FF", duration: 32, filter: "backdrop-filter: blur(2.6666667461395264px)" }, // purple
  { orbit: 11, size: 7, color: "#FF7051", duration: 36 }, 
  { orbit: 12, size: 20, color: "#61A0FF", duration: 40, filter: "backdrop-filter: blur(2.6666667461395264px)" }, // pink
];

const OrbitSystem = () => {
  const containerRef = useRef(null);
  const planetRefs = useRef([]);

  useEffect(() => {
    planetRefs.current.forEach((el, index) => {
      const isClockwise = index % 2 === 0;
      const rotation = isClockwise ? 360 : -360;

      gsap.to(el, {
        rotation,
        transformOrigin: "50% 50%",
        repeat: -1,
        ease: "linear",
        duration: planetsConfig[index].duration,
      });
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 flex items-center justify-center overflow-hidden"
    >
      <div className="relative w-[100vmin] h-[100vmin]">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 flex items-center justify-center border border-[#D1CDDE] rounded-full"
            style={{
              width: `${(i + 1) * 6.5}%`,
              height: `${(i + 1) * 6.5}%`,
              left: `${(100 - (i + 1) * 6.5) / 2}%`,
              top: `${(100 - (i + 1) * 6.5) / 2}%`,
            }}
          ></div>
        ))}

        {planetsConfig.map((planet, index) => {
          const orbitPercent = planet.orbit * 6.5;
          const offset = (100 - orbitPercent) / 2;

          return (
            <div
              key={index}
              ref={(el) => (planetRefs.current[index] = el)}
              className="absolute"
              style={{
                width: `${orbitPercent}%`,
                height: `${orbitPercent}%`,
                left: `${offset}%`,
                top: `${offset}%`,
              }}
            >
              <div
                className="absolute rounded-full"
                style={{
                  width: `${planet.size}px`,
                  height: `${planet.size}px`,
                  backgroundColor: planet.color,
                  backdropFilter: planet.filter,
                  top: "0",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrbitSystem;
