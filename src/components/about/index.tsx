import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import { PageInfo, urlFor } from "../../config";

type Props = {
  pageInfo: PageInfo;
};

export function About({ pageInfo }: Props) {
  return (
    <div className="flex flex-col relative text-center h-screen md:text-left max-w-7xl px-5 md:px-10 pt-10 justify-evenly mx-auto items-center">
      <h3 className="brand-title text-center">About</h3>
      <div className="relative flex flex-col text-center items-center md:flex-row content">
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
          className="w-24 h-24 sm:w-56 sm:h-56 xl:w-[800px] mb-5 xl:h-[300px]"
        >
          <Image
            className="rounded-full w-full h-full"
            src={urlFor(pageInfo?.heroImage).url()}
            alt="Picture of the author"
            objectFit="cover"
            width="500px"
            height="500px"
            layout="responsive"
          />
        </motion.figure>
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          whileInView={{ scale: 1.0, opacity: 1.0 }}
          viewport={{ once: false }}
          transition={{
            duration: 1,
          }}
          className="space-y-5 px-0 md:px-10 text-center md:text-left"
        >
          <h4 className="text-2xl font-semibold">
            {`<`} A little bit <span className="text-[#d21f1f] pt-2">about me</span> {`/>`}
          </h4>
          <p className="text-sm text-gray-200">
            My name is <span className="font-bold text-white">Julien</span> and I am a{" "}
            <span className="font-bold text-white">23 years</span> old{" "}
            <span className="font-bold text-white">full stack developer</span>, who has the right dose of
            <span className="font-bold text-white"> enthusiasm and motivation</span> to bring websites and applications
            to the <span className="font-bold text-white">next level</span>. I mainly distinguishes myself by my
            eagerness to learn and pursuit the best possible experience for every user. Trying to be up-to-date by{" "}
            <span className="font-bold text-white">learning new technologies</span> is very important for me.
          </p>
          <p className="text-sm">
            Concretely, as a full-stack developer I have the{" "}
            <span className="font-bold text-secondary-color">right technical skills</span> and have an{" "}
            <span className="font-bold text-white">affinity with UI design</span> and a{" "}
            <span className="font-bold text-white">great interest in UX design.</span> Furthermore, I&apos;m a{" "}
            <span className="font-bold text-secondary-color">real team player</span> and attaches great importance to
            delivering quality products. Currently, I&apos;m ready for a next challenge as a Full-stack developer,
            preferably in an <span className="font-bold text-white text-secondary-color">agile environment</span> with
            the main focus on building <span className="font-bold">react applications.</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
