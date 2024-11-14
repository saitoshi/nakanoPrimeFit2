'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';
import './style.css';

export default function Login() {
  const [email, setEmail] = useState<any>('');
  const [password, setPassword] = useState<any>('');

  const router = useRouter();
  const loginUser = async (e: any) => {
    try {
      e.preventDefault();
      console.log(email);
      const res = await fetch('/api/login', {
        body: JSON.stringify({ email, password }),
        method: 'POST',
      });
      const userData = res.json();
      console.log(userData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div id='loginContainer'>
        <h2>
          <p className='subHeader'>LOGIN</p>
          <p className='mainHeader'>管理画面ログイン</p>
        </h2>
        <form id='loginForm' onSubmit={loginUser}>
          <label htmlFor='email' className='formHeader'>
            email
          </label>
          <br />
          <input
            type='text'
            id='email'
            name='email'
            onChange={(e: any) => setEmail(e.target.value)}></input>
          <br />
          <label htmlFor='password' className='formHeader'>
            パスワード
          </label>
          <br />
          <input
            type='password'
            id='password'
            name='password'
            onChange={(e: any) => setPassword(e.target.value)}></input>
          <br />
          <div style={{ textAlign: 'center' }}>
            <button type='submit' className='loginSubmit'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
