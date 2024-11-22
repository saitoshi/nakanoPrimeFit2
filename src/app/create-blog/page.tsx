import type { Metadata } from 'next';
import { DashboardBlogCreate } from '../components/Dashboard Related/DashboardCreate';
export default function CreateBlog() {
  return (
    <div>
      <div className='pageContainer'>
        <h2>
          <p className='subHeader'>CREATE BLOG</p>
          <p className='mainHeader'>ブログを作成する</p>
        </h2>
        <DashboardBlogCreate />
      </div>
    </div>
  );
}
