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
  publishedDate?: string;
  updatedDate?: string;
  contentImg?: string[];
}
