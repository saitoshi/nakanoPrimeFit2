'use client';
import Link from 'next/link';
import './style.css';
import { useMedia } from 'react-use';
import React, { CSSProperties } from 'react';

const SideMenu = () => {
  const isDesktop = useMedia('(min-width: 768px)', true);
  const dashboardItems = [
    {
      menu: 'TOP',
      link: '/dashboard',
    },
    {
      menu: 'SERVICE',
      link: '/dashboard-service',
    },
    {
      menu: 'BLOG',
      link: '/dashboard-blog',
    },
    {
      menu: 'ACCOUNT',
      link: '/account',
    },
  ];
  return (
    <div id='dashboardMenu'>
      <ul className='dashboardLinks'>
        {dashboardItems.map((item) => (
          <li key={item.menu}>
            <Link className='sideMenuLinks' key={item.menu} href={item.link}>
              {item.menu}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
