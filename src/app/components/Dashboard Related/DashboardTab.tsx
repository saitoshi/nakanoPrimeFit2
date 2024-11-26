'use client';
import React, { useEffect, useState } from 'react';
import { LoadingWheel } from '../ConditionalComponents/LoadingWheel';
import { getBlogs } from '@/app/utils/assistFunctions/blogFunction';
import { IBlog } from '@/app/constants/type';
import { BlogForm } from '../FormRelated/BlogForm';
import { UserForm } from '../FormRelated/UserForm';
import { UserTable } from '../TableComponents/UserTable';
import './style.css';
import { useMedia } from 'react-use';
type tabInputs = {
  tabs: string[];
};
export const DashboardTab = ({ tabs }: tabInputs) => {
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  const [currentBody, setCurrentBody] = useState<any>();
  const [isLoad, setIsLoad] = useState<boolean>(true);
  const [blogList, setBlogList] = useState<[IBlog]>();

  useEffect(() => {
    const fetchTabData = async () => {
      const blogs = await getBlogs();
      await setBlogList(blogs);
      await setCurrentBody(blogs);
      await setIsLoad(false);
    };
    fetchTabData();
  }, []);

  const handleCurrentTab = async (e: string) => {
    await setCurrentTab(e);
    switch (e) {
      case 'ブログ':
        setCurrentBody(blogList);
        break;
      default:
        setCurrentBody(blogList);
        break;
    }
  };
  if (isLoad) {
    return <LoadingWheel />;
  }

  return (
    <div className='tab'>
      <div className='tabMenu'>
        <h5>管理者メニュー</h5>
        {tabs.map((item) => (
          <button
            key={item}
            className={currentTab === item ? 'activeButton' : 'tabButton'}
            onClick={() => {
              handleCurrentTab(item);
            }}>
            {item}
          </button>
        ))}

        <button className='createBlogButton'>&#x270E; ブログ作成</button>
        <button className='addServiceButton'>&#x271A; サービス追加</button>
        <button className='addUserButton'>&#x263A; 新規ユーザー追加</button>
      </div>
      <div className='tabBody'>
        <div className='tabContainer'>
          <h5>{currentTab}</h5>
          <table id='tabTable'>
            <tbody>
              <tr>
                <th>タイトル</th>
                <th>サムネ画像</th>
                <th>作成日</th>
                <th>最新更新日</th>
                <th>公開・非公開</th>
                <th>編集</th>
              </tr>

              {currentBody!.map((blog: any) => (
                <tr id='blogList' key={blog._id}>
                  <td>{blog.title}</td>
                  <td className='dashboardThumbnail'>
                    <img src={blog.thumbnail} />
                  </td>
                  <td>{blog.publishedDate!.toString().split('T')[0]}</td>
                  <td>{blog.lastModified!.toString().split('T')[0]}</td>
                  <td>{blog.status}</td>
                  <td>
                    <button className='editButton'>&#x270E;</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export const DashboardMenu = () => {
  const isDesktop = useMedia('(min-width: 650px)', true);
  const [openBlog, setOpenBlog] = useState(true);
  const [openService, setOpenService] = useState<boolean>(false);
  const [openUser, setOpenUser] = useState<boolean>(false);
  const [existBlog, setExistBlog] = useState<boolean>(false);
  const [existUser, setExistUser] = useState<boolean>(false);
  const [existService, setExistService] = useState<boolean>(false);
  return (
    <>
      {isDesktop ? (
        <div className='tab'>
          <div className='tabMenu'>
            <button className='tabButton'>サービス</button>
            <button className='tabButton'>ブログ</button>
            <button className='tabButton'>ユーザー</button>
            <button
              className='createBlogButton'
              onClick={async () => {
                await setOpenBlog(true);
                await setOpenService(false);
                await setOpenUser(false);
                await setExistBlog(false);
                await setExistUser(false);
                await setExistService(false);
              }}>
              &#x270E; ブログ作成
            </button>
            <button
              className='addServiceButton'
              onClick={async () => {
                await setOpenBlog(false);
                await setOpenService(true);
                await setOpenUser(false);
                await setExistBlog(false);
                await setExistUser(false);
                await setExistService(false);
              }}>
              &#x271A; サービス追加
            </button>
            <button
              className='addUserButton'
              onClick={async () => {
                await setOpenBlog(false);
                await setOpenService(false);
                await setOpenUser(true);
                await setExistBlog(false);
                await setExistUser(false);
                await setExistService(false);
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
