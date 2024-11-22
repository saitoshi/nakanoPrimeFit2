'use client';
import React, { useEffect, useState } from 'react';
import { LoadingWheel } from '../LoadingWheel/LoadingWheel';
import { getBlogs } from '@/app/utils/assistFunctions/blogFunction';
import { IBlog } from '@/app/constants/type';
import { BlogForm } from '../BlogRelated/BlogForm';
import './style.css';
export const DashboardBlogCreate = () => {
  return (
    <div className='tab'>
      <div className='tabMenu'>
        <h5>管理者メニュー</h5>

        <button className='createBlogButton'>&#x270E; ブログ作成</button>
        <button className='addServiceButton'>&#x271A; サービス追加</button>
        <button className='addUserButton'>&#x263A; 新規ユーザー追加</button>
      </div>
      <div className='tabBody'>
        <div className='tabContainer'>
          <BlogForm />
        </div>
      </div>
    </div>
  );
};
