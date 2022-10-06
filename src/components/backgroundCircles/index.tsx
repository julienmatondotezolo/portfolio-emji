import { motion } from "framer-motion";
import React from "react";

export function BackgroundCircles() {
  return (
    <div className="relative flex justify-center items-center">
      <div className="absolute border border-[#404040] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="absolute border border-[#303030] rounded-full h-[300px] w-[300px] mt-52" />
      <div className="absolute border border-[#303030] rounded-full h-[500px] w-[500px] mt-52" />
      <div className="absolute border border-[#cf081b] opacity-20 rounded-full h-[650px] w-[650px] mt-52 animate-pulse" />
      <div className="absolute border border-[#252525] rounded-full h-[800px] w-[800px] mt-52" />
    </div>
  );
}
