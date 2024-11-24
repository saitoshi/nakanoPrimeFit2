'use client';
import { useState, useEffect } from 'react';
import { LoadingWheel } from '../LoadingWheel/LoadingWheel';
import { IUser } from '@/app/constants/type';
import './style.css';

export const UserForm = () => {
  //variable declaration using the userState hook
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<IUser['role']>('');
  // variable for the conditional rendering
  const [load, isLoad] = useState<boolean>(false);
  const [error, isError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);
  if (load) {
    return <LoadingWheel />;
  }
  return (
    <div id='userForm'>
      <h2>
        <p className='subHeader'>ADD USER</p>
        <p className='mainHeader'>管理ユーザーを追加する</p>
      </h2>
      <form className='formCreation'>
        <label htmlFor='email' className='formHeader'>
          ユーザーのメールアドレス
        </label>
        <input
          type='email'
          id='email'
          name='email'
          placeholder='yamato.takeshi@gmail.com'
          onChange={(e: any) => {
            setEmail(e.target.value);
          }}></input>
        <br />
        <label htmlFor='password' className='formHeader'>
          ユーザーのパスワード
        </label>
        <input
          type='password'
          id='password'
          name='password'
          placeholder='yamato.takeshi@gmail.com'
          onChange={(e: any) => {
            setPassword(e.target.value);
          }}></input>
        <br />
        <label htmlFor='password' className='formHeader'>
          ユーザーの権限
        </label>
        <br />
        <select
          name='role'
          id='role-select'
          onChange={(e: any) => {
            setRole(e.target.value);
          }}>
          <option value='owner'>管理者</option>
          <option value='writer'>ライター</option>
        </select>
        <div style={{ textAlign: 'center' }}>
          <button id='submitButton'>ユーザー登録</button>
        </div>
      </form>
    </div>
  );
};
