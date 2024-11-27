export interface IService {
  _id: any;
  title: string;
  description: string;
  thumbnail: string;
  images?: string[];
  steps: [
    {
      title?: string;
      description?: string;
    },
  ];
  costs: [
    {
      title?: string;
      cost?: string;
    },
  ];
  campaign?: string[];
  benefits?: [
    {
      title?: string;
      description?: string;
    },
  ];
  reviews?: [
    {
      title?: string;
      description?: string;
    },
  ];
  publishedDate: Date;
  lastModified: Date;
  status: string;
}

export interface ILocation {
  name: string;
  address: string;
  hours: string;
  phoneNumber: string;
  access: string;
}

export interface IBlog {
  _id: any;
  title: string;
  description: string;
  thumbnail: any;
  content: any;
  categories: string[];
  publishedDate: Date;
  lastModified: Date;
  contentImg?: string[];
  status: string;
  author?: string;
}

export interface IUser {
  _id: any;
  email: string;
  password: string;
  role: string;
  createdAt: Date;
  lastLoggedIn: Date;
  updatedAt: Date;
}
