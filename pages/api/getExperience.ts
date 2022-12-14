import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";

import { experience, sanityClient } from "../../src/config";

const query = groq`*[_type == "experience"] | order(order asc) {
  ...,
  technologies[]->
}`;

type Data = {
  experience: experience[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const experience: experience[] = await sanityClient.fetch(query);

  res.status(200).json({ experience });
}
