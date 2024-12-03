'use client';
import { useState, useEffect } from 'react';
import { IService } from '@/app/constants/type';
import { verifyToken } from '@/app/utils/assistFunctions/userFunctions';
import { LoadingWheel } from '../ConditionalComponents/LoadingWheel';
import { useRouter } from 'next/navigation';

export const CreateServiceForm = () => {
  const [title, setTitle] = useState<IService['title']>('');
  const [description, setDesc] = useState<IService['description']>('');
  const [thumbnail, setThumbnail] = useState<IService['thumbnail']>();
  const stepsRow = [{ id: 1 }, { id: 2 }, { id: 3 }];
  const [steps, setSteps] = useState<IService['steps']>(stepsRow);

  const router = useRouter();
  const costHolder = [{ id: 1 }];
  const [costs, setCosts] = useState<IService['costs']>(costHolder);
  const addCost = () => {
    const costHolder = [...costs];
    costHolder.push({ id: costs.length + 1 });
    setCosts(costHolder);
  };
  const [benefits, setBenefits] = useState<IService['benefits']>([]);
  const addBenefits = () => {
    const tempBenefit = [...benefits];
    tempBenefit.push({ id: benefits.length + 1 });
    setBenefits(tempBenefit);
  };

  const [reviews, setReviews] = useState<IService['reviews']>([]);

  const addReviews = () => {
    const tempReview = [...reviews];
    tempReview.push({ id: tempReview.length + 1 });
    setReviews(tempReview);
  };

  const [status, setStatus] = useState<IService['status']>();

  // conditional variable declaration
  const [load, setLoad] = useState<boolean>(true);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const verify = async () => {
      const response = await verifyToken();
      await setLoad(false);
      if (!response) {
        await router.push('/login');
      }
    };
    verify();
  }, []);
  if (load) {
    return (
      <>
        <LoadingWheel />
      </>
    );
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
        <label htmlFor='title' className='formHeader'>
          サービス用のサムネ画像
        </label>
        <input type='file' name='serviceThumbnail'></input>
        <label id='benefits' className='formHeader'>
          おすすめな理由の設定
        </label>
        <table className='inputTable'>
          <thead>
            <tr>
              <th>理由のヘッドライン</th>
              <th>理由の説明</th>
            </tr>
          </thead>
          <tbody>
            {benefits.map((benefit) => {
              return (
                <tr key={benefit.id}>
                  <td>
                    <input
                      placeholder='(例：「質の高いトレーニング」を提供します。
)'></input>
                  </td>
                  <td>
                    <textarea
                      placeholder='(例：しんどい筋トレだけでなく、一人、ひとりの体の状態に応じてストレッチやご自宅での運動も指導いたします。
。'></textarea>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className='addRowContainer'>
          <button
            onClick={() => {
              addBenefits();
            }}
            className='addRowButton'
            id='addCostButton'>
            進める理由を追加する
          </button>
        </div>
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
            {stepsRow.map((step) => {
              return (
                <tr key={step.id}>
                  <td>{step.id}</td>
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
        <label id='costs' className='formHeader'>
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
                <tr key={cost.id}>
                  <th>
                    <input name='priceType' placeholder='(例：回数券)'></input>
                  </th>
                  <th>
                    <input placeholder='(例: 9,000円)'></input>
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
        <table className='inputTable'>
          <thead>
            <tr>
              <th>キーフレーズ</th>
              <th>感想内容</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => {
              return (
                <tr key={review.id}>
                  <th>
                    <input
                      name='priceType'
                      placeholder='(例：3ヶ月で−4kg)'></input>
                  </th>
                  <th>
                    <input placeholder='(例: パーソナルトレーニングで利用。トレーナーによる適切な食事管理と週1回の筋トレで3ヶ月で−4kg。仕事の関係で自宅での筋トレとウォーキング程度しか出来ないのでまずまずの結果に満足。トレーナーの知識も豊富で、疑問点・不安な点等、親切丁寧に教えてもらえます。) '></input>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className='addRowContainer'>
          <button
            onClick={() => {
              addReviews();
            }}
            className='addRowButton'
            id='addCostButton'>
            感想を追加する
          </button>
        </div>
        <label id='status' className='formHeader'>
          サービスの公開状態 - 作成後にすぐに公開するか、しないか
        </label>
        <div className='formSelection'>
          <input
            type='radio'
            id='status'
            name='service_status'
            value='draft'></input>
          <label htmlFor='html'>非公開</label>
          <input
            type='radio'
            id='status'
            name='service_status'
            value='released'></input>
          <label htmlFor='html'>公開</label>
        </div>
        {error ? <span className='errorMsg'></span> : <></>}
        <div style={{ textAlign: 'center' }}>
          <button id='submitButton'>サービスを登録する</button>
        </div>
      </div>
    </>
  );
};
