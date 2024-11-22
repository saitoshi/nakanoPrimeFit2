import type { Metadata } from 'next';
import { BlogForm } from '../components/BlogRelated/BlogForm';
export default function CreateBlog() {
  return (
    <div>
      <div className='pageContainer'>
        <h2>
          <p className='subHeader'>CREATE BLOG</p>
          <p className='mainHeader'>ブログを作成する</p>
        </h2>
        <BlogForm />
      </div>
    </div>
  );
}
