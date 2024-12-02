'use client';
import { useState, useEffect } from 'react';
import { IService } from '@/app/constants/type';
import { getToken } from '@/app/utils/assistFunctions/userFunctions';
import { LoadingWheel } from '../ConditionalComponents/LoadingWheel';

export const CreateServiceForm = () => {
  const [title, setTitle] = useState<IService['title']>('');
  const [description, setDesc] = useState<IService['description']>('');
  const [steps, setSteps] = useState<IService['steps']>();
  interface stepDetail {
    _id: number;
    title: string;
    description?: string;
  }
  const [costs, setCosts] = useState<IService['costs']>();
  interface costDetail {
    _id: number;
    title: string;
    cost: string;
  }
  const [benefits, setBenefits] = useState<IService['benefits']>();
  interface benefitDetail {
    _id: number;
    title: string;
    description?: string;
  }
  const [reviews, setReviews] = useState<IService['reviews']>();
  interface reviewDetail {
    _id: number;
    title: string;
    description: string;
  }
  const [status, setStatus] = useState<IService['status']>();

  // conditional variable declaration
  const [load, setLoad] = useState<boolean>(false);
  const [verified, setVerified] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  if (load) {
    return (
      <>
        <LoadingWheel />
      </>
    );
  }
  return (
    <>
      <div className='pageContainer' id='addService'>
        <h2>
          <p className='subHeader'>CREATE SERVICE</p>
          <p className='mainHeader'>新規サービスの追加</p>
        </h2>
        <form id='serviceForm' className='formArea'>
          <label htmlFor='title' className='formHeader'>
            サービス名
          </label>
          <input
            type='title'
            id='title'
            name='title'
            placeholder='サービス名を入力'
            onChange={(e: any) => {
              setTitle(e.target.value);
            }}></input>
          <label htmlFor='description' className='description'>
            サービスの概要
          </label>
          <textarea
            name='description'
            placeholder='サービスの概要の入力'
            onChange={(e: any) => {
              setDesc(e.target.value);
            }}></textarea>
        </form>
      </div>
    </>
  );
};
