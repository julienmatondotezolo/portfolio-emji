interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface experience extends SanityBody {
  _type: "experience";
  company: string;
  companyImage: Image;
  dateEnded: Date;
  dateStarted: Date;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: Technology[];
}

export interface PageInfo extends SanityBody {
  _type: "PageInfo";
  about: string;
  address: string;
  email: string;
  heroImage: Image;
  name: string;
  phoneNumber: string;
  profilPic: Image;
  role: string;
}

export interface Project extends SanityBody {
  _type: "project";
  image: Image;
  linkToBuild: string;
  summary: string;
  technologies: Technology[];
  title: string;
}

export interface Technology extends SanityBody {
  _type: "skill";
  image: Image;
  progress: number;
  title: string;
}

export interface Skill extends SanityBody {
  _type: "skill";
  image: Image;
  progress: number;
  title: string;
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}
