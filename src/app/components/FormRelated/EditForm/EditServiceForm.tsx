'use client';
import { useState, useEffect } from 'react';
import { verifyToken } from '@/app/utils/assistFunctions/userFunctions';
import { useRouter } from 'next/navigation';
import { IService } from '@/app/constants/type';
import { LoadingWheel } from '../../ConditionalComponents/LoadingWheel';

interface serviceInputs {
  service: IService;
}
export const EditServiceForm = ({ service }: serviceInputs) => {
  const router = useRouter();
  const [title, setTitle] = useState<IService['title']>(service.title);
  const [description, setDesc] = useState<IService['description']>(
    service.description,
  );
  const [steps, setSteps] = useState<IService['steps']>(service.steps);
  const [costs, setCosts] = useState<IService['costs']>(service.costs);
  const addCost = () => {
    const costHolder = [...costs];
    costHolder.push({ id: costs.length + 1 });
    setCosts(costHolder);
  };
  const [benefits, setBenefits] = useState<IService['benefits']>(
    service.benefits,
  );
  const addBenefits = () => {
    const tempBenefit = [...benefits];
    tempBenefit.push({ id: benefits.length + 1 });
    setBenefits(tempBenefit);
  };
  const [reviews, setReviews] = useState<IService['reviews']>(service.reviews);
  const addReviews = () => {
    const tempReview = [...reviews];
    tempReview.push({ id: tempReview.length + 1 });
    setReviews(tempReview);
  };
  const [status, setStatus] = useState<IService['status']>();
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
  // conditional variable set up
  const [load, setLoad] = useState<boolean>(false);
  const [verified, setVerified] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  // a hook to submit the form
  const submitNewService = async (e: any) => {
    try {
      await setLoad(true);
    } catch (error) {
      await setError(true);
    } finally {
      await setLoad(false);
    }
  };
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
          value={title}
          onChange={(e: any) => {
            setTitle(e.target.value);
          }}></input>
        <label htmlFor='description' className='description'>
          サービスの概要
        </label>
        <textarea
          name='description'
          value={description}
          onChange={(e: any) => {
            setDesc(e.target.value);
          }}></textarea>
        <label htmlFor='title' className='formHeader'>
          サービス用のサムネ画像
        </label>
        <input type='file' name='serviceThumbnail'></input>
        <b>サムネのプレビュー</b>
        <br />
        <img src={service.thumbnail} className='previewSize' />
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
                    <input value={benefit.title}></input>
                  </td>
                  <td>
                    <textarea value={benefit.description}></textarea>
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
            {steps.map((step) => {
              return (
                <tr key={step.id}>
                  <td>{step.id}</td>
                  <td>
                    <input value={step.title}></input>
                  </td>
                  <td>
                    <textarea value={step.description}></textarea>
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
                    <input name='priceType' placeholder={cost.title}></input>
                  </th>
                  <th>
                    <input placeholder={cost.description}></input>
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
                    <input name='priceType' placeholder={review.title}></input>
                  </th>
                  <th>
                    <input placeholder={review.description}></input>
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
