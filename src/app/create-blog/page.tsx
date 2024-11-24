import type { Metadata } from 'next';
import { DashboardCreateMenu } from '../components/Dashboard Related/DashboardCreateMenu';
export default function CreateBlog() {
  return (
    <div>
      <div className='pageContainer'>
        <br />
        <DashboardCreateMenu />
      </div>
    </div>
  );
}
