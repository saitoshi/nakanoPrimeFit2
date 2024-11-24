'use client';
import React, { useState } from 'react';
import './style.css';
import { useMedia } from 'react-use';
import { BlogForm } from '../FormRelated/BlogForm';
import { UserForm } from '../FormRelated/UserForm';

export const DashboardCreateMenu = () => {
  const isDesktop = useMedia('(min-width: 600px)', true);
  const [openBlog, setOpenBlog] = useState(true);
  const [openService, setOpenService] = useState<boolean>(false);
  const [openUser, setOpenUser] = useState<boolean>(false);

  return (
    <>
      {isDesktop ? (
        <div className='tab'>
          <div className='tabMenu'>
            <h5>管理者メニュー</h5>

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
          <div className='tabBody'>
            <div
              className='tabContainer'
              id='blogTabBody'
              style={openBlog ? { display: 'block' } : { display: 'none' }}>
              <BlogForm />
            </div>
            <div
              className='tabContainer'
              id='userTabBody'
              style={openUser ? { display: 'block' } : { display: 'none' }}>
              <UserForm />
            </div>
          </div>
        </div>
      ) : (
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
      )}
    </>
  );
};
