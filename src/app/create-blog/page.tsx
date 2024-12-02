import type { Metadata } from 'next';
import { CreateBlog } from '../components/BlogRelated/CreateBlog';
export default function Page() {
  return (
    <div>
      <div className='pageContainer'>
        <h2>
          <p className='subHeader'>CREATE BLOG</p>
          <p className='mainHeader'>ブログ作成</p>
        </h2>
        <br />
        <CreateBlog />
      </div>
    </div>
  );
}
