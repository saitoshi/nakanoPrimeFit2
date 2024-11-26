'use client';
import React, { useEffect, useState } from 'react';
import { UserTable } from '../TableComponents/UserTable';
import './style.css';
import { useMedia } from 'react-use';

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
            {tabMenu.slice(0, 2).map((menu) => {
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
        </div>
      ) : (
        <div id='mobileTab'></div>
      )}
    </>
  );
};
