import type { Metadata } from 'next';
import './style.css';
import { DashboardMenu } from '../components/DashboardComponents/DashboardMenu';
export default function Dashboard() {
  const tabs = ['サービス', 'ブログ', 'ユーザー'];
  return (
    <div className='dashboardContainer'>
      <div>
        <DashboardMenu />
      </div>
    </div>
  );
}
