import mypic from "https://res.cloudinary.com/hc92io71a/image/upload/v1640074937/fd15b875584645_5c516a392a06e_e4277532cc.jpg";
import Image from "next/image";
import React from "react";

export function Projects() {
  return (
    <div className="h-screen relative flex flex-col overflow-hidden text-left max-w-full justify-evenly mx-auto items-center z-0 px-10">
      <h3 className="absolute top-24 brand-title">Projects</h3>

      <div>
        <div>
          <Image
            className="rounded-full"
            src={mypic}
            alt="Picture of the author"
            layout="responsive"
            objectFit="cover"
          />
          <div>
            <h4 className="text-2xl font-semibold">Case study</h4>
            <p>
              Media Lab Brussels is een inspirerende omgeving voor studenten, experts, ondernemers, kunstenaars. Wij
              stellen mensen en middelen ter beschikking om jouw prototype te ontwikkelen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
