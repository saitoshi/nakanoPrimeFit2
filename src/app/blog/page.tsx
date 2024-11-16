'use client';
import { useState, useEffect } from 'react';
import './style.css';
import { LoadingWheel } from '../components/LoadingWheel/LoadingWheel';
import { mockBlog } from '../utils/models/mockModels';
import { IBlog } from '../constants/type';
import { BlogCard } from '../components/CardComponents/BlogCard';
export default function Blog() {
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [blogList, setBlogList] = useState<any>();

  useEffect(() => {
    try {
      setBlogList(mockBlog);
      setIsLoad(false);
    } catch (error) {
    } finally {
      setIsLoad(false);
    }
  });

  if (isLoad) {
    return <LoadingWheel />;
  }
  return (
    <div id='blogPage'>
      <div className='pageContainer'>
        <h2>
          <p className='subHeader'>BLOGS</p>
          <p className='mainHeader'>最新のブログ</p>
        </h2>
        <ul className='cardList'>
          {mockBlog.map((blog: IBlog) => {
            return <BlogCard key={blog._id} blog={blog} />;
          })}
        </ul>
      </div>
    </div>
  );
}
