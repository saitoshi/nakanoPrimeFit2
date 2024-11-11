import { IService } from "@/app/constants/type";

export const sampleService1: IService = {
  _id: 1,
  title: "Personal Training",
  description: "Sampel Description",
  thumbnail: "/image/mainLogo.png",
};

export const sampleService2: IService = {
  _id: 2,
  title: "Hyper Knife",
  description: "Sampel Description",
  thumbnail: "/image/mainLogo.png",
};

export const mockService: IService[] = [sampleService1, sampleService2];
