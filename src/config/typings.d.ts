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

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}
