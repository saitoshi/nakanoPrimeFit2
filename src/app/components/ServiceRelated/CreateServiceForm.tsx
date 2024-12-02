'use client';
import { useState, useEffect } from 'react';
import { IService } from '@/app/constants/type';
import { getToken } from '@/app/utils/assistFunctions/userFunctions';
import { LoadingWheel } from '../ConditionalComponents/LoadingWheel';

export const CreateServiceForm = () => {
  const [title, setTitle] = useState<IService['title']>('');
  const [description, setDesc] = useState<IService['description']>('');
  interface stepDetail {
    _id: number;
    title?: string;
    description?: string;
  }
  const stepsRow = [{ _id: 1 }, { _id: 2 }, { _id: 3 }];
  const [steps, setSteps] = useState<IService['steps']>(stepsRow);

  const costHolder = [{ _id: 1 }];
  const [costs, setCosts] = useState<IService['costs']>(costHolder);
  const addCost = () => {
    const costHolder = [...costs];
    costHolder.push({ _id: costs.length + 1 });
    setCosts(costHolder);
  };
  const [benefits, setBenefits] = useState<IService['benefits']>([]);
  const addBenefits = () => {};

  const [reviews, setReviews] = useState<IService['reviews']>();
  let reviewNumber: number = 0;
  interface reviewDetail {
    _id: number;
    title?: string;
    description?: string;
  }
  const reviewHolder: reviewDetail[] = [];
  const addReviews = () => {
    reviewNumber++;
    reviewHolder.push({ _id: reviewNumber });
  };

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
  } else if (!load && !verified) {
  }
  return (
    <>
      <div id='serviceForm' className='formArea'>
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
        <label id='steps' className='formHeader'>
          サービスの流れ
        </label>
        <table className='inputTable'>
          <thead>
            <tr>
              <th>Step</th>
              <th>ステップの主な説明</th>
              <th>ステップの細かい説明</th>
            </tr>
          </thead>
          <tbody>
            {stepsRow.map((step: stepDetail) => {
              return (
                <tr key={step._id}>
                  <td>{step._id}</td>
                  <td>
                    <input></input>
                  </td>
                  <td>
                    <textarea></textarea>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <label id='steps' className='formHeader'>
          サービスの料金設定
        </label>
        <table className='inputTable'>
          <thead>
            <tr>
              <th>期限・回数</th>
              <th>料金</th>
            </tr>
          </thead>
          <tbody>
            {costs.map((cost) => {
              return (
                <tr key={cost._id}>
                  <th>
                    <input name='priceType' placeholder='(例：回数券)'></input>
                  </th>
                  <th>
                    <input></input>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className='addRowContainer'>
          <button
            onClick={() => {
              addCost();
            }}
            className='addRowButton'
            id='addCostButton'>
            値段を追加する
          </button>
        </div>
        <br />
        <label id='steps' className='formHeader'>
          サービスの感想の追加
        </label>
      </div>
    </>
  );
};
