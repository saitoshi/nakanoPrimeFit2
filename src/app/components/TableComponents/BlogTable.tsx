'use client';
import { useState, useEffect } from 'react';
import { getBlogs } from '@/app/utils/assistFunctions/blogFunction';
import './style.css';
import { IBlog } from '@/app/constants/type';

export const BlogTable = () => {
  const [isLoad, setIsLoad] = useState<boolean>(true);
  const [blogList, setBlogList] = useState<[IBlog]>();
  const [isError, setError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('エラーが発生いたしました');
  useEffect(() => {
    const fetchBlogs = async () => {
      const blogs = await getBlogs();
      setBlogList(blogs);
      setIsLoad(false);
    };
    fetchBlogs();
  }, []);

  if (isLoad) {
    return (
      <div className='pageSection' id='loadMessage'>
        読み込み中...
      </div>
    );
  } else if (isError) {
    <div className='pageSection' id='errorMessage'>
      <span className='errorMsg'>{errorMsg}</span>
    </div>;
  }
  return (
    <>
      <div id='blogList'>
        <h2 className='listHeader'>
          <p className='subHeader'>ARCHIVED BLOG</p>
          <p className='mainHeader'>ブログ</p>
        </h2>
        <table className='listTable'>
          <thead>
            <tr>
              <th>タイトル</th>
              <th>サムネ画像</th>
              <th>公開・非公開</th>
              <th>作成日</th>
              <th>編集</th>
            </tr>
          </thead>
          <tbody>
            {blogList?.map((blog: IBlog) => {
              return (
                <tr key={blog._id}>
                  <th>{blog.title}</th>
                  <th className='imageHolder'>
                    <img
                      className='tableThumbnail'
                      src={blog.thumbnail}
                      alt='Thumbnail Image For The Blog'
                    />
                  </th>
                  <th>{blog.status}</th>
                  <th>{blog.publishedDate.toString().split('T')[0]}</th>
                  <th></th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
