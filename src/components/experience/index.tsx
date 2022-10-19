import { motion } from "framer-motion";
import React from "react";

import { experience } from "../../config";
import { ExperienceCard } from "../";

type Props = {
  experiences: experience[];
};

export function Experience({ experiences }: Props) {
  const carouselRef = React.useRef<HTMLInputElement>(null);

  const carouselItem = React.useRef<HTMLInputElement>(null);

  const handleOnPrevClick = () => {
    const carousel = carouselRef?.current;

    carousel.scrollLeft -= carouselItem.current.clientWidth;
  };

  const handleOnNextClick = () => {
    const carousel = carouselRef?.current;

    carousel.scrollLeft += carouselItem.current.clientWidth;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1.5 }}
      viewport={{ once: false }}
      transition={{
        duration: 1,
      }}
      className="h-fit flex flex-col relative text-left overflow-hidden max-w-full px-5 md:px-10 pt-10 justify-evenly mx-auto items-center"
    >
      <h3 className="brand-title">Experience</h3>
      <button
        onClick={handleOnPrevClick}
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="carouselButton">
          <svg
            aria-hidden="true"
            className="carouselArrow"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 19l-7-7 7-7"></path>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        onClick={handleOnNextClick}
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="carouselButton">
          <svg
            aria-hidden="true"
            className="carouselArrow"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5l7 7-7 7"></path>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
      <div className="w-full flex box-border py-6 space-x-5 overflow-x-scroll snap-x snap-mandatory customScrollbar">
        {experiences.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}
