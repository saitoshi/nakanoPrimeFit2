'use client';
import { useMedia } from 'react-use';
import './style.css';
import { DesktopDashboardBlogMenu } from './MobileDashboardMenu';
import { MobileDashboardBlogMenu } from './MobileDashboardMenu';
export const DashboardBlogCreate = () => {
  const isDesktop = useMedia('(min-width: 600px)', true);

  return (
    <>
      {isDesktop ? <DesktopDashboardBlogMenu /> : <MobileDashboardBlogMenu />}
    </>
  );
};
