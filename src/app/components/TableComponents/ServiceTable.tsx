'use client';
import { useState, useEffect } from 'react';
import { getServices } from '@/app/utils/assistFunctions/serviceFunction';
import { IService } from '@/app/constants/type';
import './style.css';
import Link from 'next/link';
export const ServiceTable = () => {
  const [isLoad, setIsLoad] = useState<boolean>(true);
  const [serviceList, setServiceList] = useState<IService[]>();
  const [isError, setIsError] = useState<boolean>(false);
  const errorMsg: string = 'エラーが発生いたしました。';

  useEffect(() => {
    const fetchServices = async () => {
      const services = await getServices();
      await setServiceList(services);
      await setIsLoad(false);
    };
    fetchServices();
  }, []);
  if (isLoad) {
    <div className='pageSection' id='loadMessage'>
      読み込み中...
    </div>;
  } else if (isError) {
    <div className='pageSection' id='errorMessage'>
      <span className='errorMsg'>{errorMsg}</span>
    </div>;
  }
  return (
    <>
      <div id='serviceList'>
        <h2 className='listHeader'>
          <p className='subHeader'>ARCHIVE SERVICES</p>
          <p className='mainHeader'>サービス</p>
        </h2>
        <table className='listTable'>
          <thead>
            <tr>
              <th>サービス名</th>
              <th>サムネ画像</th>
              <th>公開・非公開</th>
              <th>登録日</th>
              <th>編集</th>
            </tr>
          </thead>
          <tbody>
            {serviceList?.map((service: IService) => {
              return (
                <tr key={service._id}>
                  <th>{service.title}</th>
                  <th className='imageHolder'>
                    <img
                      className='imgResponsive'
                      src={service.thumbnail}
                      alt='Thumbnail Image For The Blog'
                    />
                  </th>
                  <th></th>
                  <th>{service.publishedDate.toString().split('T')[0]}</th>
                  <th>
                    <button className='edit-button'>
                      <Link
                        href={`edit-service/${service._id}`}
                        style={{ textDecoration: 'none' }}>
                        &#x270E;
                      </Link>
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
