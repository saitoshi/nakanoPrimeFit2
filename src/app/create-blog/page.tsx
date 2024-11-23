import type { Metadata } from 'next';
import { DashboardBlogCreate } from '../components/Dashboard Related/DashboardCreate';
export default function CreateBlog() {
  return (
    <div>
      <div className='pageContainer'>
        <br />
        <DashboardBlogCreate />
      </div>
    </div>
  );
}
