import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export function BackgroundCircles() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { x, y } = mousePosition;

  useEffect(() => {
    const onMouseMove = (e: { clientX: number; clientY: number }) => {
      const { innerWidth, innerHeight } = window;

      const x = e.clientX - innerWidth / 2;
      const y = e.clientY - innerHeight / 2;

      setMousePosition({ x, y });
    };

    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, [mousePosition]);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 3, 1],
        opacity: [0.2, 0.4, 1],
        borderRadius: ["20%", "150%", "20%"],
      }}
      transition={{
        duration: 2,
      }}
      className="relative flex justify-center items-center w-screen"
    >
      <div
        className="absolute border border-[#303030] rounded-full h-[200px] w-[200px] mt-52 animate-pulse"
        style={{
          transform: `translate(${0.05 * x}%, ${0.05 * y}%)`,
        }}
      />
      <div
        className="absolute border border-[#303030] rounded-full h-[300px] w-[300px] mt-52"
        style={{
          transform: `translate(${0.04 * x}%, ${0.04 * y}%)`,
        }}
      />
      <div
        className="absolute border border-[#272727] rounded-full h-[500px] w-[500px] mt-52"
        style={{
          transform: `translate(${0.035 * x}%, ${0.035 * y}%)`,
        }}
      />
      <div
        className="absolute border border-[#cf081b] opacity-20 rounded-full h-[650px] w-[650px] mt-52 animate-pulse"
        style={{
          transform: `translate(${0.03 * x}%, ${0.03 * y}%)`,
        }}
      />
      <div
        className="absolute border border-[#252525] rounded-full h-[800px] w-[800px] mt-52"
        style={{
          transform: `translate(${0.02 * x}%, ${0.02 * y}%)`,
        }}
      />
    </motion.div>
  );
}
