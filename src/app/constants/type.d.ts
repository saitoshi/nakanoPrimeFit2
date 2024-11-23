export interface IService {
  _id: any;
  title: string;
  description: string;
  thumbnail: any;
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
