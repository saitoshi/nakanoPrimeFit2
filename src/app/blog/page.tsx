'use client';
import { useState, useEffect } from 'react';
import { getBlogs } from '../utils/assistFunctions/blogFunction';
import './style.css';
import { LoadingWheel } from '../components/LoadingWheel/LoadingWheel';
import { IBlog } from '../constants/type';
import { BlogCard } from '../components/CardComponents/BlogCard';
export default function Blog() {
  const [isLoad, setIsLoad] = useState<boolean>(true);
  const [blogList, setBlogList] = useState<any>();

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogs = await getBlogs();
      setBlogList(blogs);
      setIsLoad(false);
    };
    fetchBlogs();
  }, []);

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
          {blogList.map((blog: IBlog) => {
            return <BlogCard key={blog._id} blog={blog} />;
          })}
        </ul>
      </div>
    </div>
  );
}
