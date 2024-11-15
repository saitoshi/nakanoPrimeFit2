'use client';
import React, { useState } from 'react';
import './style.css';

type tabInputs = {
  tabs: string[];
};
export const DashboardTab = ({ tabs }: tabInputs) => {
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  const handleCurrentTab = (e: string) => {
    setCurrentTab(e);
  };
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
      </div>
      <div className='tabBody'>
        <div className='tabContainer'>
          <h5>{currentTab}</h5>

          <table id='tabTable'>
            <tbody>
              <tr>
                <th>タイトル</th>
                <th>サムネ画像</th>
                <th>説明文</th>
                <th>作成日</th>
                <th>最新更新日</th>
                <th>公開・非公開</th>
                <th>編集</th>
              </tr>
              <tr></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
