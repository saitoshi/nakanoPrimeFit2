'use client';
import React, { useState } from 'react';
import './style.css';
import { BlogForm } from '../FormRelated/BlogForm';
import { UserForm } from '../FormRelated/UserForm';

export const DesktopDashboardBlogMenu = () => {
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
export const MobileDashboardBlogMenu = () => {
  const [openBlog, setOpenBlog] = useState(true);
  const [openService, setOpenService] = useState<boolean>(false);
  const [openUser, setOpenUser] = useState<boolean>(false);

  return (
    <>
      <div id='mobileTab'>
        <div className='mobileTabHeader'>
          <button
            className='createBlogButton'
            onClick={async () => {
              await setOpenBlog(true);
              await setOpenService(false);
              await setOpenUser(false);
            }}>
            &#x270E; ブログ作成
          </button>
          <button
            className='addServiceButton'
            onClick={async () => {
              await setOpenBlog(false);
              await setOpenService(true);
              await setOpenUser(false);
            }}>
            &#x271A; サービス追加
          </button>
          <button
            className='addUserButton'
            onClick={async () => {
              await setOpenBlog(false);
              await setOpenService(false);
              await setOpenUser(true);
            }}>
            &#x263A; 新規ユーザー追加
          </button>
        </div>
        <div
          className='mobileTabBody'
          style={openBlog ? { display: 'block' } : { display: 'none' }}>
          <div className='tabContainer'>
            <BlogForm />
          </div>
        </div>
        <div
          className='mobileTabBody'
          style={openUser ? { display: 'block' } : { display: 'none' }}>
          <div className='tabContainer'>
            <UserForm />
          </div>
        </div>
      </div>
    </>
  );
};
