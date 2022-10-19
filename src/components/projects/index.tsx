import { motion } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

import { Project, urlFor } from "../../config";

type Props = {
  projects: Project[];
};

export function Projects({ projects }: Props) {
  const carouselRef = useRef();
  const carouselItem = useRef();

  const handleOnPrevClick = () => {
    const carousel = carouselRef?.current;

    carousel.scrollLeft -= carouselItem?.current?.clientWidth;
  };

  const handleOnNextClick = () => {
    const carousel = carouselRef?.current;

    carousel.scrollLeft += carouselItem?.current?.clientWidth;
  };

  return (
    <div className="md:h-screen box-border relative flex flex-col overflow-hidden text-left max-w-full mx-auto items-center space-y-10 z-0 px-5 md:px-10">
      <h3 className="brand-title text-center pt-24">Projects</h3>
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
      <div
        ref={carouselRef}
        className="w-full h-fit flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 customScrollbar scroll-smooth"
      >
        {projects.map((project, i) => (
          <div
            key={project._id}
            ref={carouselItem}
            className="flex flex-col basis-[100%] flex-shrink-0 snap-center space-y-5 items-center h-screen"
          >
            <motion.figure
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              whileInView={{ scale: 1.0, opacity: 1.0 }}
              viewport={{ once: false }}
              transition={{
                duration: 1,
              }}
              className="w-full lg:w-[400px]"
            >
              <Image
                src={urlFor(project?.image).url()}
                alt="Picture of the author"
                layout="responsive"
                width="400px"
                height="200px"
                objectFit="contain"
              />
            </motion.figure>
            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{ opacity: 1.0 }}
              viewport={{ once: false }}
              transition={{
                duration: 1,
              }}
              className="space-y-5 px-0 md:px-10 md:w-[48rem] w-10/12 text-center"
            >
              <h4 className="text-2xl font-semibold text-center">{project.title}</h4>
              <div className="flex justify-center">
                <div className="flex space-x-2 my-2">
                  {project.technologies.map((technology) => (
                    <figure key={technology._id}>
                      <Image
                        className="rounded-full"
                        src={urlFor(technology.image).url()}
                        alt="Picture of the author"
                        width="25px"
                        height="25px"
                        objectFit="cover"
                      />
                    </figure>
                  ))}
                </div>
              </div>
              <p className="text-md text-center">{project.summary}</p>
              <a target="_blank" href={project.linkToBuild} rel="noreferrer">
                <button className="heroButtonInversed mx-5 mt-5">Visite project</button>
              </a>
              {project.linkToGithub ? (
                <a target="_blank" href={project.linkToGithub} rel="noreferrer">
                  <button className="heroButton mx-5 mt-5">Source code</button>
                </a>
              ) : (
                <></>
              )}
              <p className="text-sm text-primary-color text-center">
                Project {i + 1} of {projects.length}
              </p>{" "}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
