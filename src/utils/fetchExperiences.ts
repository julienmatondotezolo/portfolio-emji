import { experience } from "../config";

export const fetchExperience = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`);

  const data = await res.json();
  const experience: experience[] = data.experience;

  return experience;
};
