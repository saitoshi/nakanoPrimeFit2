'use client';
import { useState, useEffect } from 'react';
import { LoadingWheel } from '../ConditionalComponents/LoadingWheel';
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
      <h2 style={{ textAlign: 'center' }}>
        <p className='subHeader'>CREATE BLOG</p>
        <p className='mainHeader'>ブログを作成する</p>
      </h2>
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
              placeholder='ブログのタイトルを入力'
              onChange={(e: any) => {
                setTitle(e.target.value);
              }}></input>
            <br />
            <label htmlFor='title' className='formHeader'>
              ブログのカテゴリーを選択
            </label>

            <br />
            <label htmlFor='description' className='formHeader'>
              ブログの概要
            </label>
            <br />
            <textarea
              id='description'
              name='description'
              placeholder='ブログのタイトルを入力'
              onChange={(e: any) => {
                setDescription(e.target.value);
              }}></textarea>
            <br />
            <label htmlFor='content' className='formHeader'>
              ブログの内容
            </label>
            <br />
            <textarea
              id='content'
              name='content'
              onChange={(e: any) => {
                setContent(e.target.value);
              }}></textarea>
            <br />
          </div>
          <div className='smlRightCol'>
            <label htmlFor='file' className='formHeader'>
              ブログのサムネ画像
            </label>
            <br />
            <input type='file' name='thumbnail'></input>
            <br />
            <label htmlFor='status' className='formHeader'>
              ブログの公開状態
            </label>
            <br />
            <select
              name='status'
              id='status-select'
              onChange={(e: any) => {
                setStatus(e.target.value);
              }}>
              <option value=''>--公開状態を選択してください--</option>
              <option value='dog'>非公開</option>
              <option value='cat'>公開</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};
