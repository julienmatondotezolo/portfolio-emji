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
      className="sticky top-0 flex justify-center items-center w-screen"
    >
      <motion.div
        initial={{
          opacity: 1,
        }}
        animate={{
          opacity: 0,
        }}
        transition={{
          delay: 4,
          duration: 2,
        }}
        className="absolute border border-[#303030] rounded-full h-[200px] w-[200px] mt-[32rem] animate-ping"
        style={{
          transform: `translate(${0.05 * x}%, ${0.05 * y}%)`,
        }}
      />
      <div
        className="absolute border border-[#303030] rounded-full h-[300px] w-[300px] mt-[32rem]"
        style={{
          transform: `translate(${0.015 * x}%, ${0.015 * y}%)`,
        }}
      />
      <div
        className="absolute border border-[#272727] rounded-full h-[500px] w-[500px] mt-[32rem]"
        style={{
          transform: `translate(${0.02 * x}%, ${0.022 * y}%)`,
        }}
      />
      <div
        className="absolute border border-[#cf081b] opacity-20 rounded-full h-[650px] w-[650px] mt-[32rem] animate-pulse"
        style={{
          transform: `translate(${0.01 * x}%, ${0.01 * y}%)`,
        }}
      />
      <div
        className="absolute border border-[#252525] rounded-full h-[800px] w-[800px] mt-[32rem]"
        style={{
          transform: `translate(${0.005 * x}%, ${0.005 * y}%)`,
        }}
      />
    </motion.div>
  );
}
