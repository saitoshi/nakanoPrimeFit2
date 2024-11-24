'use client';
import { useState, useEffect } from 'react';
import { LoadingWheel } from '../ConditionalComponents/LoadingWheel';
import { IUser } from '@/app/constants/type';
import './style.css';

export const UserForm = () => {
  //variable declaration using the userState hook
  const [email, setEmail] = useState<IUser['email']>('');
  const [password, setPassword] = useState<IUser['password']>('');
  const [role, setRole] = useState<IUser['role']>('');
  // variable for the conditional rendering
  const [load, isLoad] = useState<boolean>(false);
  const [error, isError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);
  const [filled, setFilled] = useState<boolean>(false);
  //check if the form is filled
  useEffect(() => {
    if (email && password && role) setFilled(true);
  }, [email, password, role]);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    isLoad(true);
    try {
      console.log({ email, password, role });
      let regEmail =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regEmail.test(email)) {
        isLoad(false);
        isError(true);
        setErrorMsg('有効なメールアドレスを入力してください。');
      }
      isLoad(false);
      setSuccess(true);
    } catch (error) {
      isLoad(false);
      isError(true);
      setErrorMsg('エラーが発生いたしました。後ほど、もう一度試してください');
    }
  };
  if (load) {
    return <LoadingWheel />;
  }
  return (
    <div id='userForm'>
      <h2>
        <p className='subHeader'>ADD USER</p>
        <p className='mainHeader'>管理ユーザーを追加する</p>
      </h2>
      <form className='formCreation' onSubmit={handleSubmit}>
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
          <button type='submit' id='submitButton' disabled={!filled}>
            ユーザー登録
          </button>
        </div>
        {error ? <span className='errorMsg'>{errorMsg}</span> : <></>}
      </form>
    </div>
  );
};
