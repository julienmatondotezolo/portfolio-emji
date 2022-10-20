import Image from "next/image";
import React from "react";

import { experience, urlFor } from "../../config";

type Props = {
  experience: experience;
};

export const ExperienceCard = React.forwardRef(({ experience }: Props, ref: React.Ref<HTMLInputElement>) => (
  <article
    ref={ref}
    className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[400px] xl:w-[600px] snap-center bg-[#292929] py-10 px-5 md:px-10 opacity-60 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden"
  >
    <Image
      className="rounded-full"
      src={urlFor(experience.companyImage).url()}
      alt="Picture of the author"
      width="200px"
      height="100px"
      objectFit="contain"
    />

    <div className="space-y-5">
      <h4 className="text-2xl font-semibold">{experience.jobTitle}</h4>
      <p className="font-bold text-1xl mt-1">{experience.company}</p>

      <div className="flex space-x-2 my-2">
        {experience.technologies.map((technology) => (
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

      <p className="uppercase pt-2 text-gray-400">
        <span>{experience.dateStarted.toString()}</span> - <span>{experience.dateEnded.toString()}</span>
      </p>
    </div>

    <ul className="list-disc space-y-4 pb-4 ml-5 text-lg">
      {experience.points.map((point, i) => (
        <li key={i}>{point}</li>
      ))}
    </ul>
  </article>
));

// export function ExperienceCard({ experience, ref }: Props) {
//   return (
//     <article
//       ref={ref}
//       className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[400px] xl:w-[600px] snap-center bg-[#292929] py-10 px-5 md:px-10 opacity-60 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden"
//     >
//       <Image
//         className="rounded-full"
//         src={urlFor(experience.companyImage).url()}
//         alt="Picture of the author"
//         width="200px"
//         height="100px"
//         objectFit="contain"
//       />

//       <div className="space-y-5">
//         <h4 className="text-2xl font-semibold">{experience.jobTitle}</h4>
//         <p className="font-bold text-1xl mt-1">{experience.company}</p>

//         <div className="flex space-x-2 my-2">
//           {experience.technologies.map((technology) => (
//             <figure key={technology._id}>
//               <Image
//                 className="rounded-full"
//                 src={urlFor(technology.image).url()}
//                 alt="Picture of the author"
//                 width="25px"
//                 height="25px"
//                 objectFit="cover"
//               />
//             </figure>
//           ))}
//         </div>

//         <p className="uppercase pt-2 text-gray-400">
//           <span>{experience.dateStarted.toString()}</span> - <span>{experience.dateEnded.toString()}</span>
//         </p>
//       </div>

//       <ul className="list-disc space-y-4 pb-4 ml-5 text-lg">
//         {experience.points.map((point, i) => (
//           <li key={i}>{point}</li>
//         ))}
//       </ul>
//     </article>
// }
