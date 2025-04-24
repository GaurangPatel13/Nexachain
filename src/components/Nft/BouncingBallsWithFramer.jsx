import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import sphere1 from '/assets/Nft/potential/sphere1.png';
import sphere2 from '/assets/Nft/potential/sphere.png';

const getDistance = (x1, y1, x2, y2) => {
  const dx = x1 - x2;
  const dy = y1 - y2;
  return Math.sqrt(dx * dx + dy * dy);
};

const BouncingBallsWithImages = ({ parentRef }) => {
  const baseRadius = 60;
  const radius1 = baseRadius * 1.3; // Orange sphere
  const radius2 = baseRadius * 2;   // Purple sphere
  const speedFactor = 0.6;

  const x1 = useMotionValue(50);
  const y1 = useMotionValue(60);
  const vx1 = useRef(2.2 * speedFactor);
  const vy1 = useRef(3.1 * speedFactor);

  const x2 = useMotionValue(300);
  const y2 = useMotionValue(200);
  const vx2 = useRef(-2.8 * speedFactor);
  const vy2 = useRef(2.4 * speedFactor);

  useEffect(() => {
    const animate = () => {
      const bounds = parentRef?.current?.getBoundingClientRect();
      if (!bounds) return;

      let nx1 = x1.get() + vx1.current;
      let ny1 = y1.get() + vy1.current;

      if (nx1 <= 0 || nx1 + radius1 >= bounds.width) vx1.current *= -1;
      if (ny1 <= 0 || ny1 + radius1 >= bounds.height) vy1.current *= -1;

      x1.set(nx1);
      y1.set(ny1);

      let nx2 = x2.get() + vx2.current;
      let ny2 = y2.get() + vy2.current;

      if (nx2 <= 0 || nx2 + radius2 >= bounds.width) vx2.current *= -1;
      if (ny2 <= 0 || ny2 + radius2 >= bounds.height) vy2.current *= -1;

      x2.set(nx2);
      y2.set(ny2);

      const d = getDistance(nx1 + radius1 / 2, ny1 + radius1 / 2, nx2 + radius2 / 2, ny2 + radius2 / 2);
      if (d < (radius1 + radius2) / 2) {
        // Swap velocities (simple elastic bounce)
        [vx1.current, vx2.current] = [vx2.current, vx1.current];
        [vy1.current, vy2.current] = [vy2.current, vy1.current];
      }

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [x1, y1, x2, y2, parentRef]);

  return (
    <>
      <motion.img
        src={sphere1}
        alt="Orange Sphere"
        style={{
          x: x1,
          y: y1,
          width: radius1,
          height: radius1,
          position: 'absolute',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      <motion.img
        src={sphere2}
        alt="Purple Sphere"
        style={{
          x: x2,
          y: y2,
          width: radius2,
          height: radius2,
          position: 'absolute',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
    </>
  );
};

export default BouncingBallsWithImages;
