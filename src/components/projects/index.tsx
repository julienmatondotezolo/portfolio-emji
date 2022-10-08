import Image from "next/image";
import React from "react";

import mypic from "../../assets/images/project.jpeg";

export function Projects() {
  const projectsData = [1, 2, 3, 4, 5];

  return (
    <div className="h-screen relative flex flex-col overflow-hidden text-left max-w-full justify-evenly mx-auto items-center z-0 px-10">
      <h3 className="absolute top-24 brand-title">Projects</h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projectsData.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <figure className="w-full">
              <Image src={mypic} alt="Picture of the author" layout="responsive" objectFit="cover" />
            </figure>
            <div>
              <h4 className="text-2xl font-semibold">Case study</h4>
              <p>
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
