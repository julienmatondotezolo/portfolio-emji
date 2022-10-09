import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import mypic from "../../assets/images/project.jpeg";

export function Projects() {
  const projectsData = [1, 2, 3, 4, 5];

  return (
    <div className="h-screen box-border relative flex flex-col overflow-hidden text-left max-w-full mx-auto items-center space-y-10 z-0 px-5 md:px-10">
      <h3 className="brand-title text-center pt-24">Projects</h3>

      <div className="relative w-full h-fit flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 customScrollbar">
        {projectsData.map((project, i) => (
          <div key={i} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center h-screen">
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
              <Image src={mypic} alt="Picture of the author" layout="responsive" objectFit="contain" />
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
              className="space-y-5 px-0 md:px-10 md:w-[48rem] w-10/12"
            >
              <h4 className="text-2xl font-semibold text-center">Medialab Brussels</h4>
              <p className="text-sm text-primary-color text-center">
                Project {i + 1} of {projectsData.length}
              </p>{" "}
              <p className="text-md text-center">
                Media Lab Brussels is een inspirerende omgeving voor studenten, experts, ondernemers, kunstenaars. Wij
                stellen mensen en middelen ter beschikking om jouw prototype te ontwikkelen.
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
