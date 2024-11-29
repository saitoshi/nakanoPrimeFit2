'use client';
import { useState, useEffect } from 'react';
import { IBlog } from '@/app/constants/type';

type blogInputs = {
  blog: IBlog;
};
export const EditBlogForm = ({ blog }: blogInputs) => {
  /** */
  const [title, setTitle] = useState<IBlog['title']>(blog.title);
  const [description, setDescription] = useState<IBlog['description']>(
    blog.description,
  );

  /** Variable declaration for the conditional situations */
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  return (
    <>
      <div className='pageContainer' id='editBlogForm'>
        <p className='subHeader'>EDIT BLOG</p>
        <p className='mainHeader'>ブログを編集する</p>
        <form id='updateBlog' className='updateForm'>
          <label htmlFor='title' className='formHeader'>
            ブログのタイトル
          </label>
          <input
            type='title'
            id='title'
            name='title'
            placeholder={title}
            onChange={(e: any) => {
              setTitle(e.target.value);
            }}></input>
          <br />
          <label htmlFor='description' className='formHeader'>
            ブログの概要
          </label>
          <br />
          <textarea
            id='description'
            name='description'
            placeholder={description}
            onChange={(e: any) => {
              setDescription(e.target.value);
            }}></textarea>
        </form>
      </div>
    </>
  );
};
