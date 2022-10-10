import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import { Project, urlFor } from "../../config";

type Props = {
  projects: Project[];
};

export function Projects({ projects }: Props) {
  return (
    <div className="h-screen box-border relative flex flex-col overflow-hidden text-left max-w-full mx-auto items-center space-y-10 z-0 px-5 md:px-10">
      <h3 className="brand-title text-center pt-24">Projects</h3>

      <div className="relative w-full h-fit flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 customScrollbar">
        {projects.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center h-screen"
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
              <a target="_blank" href={project.linkToBuild} rel="noreferrer">
                <button className="heroButtonInversed mx-5 mt-5">Visite project</button>
              </a>
              <p className="text-sm text-primary-color text-center">
                Project {i + 1} of {projects.length}
              </p>{" "}
              <p className="text-md text-center">{project.summary}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
