import { IService } from '@/app/constants/type';
import { IBlog } from '@/app/constants/type';

export const sampleService1: IService = {
  _id: 1,
  title: 'Personal Training',
  description: 'Sampel Description',
  thumbnail: '/image/mainLogo.png',
};

export const sampleService2: IService = {
  _id: 2,
  title: 'Hyper Knife',
  description: 'Sampel Description',
  thumbnail: '/image/mainLogo.png',
};

export const mockService: IService[] = [sampleService1, sampleService2];

export const sampleBlog1: IBlog = {
  _id: 1,
  title: 'サンプル 1',
  description: 'サンプル説明文',
  thumbnail: '/image/mainLogo.png',
  content: 'Test Test Test',
  categories: ['筋トレ', '食事'],
  publishedDate: '2024-11-16',
};

export const mockBlog: IBlog[] = [sampleBlog1];
