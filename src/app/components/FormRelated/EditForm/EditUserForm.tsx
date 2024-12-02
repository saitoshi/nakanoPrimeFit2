'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LoadingWheel } from '../../ConditionalComponents/LoadingWheel';
import { IUser } from '@/app/constants/type';
import './style.css';

export const EditUserForm = () => {
  const [load, isLoad] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const [email, setEmail] = useState<IUser['email']>('');
  const [password, setPassword] = useState<IUser['password']>('');
  const [password2, setPassowrd2] = useState<IUser['password']>('');

  return (
    <div id='editUserSection' className='pageContainer'>
      <h2>
        <p className='subHeader'>EDIT USER</p>
        <p className='mainHeader'>ユーザーを編集する</p>
      </h2>
      <form id='editUserForm'></form>
    </div>
  );
};
