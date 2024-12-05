'use client';
import React, { useState } from 'react';
import { BlogTable, BlogTable2 } from '../TableComponents/BlogTable';
import { UserTable } from '../TableComponents/UserTable';
import { UserForm } from '../FormRelated/UserForm';
import { BlogForm } from '../FormRelated/BlogForm';
import './style.css';
import { useMedia } from 'react-use';
import Link from 'next/link';
import { ServiceTable2 } from '../TableComponents/ServiceTable';
export const DashboardMenu = () => {
  interface ITab {
    title: string;
    name: string;
  }
  const tabMenu: ITab[] = [
    {
      title: 'ブログ',
      name: 'blogList',
    },
    {
      title: 'サービス',
      name: 'serviceList',
    },
    {
      title: 'ユーザー',
      name: 'userList',
    },
    {
      title: '&#x270E; ブログ作成',
      name: 'addBlog',
    },
    {
      title: 'サービス追加',
      name: 'addService',
    },
    {
      title: '新規ユーザー追加',
      name: 'addUser',
    },
  ];
  const [currentTab, setCurrentTab] = useState<string>(tabMenu[0]['name']);
  const isDesktop = useMedia('(min-width: 650px)', true);

  function handleClick(value: string) {
    setCurrentTab(value);
  }
  return (
    <>
      {isDesktop ? (
        <div className='tab'>
          <div className='tabMenu'>
            {tabMenu.slice(0, 3).map((menu) => {
              return (
                <button
                  className='tabButton'
                  key={menu.name}
                  onClick={() => {
                    handleClick(menu.name);
                  }}>
                  {menu.title}
                </button>
              );
            })}
            <Link href='/create-blog' style={{ textDecoration: 'none' }}>
              <button className='createBlogButton'>&#x270E; ブログ作成</button>
            </Link>
            <Link href='/create-service' style={{ textDecoration: 'none' }}>
              <button className='addServiceButton'>
                &#x271A; サービス追加
              </button>
            </Link>
            <button
              onClick={() => {
                handleClick('addUser');
              }}
              className='addUserButton'>
              &#x263A; 新規ユーザー追加
            </button>
          </div>
          <div className='tabBody'>
            <div
              className='tabContent'
              style={
                currentTab == 'blogList'
                  ? { display: 'block' }
                  : { display: 'none' }
              }>
              <BlogTable2 />
            </div>
            <div
              className='tabContent'
              style={
                currentTab == 'serviceList'
                  ? { display: 'block' }
                  : { display: 'none' }
              }>
              <ServiceTable2 />
            </div>
            <div
              className='tabContent'
              style={
                currentTab == 'addUser'
                  ? { display: 'block' }
                  : { display: 'none' }
              }>
              <UserForm />
            </div>
            <div
              className='tabContent'
              style={
                currentTab == 'userList'
                  ? { display: 'block' }
                  : { display: 'none' }
              }>
              <UserTable />
            </div>
            <div
              className='tabContent'
              style={
                currentTab == 'addBlog'
                  ? { display: 'block' }
                  : { display: 'none' }
              }>
              <BlogForm />
            </div>
            <div
              className='tabContent'
              style={
                currentTab == 'addService'
                  ? { display: 'block' }
                  : { display: 'none' }
              }></div>
          </div>
        </div>
      ) : (
        <div id='mobileTab'>
          <div className='mobileTabHeader'>
            <Link href='/create-blog' style={{ textDecoration: 'none' }}>
              <button className='createBlogButton'>&#x270E; ブログ作成</button>
            </Link>
            <Link href='/create-service' style={{ textDecoration: 'none' }}>
              <button className='addServiceButton'>
                &#x271A; サービス追加
              </button>
            </Link>
            <button
              onClick={() => {
                handleClick('addUser');
              }}
              className='addUserButton'>
              &#x263A; 新規ユーザー追加
            </button>
            <br />
            {tabMenu.slice(0, 3).map((menu) => {
              return (
                <button
                  className='tabButton'
                  key={menu.name}
                  onClick={() => {
                    handleClick(menu.name);
                  }}>
                  {menu.title}
                </button>
              );
            })}
          </div>

          <div
            className='mobileTabBody'
            style={
              currentTab == 'addService'
                ? { display: 'block' }
                : { display: 'none' }
            }></div>
          <div
            className='mobileTabBody'
            style={
              currentTab == 'addUser'
                ? { display: 'block' }
                : { display: 'none' }
            }>
            <UserForm />
          </div>
          <div
            className='mobileTabBody'
            style={
              currentTab == 'userList'
                ? { display: 'block' }
                : { display: 'none' }
            }>
            <UserTable />
          </div>
          <div
            className='mobileTabBody'
            style={
              currentTab == 'blogList'
                ? { display: 'block' }
                : { display: 'none' }
            }>
            <BlogTable />
          </div>
          <div
            className='mobileTabBody'
            style={
              currentTab == 'addBlog'
                ? { display: 'block' }
                : { display: 'none' }
            }>
            <BlogForm />
          </div>
          <div
            className='mobileTabBody'
            style={
              currentTab == 'serviceList'
                ? { display: 'block' }
                : { display: 'none' }
            }>
            <ServiceTable2 />
          </div>
        </div>
      )}
    </>
  );
};
