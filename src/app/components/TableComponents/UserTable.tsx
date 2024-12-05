'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getToken } from '@/app/utils/assistFunctions/userFunctions';
import { IUser } from '@/app/constants/type';
import './style.css';
export const UserTable = () => {
  const [userList, setUserList] = useState<IUser[]>();
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('エラーが発生いたしました');
  const router = useRouter();

  useEffect(() => {
    const getUsers = async () => {
      try {
        const token = await getToken();
        if (!token) {
          await setIsLoad(false);
          await router.push('/login');
        }
        const userResponse = await fetch('api/users', {
          headers: { Authorization: `Bearer: ${token}` },
          method: 'GET',
        });
        const userList = await userResponse.json();
        if (userList['status'] == 403) {
          setIsError(true);
          setErrorMsg(
            'エラーが発生いたしました。もう一度ログインしなおしてください。',
          );
        } else if (userList['status'] == 201) {
          await setUserList(userList['userList']);
        } else {
          setIsError(true);
        }
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoad(false);
      }
    };
    getUsers();
  }, []);
  if (isLoad) {
    return (
      <div className='pageSection' id='loadMessage'>
        読み込み中...
      </div>
    );
  } else if (isError) {
    <div className='pageSection' id='errorMessage'>
      <span className='errorMsg'>{errorMsg}</span>
    </div>;
  }
  return (
    <>
      <div id='userList'>
        <h2 className='listHeader'>
          <p className='subHeader'>USER ARCHIVE</p>
          <p className='mainHeader'>ユーザーまとめ</p>
        </h2>
        <ul className='responsive-table'>
          <li className='tableHeader'>
            <div className='blog col-1'>メールアドレス</div>
            <div className='blog col-2'>登録日程</div>
            <div className='blog col-3'>編集</div>
          </li>
          {userList?.map((user) => {
            return (
              <li className='tableRow' key={user._id}>
                <div className='blog col-1'>{user.email}</div>
                <div className='blog col-2'>
                  {user.createdAt.toString().split('T')[0]}
                </div>
                <div className='blog col-3'>
                  <button className='edit-button'>&#x270E;</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
