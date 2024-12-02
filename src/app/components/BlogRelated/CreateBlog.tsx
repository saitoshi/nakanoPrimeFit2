'use client';
import { useState } from 'react';
import { IBlog } from '@/app/constants/type';
import { LoadingWheel } from '../ConditionalComponents/LoadingWheel';

export const CreateBlog = () => {
  const [title, setTitle] = useState<IBlog['title']>();
  const [description, setDesc] = useState<IBlog['description']>();
  const [thumbnail, setThumbnail] = useState<IBlog['thumbnail']>();
  const [keyword, setKeyword] = useState<IBlog['keyword']>([]);
  const [content, setContent] = useState<IBlog['content']>([]);
  const addContent = () => {
    const contentHolder = [...content];
    contentHolder.push({ id: content.length + 1 });
    setContent(contentHolder);
  };
  const [status, setStatus] = useState<IBlog['status']>();
  // conditional variable declaration
  const [load, setLoad] = useState<boolean>(false);
  const [verified, setVerified] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  if (load) {
    return (
      <>
        <LoadingWheel />
      </>
    );
  }
  return (
    <>
      <div id='blogForm' className='formArrea'></div>
    </>
  );
};
