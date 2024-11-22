'use client';
import { useState, useEffect } from 'react';
import { LoadingWheel } from '../LoadingWheel/LoadingWheel';
import { getToken } from '@/app/utils/assistFunctions/userFunctions';
import { IBlog } from '@/app/constants/type';
import './style.css';
export const BlogForm = () => {
  // variable declaration to store the new blog information
  const [title, setTitle] = useState<IBlog['title']>('');
  const [description, setDescription] = useState<IBlog['description']>('');
  const [thumbnail, setThumbnail] = useState<IBlog['thumbnail']>('');
  const [content, setContent] = useState<IBlog['content']>('');
  const [categories, setCategories] = useState<IBlog['categories']>([]);
  const [contentImg, setContentImg] = useState<IBlog['contentImg']>([]);
  const [status, setStatus] = useState<IBlog['status']>('draft');
  const [author, setAuthor] = useState<IBlog['author']>('');
  const [load, setLoad] = useState<boolean>(false);
  const [verified, setVerified] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {});
  if (load) {
    return <LoadingWheel />;
  }
  return (
    <div id='blogForm'>
      <form className='formCreation'>
        <div className='rowSplit'>
          <div className='bigLeftCol'>
            <label htmlFor='title' className='formHeader'>
              ブログのタイトル
            </label>
            <br />
            <input
              type='title'
              id='title'
              name='title'
              placeholder='ブログのタイトルを入力'></input>
            <br />
            <label htmlFor='description' className='formHeader'>
              ブログの概要
            </label>
            <br />
            <textarea
              id='description'
              name='description'
              placeholder='ブログのタイトルを入力'></textarea>
            <br />
          </div>
          <div className='smlRightCol'></div>
        </div>
      </form>
    </div>
  );
};
