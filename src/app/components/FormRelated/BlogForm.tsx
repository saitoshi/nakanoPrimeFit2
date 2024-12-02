'use client';
import { useState, useEffect } from 'react';
import { LoadingWheel } from '../ConditionalComponents/LoadingWheel';
import { IBlog } from '@/app/constants/type';
import './style.css';

const BlogContentForm = () => {};
export const BlogForm = () => {
  // variable declaration to store the new blog information
  const [title, setTitle] = useState<IBlog['title']>('');
  const [description, setDescription] = useState<IBlog['description']>('');
  const [thumbnail, setThumbnail] = useState<IBlog['thumbnail']>('');
  const [content, setContent] = useState<IBlog['content']>();
  const [status, setStatus] = useState<IBlog['status']>('draft');
  //conditional declaration
  const [load, setLoad] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);
  useEffect(() => {});
  if (load) {
    return <LoadingWheel />;
  }
  return (
    <div id='blogForm' className='formContainer'>
      <h2 style={{ textAlign: 'center' }}>
        <p className='subHeader'>CREATE BLOG</p>
        <p className='mainHeader'>ブログを作成する</p>
      </h2>
      <form id='createBlogForm' className='createForm'>
        <label className='formHeader'>ブログのタイトル</label>
        <input
          type='text'
          className='inputs'
          placeholder='ブログのタイトル'
          onChange={(e: any) => {
            setTitle(e.target.value);
          }}></input>
        <label className='formHeader'>ブログの概要</label>
        <textarea
          name='description'
          rows={5}
          cols={50}
          placeholder='ブログの概要'
          onChange={(e: any) => setDescription(e.target.value)}></textarea>
        <label className='formHeader'>ブログの公開状態</label>
        <br />
        <p>ブログの作成後に公開・非公開にするか</p>
        <span>
          <input
            className='inputRadio'
            id='released'
            type='radio'
            onSelect={(e: any) => {
              setStatus(e.target.value);
            }}
            placeholder='公開'
            value={'released'}
          />
          <label htmlFor='#released'>公開</label>
        </span>

        {error ? <span className='errorMsg'>{errorMsg}</span> : <></>}
      </form>
    </div>
  );
};
