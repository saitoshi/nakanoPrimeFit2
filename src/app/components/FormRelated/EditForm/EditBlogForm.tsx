'use client';
import { useState, useEffect } from 'react';
import { verifyToken } from '@/app/utils/assistFunctions/userFunctions';
import { useRouter } from 'next/navigation';
import { IBlog } from '@/app/constants/type';
import { LoadingWheel } from '../../ConditionalComponents/LoadingWheel';

type blogInputs = {
  blog: IBlog;
};
export const EditBlogForm = ({ blog }: blogInputs) => {
  /** */
  const router = useRouter();
  const [title, setTitle] = useState<IBlog['title']>(blog.title);
  const [description, setDesc] = useState<IBlog['description']>(
    blog.description,
  );
  const [content, setContent] = useState<IBlog['content']>(blog.content);
  const [keyword, setKeyword] = useState<IBlog['keyword']>(blog.keyword);
  const [keywordHolder, setKeywordHolder] = useState<string>(
    blog.keyword.toString(),
  );
  const addContent = () => {
    const contentHolder = [...content];
    contentHolder.push({ id: content.length + 1 });
    setContent(contentHolder);
  };
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

  const updateContent = async (e: any, id: number, value: string) => {
    const tempContent = [...content];
    await console.log(e.target.value);
    let index = 0;
    for (let i = 0; i < content.length; i++) {
      if (content[i].id === id) {
        index = i;
      }
    }
    await console.log(index);
    switch (value) {
      case 'header':
        tempContent[index].header = e.target.value;
        break;
      case 'body':
        tempContent[index].body = e.target.value;
        break;
      case 'image':
        tempContent[index].image = e.target.value;
        break;
      default:
        tempContent[index].imageDesc = e.target.value;
    }
    await setContent(tempContent);
    await console.log(content);
  };
  const [thumbnail, setThumbnail] = useState<IBlog['thumbnail']>(
    blog.thumbnail,
  );
  const [status, setStatus] = useState<IBlog['status']>(blog.status);
  /** Variable declaration for the conditional situations */
  const [load, setLoad] = useState<boolean>(false);
  const [verified, setVerified] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const submitBlog = async (e: any) => {
    try {
      e.preventDefault();
      await setLoad(true);
      let keywordList = await keywordHolder.split(',');
      await setKeyword(keywordList);
      await console.log(
        title,
        description,
        thumbnail,
        keyword,
        content,
        status,
      );
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
      <div id='blogForm' className='formArea'>
        <label htmlFor='title' className='formHeader'>
          ブログタイトル
        </label>
        <input
          type='title'
          id='title'
          value={title}
          placeholder='ブログのタイトル'
          onChange={(e: any) => {
            setTitle(e.target.value);
          }}></input>
        <label htmlFor='title' className='formHeader'>
          ブログ用のメイン画像
        </label>
        <input
          type='file'
          name='serviceThumbnail'
          onChange={(e: any) => {
            setThumbnail(e.target.value);
          }}></input>
        <label htmlFor='description' className='description'>
          ブログの概要
        </label>

        <textarea
          name='description'
          placeholder='サービスの概要の入力'
          value={description}
          onChange={(e: any) => {
            setDesc(e.target.value);
          }}></textarea>
        <label htmlFor='keywords' className='formHeader'>
          ブログキーワード - キーワードの間に<b>,</b>を追加し、分けてください。
        </label>
        <input
          type='keyword'
          id='keyword'
          value={keywordHolder}
          placeholder='ブログのキーワード (例：筋トレ,食事)'
          onChange={(e: any) => {
            setKeywordHolder(e.target.value);
          }}></input>
        <label htmlFor='contents' className='formHeader'>
          ブログコンテンツ
        </label>
        <p>段落を追加したい場合、ボタンをクリックしてください。</p>
        {content.map((paragraph) => {
          return (
            <div className='contentArea' key={paragraph.id}>
              <input
                type='text'
                id='contentHeader'
                placeholder='ブログの段落のヘッダー'
                value={paragraph.header}
                onChange={(e: any) => {
                  updateContent(e, paragraph.id, 'header');
                }}></input>
              <textarea
                className='contentText'
                placeholder='ブログの段落の文書'
                value={paragraph.body}
                onChange={(e: any) => {
                  updateContent(e, paragraph.id, 'body');
                }}></textarea>
              <label htmlFor='title' className='formHeader'>
                ブログ用の段落用画像
              </label>
              <input
                type='file'
                name='paragraphImage'
                onChange={(e: any) => {
                  updateContent(e, paragraph.id, 'image');
                }}></input>
              <input
                type='text'
                id='paragraphImageDesc'
                placeholder='段落画像の説明文'
                value={paragraph.imageDesc}
                onChange={(e: any) => {
                  updateContent(e, paragraph.id, 'imageDesc');
                }}></input>
            </div>
          );
        })}
        <div className='addRowContainer'>
          <button
            onClick={() => {
              addContent();
            }}
            className='addRowButton'
            id='addCostButton'>
            段落を追加する
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
            value='draft'
            onChange={(e: any) => {
              setStatus(e.target.value);
            }}></input>
          <label htmlFor='html'>非公開</label>
          <input
            type='radio'
            id='status'
            name='service_status'
            value='released'
            onChange={(e: any) => {
              setStatus(e.target.value);
            }}></input>
          <label htmlFor='html'>公開</label>
        </div>
        <div style={{ textAlign: 'center' }}>
          <button
            id='submitButton'
            onClick={(e: any) => {
              submitBlog(e);
            }}>
            ブログ登録
          </button>
        </div>
      </div>
    </>
  );
};
