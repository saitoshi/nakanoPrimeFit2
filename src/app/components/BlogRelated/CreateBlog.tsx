'use client';
import { useState } from 'react';
import { IBlog } from '@/app/constants/type';
import { LoadingWheel } from '../ConditionalComponents/LoadingWheel';

export const CreateBlog = () => {
  const [title, setTitle] = useState<IBlog['title']>();
  const [description, setDesc] = useState<IBlog['description']>();
  const [thumbnail, setThumbnail] = useState<IBlog['thumbnail']>();
  const [keyword, setKeyword] = useState<IBlog['keyword']>([]);
  const [keywordHolder, setKeywordHolder] = useState<[]>();
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
      <div id='blogForm' className='formArea'>
        <label htmlFor='title' className='formHeader'>
          ブログタイトル
        </label>
        <input
          type='title'
          id='title'
          placeholder='ブログのタイトル'
          onChange={(e: any) => {
            setTitle(e.target.value);
          }}></input>
        <label htmlFor='title' className='formHeader'>
          ブログ用のメイン画像
        </label>
        <input type='file' name='serviceThumbnail'></input>
        <label htmlFor='description' className='description'>
          ブログの概要
        </label>

        <textarea
          name='description'
          placeholder='サービスの概要の入力'
          onChange={(e: any) => {
            setDesc(e.target.value);
          }}></textarea>
        <label htmlFor='keywords' className='formHeader'>
          ブログキーワード - キーワードの間に<b>,</b>を追加し、分けてください。
        </label>
        <input
          type='keyword'
          id='keyword'
          placeholder='ブログのキーワード (例：筋トレ,食事)'
          onChange={(e: any) => {
            setKeywordHolder(e.target.value);
          }}></input>
        <label htmlFor='contents' className='formHeader'>
          ブログコンテンツ
        </label>
        <p>段落を追加したい場合、ボタンをクリックしてください。</p>
        {content.map((paragraph) => {
          return (
            <div className='contentArea' key={paragraph.id}>
              <input
                type='text'
                id='contentHeader'
                placeholder='ブログの段落のヘッダー'></input>
              <textarea
                className='contentText'
                placeholder='ブログの段落の文書'></textarea>
            </div>
          );
        })}
        <div className='addRowContainer'>
          <button
            onClick={() => {
              addContent();
            }}
            className='addRowButton'
            id='addCostButton'>
            段落を追加する
          </button>
        </div>
      </div>
    </>
  );
};
