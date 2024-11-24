'use client';
import React, { useEffect, useState } from 'react';
import { LoadingWheel } from '../ConditionalComponents/LoadingWheel';
import { getBlogs } from '@/app/utils/assistFunctions/blogFunction';
import { IBlog } from '@/app/constants/type';
import './style.css';
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
