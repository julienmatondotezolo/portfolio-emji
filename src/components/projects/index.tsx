import Image from "next/image";
import React from "react";

import mypic from "../../assets/images/project.jpeg";

export function Projects() {
  const projectsData = [1, 2, 3, 4, 5];

  return (
    <div className="h-screen relative flex flex-col overflow-hidden text-left max-w-full justify-evenly mx-auto items-center z-0 px-5 md:px-10">
      <h3 className="absolute top-24 brand-title">Projects</h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projectsData.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center md:p-44 h-screen"
          >
            <figure className="w-full lg:w-[400px]">
              <Image src={mypic} alt="Picture of the author" layout="responsive" objectFit="contain" />
            </figure>
            <div className="space-y-5 px-0 md:px-10 md:w-[48rem] w-10/12">
              <h4 className="text-2xl font-semibold text-center">Medialab Brussels</h4>
              <p className="text-sm text-primary-color text-center">
                Project {i + 1} of {projectsData.length}
              </p>{" "}
              <p className="text-md text-center">
                Media Lab Brussels is een inspirerende omgeving voor studenten, experts, ondernemers, kunstenaars. Wij
                stellen mensen en middelen ter beschikking om jouw prototype te ontwikkelen.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
