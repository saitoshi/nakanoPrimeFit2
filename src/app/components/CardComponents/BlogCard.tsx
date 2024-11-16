'use client';
import Link from 'next/link';
import { IBlog } from '@/app/constants/type';
import './style.css';

type blogInputs = {
  blog: IBlog;
};

export const BlogCard = ({ blog }: blogInputs) => {
  return (
    <li className='cardItem'>
      <Link className='cardLink' href={`/blog/${blog._id}`}>
        <div className='cardMainImg'>
          <img
            className='cardImg'
            src={blog.thumbnail}
            alt={'サムネ画像: ' + blog.title}
          />
        </div>
        <div className='text-section'>
          <h2 className='cardTitleSection'>{blog.title}</h2>
          <div className='cardDetails'>
            <p className='cardDescription'>{blog.description}</p>
          </div>
        </div>
      </Link>
    </li>
  );
};